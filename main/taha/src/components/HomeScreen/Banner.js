import React from "react";
import BannerPhoto from "../../images/banner.jpg";
import Logo from "../../images/logo.jpg";

class Banner extends React.Component {
  render() {
    return (
      <div
        className={`tw-grid tw-grid-cols-1 xl:tw-grid-cols-2 tw-py-16 tw-px-16 md:tw-px-52 tw-bg-white ${this.props?.cname}`}
        style={{ fontFamily: "Lalezar" }}
      >
        <div className="tw-hidden xl:tw-block">
          <img src={BannerPhoto} />
        </div>
        <div className="tw-w-full tw-flex tw-flex-column tw-justify-center lg:tw-relative">
          <img
            src={Logo}
            className="tw-filter tw-grayscale tw-opacity-10 tw-mt-12 tw-absolute tw-w-11/12 lg:tw-w-screen tw-z-0"
          />
          <div className="tw-mt-8 tw-space-y-8 tw-flex tw-flex-col tw-justify-center tw-z-10">
            <p className="tw-text-5xl tw-font-semi-bold tw-text-center">
              فروشگاه اینترنتی تابلوسازی طاها
            </p>
            <p className="tw-text-3xl tw-text-center">
              به راحتی و آنلاین خرید کنید
            </p>
            <a
              className="tw-bg-seyed lg:tw-mx-40 md:tw-px-16 lg:tw-px-2 tw-py-3 tw-rounded-2xl tw-text-white tw-shadow-2xl tw-text-center"
              href="#"
            >
              مشاهده فروشگاه
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
