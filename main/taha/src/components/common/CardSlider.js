import React from "react";
import Slider from "react-slick";
import "../../styles/CardSlider.css";
import productImage from "../../images/product.png";
import { AiFillShop } from "react-icons/ai";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import useWindowDimensions from "../../useWindowDimensions";
import { RiArticleLine } from "react-icons/ri";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div>
      <div
        className={className}
        style={{ width: "30px" }}
        onClick={onClick}
      ></div>
    </div>
  );
}

const CardSlider = ({
  images,
  images2,
  products,
  layers,
  itemsPerSlide,
  onLayerClick,
  legend,
}) => {
  const { height, width } = useWindowDimensions();
  const renderedImages = images?.map((item, index) => {
    return (
      <div>
        <img
          src={item.src}
          className={`tw-mx-auto tw-my-auto tw-rounded-2xl tw-shadow-md tw-object-fill`}
          style={{
            width: "350px",
            height: "350px",
          }}
        />

        <p className="tw-text-2xl tw-text-center tw-pt-7">
          {item.legend && item.legend}
        </p>
      </div>
    );
  });

  const renderedImages2 = images2?.map((item, index) => {
    return (
      <div>
        <img
          src={item.src}
          className={`tw-mx-auto tw-my-auto tw-rounded-2xl tw-shadow-md tw-border-2 tw-border-seyed `}
          style={{
            width: "350px",
            height: "350px",
          }}
        />
        <p className="tw-text-lg">{item.legend && item.legend}</p>
      </div>
    );
  });

  const renderedProducts = products?.map((item) => {
    return (
      <div
        className="tw-mb-20 tw-shadow-xl tw-px-4 tw-py-8"
        style={{ fontFamily: "Yekan" }}
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
          className="tw-flex tw-justify-center tw-mt-2 tw-px-1"
          style={{ direction: "rtl" }}
        >
          <p
            style={{ direction: "rtl", textAlign: "right" }}
            className="tw-mt-4 tw-text-xl"
          >
            {item.name}
          </p>
        </div>
      </div>
    );
  });

  const renderedLayers = layers?.map((item) => {
    if (item.active == true) {
      console.log(layers.length);
      return (
        <div className="lg:tw-px-32">
          <a
            className="tw-flex tw-flex-col tw-justify-center tw-flex-wrap tw-items-center md:tw-flex-row"
            style={{ cursor: "pointer" }}
            onClick={() => {
              onLayerClick(item);
            }}
          >
            <img
              className="sm:tw-w-1/2 tw-rounded-full tw-shadow-2xl"
              src={`${item.targetImage}`}
            />
            <div className="sm:tw-w-1/2 tw-mt-4 sm:tw-mt-0 tw-flex tw-items-center tw-justify-center">
              <p
                className="tw-font-semibold tw-text-2xl md:tw-text-6xl tw-ml-8 lg:tw-ml-0 xxl:tw-text-9xl tw-text-center"
                style={{ fontFamily: "Lalezar" }}
              >
                {item.title}
              </p>
            </div>
          </a>
        </div>
      );
    }
  });

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: width < 750 ? 1 : width < 1500 ? 2 : 3,
    slidesToScroll: width < 950 ? 1 : 3,
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="carousel-wrapper tw-mt-20">
      {renderedLayers || renderedProducts ? (
        <Slider {...settings2}>
          {renderedLayers
            ? renderedLayers
            : renderedProducts && renderedProducts}
        </Slider>
      ) : (
        <Slider {...settings1}>
          {images
            ? renderedImages
            : products
            ? renderedProducts
            : images2 && renderedImages2}
        </Slider>
      )}
    </div>
  );
};

export default CardSlider;
