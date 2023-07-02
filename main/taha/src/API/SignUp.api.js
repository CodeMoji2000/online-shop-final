import Axios from "axios";
import { Server_API } from "../config";

export const SignUP = async (obj) => {
  const response = await Axios.post(`${Server_API}/auth/signup`, {
    phoneNumber: obj.phoneNumber,
    fullName: obj.fullName,
    password: obj.password,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000/",
    },
  });
  return response.data;
};
