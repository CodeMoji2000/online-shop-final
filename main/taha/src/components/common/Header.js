import React, { useEffect } from "react";
import { FaHamburger, FaShoppingCart } from "react-icons/fa";
import { BiDotsVertical } from "react-icons/bi";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Logo from "../../images/Logo.png";
import Background from "../../images/background.jpg";
import i18n from "../../Locale/i18";
import { GiHamburger, GiHamburgerMenu } from "react-icons/gi";

const Header = ({ handleNavbarToggle, navbarToggle }) => {
  return (
    <div className="tw-z-20">
      <div
        style={{
          fontFamily: "Lalezar",
          backgroundImage: `url(${Background})`,
        }}
        className="tw-bg-gray-100 tw-py-12 tw-px-72 tw-justify-between tw-hidden lg:tw-flex lg:tw-flex-row  tw-shadow-lg"
      >
        <div className="tw-flex tw-flex-row tw-space-x-2 tw-align-center tw-my-auto">
          {//sign in ///////////////
          }
          {/* <FaShoppingCart className="tw-my-auto" size={30} />
          <BiDotsVertical className="tw-my-auto" size={30} />
          <Link className="tw-bg-gradient-to-r tw-from-green-400 tw-to-green-600 tw-px-6 tw-rounded-xl tw-text-gray-100 tw-py-2 tw-shadow-lg">
            {i18n.t("loginSignup")}
          </Link> */}
        </div>
        <div className="tw-flex tw-mr-96" style={{direction:"ltr"}}>
          <img src={Logo} style={{ width: 180}} />
        </div>
        <div style={{direction:"rtl"}}>
           <p className="tw-text-green-800 tw-py-8 " style={{direction:"rtl"}}>با بهترین انتخاب یک قدم فاصله دارید</p>
        </div>
      </div>
      <div
        style={{
          fontFamily: "Lalezar",
          backgroundImage: `url(${Background})`,
        }}
        className="tw-bg-gray-100 tw-py-10 tw-space-y-5 tw-justify-between lg:tw-hidden tw-flex flex-column tw-shadow-lg"
      >
        <div className="tw-flex tw-justify-center ">
          <img src={Logo} style={{ width: 220 }} />
        </div>
        <p className="tw-text-center tw-text-green-800">با بهترین انتخاب یک قدم فاصله دارید</p>
        <div className="tw-flex tw-flex-row tw-space-x-6 tw-justify-center">
          {/* <FaShoppingCart className="tw-my-auto" size={30} />
          <BiDotsVertical className="tw-my-auto" size={30} />
          <Link className="tw-bg-gradient-to-r tw-from-green-400 tw-to-green-600 tw-px-6 tw-rounded-xl tw-text-gray-100 tw-py-2 tw-shadow-lg">
            {i18n.t("loginSignup")}
          </Link> */}
          {/* <GiHamburgerMenu
            onClick={() => handleNavbarToggle(!navbarToggle)}
            className="tw-mx-auto tw-my-auto  lg:tw-hidden tw-cursor-pointer"
            size={28}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
