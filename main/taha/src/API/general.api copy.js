import Axios from "axios";
import { Server_API } from "../config";

export const GetPublicData = async () => {
  const response = await Axios.get(`${Server_API}/infoAndList`, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000/",
    },
  });
  return response.data;
};
