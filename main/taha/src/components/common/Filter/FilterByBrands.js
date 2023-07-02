import React from "react";
import "./checkbox.css";

const FilterByBrands = ({ brands }) => {
  const renderedNames = brands?.map((item) => {
    return (
      <div className="tw-flex tw-justify-between tw-tracking-wide tw-text-gray-600">
        <p>{item.name}</p>
        <input type="checkbox" />
      </div>
    );
  });

  if (brands) {
    return (
      <div
        style={{ fontFamily: "Lalezar", direction: "rtl", textAlign: "right" }}
        className="tw-mt-28"
      >
        <p className="tw-text-2xl tw-text-bold">برندها</p>
        <div className="tw-mt-10 tw-space-y-4">{renderedNames}</div>{" "}
      </div>
    );
  } else {
    return <div>There is nothing here</div>;
  }
};

export default FilterByBrands;
