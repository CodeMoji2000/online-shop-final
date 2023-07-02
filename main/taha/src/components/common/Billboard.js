import React from "react";
import directions from "../../Locale/direction";
import i18n from "../../Locale/i18";

const Billboard = ({ title, content }) => {
  return (
    <div
      className="container tw-mt-12 overflow-hidden"
      style={{ fontFamily: "Lalezar" }}
    >
      <div className="text-center">
        <span
          className="tw-text-2xl"
          style={{ borderBottom: "3px solid green" }}
        >
          {title}
        </span>
      </div>

      <div className="tw-mt-12 tw-m-20">
        <video className="tw-w-full tw-h-auto tw-rounded-3xl" controls>
          <source src="mov_bbb.mp4" type="video/mp4" />
          <source src="mov_bbb.ogg" type="video/ogg" />
          Your browser does not support HTML video.
        </video>
      </div>

      <div
        className="tw-mt-32 tw-text-lg  tw-px-16 tw-w-full"
        style={{ direction: "rtl" }}
      >
        <p
          className={` ${directions.direction} ${directions.align} tw-leading-relaxed tw-text-opacity-10`}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export default Billboard;
