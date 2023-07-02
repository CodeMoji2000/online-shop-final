import axios from "axios";
import React from "react";
import { Server_API } from "../config";

const EditStuckApi = async (params) => {
    console.log(params)
  try {
    const response = await axios.put(`${Server_API}/stuck/${params.id}`, {
        amount:params.amount
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


export default EditStuckApi;