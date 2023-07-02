import axios from "axios";
import React from "react";
import { Server_API } from "../config";
import ErrorHandler  from "../config/errorHandler";

const creatBrandApi = async (params) => {
    console.log(params.property)
  const title = params.property.title
  const description=params.property.description
  const image =params.property.image
  try {
    const response = await axios.post(`${Server_API}/brand`, {
        title,description,image
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000/",
        'Authorization':`Bearer ${params.token}`
      },
    }
   );
   console.log(response)
    return response.data;  
  } catch (error) {
    console.log(error)
  }
};


export default creatBrandApi;