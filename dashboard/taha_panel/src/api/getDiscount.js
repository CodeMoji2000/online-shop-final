import axios from "axios";
import React from "react";
import { Server_API } from "../config";

const getDiscountApi = async () => {
  const response = await axios.get(`${Server_API}/discount`, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000/",
    },
  });
  return response.data;
};

export default getDiscountApi;