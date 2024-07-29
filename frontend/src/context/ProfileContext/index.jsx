import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";
import axios from "axios";
import {
  EDIT_CUSTOMER_PROFILE,
  GET_CUSTOMER_PROFILE,
  GET_SELLER_PROFILE,
} from "./actions";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const initialState = {
  profileInfo: {},
};

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/profile",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Adjust based on how you store the token
    console.log(token)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const ProfileContext = createContext();

export const useProfile = () => useContext(ProfileContext);

const ProfileAppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const getProfileInfo = (userId) => {
    return axiosInstance.get(`/customer/${userId}`).then((res) => {
      dispatch({ type: GET_CUSTOMER_PROFILE, payload: res.data });
    });
  };

  const editProfileInfo = (payload) => {
    return axiosInstance.post(`/customer/editProfile`, payload).then((res) => {
      toast.success(res.data.message);
      navigate("/profile/view-customer");
    });
  };

  const getSellerProfileInfo = (userId) => {
    return axiosInstance.get(`/seller/${userId}`).then((res) => {
      dispatch({ type: GET_SELLER_PROFILE, payload: res.data });
    });
  };

  const editSellerProfileInfo = (payload) => {
    return axiosInstance.post(`/seller/editProfile`, payload).then((res) => {
      toast.success(res.data.message);
      navigate("/profile/view-customer");
    });
  };

  return (
    <ProfileContext.Provider
      value={{
        ...state,
        getProfileInfo,
        editProfileInfo,
        getSellerProfileInfo,
        editSellerProfileInfo,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileAppProvider;
