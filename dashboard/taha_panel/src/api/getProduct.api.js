import axios from "axios";
import React from "react";
import { Server_API } from "../config";

const getProductApi = async () => {
  const response = await axios.get(`${Server_API}/product`, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000/",
    },
  });
  return response.data;
};

export default getProductApi;