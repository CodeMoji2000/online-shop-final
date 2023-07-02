import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import AddMaterialScreen from "../screens/AddMaterialScreen";
import AddWord from "../screens/AddWord";
import LoginScreen from "../screens/LoginScreen";
import LetterScreen from "../screens/LetterScreen";
import MainDashboard from "../screens/mainDashboardScreen";
import OrderServices from "../screens/OrderServices";
import HomeScreen from "../screens/HomeScreen";
import SliderScreen from "../screens/SliderScreen";
import AboutScreen from "../screens/AboutScreen";
import SamplesScreen from "../screens/samplesScreen";
import FooterScreen from "../screens/FooterScreen";
import ListofAgentScreen from "../screens/ListofAgentScreen";
import { connect } from "react-redux";
import { initialCallRequest } from "../redux/action/initialCall.action";
import { selectorBrand, selectorDiscount, selectorProduct, selectorPublicData, selectorUserData } from "../redux/store/selector";
import ShopScreen from "../screens/ShopScreen";
import ProductScreen from "../screens/productScreen";
import DiscountScreen from "../screens/discountScreen";
import Consulting from "../screens/Consulting";

const Navigation = ({publicData,initialCall,brand,userData,product,discount}) => {
useEffect(() => {
  initialCall()
}, [])
  return (
    <Router>
      <Switch>
        <Route exact path="/Login" component={LoginScreen} />
        <Route exact path="/order" component={()=><OrderServices publicData={publicData} userData={userData}/>} />
        <Route exact path="/material" component={AddMaterialScreen} />
        <Route exact path="/word" component={AddWord} />
        <Route exact path="/dashboard" component={MainDashboard} />
        <Route exact path="/letters" component={LetterScreen} />
        <Route exact path="/" component={LoginScreen} />
        <Route exact path="/test" component={HomeScreen} />
        <Route exact path="/slider" component={()=><SliderScreen publicData={publicData} />} />
        <Route exact path="/about" component={()=><AboutScreen publicData={publicData} />} />
        <Route exact path="/samples" component={()=><SamplesScreen publicData={publicData} userData={userData}/> } />
        <Route exact path="/footer" component={()=><FooterScreen publicData={publicData}/>} />
        <Route exact path="/listofAgent" component={()=><ListofAgentScreen publicData={publicData}/>} />
        <Route exact path="/shop-screen-brand" component={()=><ShopScreen brand={brand} userData={userData}/>}/>
        <Route exact path="/shop-screen-product" component={()=><ProductScreen product={product} brand={brand} userData={userData}/>}/>
        <Route exact path="/shop-screen-discount" component={()=><DiscountScreen product={product} discount={discount} userData={userData}/>}/>
        <Route exact path="/Consult" component={()=><Consulting />} />
      </Switch>
    </Router>
  );
};
const mapStateToProps = (state) => {
  return {
    product:selectorProduct(state),
    brand:selectorBrand(state),
    userData: selectorUserData(state),
    publicData : selectorPublicData(state),
    discount:selectorDiscount(state),
  }
}
const mapDispatchToProps = {
  initialCall:initialCallRequest
};

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);
