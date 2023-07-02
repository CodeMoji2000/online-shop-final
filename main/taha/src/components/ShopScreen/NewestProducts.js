import React from "react";
import CardSlider from "../common/CardSlider";

const NewestProducts = () => {
  const products = [
    {
      name: "نیسان",
      price: 32,
    },
    {
      name: "سانگ یانگ",
      price: 44,
    },
    {
      name: "هیوندای",
      price: 80,
    },
    {
      name: "هیوندای",
      price: 340,
    },
    {
      name: "سانگ یانگ",
      price: 222,
    },
    {
      name: "نیسان",
      price: 900,
    },
  ];
  return (
    <div className="lg:tw-px-52 tw-py-20">
      <div
        className="lg:tw-flex lg:tw-justify-between tw-mt-28"
        style={{ direction: "rtl" }}
      >
        <div className="tw-text-right tw-border-b-2 tw-pb-1 tw-border-black lg:tw-text-4xl tw-flex tw-flex-row lg:tw-flex-col sm:tw-justify-between lg:tw-justify-start">
          <p>جدیدترین محصولات</p>
          <a className="tw-bg-white tw-border-2 tw-rounded-2xl tw-border-black tw-px-10 tw-py-2 tw-block lg:tw-hidden">
            مشاهده همه
          </a>
        </div>
        <div className="tw-mt-8 lg:tw-mt-0 tw-flex tw-justify-items-end sm:tw-hidden lg:tw-block">
          <a className="tw-bg-white tw-border-2 tw-rounded-2xl tw-border-black tw-px-10 tw-py-2 tw-hidden lg:tw-block">
            مشاهده همه
          </a>
        </div>
      </div>

      <CardSlider products={products} />
    </div>
  );
};

export default NewestProducts;
