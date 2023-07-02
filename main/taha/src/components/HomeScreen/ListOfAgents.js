import React from "react";
import { Link } from "react-router-dom";
import Background from "../../images/ListOfAgents.png";

const ListOfAgents = ({ cname, data }) => {
  return (
    <div
      style={{
        fontFamily: "Lalezar",
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "fill",
      }}
    >
      <div
        className={`tw-bg-seyed tw-bg-opacity-70 tw-py-24 tw-px-16 lg:tw-px-52 ${cname}`}
      >
        <p className="tw-text-4xl tw-text-center tw-text-gray-100">
          {data?.title}
        </p>
        <p className="tw-text-lg tw-text-gray-300 tw-mt-8 tw-tracking-wide tw-text-center tw-text-">
          {data?.content}
        </p>
        <div className="tw-flex tw-justify-center tw-mt-12">
          <Link
          to="/listOfAgents"
            className="tw-px-12 tw-py-3 tw-rounded-lg"
            style={{ backgroundColor: "#FDBC15" }}
          >
            {data?.button}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListOfAgents;
