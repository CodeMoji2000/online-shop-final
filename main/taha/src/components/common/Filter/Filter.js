import React from "react";
import FilterByBrands from "./FilterByBrands";
import FilterByName from "./FilterByName";
import FilterByStars from "./FilterByStars";

const Filter = ({ names, brands }) => {
  return (
    <div>
      <FilterByName names={names} />
      <FilterByBrands brands={brands} />
      <FilterByStars />
      <div className=" tw-mt-32 lg:tw-mt-20 tw-flex tw-justify-end">
        <button
          className="tw-bg-seyed tw-text-white tw-px-10 tw-w-full  tw-py-2 tw-rounded-2xl"
          style={{ fontFamily: "Lalezar" }}
        >
          تایید
        </button>
      </div>
    </div>
  );
};

export default Filter;
