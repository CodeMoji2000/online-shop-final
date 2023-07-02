import React, { useEffect } from "react";
import { connect } from "react-redux";
import { initialCallRequest } from "../redux/action/initialCall.action";
import { getPublicDataResponse } from "../redux/action/publicData.action";
import { selectorBrand, selectorPublicData, selectorUserData } from "../redux/store/selector";
import SliderScreen from "./SliderScreen";


const HomeScreen = ({ userData,initialCall,publicData,setPublicData,brand }) => {
  useEffect(() => {
    initialCall()

  }, [])

  console.log({ userData });
  console.log(publicData)
  console.log(brand)
  getPublicDataResponse(publicData)
  return <div>Hello See the logs</div>;
};

const mapStateToProps = (state) => {
  return {
    brand:selectorBrand(state),
    publicData : selectorPublicData(state),
    userData: selectorUserData(state),
  };
};
const mapDispatchToProps = {
  initialCall:initialCallRequest,
  setPublicData:getPublicDataResponse
};

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);
