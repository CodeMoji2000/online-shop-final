import axios from "axios";
import React from "react";
import { Server_API } from "../config";
import ErrorHandler  from "../config/errorHandler";

const EditBrandApi = async (params) => {
    console.log(params)
  const title = params.title
  const description=params.description
  const image =params.image
  try {
    const response = await axios.put(`${Server_API}/brand/${params.id}`, {
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


export default EditBrandApi;