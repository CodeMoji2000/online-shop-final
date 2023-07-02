import React, { useEffect } from "react";
import "../../styles/ScrollBar.css";

const InnerLayers = ({
  innerLayers,
  activeLayer,
  activeInnerLayer,
  handleActiveInnerLayerChange,
}) => {
  const renderedLayers = innerLayers.map((item) => {
    return (
      <div>
        {item.topTitle && (
          <div className="tw-bg-white tw-text-2xl tw-rounded-2xl tw-p-10 tw-text-center tw-text-seyed tw-border-2 tw-border-seyed tw-my-8">
            {item.topTitle}
          </div>
        )}
        <button
          onClick={() => {
            handleActiveInnerLayerChange(item, activeLayer);
          }}
          className={`tw-text-center tw-shadow-xl tw-rounded-2xl ${
            activeInnerLayer && activeInnerLayer.title == item.title
              ? "tw-border-2 tw-border-seyed"
              : "tw-border-none"
          } ${!item.material ? "tw-p-2 tw-m-2 tw-bg-white" : ""}`}
          style={{ cursor: "pointer", textDecoration: "none" }}
        >
          {item.material ? (
            <img
              className="tw-rounded-2xl"
              src={`/layers/material/${item.material}`}
            />
          ) : null}

          <p>{item.title}</p>
        </button>
      </div>
    );
  });

  return (
    <div
      className="tw-grid tw-grid-cols-1 tw-gap-2 tw-bg-gray-200 tw-rounded-3xl tw-shadow-lg xl:tw-p-8"
      style={{ fontFamily: "Lalezar" }}
    >
      {innerLayers ? renderedLayers : null}
    </div>
  );
};

export default InnerLayers;
