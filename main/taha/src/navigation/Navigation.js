import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import HomeScreen from "../screens/HomeScreen";
import CategoryScreen from "../screens/CategoryScreen";
import ShopScreen from "../screens/ShopScreen";
import DesktopScreen from "../screens/DesktopScreen";
import EnvAdScreen from "../screens/EnvAdScreen";
import BillboardScreen from "../screens/BillboardScreen";
import SpecialServicesScreen from "../screens/SpecialServicesScreen";
import Language from "../components/LoginScreen/language";
import Login from "../components/LoginScreen/login";
import SignUpScreen from "../screens/SignUpScreen";
import Login2 from "../components/LoginScreen/Login2";
import ArticlesScreen from "../screens/ArticlesScreen";
import VacumFrmingScreen from "../screens/VacumFrmingScreen";
import EmbossedPosterScreen from "../screens/EmbossedPosterScreen";
import MakingPosterScreen from "../screens/MakingPosterScreen";
import LightBoxScreen from "../screens/LightBoxScreen";
import StandsScreen from "../screens/StandsScreen";
import SarDarb from "../components/MakingPosterScreen.js/sarDarb";
import flaxie from "../components/MakingPosterScreen.js/flaxie";
import composite from "../components/MakingPosterScreen.js/composite";
import Termoo from "../components/MakingPosterScreen.js/termoo";
import Nama from "../components/MakingPosterScreen.js/nama";
import RoyeBam from "../components/MakingPosterScreen.js/royeBam";
import Parchami from "../components/MakingPosterScreen.js/parchami";
import Gerdan from "../components/MakingPosterScreen.js/gerdan";
import FrameLess from "../components/lightBoxScreens/frameLess";
import Crystal from "../components/lightBoxScreens/crystal";
import Magnet from "../components/lightBoxScreens/magnet";
import Mdf from "../components/lightBoxScreens/mdf";
import LogoBox from "../components/lightBoxScreens/logoBox";
import CombineBox from "../components/lightBoxScreens/combineBox";
import Rotate from "../components/lightBoxScreens/ratate";
import Alominiom from "../components/lightBoxScreens/alominiom";
import SnappFrame from "../components/lightBoxScreens/snappFrame";
import WallGuidStand from "../components/standsScreens/wallGuidStand";
import StandOfWay from "../components/standsScreens/standOfWay";
import PendantGuid from "../components/standsScreens/PendantGuide";
import PelakStand from "../components/standsScreens/pelakStand";
import GuidStand from "../components/standsScreens/guidStand";
import DoubleWallGuid from "../components/standsScreens/doubleWallGuid";
import DesktopGuid from "../components/standsScreens/desktopStand";
import AnnouncementStand from "../components/standsScreens/AnnouncementStand";
import Chalenum from "../components/EmbossedPosterScreen/chalenum";
import Still from "../components/EmbossedPosterScreen/still";
import Metal from "../components/EmbossedPosterScreen/matal";
import Plaxi from "../components/EmbossedPosterScreen/plaxi";
import Vegas from "../components/EmbossedPosterScreen/lasvegas";
import Swedish from "../components/EmbossedPosterScreen/labeSoedi";
import VacumWord from "../components/EmbossedPosterScreen/vacumWord";
import MiniLetter from "../components/EmbossedPosterScreen/miniLetter";
import Special from "../components/EmbossedPosterScreen/special";
import ListOfAgents from "../screens/ListOfAgent";
import GuideScreen from "../screens/GuideScreen";
import ADGuide from "../components/guideScreen/ADGuide";
import BillBoardGuide from "../components/guideScreen/BillboardGuide";

const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route exact component={CategoryScreen} path="/shop/category" />
        <Route exact component={HomeScreen} path="/" />
        <Route exact component={ShopScreen} path="/shop" />
        <Route exact component={DesktopScreen} path="/playground" />
        <Route
          exact
          component={EnvAdScreen}
          path="/Enviromental_Advertisment"
        />
        <Route exact component={BillboardScreen} path="/Billboard" />
        <Route
          exact
          component={SpecialServicesScreen}
          path="/special_services"
        />
        <Route exact component={Language} path="/Language" />
        <Route exact component={Login} path="/Login" />
        <Route exact component={SignUpScreen} path="/sign_up" />
        <Route exact component={Login2} path="/verify" />
        <Route exact component={ArticlesScreen} path="/articles" />
        <Route exact component={VacumFrmingScreen} path="/vacum" />
        <Route exact component={EmbossedPosterScreen} path="/Embossed_Poster" />
        <Route exact component={MakingPosterScreen} path="/making_poster" />
        <Route exact component={LightBoxScreen} path="/light_box" />
        <Route exact component={StandsScreen} path="/stands" />
        <Route exact component={GuideScreen} path="/Guide" />
        <Route exact component={SarDarb} path="/making_poster_sar_darb" />
        <Route exact component={flaxie} path="/making_poster_flaxi" />
        <Route exact component={composite} path="/making_poster_composite" />
        <Route exact component={Termoo} path="/making_poster_termood" />
        <Route exact component={Nama} path="/making_poster_nama" />
        <Route exact component={RoyeBam} path="/making_poster_roye_bam" />
        <Route exact component={Parchami} path="/making_poster_parchami" />
        <Route exact component={Gerdan} path="/making_poster_gardan" />
        <Route exact component={FrameLess} path="/light_box_frame_less" />
        <Route exact component={Crystal} path="/light_box_crystal" />
        <Route exact component={Magnet} path="/light_box_magnet" />
        <Route exact component={Mdf} path="/light_box_mdf" />
        <Route exact component={LogoBox} path="/light_box_logo_box" />
        <Route exact component={CombineBox} path="/light_box_combine" />
        <Route exact component={Rotate} path="/light_box_rotate" />
        <Route exact component={Alominiom} path="/light_box_alominiom" />
        <Route exact component={SnappFrame} path="/light_box_snapp_frame" />
        <Route exact component={WallGuidStand} path="/stand_wall_guid" />
        <Route exact component={StandOfWay} path="/stand_Way" />
        <Route exact component={PendantGuid} path="/stand_pendant_guid" />
        <Route exact component={PelakStand} path="/stand_pelak" />
        <Route exact component={GuidStand} path="/stand_guid" />
        <Route exact component={DoubleWallGuid} path="/stand_double_wall" />
        <Route exact component={DesktopGuid} path="/stand_desk" />
        <Route exact component={AnnouncementStand} path="/stand_Announcement" />
        <Route exact component={Chalenum} path="/chalenum" />
        <Route exact component={Still} path="/still" />
        <Route exact component={Metal} path="/metal" />
        <Route exact component={Plaxi} path="/plaxi" />
        <Route exact component={Vegas} path="/las-vegas" />
        <Route exact component={Swedish} path="/swedish" />
        <Route exact component={VacumWord} path="/vacum-word" />
        <Route exact component={MiniLetter} path="/mini-letter" />
        <Route exact component={Special} path="/special" />
        <Route exact component={ListOfAgents} path="/listOfAgents" />
        <Route exact component={ADGuide} path="/AD-Guide" />
        <Route exact component={BillBoardGuide} path="/AD-billboard" />
        {/* <Route exact component={} path="" /> */}
        {/* <Route exact component={} path="" />
        <Route exact component={} path="" />
        <Route exact component={} path="" />
        <Route exact component={} path="" /> */}
      </Switch>
    </Router>
  );
};

export default Navigation;
