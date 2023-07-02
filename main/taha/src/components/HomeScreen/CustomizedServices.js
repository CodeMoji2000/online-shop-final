import React from "react";
import { Link } from "react-router-dom";
import itemBack from "../../images/item.jpg";

const CustomizedServices = ({ services, cname , children }) => {
  const renderedServices = services?.map((item) => {
    return (
      <div
        style={{
          background: `url('${item.image}') no-repeat center center`,
          backgroundSize: "cover",
          height: "200px",
          
        }}
        className="tw-rounded-2xl tw-my-8 lg:tw-my-0"
      >
        <Link to={item.link}>
        <div className="tw-bg-gradient-to-b tw-from-transparent tw-to-seyed tw-h-full tw-rounded-2xl tw-relative tw-flex tw-flex-column tw-justify-center tw-flex-wrap tw-pb-16 tw-content-end">
          <div className="tw-text-white tw-text-4xl tw-text-center">
            {item.title}
          </div>
        </div>
        </Link>

      </div>
    );
  });
  return (
    <div
      className={[`tw-py-40 lg:tw-py-12 tw-px-3 lg:tw-px-52 ${cname}` ]}
      style={{ fontFamily: "Lalezar" }}
    >
      <p className="tw-text-4xl tw-text-bold tw-text-center ">{children}</p>

      <div className="tw-grid tw-grid-cols-2 tw-space-x-2 md:tw-grid-cols-3 xl:tw-grid-cols-3 xxl:tw-grid-cols-3 md:tw-gap-8 tw-mt-16 tw-space-y-8 md:tw-space-y-0">
        {renderedServices}

        {/* <div
          style={{ backgroundImage: `url(${item})`, height: "450px" }}
          className="tw-rounded-2xl"
        >
          <div className="tw-bg-gradient-to-b tw-from-transparent tw-to-seyed tw-h-full tw-rounded-2xl tw-relative tw-flex tw-flex-column tw-justify-center tw-flex-wrap tw-pb-16 tw-content-end">
            <div className="tw-text-white tw-text-4xl tw-text-center">
              حروف سازی
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CustomizedServices;
