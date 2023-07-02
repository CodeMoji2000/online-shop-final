import React, { useEffect } from "react";
import { useState, useRef } from "react";
import InnerLayers from "../components/DesktopScreen/InnerLayers";
import Layers from "../components/DesktopScreen/Layers";
import Output from "../components/DesktopScreen/Output";
import layersJson from "../json/layers.json";
import "../styles/Desktop.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { connect } from "react-redux";

import LayersSidebar from "../components/DesktopScreen/LayersSidebar";
import { selectorPublicData } from "../redux/store/selector";

const DesktopScreen = (props) => {
  const { publicData } = props;
  // const [activeLayer, setActiveLayer] = useState(layersJson[0]);
  const [activeLayer, setActiveLayer] = useState(null);
  const [update, setUpdate] = useState(false);
  const [navbarState, setNavbarState] = useState(true);
  const [activeInnerLayer, setActiveInnerLayer] = useState([
    layersJson[0].items[0],
    null,
  ]);

  const handleActiveLayerChange = (layer) => {
    if (layer == activeLayer) {
      setActiveLayer(null);
    } else {
      setActiveLayer(layer);
    }
  };

  const handleActiveInnerLayerChange = (innerLayer, layer) => {
    let newActiveInnerLayer = activeInnerLayer;
    /// If a user selects an already selected inner layer the program should unselect the selected layer and pop the selected inner layer from activeInnerLayers.
    /// And if a user selects a new inner layer the program should select that layer and add it to the activeInnerLayer array.

    if (newActiveInnerLayer[layer.level] == innerLayer && layer.level != 1) {
      
      // TODO: UNSELECTION HAPPENS HERE ======================================================================================

      
      // * Vacumm ------------------------------------------------------------------------------------------------------------
      
      if (
        activeInnerLayer[1].key === "vacum" &&
        !newActiveInnerLayer[5] &&
        layer.level === 7
      ) {
        return;
      }

      if (
        activeInnerLayer[1].key === "vacum" &&
        newActiveInnerLayer[5] &&
        layer.level === 6
      ) {
        return;
      }

      if (activeInnerLayer[1].key === "vacum" && layer.level === 5) {
        newActiveInnerLayer[6] = null;
        newActiveInnerLayer[7] = layersJson[7].types[0].items[0];
      }

      // * -------------------------------------------------------------------------------------------------------------------

      // * felezi ------------------------------------------------------------------------------------------------------------
      
      if (activeInnerLayer[1].key === "felezi" && layer.level === 6) { // لبه اصلی اجباری بوده و نمی تواند حذف شود
        return;
      }

      if (activeInnerLayer[1].key === "felezi" && layer.level === 8) { // رویه اجباری بوده و نمی تواند حذف شود
        return;
      }

      if (activeInnerLayer[1].key === "felezi" && layer.level === 3) { // در صورت حذف شدن نور دوغی نور مخفی هم حذف میشود
        newActiveInnerLayer[5] = null; // نور مخفی حذف میشود
        newActiveInnerLayer[2] = layersJson[2].types[1].default; // سایه مجددا اضافه میشود
      }

      // * -------------------------------------------------------------------------------------------------------------------

       // * Las Vegas ------------------------------------------------------------------------------------------------------------

      if (activeInnerLayer[1]?.key === "las_vegas" && layer.level === 4) { // لبه اصلی اجباری بوده و نمی تواند حذف شود
        return;
      }

      if (activeInnerLayer[1]?.key === "las_vegas" && layer.level === 8) { // صفحه رویه اجباری بوده و نمی تواند حذف شود
        return;
      }

      if (activeInnerLayer[1]?.key === "las_vegas" && layer.level === 11) { // بالای لبه اجباری بوده و نمی تواند حذف شود
        return;
      }

      if (activeInnerLayer[1]?.key === "las_vegas" && layer.level === 12) { // لامپ اجباری بوده و نمی تواند حذف شود
        return;
      }


      if (activeInnerLayer[1]?.key === "felezi" && layer.level === 6) { // انتخاب لبه اصلی
        newActiveInnerLayer[8] = layersJson[8].types[1].items[innerLayer.id]; // با انتخاب لبه اصلی ، رویه همرنگ اضافه می گردد
      }

      if (activeInnerLayer[1]?.key === "felezi" && layer.level === 8) { // انتخاب رویه
        newActiveInnerLayer[6] = layersJson[6].types[1].items[innerLayer.id]; // با انتخاب رویه ، لبه اصلی همرنگ اضافه میگردد
      }

      // * ---------------------------------------------------------------------------------------------------------------------

       // * Swedish ------------------------------------------------------------------------------------------------------------
        
       if (activeInnerLayer[1]?.key === "swedish" && layer.level === 4) { // لبه اصلی اجباری بوده و نمی تواند حذف شود
        return;
      }

      if (activeInnerLayer[1]?.key === "swedish" && layer.level === 5) { // رویه اجباری بوده و نمی تواند حذف شود
        return;
      }

      if (activeInnerLayer[1]?.key === "swedish" && layer.level === 3) { // حذف نور زیر حروف
        newActiveInnerLayer[2] = layersJson[2].types[3].default; // هنگام حذف نور زیر حروف سایه مجددا اضافه می گردد 
      }


       // * ---------------------------------------------------------------------------------------------------------------------

        // * Chanel ------------------------------------------------------------------------------------------------------------
        
       if (activeInnerLayer[1]?.key === "chanel" && layer.level === 4) { // لبه اصلی اجباری بوده و نمی تواند حذف شود
        return;
      }

      if (activeInnerLayer[1]?.key === "chanel" && layer.level === 5) { // رویه اجباری بوده و نمی تواند حذف شود
        return;
      }

      if (activeInnerLayer[1]?.key === "chanel" && layer.level === 3) { // حذف نور زیر حروف
        newActiveInnerLayer[2] = layersJson[2].types[3].default; // هنگام حذف نور زیر حروف سایه مجددا اضافه می گردد 
      }


       // * ---------------------------------------------------------------------------------------------------------------------


      newActiveInnerLayer[layer.level] = null;
    } else {
     
      // TODO: SELECTION HAPPENS HERE ========================================================================================

      // * Vacumm ------------------------------------------------------------------------------------------------------------

      if (activeInnerLayer.[1]?.key === "vacum" && layer.level === 5) {
        newActiveInnerLayer[7] = null;
        if (!newActiveInnerLayer[6]) {
          newActiveInnerLayer[6] = layersJson[6].types[0].items[0];
        }
      }

      // * -------------------------------------------------------------------------------------------------------------------
      
      // * felezi ------------------------------------------------------------------------------------------------------------

      if (activeInnerLayer[1]?.key === "felezi" && layer.level === 3) { // انتخاب نور
        newActiveInnerLayer[2] = null; // با انتخاب نور سایه حذف میشود
        newActiveInnerLayer[3] = innerLayer; // نور دوغی انتخاب شده به لایه های انتخاب شده اضافه میشود
        newActiveInnerLayer[5] = layersJson[5].types[1].items[innerLayer.id]; // متناسب با نور دوغی انتخاب شده نور مخفی همرنگ هم به لایه های انتخاب شده اضافه می گردد
      }


      if (activeInnerLayer[1]?.key === "felezi" && layer.level === 6) { // انتخاب لبه اصلی
        newActiveInnerLayer[8] = layersJson[8].types[1].items[innerLayer.id]; // با انتخاب لبه اصلی ، رویه همرنگ اضافه می گردد
      }

      if (activeInnerLayer[1]?.key === "felezi" && layer.level === 8) { // انتخاب رویه
        newActiveInnerLayer[6] = layersJson[6].types[1].items[innerLayer.id]; // با انتخاب رویه ، لبه اصلی همرنگ اضافه میگردد
      }

      // * ---------------------------------------------------------------------------------------------------------------------
      
      // * Las Vegas ------------------------------------------------------------------------------------------------------------

      if (activeInnerLayer[1]?.key === "las_vegas" && layer.level === 4) { // انتخاب لبه اصلی
        newActiveInnerLayer[8] = layersJson[8].types[2].items[innerLayer.id]; // رویه همرنگ اعمال میشود
        newActiveInnerLayer[11] = layersJson[11].types[2].items[innerLayer.id]; // بالای لبه همرنگ اعمال میشود
      }

      if (activeInnerLayer[1]?.key === "las_vegas" && layer.level === 8) { // انتخاب رویه
        newActiveInnerLayer[4] = layersJson[4].types[2].items[innerLayer.id]; // لبه اصلی همرنگ اعمال میشود
        newActiveInnerLayer[11] = layersJson[11].types[2].items[innerLayer.id]; // بالای لبه همرنگ اعمال میشود
      }

      if (activeInnerLayer[1]?.key === "las_vegas" && layer.level === 11) { // انتخاب  بالای لبه
        newActiveInnerLayer[4] = layersJson[4].types[2].items[innerLayer.id]; // لبه اصلی اعمال میشود
        newActiveInnerLayer[8] = layersJson[8].types[2].items[innerLayer.id]; // صفحه رویه همرنگ اعمال میشود
      }

      // * ---------------------------------------------------------------------------------------------------------------------

       // * Swedish ------------------------------------------------------------------------------------------------------------
        
       if (activeInnerLayer[1]?.key === "swedish" && layer.level === 5 && innerLayer.id > 12) { //  انتخاب  رویه های کریستالی
        newActiveInnerLayer[6] = null;
      }

      if (activeInnerLayer[1]?.key === "swedish" && layer.level === 3) { // انتخاب نورزیر حروف
        newActiveInnerLayer[2] = null; // هنگام انتخاب نور زیر حروف سایه حذف میگردد
      }

       // * ---------------------------------------------------------------------------------------------------------------------

       // * Chanel ------------------------------------------------------------------------------------------------------------
         
    
      if (activeInnerLayer[1]?.key === "chanel" && layer.level === 5 && innerLayer.id > 12) { //  انتخاب  رویه های کریستالی
        newActiveInnerLayer[6] = null;    
      }

      if (activeInnerLayer[1]?.key === "chanel" && layer.level === 3) { // انتخاب نورزیر حروف
        newActiveInnerLayer[2] = null; // هنگام انتخاب نور زیر حروف سایه حذف میگردد
      }

      if (activeInnerLayer[1]?.key === "chanel" && layer.level === 4) { // انتخاب لبه اصلی
        newActiveInnerLayer[8] = layersJson[8].types[4].items[innerLayer.id]; // هنگام انتخاب لبه اصلی بالا لبه ی همرنگ آن انتخاب می شود
      }

       // * ---------------------------------------------------------------------------------------------------------------------


      newActiveInnerLayer[layer.level] = innerLayer;
    }

    //  If the chosen layer is نوع حروف then every inner layer will reinitiate to the default mode
    if (layer.level == 1) {
     
      newActiveInnerLayer[0] = layersJson[0]?.default;
      newActiveInnerLayer[2] = layersJson[2]?.types[innerLayer.id]?.default;
      newActiveInnerLayer[3] = layersJson[3]?.types[innerLayer.id]?.default;
      newActiveInnerLayer[4] = layersJson[4]?.types[innerLayer.id]?.default;
      newActiveInnerLayer[5] = layersJson[5]?.types[innerLayer.id]?.default;
      newActiveInnerLayer[6] = layersJson[6]?.types[innerLayer.id]?.default;
      newActiveInnerLayer[7] = layersJson[7]?.types[innerLayer.id]?.default;
      newActiveInnerLayer[8] = layersJson[8]?.types[innerLayer.id]?.default;
      newActiveInnerLayer[9] = layersJson[9]?.types[innerLayer.id]?.default;
      newActiveInnerLayer[10] = layersJson[10]?.types[innerLayer.id]?.default;
      newActiveInnerLayer[11] = layersJson[11]?.types[innerLayer.id]?.default;
      newActiveInnerLayer[12] = layersJson[12]?.types[innerLayer.id]?.default;
      
    }

    setActiveInnerLayer(newActiveInnerLayer);
    setUpdate(!update);
  };

  const handleNavbarState = (newState) => {
    setNavbarState(newState);
  };

  return (
    <div className="sm:ltr rtl" style={{ fontFamily: "Lalezar" }}>
      <div
        className="tw-absolute sm:tw-hidden tw-w-5/12 tw-h-full tw-inset-x-0 tw-inset-y-0 tw-z-10"
        onClick={() => setNavbarState(false)}
      />
      <LayersSidebar
      cname="sm:tw-hidden"
        handleNavbarState={(newState) => {
          handleNavbarState(newState);
        }}
        navbarState={navbarState}
        handleActiveLayerChange={(layer) => {
          handleActiveLayerChange(layer);
        }}
        innerLayers={
          activeLayer
            ? activeLayer.types
              ? activeLayer.types[activeInnerLayer[1].id].items
              : activeLayer.items
            : null
        }
        activeLayer={activeLayer ? activeLayer : null}
        layers={layersJson}
        activeInnerLayers={activeInnerLayer}
        handleActiveInnerLayerChange={(innerLayer, layer) => {
          handleActiveInnerLayerChange(innerLayer, layer);
        }}
      />
      
      <div className="tw-flex tw-mb-8 tw-mt-6 tw-content-center ltr tw-px-8 tw-justify-between sm:tw-hidden tw-z-0">
        <img
          style={{ width: "50px", height: "30px" }}
          src={require("../images/Logo.png").default}
        />
        <GiHamburgerMenu
          size={25}
          className="tw-my-auto Z-30"
          onClick={() => {
            setNavbarState(!navbarState);
          }}
        />
      </div>

      <div className="sm:tw-flex sm:tw-pt-16 tw-space-x-4 sm:tw-mx-0 xl:tw-px-28 tw-z-0">
        <div className="tw-relative sm:tw-w-8/12 sm:tw-rounded-2xl ">
          <Output
            activeInnerLayer={activeInnerLayer}
            activeLayer={activeLayer}
          />
        </div>

        <div
          className="tw-overflow-y-scroll tw-relative sm:tw-w-2/12 tw-hidden sm:tw-block tw-h-screen"
        >
          {activeLayer ? (
            <InnerLayers
              handleActiveInnerLayerChange={(innerLayer, layer) => {
                handleActiveInnerLayerChange(innerLayer, layer);
              }}
              innerLayers={
                activeLayer.types
                  ? activeLayer.types[activeInnerLayer[1].id].items
                  : activeLayer.items
              }
              activeLayer={activeLayer}
              activeInnerLayer={activeInnerLayer[activeLayer.level]}
            />
          ) : (
            <div className="tw-bg-gray-200 tw-rounded-3xl rtl tw-shadow-lg tw-p-8 tw-text-center">
              <p>نوع حروف مدنظر را انتخاب نمایید.</p>
            </div>
          )}
        </div>
        <div className=" sm:tw-w-2/12 tw-relative tw-hidden sm:tw-block">
          <Layers
            handleActiveInnerLayerChange={(innerLayer, layer) => {
              handleActiveInnerLayerChange(innerLayer, layer);
            }}
            handleActiveLayerChange={(layer) => {
              handleActiveLayerChange(layer);
            }}
            activeLayer={activeLayer}
            layers={layersJson}
            activeInnerLayer={activeInnerLayer}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  publicData: selectorPublicData(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DesktopScreen);
