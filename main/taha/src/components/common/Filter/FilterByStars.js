import React from "react";
import { AiFillStar } from "react-icons/ai";

const FilterByStars = () => {
  return (
    <div
      style={{ fontFamily: "Lalezar", direction: "rtl", textAlign: "right" }}
      className="tw-mt-28"
    >
      <p className="tw-text-2xl tw-text-bold">امتیازها</p>
      <div className="tw-mt-10 tw-space-y-4">
        <div className="tw-flex tw-justify-between tw-tracking-wide tw-text-gray-600">
          <div className="tw-flex">
            <AiFillStar size={32} color="#005300" />
          </div>
          <input type="checkbox" />
        </div>
        <div className="tw-flex tw-justify-between tw-tracking-wide tw-text-gray-600">
          <div className="tw-flex">
            <AiFillStar size={32} color="#005300" />
            <AiFillStar size={32} color="#005300" />
          </div>
          <input type="checkbox" />
        </div>
        <div className="tw-flex tw-justify-between tw-tracking-wide tw-text-gray-600">
          <div className="tw-flex">
            <AiFillStar size={32} color="#005300" />
            <AiFillStar size={32} color="#005300" />
            <AiFillStar size={32} color="#005300" />
          </div>
          <input type="checkbox" />
        </div>
        <div className="tw-flex tw-justify-between tw-tracking-wide tw-text-gray-600">
          <div className="tw-flex">
            <AiFillStar size={32} color="#005300" />
            <AiFillStar size={32} color="#005300" />
            <AiFillStar size={32} color="#005300" />
            <AiFillStar size={32} color="#005300" />
          </div>
          <input type="checkbox" />
        </div>
        <div className="tw-flex tw-justify-between tw-tracking-wide tw-text-gray-600">
          <div className="tw-flex">
            <AiFillStar size={32} color="#005300" />
            <AiFillStar size={32} color="#005300" />
            <AiFillStar size={32} color="#005300" />
            <AiFillStar size={32} color="#005300" />
            <AiFillStar size={32} color="#005300" />
          </div>
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
};

export default FilterByStars;
