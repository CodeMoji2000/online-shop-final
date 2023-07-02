import React, { useState } from "react";
import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import Slider from "../components/common/Slider";
import Billboard from "../components/common/Billboard";
import SpecialServices from "../components/SpecialServicesScreen/SpecialServices";
import FreeConsult from "../components/common/FreeConsult";
import Exclusives from "../components/HomeScreen/Exclusives";
import Footer from "../components/common/Footer";
import Templet from "../components/common/Templet";

const SpecialServicesScreen = () => {
  const [dropDownActive, setDropDownActive] = useState(false);
  const [navbarToggle, setNavbarToggle] = useState(false);
  return <Templet>
          <Slider
        dropDownActive={dropDownActive}
        handleDropDownActive={(dropDownActive) => {
          setDropDownActive(dropDownActive);
        }}
      />
      <SpecialServices cname="tw-mt-32" />

      <FreeConsult cname="tw-mt-32" />

      <Exclusives cname="tw-mt-32" />
  </Templet>

};

export default SpecialServicesScreen;
