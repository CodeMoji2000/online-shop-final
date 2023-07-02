import Axios from "axios";
import { Server_API } from "../config";

export const GetPhoneAlreadyExists = async (phoneNumber) => {
  const response = await Axios.get(
    `${Server_API}/auth/checkAuth/${phoneNumber}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000/",
      },
    }
  );
  return response.data;
};
