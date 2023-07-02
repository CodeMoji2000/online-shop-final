import React from "react";
import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import Filter from "../components/common/Filter/Filter";
import Footer from "../components/common/Footer";
import Products from "../components/CategoryScreen/Products";
import CardSlider from "../components/common/CardSlider";

const CategoryScreen = () => {
  const filterNames = [
    {
      name: "آبی رنگ",
      count: 5,
    },
    {
      name: "قرمز رنگ",
      count: 3,
    },
    {
      name: "سبز رنگ",
      count: 10,
    },
  ];
  const filterBrands = [
    {
      name: "نیسان",
    },
    {
      name: "سانگ یانگ",
    },
    {
      name: "هیوندای",
    },
  ];
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
      <div className="lg:tw-px-52 tw-py-20 tw-bg-white">
        <div className="lg:tw-flex">
          <div className="tw-hidden lg:tw-block tw-w-4/5">
            <Products products={products} />
          </div>

          <div className="tw-px-20 lg:tw-px-0 lg:tw-w-1/5">
            <Filter names={filterNames} brands={filterBrands} />
          </div>

          <div className="lg:tw-hidden">
            <CardSlider products={products} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryScreen;
