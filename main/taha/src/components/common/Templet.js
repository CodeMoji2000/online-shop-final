import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import Header from '../common/Header';
import Navbar from '../common/Navbar';
import { initialCallRequest } from "../../redux/action/inital.action";
import { selectorPublicData } from '../../redux/store/selector';
import Footer from "../common/Footer";
import i18n from "../../Locale/i18";


function Templet({publicData, initialCall,children}) {
    // const [dropDownActive, setDropDownActive] = useState(false);
    const [navbarToggle, setNavbarToggle] = useState(false);
    useEffect(() => {
        initialCall();
      }, []);
    return (
     <div>
        <Header
        navbarToggle={navbarToggle}
        handleNavbarToggle={(navbarToggle) => setNavbarToggle(navbarToggle)}
        />
        <Navbar />
        {children}
        <Footer data={publicData?.footer?.[i18n.locale]} />
    </div>
    )
}
const mapStateToProps = (state) => {
    return {
      publicData: selectorPublicData(state),
    };
  };
  
  const mapDispatchToProps = {
    initialCall: initialCallRequest ,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Templet);
