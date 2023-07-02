import React from "react";
import Logo from "../../images/logo.jpg";
import guarantee from "../../images/guarantee.png";
import insurance from "../../images/insurance.png";
import quality from "../../images/quality.png";
import directions from "../../Locale/direction";

const Exclusives = (props) => {
  const renderedExclusives = props?.data?.map((item) => {
    return (
      <div className="tw-space-y-6 tw-px-16">
        <img src={item.image} className="tw-mx-auto" />
        <p className="tw-text-3xl tw-text-center">{item.title}</p>
        <p
          className="tw-text-xl  tw-text-center"
          style={{ direction: directions.direction }}
        >
          {item.caption}
        </p>
      </div>
    );
  });
  return (
    <div
      className={`tw-flex tw-w-full tw-justify-center lg:tw-relative tw-mb-9 ${props.cname}`}
      style={{ fontFamily: "Lalezar" }}
    >
      <img
        src={Logo}
        className="tw-filter tw-hidden lg:tw-block tw-grayscale tw-opacity-10 tw-mt-16 tw-absolute tw-w-5/12"
      />
      <div className="lg:tw-px-56 tw-w-full tw-pb-48 ">
        <p className="tw-text-4xl tw-text-center">ویژگی های ما</p>

        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-space-y-20 lg:tw-space-y-0 tw-mt-20">
          {renderedExclusives}
        </div>
      </div>
    </div>
  );
};

export default Exclusives;
