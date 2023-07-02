import React from "react";

const FilterByName = ({ names }) => {
  const renderedNames = names?.map((item) => {
    return (
      <div className="tw-flex tw-justify-between tw-tracking-wide tw-text-gray-600">
        <p>{item.name}</p>
        <p className="tw-bg-gray-200 tw-p-1 tw-rounded-full tw-px-4 tw-flex align-content-center">
          {item.count}
        </p>
      </div>
    );
  });

  if (names) {
    return (
      <div
        style={{ fontFamily: "Lalezar", direction: "rtl", textAlign: "right" }}
      >
        <p className="tw-text-2xl tw-text-bold">دسته بندی محصولات</p>
        <div className="tw-mt-10 tw-space-y-4">{renderedNames}</div>{" "}
      </div>
    );
  } else {
    return <div>There is nothing here</div>;
  }
};

export default FilterByName;
