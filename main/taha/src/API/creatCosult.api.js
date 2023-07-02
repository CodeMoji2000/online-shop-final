import axios from "axios";
import React from "react";
import { Server_API } from "../config";

const creatConsultApi = async (params) => {
  const fullName = params.fullName
  const phoneNumber=params.phoneNumber
  const item =params.item
  try {
    const response = await axios.post(`${Server_API}/consulting`, {
        fullName,phoneNumber,item
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000/",
      },
    }
   );
    return response;  
  } catch (error) {
    alert("مشکلی پیش امده لطفا دوباره سعی کنید")
  }
};


export default creatConsultApi;