import { CircularProgress } from "@mui/material";
import React from "react";
import Loader from "../components/common/Loader";
import Navigation from "../navigation/navigation";

const RootContainer = () => {
  return (
    <div>
      <Navigation />
      <Loader />
    </div>
  );
};

export default RootContainer;
