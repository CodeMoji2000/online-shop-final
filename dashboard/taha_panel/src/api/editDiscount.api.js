import axios from "axios";
import React from "react";
import { Server_API } from "../config";

const EditDiscountApi = async (params) => {
    console.log(params)
  const percent = params.percent
  const description=params.description
  const image =params.image
  try {
    const response = await axios.put(`${Server_API}/discount/${params.id}`, {
        percent,description,image
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
    return response;  
  } catch (error) {
    console.log(error)
  }
};


export default EditDiscountApi;