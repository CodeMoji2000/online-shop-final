import React from "react";
import axios from "axios";
import { Server_API } from "../config";

const Login = async (param) => {
  const response = await axios.post(`${Server_API}/auth/signin`, {
    phoneNumber: param.phoneNumber,
    password: param.password,
    header: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000/",
    },
  });

  return response.data;
};

export default Login;
