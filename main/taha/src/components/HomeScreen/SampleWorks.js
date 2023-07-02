import React from "react";
import guarantee from "../../images/guarantee.png";
import Work1 from "../../images/work-1.jpg";
import Work2 from "../../images/work-2.jpg";
import Work3 from "../../images/work-3.jpg";
import CardSlider from "../common/CardSlider";

const SampleWorks = ({ data }) => {
  return (
    <div className="lg:tw-px-64 lg:tw-py-8" style={{ fontFamily: "Lalezar" }}>
      <p className="tw-text-center tw-text-4xl">نمونه کار ها</p>
      <CardSlider itemsPerSlide={3} images={data && data} />
    </div>
  );
};

export default SampleWorks;
