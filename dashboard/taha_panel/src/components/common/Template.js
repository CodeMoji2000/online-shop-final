import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Header from "../../component/common/Header";
import SideBar from "../../component/common/SideBar";
import { selectorUserData } from "../../redux/store/selector";

const Template = ({ children, userData }) => {
  const [navbarState, setNavbarState] = useState(false);
  const handleCrossClick = (e) => setNavbarState(false);

  return (
    <>
      <Header
        navbarState={navbarState}
        onHamburClick={(newState) => {
          setNavbarState(newState);
        }}
      />

      <div className="lg:tw-flex lg:tw-justify-start tw-bg-white" style={{direction:"rtl"}}>
        
        <SideBar
          navbarState={navbarState}
          setNavbarState={setNavbarState}
          handleCrossClick={(e) => {
            handleCrossClick(e);
          }}
        />
        <div className="tw-w-full lg:tw-w-10/12 tw-bg-white">
        {children}
        </div>
        
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: selectorUserData(state),
  };
};

export default connect(mapStateToProps, null)(Template);
