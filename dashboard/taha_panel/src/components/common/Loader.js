import { Modal } from "@mui/material";
import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import Navigation from "../../navigation/navigation";

const Loader = () => {
  const [active, setActive] = useState(false);
  global.showLoader = () => {
    setActive(true);
  };
  global.hideLoader = () => {
    setActive(false);
  };
  return (
    <Modal open={active}>
      <div
        className={`tw-fixed tw-outline-none tw-bg-white tw-bg-opacity-50 tw-backdrop-filter tw-backdrop-blur-sm tw-flex tw-flex-wrap tw-text-seyed tw-space-x-8 tw-justify-center tw-content-center tw-inset-0`}
        style={{ fontFamily: "Lalezar" }}
      >
        <h1
          style={{ fontFamily: "Lalezar" }}
          className="tw-text-center tw-text-7xl"
        >
          در حال دریافت
        </h1>
        <CircularProgress size={70} color="success" />
      </div>
    </Modal>
  );
};

export default Loader;
