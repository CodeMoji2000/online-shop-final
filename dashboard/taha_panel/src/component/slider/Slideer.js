import React, { useState } from "react";
import { Modal } from "@mui/material";

const Slideer = () => {
  const [title, setTitle] = useState();
  const [caption, setCaption] = useState();
  const [image, setImage] = useState();
  const [active, setActive] = useState(false);
  let tit;
  let cap;

  return (
    <>
      <div
        classname=" tw-border-2 tw-border-green-900 tw-p-10 tw-bg-white lg:tw-m-0 tw-flex lg:tw-flex-row tw-flex-col"
        style={{ fontFamily: "Lalezar" }}
      >
        <div className="tw-flex lg:tw-flex-row tw-flex-col tw-space-x-5 tw-bg-white tw-p-4">
          <input
            type="text"
            placeholder="title"
            className="tw-w-10/12 lg:tw-w-3/12 tw-h-10 tw-px-4 tw-rounded-lg tw-my-4 lg:tw-mx-4"
            style={{ direction: "rtl", border: "ridge 1px gray" }}
            onChange={(e) => {
              tit = e.target.value;
            }}
          ></input>

          <input
            type="text"
            placeholder="caption"
            className="tw-w-10/12 lg:tw-w-3/12 tw-h-10 tw-px-4 tw-rounded-lg tw-my-4 lg:tw-mx-4"
            style={{ direction: "rtl", border: "ridge 1px gray" }}
            onChange={(e) => {
              cap = e.target.value;
            }}
          ></input>

          <button
            className="tw-w-10/12 lg:tw-w-3/12 tw-py-2 lg:tw-m-4 tw-rounded-lg tw-text-white"
            style={{ border: "ridge 1px gray", background: "#006600" }}
            onClick={(e) => {
              setTitle(tit);
              setCaption(cap);
            }}
          >
            ثبت
          </button>
        </div>

        <Modal open={active}>
          <div
            className={` tw-fixed tw-outline-none tw-bg-white tw-bg-opacity-50 tw-backdrop-filter tw-backdrop-blur-sm tw-flex tw-flex-wrap tw-text-seyed tw-space-x-8 tw-justify-center tw-content-center tw-inset-0`}
            style={{ fontFamily: "Lalezar" }}
          >
            <input
              type="file"
              className="tw-w-6/12"
              style={{ direction: "rtl", border: "ridge 1px gray" }}
              onChange={(e) => setImage(e.target.value)}
            ></input>
            <button
              className=" tw-w-2/4 tw-py-2 tw-mt-4 tw-bg-green-700 tw-rounded-lg tw-text-4xl"
              style={{ border: "ridge 1px gray" }}
              onClick={(e) => setActive(!active)}
            >
              ok
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Slideer;
