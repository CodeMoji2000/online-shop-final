import Axios from "axios";
import { Server_API } from "../config";

export const SignIn = async (params) => {
  const response = await Axios.post(`${Server_API}/auth/signin`, {
    phoneNumber: params.phoneNumber,
    password: params.password,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000/",
    },
  });
  return response.data;
};
