import axios from "axios";
import React from "react";
import { Server_API } from "../config";

const creatDiscountApi = async (params) => {
  const productId = params.property.productId
  const percent=params.property.percent
  const expiresIn=params.property.expiresIn
  try {
    const response = await axios.post(`${Server_API}/discount`, {
        productId,percent,expiresIn
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000/",
        'Authorization':`Bearer ${params.token}`
      },
    }
   );
    return response;  
  } catch (error) {
    console.log(error)
  }
};


export default creatDiscountApi;