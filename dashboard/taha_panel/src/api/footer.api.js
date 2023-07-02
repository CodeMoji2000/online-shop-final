import axios from "axios";
import React from "react";
import { Server_API } from "../config";

const editFooterApi = async (params) => {
  const value = JSON.stringify(params.params.property)
  try {
    const response = await axios.put(`${Server_API}/infoAndList/${params.params.idOfTable}`, {
      value
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000/",
        'Authorization':`Bearer ${params.params.token}`
      },
    }
   );
    return response.data;  
  } catch (error) {
    alert("مشکلی پیش امده لطفا دوباره وارد شوید");
    document.location.href = "/Login";
  }

};


export default editFooterApi;