import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";

const RedirectAlert = ({ open, whiteText, greenText }) => {
  return (
    <Box
      style={{ fontFamily: "Lalezar" }}
      className={` ${
        open ? "tw-block" : "tw-hidden"
      } tw-absolute tw-inset-x-0 tw-flex-col tw-flex tw-justify-center tw-text-white tw-flex-wrap tw-content-center tw-border-0 tw-outline-none tw-inset-y-0 tw-rounded-3xl tw-z-10 tw-backdrop-filter tw-backdrop-blur-xl`}
    >
      <div className="tw-text-8xl tw-break-words tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-x-8 rtl">
        <div className="tw-text-white">{whiteText && whiteText}</div>
        <div className="tw-text-green-800 tw-text-7xl lg:tw-text-8xl tw-mt-8 lg:tw-mt-0 tw-space-x-8 tw-flex ">
          <div>{greenText && greenText}</div>
          <CircularProgress size={60} color="success" />
        </div>
      </div>
    </Box>
  );
};

export default RedirectAlert;
