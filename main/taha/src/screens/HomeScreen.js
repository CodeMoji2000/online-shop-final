import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import Slider from "../components/common/Slider";
import CustomizedServices from "../components/HomeScreen/CustomizedServices";
import Banner from "../components/HomeScreen/Banner";
import Exclusives from "../components/HomeScreen/Exclusives";
import SampleWorks from "../components/HomeScreen/SampleWorks";
import ListOfAgents from "../components/HomeScreen/ListOfAgents";
import Footer from "../components/common/Footer";
import Alert from "../components/HomeScreen/Alert";
import { connect } from "react-redux";
import { selectorPublicData, selectorUserData } from "../redux/store/selector";
import { getPublicDataRequest } from "../redux/action/general.action";
import { initialCallRequest } from "../redux/action/inital.action";
import FloatingWhatsApp from "react-floating-whatsapp";
import i18n from "../Locale/i18";
import Avatar from "../images/avatar.png";
import InstagramEmbed from "react-instagram-embed";

const HomeScreen = (props) => {
  const { publicData, initialCall, userData } = props;

  console.log({ publicData });

  console.log({ here: publicData?.customizedServices?.[i18n.locale] });
  console.log({ userData });
  useEffect(() => {
    initialCall();
  }, []);

  const [dropDownActive, setDropDownActive] = useState(false);
  const [navbarToggle, setNavbarToggle] = useState(false);
  return (
    <div>
      <Header
        navbarToggle={navbarToggle}
        handleNavbarToggle={(navbarToggle) => setNavbarToggle(navbarToggle)}
      />
      <Navbar />
      {/* <Alert /> */}
      <Slider
        sliderData={publicData?.slideshow?.[i18n.locale]}
        dropDownActive={dropDownActive}
        handleDropDownActive={(dropDownActive) => {
          setDropDownActive(dropDownActive);
        }}
      />
      <CustomizedServices
        services={publicData?.customizedServices?.[i18n.locale]}
        cname="tw-mt-12"
      >
        {i18n.t("navbarOrderedServices")}
      </CustomizedServices>
      {/* <Banner cname="tw-mt-28" /> */}
      <Exclusives
        data={publicData?.exclusives?.[i18n.locale]}
        cname="tw-mt-12"
      />
      {/* <SampleWorks data={publicData?.sampleWorks?.[i18n.locale]} /> */}
      <ListOfAgents
        data={publicData?.listOfAgents?.[i18n.locale]}
        cname="tw-mt-12"
      />
      <Footer data={publicData?.footer?.[i18n.locale]} />
      <div>
        <InstagramEmbed
          url="https://www.instagram.com/tv/CYBNmPrqKMs/"
          clientAccessToken="650425762673022|0628d3e6beb185744dce3a481506aa21"
          maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {
            console.log("heerer");
          }}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={(err) => console.log({ err })}
        />
      </div>

      <FloatingWhatsApp
        phoneNumber="+989392644472"
        accountName="کارشناس"
        avatar={Avatar}
        chatMessage="چطور میتونم کمکتون کنم؟"
        allowClickAway={true}
      />
      {/* <FloatingWhatsApp
        styles={{ bottom: "110px" }}
        phoneNumber="+989178858420"
        accountName="محسن طاهایی"
      /> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log({ ThisState: state });
  return {
    publicData: selectorPublicData(state),
    userData: selectorUserData(state),
  };
};

const mapDispatchToProps = {
  initialCall: initialCallRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
