import React, { useState } from "react";
import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import Slider from "../components/common/Slider";
import Billboard from "../components/common/Billboard";
import Work1 from "../images/work-1.jpg";
import Work2 from "../images/work-2.jpg";
import Work3 from "../images/work-3.jpg";
import CardSlider from "../components/common/CardSlider";
import i18n from "../Locale/i18";
import FreeConsult from "../components/common/FreeConsult";
import Exclusives from "../components/HomeScreen/Exclusives";
import Footer from "../components/common/Footer";

const IMAGES = [
  {
    id: 1,
    src: Work1,
    legend: "Placeholder image",
  },
  {
    id: 2,
    src: Work2,
    legend: "Placeholder image",
  },
  {
    id: 3,
    src: Work3,
    legend: "Placeholder image",
  },
];

const BillboardScreen = () => {
  const [dropDownActive, setDropDownActive] = useState(false);
  const [navbarToggle, setNavbarToggle] = useState(false);
  return (
    <>
      <Header
        navbarToggle={navbarToggle}
        handleNavbarToggle={(navbarToggle) => setNavbarToggle(navbarToggle)}
      />
      <Navbar
        navbarToggle={navbarToggle}
        handleNavbarToggle={(navbarToggle) => setNavbarToggle(navbarToggle)}
        dropDownActive={dropDownActive}
        handleDropDownActive={(dropDownActive) => {
          setDropDownActive(dropDownActive);
        }}
      />
      <Slider
        dropDownActive={dropDownActive}
        handleDropDownActive={(dropDownActive) => {
          setDropDownActive(dropDownActive);
        }}
      />
      <Billboard
        title={i18n.t("billboardPageTitle")}
        content={i18n.t("aboutBillboard")}
      />
      <div className="container" style={{ fontFamily: "Lalezar" }}>
        <div className="tw-mt-12 text-center">
          <span
            className="tw-text-2xl"
            style={{ borderBottom: "3px solid green" }}
          >
            {i18n.t("billboardSampleWorks")}
          </span>
        </div>

        <CardSlider itemsPerSlide={3} images={IMAGES} />
      </div>

      <FreeConsult />

      <Exclusives cname="tw-mt-12" />

      <Footer />
    </>
  );
};

export default BillboardScreen;
