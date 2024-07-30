import { toast } from "react-hot-toast";
import { api } from "../../config/axiosConfig";
import axios from "axios";
import { data } from "autoprefixer";
import { useState } from "react";

const backendURL = {
  FORGOT_PASSWORD_URL:`/auth/forgotPassword`
};

const initialState={
    email
};

const AppContext = createContext();

const forgotPasswordProvider = ({children}) =>  {
    const[userEmail, setUserEmail] = useState(initialState);
    const handleForgotSubmit = async(data) =>{
        console.log(data);
        const requestBody = {
            email_id: data.email
        };
        console.log(requestBody);
        await api.post(backendURL.FORGOT_PASSWORD_URL, requestBody)
            .then()
    }
}


