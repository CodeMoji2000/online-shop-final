import React from "react";
import Filter from "../components/ArticleScreen/Filter";
import Products from "../components/CategoryScreen/Products";
import CardSlider from "../components/common/CardSlider";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import Slider from "../components/common/Slider";

const ArticlesScreen = () => {
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
    <div>
      <Header />
      <Navbar />

      <div className="lg:tw-px-52 tw-py-20">
        <p
          className="tw-text-center tw-text-7xl"
          style={{ fontFamily: "Lalezar" }}
        >
          مقالات
        </p>
        <div className="lg:tw-flex tw-mt-20">
          <div className="tw-w-full">
            <Products products={products} />
          </div>
        </div>
      </div>
      <Footer cname="tw-mt-20" />
    </div>
  );
};

export default ArticlesScreen;
