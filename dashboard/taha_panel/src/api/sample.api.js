import axios from "axios";
import React from "react";
import { Server_API } from "../config";


const SampleApi = async (params) => {
  const value = JSON.stringify(params.property)
  try {
    const response = await axios.put(`${Server_API}/infoAndList/${params.idOfTable}`, {
        value
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000/",
        'Authorization':`Bearer ${params.token}`
      },
    }
   );
    return response.data;  
  } catch (error) {
      console.log(error)
    alert("مشکلی پیش امده لطفا دوباره وارد شوید")
    document.location.href = "/Login"
  }

};


export default SampleApi;