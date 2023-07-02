import React from "react";
import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import NewestProducts from "../components/ShopScreen/NewestProducts";
import Slider from "../components/common/Slider";
import mostSelling from "../images/mostSelling.png";

const ShopScreen = () => {
  return (
    <div style={{ fontFamily: "Lalezar" }}>
      <Header />
      <Navbar />
      <div className="lg:tw-flex">
        <div className="tw-w-full lg:tw-w-8/12">
          <Slider />
        </div>

        <div className="tw-w-full lg:tw-w-4/12 tw-flex tw-justify-center">
          <div
            className="tw-w-11/12 tw-bg-gradient-to-b tw-bg-gradient-to-r tw-from-white tw-via-gray-100 tw-to-gray-200 tw-px-20 tw-py-20"
            style={{
              borderBottomLeftRadius: "10%",
              borderBottomRightRadius: "10%",
              height: "700px",
              boxShadow: "0px 20px 10px 10px #e2e2e2",
            }}
          >
            <p className="tw-text-2xl tw-inline tw-text-center tw-flex tw-flex-col tw-justify-center tw-font-thin">
              <p>
                <strong className="tw-text-4xl tw-text-boldest">
                  {" "}
                  پرفروش ترین
                </strong>
                <p>محصول هفته</p>
              </p>
              <img src={mostSelling} />
              <a
                className="tw"
                style={{ backgroundColor: "#E4A951", color: "#503205" }}
                className="tw-py-1 tw-px-6 tw-w-max tw-mx-auto tw-text-lg tw-rounded-2xl"
              >
                مشاهده جزییات
              </a>
            </p>
          </div>
        </div>
      </div>
      <NewestProducts />
    </div>
  );
};

export default ShopScreen;
