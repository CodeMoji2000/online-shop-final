import axios from "axios";
import React from "react";
import { Server_API } from "../config";

const UploadApi = async (params, token) => {
  console.log(params, token);
  try {
    //   const response=await fetch(`${Server_API}/storage/upload`, {
    //     method: "POST",
    //     body:params,
    //     headers:{
    //         'Content-Type': `multipart/form-data`,
    //         "Access-Control-Allow-Origin": "*",
    //        'Authorization':`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiJjMmMzNDZkNS01MDc0LTRhNmMtODNmOC1kODllZWNlOWEwYzAiLCJ1c2VyTmFtZSI6bnVsbCwicGhvbmVOdW1iZXIiOiIwOTMzNDMyMTQyMCIsImFkbWluIjp0cnVlLCJpYXQiOjE2NDAxNjE3MzksImV4cCI6MTY0MDE4MzMzOX0.LCYRuUA7kaYPgxucfy-qYdevK4iZEtc-bukQ4znROrw`,
    //     }
    // })
    // console.log(response);
    const response = await axios.post(
      `${Server_API}/storage/upload`,

      params,

      {
        headers: {
          Authorization: `Bearer ${token}`,
          // "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default UploadApi;
