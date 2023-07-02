import React from "react";
import headerImage from "../../images/background.jpg";
import logo from "../../images/logo.png";
import Icon1 from "../../images/icon.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { selectorUserData } from "../../redux/store/selector";
import { connect } from "react-redux";

const Header = ({ navbarState, onHamburClick, userData }) => {
  return (
    <div className="tw-z-20" style={{ fontFamily: "Lalezar" }}>
      <div
        style={{ backgroundImage: `url(${headerImage})` }}
        className="tw-hidden lg:tw-flex lg:tw-flex-row tw-border-2 tw-border-gray-200 tw-bg-gray-100 tw-py-12 tw-px-20 tw-justify-between "
      >
        <div className="tw-flex  tw-space-x-2 tw-align-center tw-my-auto">
          <p className="tw-my-2">
            {userData ? userData.data.fullName : "بدون نام"}
          </p>
          <CgProfile className="tw-my-auto" size={30} />
        </div>
        <div>
          <img src={logo} style={{ width: 120 }} />
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${headerImage})` }}
        className=" tw-justify-between lg:tw-hidden tw-flex flex-column tw-shadow-lg tw-bg-gray-100 tw-py-6 tw-space-y-12"
      >
        <div className="tw-flex tw-pl-4 tw-justify-center">
          <img src={logo} style={{ width: 150 }} />
        </div>
        <div className="tw-flex tw-flex-row tw-space-x-4 tw-pr-6 tw-justify-center">
          <span className="tw-pt-4">مدیر</span>
          <img src={Icon1} />
        </div>
      </div>
      <div className="lg:tw-hidden tw-flex tw-justify-end tw-p-6">
        <GiHamburgerMenu
          onClick={() => {
            onHamburClick(!navbarState);
          }}
          size={30}
          style={{ color: "black", cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: selectorUserData(state),
  };
};

export default connect(mapStateToProps, null)(Header);
