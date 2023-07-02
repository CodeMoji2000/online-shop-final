import React from "react";
import productImage from "../../images/product.png";
import { AiFillShop } from "react-icons/ai";
import { RiArticleLine } from "react-icons/ri";

const Products = ({ products }) => {
  const renderedProducts = products?.map((item) => {
    return (
      <div
        className="tw-w-full tw-shadow-xl tw-px-4 tw-py-8"
        style={{ fontFamily: "Lalezar" }}
      >
        <RiArticleLine className="tw-mx-auto" size={150} />
        <div
          className="tw-flex tw-content-center tw-justify-center tw-text-gray-600 tw-mt-2 "
          style={{ direction: "rtl" }}
        >
          <AiFillShop size={20} />
          <div className="tw-mr-2">فروشگاه تابلوسازی طاها</div>
        </div>
        <hr className="tw-mt-2" />
        <div
          className="tw-flex tw-mt-2 tw-justify-center tw-px-1"
          style={{ direction: "rtl" }}
        >
          <p
            style={{ direction: "rtl", textAlign: "right" }}
            className="tw-text-xl"
          >
            {item.name}
          </p>
        </div>
      </div>
    );
  });
  return (
    <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-8 xxl:tw-grid-cols-4 xxxl:tw-grid-cols-6">
      {renderedProducts}
    </div>
  );
};

export default Products;
