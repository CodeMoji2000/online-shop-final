import React, { useState, useEffect } from "react";

const ErrorAlert = ({ errors, open, handleClose }) => {
  const [bounce, setBounce] = useState(true);
  let errorCount = 0;
  for (let i = 0; i < Object.keys(errors).length; i++) {
    if (errors[Object.keys(errors)[i]].visible == true) {
      errorCount += 1;
    }
  }
  useEffect(() => {
    let timeOut = setTimeout(() => {
      setBounce(false);
    }, 3050);
  });
  const renderedErrors = Object.keys(errors).map((item) => {
    if (errors[item].visible == true) {
      return (
        <li className="tw-text-right rtl" style={{ textAlign: "right" }}>
          {errors[item].message}
        </li>
      );
    }
  });

  return (
    <div
      className={`tw-absolute tw-bottom-0 ${bounce ? "tw-animate-pulse" : ""} ${
        errorCount != 0 ? "tw-block" : "tw-hidden"
      } tw-inset-x-1 lg:tw-inset-x-80 rtl tw-py-8 tw-shadow-lg alert alert-danger alert-dismissible fade show  ${
        open ? "tw-block" : "tw-hidden"
      }`}
      role="alert"
    >
      <ul className="tw-list-disc">{renderedErrors}</ul>

      <button onClick={() => handleClose()} class="close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default ErrorAlert;
