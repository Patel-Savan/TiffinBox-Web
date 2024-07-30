import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import reducer from "./reducer";
import { toast } from "react-hot-toast";
import { api } from "../../config/axiosConfig";

// const API = axios.create({
//   baseURL: "http://localhost:8080/api/",
// });

const backendURLs = {
  LOGIN_URL: `/auth/logIn`,
  CUSTOMER_SIGNUP_URL: `/auth/customer/signUp`,
  SELLER_SIGNUP_URL: `/auth/seller/signUp`,
  RESET_PASSWORD_URL: `/profile/resetPassword`
  //   UPDATE_ORDER_STATUS_URL: `/ordertrack/updateStatus`,
  //   VERIFY_ORDER_STATUS_URL: `/ordertrack/verifyOTP`,
  //   GET_ORDER_STATUS_URL: `/ordertrack/getOrderStatus`,
};

const initialState = {
  user: "",
  userRole: "",
  authToken: "",
  refreshToken: "",
  isRegistered: false,
};

const AppContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(initialState);

  const handleSellerRegistration = async (data) => {
    console.log(data);
    const requestBody = {
      firstname: data.first_name,
      lastname: data.last_name,
      email: data.email_id,
      password: data.password,
      companyAddress: data.company_address,
      companyZipCode: data.company_postal_code,
      companyName: data.company_name,
      cfcrNumber: data.lic_number,
      cuisine: data.cuisine_type,
      contactNumber: data.contact_number,
      cityName: data.city,
      provinceName: data.province
    };
    console.log(requestBody);
    await api.post(backendURLs.SELLER_SIGNUP_URL, requestBody)
      .then((res) => {
        console.log(res?.data);
        if (res?.status === 200 || res?.status === 201) {
          toast.success(res?.data.message);
          userData.isRegistered = true;
          return true;
        }
        else if (!res?.data.success) {
          toast.error(res?.data.message);
        }
        return false;
      })
      .catch((error) => {
        console.log(error);
        toast.error(res?.data.message);
        return false;
      });
  };

  const handleCustomerRegistration = async (data) => {
    console.log(data);
    const requestBody = {
      firstname: data.first_name,
      lastname: data.last_name,
      email: data.email_id,
      password: data.password,
      streetAddress: data.street_address,
      zipCode: data.postal_code,
      contactNumber: data.contact_number,
      cityName: data.city_name,
      provinceName: data.province
    };
    await api.post(backendURLs.CUSTOMER_SIGNUP_URL, requestBody)
      .then((res) => {
        console.log(res?.data);
        if (res?.status === 200 || res?.status === 201) {
          toast.success(res?.data.message);
          userData.isRegistered = true;
          return true;
        }
        else if (!res?.data.success) {
          toast.error(res?.data.message);
        }
        return false;
      }).catch((error) => {
        console.log(error);
        toast.error(res?.data.message);
        return false;
      });
  };

  const handleResetPassword = async (data) => {
    console.log(data);
    const requestBody = {
      oldPassword: data.old_password,
      newPassword: data.new_password,

    };
    await api.post(backendURLs.RESET_PASSWORD_URL, requestBody)
      .then((res) => {
        console.log(res?.data);
        if (res?.status === 200 || res?.status === 201) {
          toast.success(res?.data.message);
          return true;
        }
        return false;
      }).catch((error) => {
        console.log(error);
        toast.error(res?.data.message);
        return false;
      });
  };

  const handleLoginSubmit = async (data) => {
    console.log(data);
    const requestBody = {
      email: data.email_id,
      password: data.password,
    };
    await api
      .post(backendURLs.LOGIN_URL, requestBody)
      .then((res) => {
        const data = res.data;
        setTokens(data);
        toast.success(res?.data.message);
      })
      .catch((error) => {
        console.log(error.data);
        toast.error(error.res?.data?.message);
      });
  };

  const setTokens = (data) => {
    setUserData({
      ...userData,
      user: data,
      userRole: data.userRole,
      authToken: data.token,
      refreshToken: data.refreshToken,
    });

    localStorage.setItem("user", JSON.stringify(data));
    localStorage.setItem("userRole", data.userRole);
    localStorage.setItem("authToken", data.token);
    localStorage.setItem("refreshToken", data.refreshToken);
  };

  const logout = () => {
    setUserData(initialState);
    localStorage.removeItem("user");
    localStorage.removeItem("userRole");
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");
  };

  useEffect(() => {
    if (
      localStorage.getItem("user") &&
      localStorage.getItem("userRole") &&
      localStorage.getItem("authToken") &&
      localStorage.getItem("refreshToken")
    ) {
      setUserData({
        ...userData,
        user: localStorage.getItem("user"),
        userRole: localStorage.getItem("userRole"),
        authToken: localStorage.getItem("authToken"),
        refreshToken: localStorage.getItem("refreshToken"),
      });
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        userData,
        handleSellerRegistration,
        handleCustomerRegistration,
        handleLoginSubmit,
        handleResetPassword,
        logout
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(AppContext);
};

export { AuthProvider, useAuthContext };
