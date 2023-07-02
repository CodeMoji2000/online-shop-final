import React from "react";
import slide from "../../images/slide.jpeg"
import slide2 from "../../images/slide-2.jpeg"

const Slider = ({ dropDownActive, handleDropDownActive, sliderData }) => {
  const renderedSlides = sliderData?.map((item, index) => {
    return (
      <div className={`carousel-item ${index == 1 && "active"} `} >
        <img
          className="d-block w-100 tw-filter tw-brightness-50 tw-pb-96 lg:tw-pb-0 tw-shadow-inner tw-object-fill "
          src={`${item.image}`}
          // src={slide}
          alt="First slide"
          style={{ height: "800px" }}
        />
        <div class="carousel-caption d-sm-block">
          <p className="tw-text-5xl">{item.title}</p>
          <p className="tw-font-gray-100 tw-text-xl tw-tracking-wider tw-mt-8">
            {item.caption}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide tw-z-0 tw-h-96 lg:tw-h-full" 
      
      data-ride="carousel"
      style={{ fontFamily: "Lalezar" }}
    >
      <div
        className={`tw-flex tw-transition tw-transform tw-duration-300 tw-ease-in-out tw-z-10 tw-pt-2 tw-pb-8 rtl  tw-px-48 tw-bg-white tw-w-full tw-absolute tw-inset-x-0 tw-px ${
          dropDownActive ? "tw-scale-100" : "tw-scale-0"
        }`}
      >
        <p>ff</p>
        <p>aa</p>
      </div>
      <ol class="carousel-indicators lg:tw-absolute tw-hidden">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">{renderedSlides}</div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
        style={{ fontFamily: "Lalezar" }}
      >
        قبلی
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
        style={{ fontFamily: "Lalezar" }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        بعدی
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Slider;
