import React from "react";

const Output = ({ activeInnerLayer, activeLayer }) => {
  const renderedLayers = activeInnerLayer.map((item, index) => {
    if (
      activeInnerLayer[index] &&
      activeInnerLayer[index].targetImage &&
      index != 1
    ) {
      return (
        <div>
          <div
            className={`tw-absolute tw-inset-x-0 tw-rounded-2xl tw-shadow-xl`}
            alt=""
            style={{ borderTopLeftRadius: "17%" }}
          >
            <img
              style={{ borderTopLeftRadius: "17%" }}
              src={`/layers/targetImages/${
                index <= activeInnerLayer.length - 1
                  ? activeInnerLayer[index].targetImage
                  : ""
              }`}
            />
          </div>
          {activeInnerLayer[index].targetImage2 ? (
            <div
              className={`tw-absolute  tw-border-2 tw-inset-x-0 tw-rounded-2xl tw-shadow-xl`}
              style={{ borderTopLeftRadius: "17%" }}
            >
              <img
                style={{ borderTopLeftRadius: "17%" }}
                src={`/layers/targetImages/${
                  index <= activeInnerLayer.length - 1
                    ? activeInnerLayer[index].targetImage2
                    : ""
                }`}
              />
            </div>
          ) : null}
        </div>
      );
    }
  });
  return renderedLayers;
};

export default Output;
