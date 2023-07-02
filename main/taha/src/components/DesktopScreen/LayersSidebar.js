import React, { useEffect, useRef } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { useDetectClickOutside } from "react-detect-click-outside";

const LayersSidebar = ({
  navbarState,
  handleNavbarState,
  layers,
  activeInnerLayers,
  handleActiveLayerChange,
  activeLayer,
  handleActiveInnerLayerChange,
  onClickOutside,
  cname,
}) => {
  const ref = useDetectClickOutside({ onTriggered: onClickOutside });

  const filteredLayers = layers.filter((item) => {
    if (!activeInnerLayers[1] && item.level != 1) {
      return false;
    }

    if (!activeInnerLayers[1] && item.level == 1) {
      return true;
    }

    if (item.level < 2) {
      return true;
    }

    if (!item.types[activeInnerLayers[1].id]) {
      return false;
    }

    if (item.visible == false) {
      return false;
    }

    if (
      activeInnerLayers[1]?.key == "vacum" &&
      item.level == 5 &&
      activeInnerLayers[3]
    ) {
      return false;
    }

    if (
      activeInnerLayers[1]?.key == "vacum" &&
      item.level == 3 &&
      activeInnerLayers[5]
    ) {
      return false;
    }

    if (
      activeInnerLayers[1]?.key == "vacum" &&
      item.level == 7 &&
      activeInnerLayers[5]
    ) {
      return false;
    }

    if (
      activeInnerLayers[1]?.key == "vacum" &&
      item.level == 6 &&
      !activeInnerLayers[5]
    ) {
      return false;
    }

    if (
      activeInnerLayers[1]?.key == "vacum" &&
      item.level == 3 &&
      activeInnerLayers[5]
    ) {
      return false;
    }

    if (
      activeInnerLayers[1]?.key == "vacum" &&
      item.level == 5 &&
      activeInnerLayers[3]
    ) {
      return false;
    }

    if (activeInnerLayers[1]?.key == "felezi" && item.level == 5) {
      return false;
    }

    if (activeInnerLayers[1]?.key == "felezi" && item.level == 8) {
      return false;
    }

    if (
      activeInnerLayers[1]?.key == "felezi" &&
      item.level == 3 &&
      activeInnerLayers[4]
    ) {
      return false;
    }

    if (
      activeInnerLayers[1]?.key == "felezi" &&
      item.level == 4 &&
      activeInnerLayers[3]
    ) {
      return false;
    }

    if (activeInnerLayers[1]?.key == "las_vegas" && item.level == 8) {
      return false;
    }

    if (activeInnerLayers[1]?.key == "las_vegas" && item.level == 11) {
      return false;
    }

    if (
      activeInnerLayers[1]?.key === "swedish" &&
      item.level === 6 &&
      activeInnerLayers[5].id > 12
    ) {
      return false;
    }

    if (activeInnerLayers[1]?.key === "chanel" && item.level === 8) {
      return false;
    }

    if (
      activeInnerLayers[1]?.key === "chanel" &&
      item.level === 6 &&
      activeInnerLayers[5].id > 12
    ) {
      return false;
    }

    return true;
  });

  const layersOrder = [];
  // const temp = filteredLayers;
  for (let i = 0; i <= filteredLayers.length; i++) {
    console.log(filteredLayers[i]);
    if (filteredLayers[i]?.items) {
      layersOrder[filteredLayers[i].order] = filteredLayers[i];
      console.log("ok");
    } else if (filteredLayers[i]) {
      layersOrder[filteredLayers[i]?.types[activeInnerLayers[1]?.id]?.order] =
        filteredLayers[i];
      console.log("ok");
      console.log(filteredLayers[i]);
    }
  }

  const renderedInnerLayers = (layer) => {
    return layer?.map((item) => {
      return (
        <button
          onClick={() => {
            handleActiveInnerLayerChange(item, activeLayer);
          }}
          className={`tw-tracking-wider tw-flex tw-justify-between tw-text-gray-700 tw-py-2 tw-text-sm tw-px-8 tw-w-full tw-duration-300 hover:tw-bg-gray-300  tw-rounded-2xl ${
            activeInnerLayers?.[activeLayer?.level] &&
            activeInnerLayers?.[activeLayer?.level]?.title == item?.title
              ? "tw-bg-gray-300"
              : ""
          }`}
          style={{
            textAlign: "right",
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          <div>
            {item.material ? (
              <img
                className="tw-rounded-2xl"
                src={`/layers/material/${item.material}`}
              />
            ) : null}
            {item.key ? (
              <img
                className="tw-border-2 tw-border-seyed tw-rounded-2xl"
                src={`${item.targetImage}`}
              />
            ) : null}
            <p className="tw-text-center tw-mt-2 tw-font-bold">{item.title}</p>
          </div>
          <AiOutlineArrowLeft className="tw-my-auto" />
        </button>
      );
    });
  };

  const renderedLayers = layersOrder.map((item) => {
    return (
      <div>
        <button
          onClick={() => {
            if (item) {
              handleActiveLayerChange(item);
            }
          }}
          className={`tw-flex tw-text-seyed tw-bg-white tw-w-full tw-mb-2 hover:tw-bg-gray-100 tw-duration-200 tw-rounded-xl tw-justify-between tw-py-2 tw-px-8 ${
            activeLayer && activeLayer.level == item.level
              ? ""
              : "tw-color-seyed"
          }`}
          style={{
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          <div>
            {activeInnerLayers[1] &&
            activeInnerLayers[1].layersTitle &&
            activeInnerLayers[1].layersTitle[item.level]
              ? activeInnerLayers[1].layersTitle[item.level]
              : item.title}
          </div>
          <AiOutlineArrowLeft
            className={`tw-my-auto ${
              activeLayer?.level == item?.level ? "tw-hidden" : "tw-block"
            }`}
          />
          <AiOutlineArrowDown
            className={`tw-my-auto ${
              activeLayer?.level == item?.level ? "tw-block" : "tw-hidden"
            }`}
          />
        </button>
        <div
          className={`tw-bg-gray-100 tw-p-4 ${
            activeLayer?.level == item?.level ? "tw-block" : "tw-hidden"
          }`}
        >
          {activeLayer
            ? item.level > 1
              ? renderedInnerLayers(
                  item?.types[activeInnerLayers[1]?.id]?.items
                )
              : renderedInnerLayers(item?.items)
            : null}
        </div>
      </div>
    );
  });

  return (
    <div
      ref={ref}
      className={`tw-absolute tw-p-4 tw-bg-white tw-h-full tw-z-20 tw-w-7/12 tw-top-0 tw-transform tw-overflow-scroll ${
        navbarState ? "tw-translate-x-0" : "tw-translate-x-full"
      } xl:tw-hidden tw-transition tw-duration-500 tw-ease-in-out ${
        cname && cname
      }`}
    >
      <div className="tw-w-full ltr tw-flex tw-justify-between">
        <AiOutlineArrowRight
          size={30}
          className="tw-text-gray-500"
          onClick={() => {
            handleNavbarState(false);
          }}
        />
        <div className="tw-my-auto">لایه های مورد نظر را انتخاب کنید</div>
      </div>
      <div className="tw-mt-8">{renderedLayers}</div>
    </div>
  );
};

export default LayersSidebar;
