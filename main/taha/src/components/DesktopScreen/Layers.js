import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CardSlider from "../common/CardSlider";
import { isMobile } from "react-device-detect";

const Layers = ({
  activeLayer,
  handleActiveLayerChange,
  layers,
  activeInnerLayer,
  handleActiveInnerLayerChange,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const filteredLayers = layers.filter((item) => {
    if (!activeInnerLayer[1] && item.level != 1) {
      return false;
    }

    if (!activeInnerLayer[1] && item.level == 1) {
      return true;
    }

    if (item.level < 2) {
      return true;
    }

    if (!item.types[activeInnerLayer[1].id]) {
      return false;
    }

    if (item.visible == false) {
      return false;
    }

    if (
      activeInnerLayer[1]?.key == "vacum" &&
      item.level == 7 &&
      activeInnerLayer[5]
    ) {
      return false;
    }

    if (
      activeInnerLayer[1]?.key == "vacum" &&
      item.level == 6 &&
      !activeInnerLayer[5]
    ) {
      return false;
    }

    if (
      activeInnerLayer[1]?.key == "vacum" &&
      item.level == 3 &&
      activeInnerLayer[5]
    ) {
      return false;
    }

    if (
      activeInnerLayer[1]?.key == "vacum" &&
      item.level == 5 &&
      activeInnerLayer[3]
    ) {
      return false;
    }

    if (activeInnerLayer[1]?.key == "felezi" && item.level == 5) {
      return false;
    }

    if (activeInnerLayer[1]?.key == "felezi" && item.level == 8) {
      return false;
    }

    if (
      activeInnerLayer[1]?.key == "felezi" &&
      item.level == 3 &&
      activeInnerLayer[4]
    ) {
      return false;
    }

    if (
      activeInnerLayer[1]?.key == "felezi" &&
      item.level == 4 &&
      activeInnerLayer[3]
    ) {
      return false;
    }

    if (activeInnerLayer[1]?.key == "las_vegas" && item.level == 8) {
      return false;
    }

    if (activeInnerLayer[1]?.key == "las_vegas" && item.level == 11) {
      return false;
    }

    if (
      activeInnerLayer[1]?.key === "swedish" &&
      item.level === 6 &&
      activeInnerLayer[5].id > 12
    ) {
      return false;
    }

    if (activeInnerLayer[1]?.key === "chanel" && item.level === 8) {
      return false;
    }

    if (
      activeInnerLayer[1]?.key === "chanel" &&
      item.level === 6 &&
      activeInnerLayer[5].id > 12
    ) {
      return false;
    }

    // if (activeInnerLayer[1]?.key === "felezi" && item.level === 3) {
    //   return false;
    // }

    // if (
    //   activeInnerLayer[1]?.key == "felezi" &&
    //   item.level == 5 &&
    //   activeInnerLayer[4]
    // ) {
    //   return false;
    // }

    // if (
    //   activeInnerLayer[1]?.key == "felezi" &&
    //   item.level == 4 &&
    //   activeInnerLayer[5]
    // ) {
    //   return false;
    // }

    // if (!activeInnerLayer[1] || !item.types[activeInnerLayer[1].id].items) {
    //   return false;
    // }
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
      layersOrder[filteredLayers[i]?.types[activeInnerLayer[1]?.id]?.order] =
        filteredLayers[i];
      console.log("ok");
      console.log(filteredLayers[i]);
    }
  }

  const renderedLayers = layersOrder.map((item) => {
    if (item.level == 1) {
      return (
        <div>
          <button
            style={{ fontFamily: "Lalezar" }}
            className={`tw-text-center tw-py-2 tw-text-md tw-flex tw-justify-center tw-space-x-1 tw-shadow-xl tw-rounded-2xl tw-bg-white tw-color-seyed tw-border-2 tw-border-seyed tw-w-full`}
            onClick={handleOpen}
          >
            {item.title}
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="tw-rounded-full tw-shadow-2xl tw-mx-3 xl:tw-mx-52 md:tw-mt-16 xl:tw-mt-32 tw-px-24 tw-pt-2 tw-pb-24 tw-bg-gray-100 t">
              <CardSlider
                onLayerClick={(item) => {
                  handleActiveInnerLayerChange(item, layers[1]);
                  handleClose();
                }}
                layers={item.items}
                itemsPerSlide={isMobile ? 1 : 2}
              />
            </Box>
          </Modal>
        </div>
      );
    } else {
      return (
        <button
          onClick={() => {
            handleActiveLayerChange(item);
          }}
          className={`tw-text-center tw-py-2 tw-text-md tw-flex tw-justify-center tw-space-x-1 tw-shadow-xl tw-rounded-2xl ${
            activeLayer && activeLayer.level == item.level
              ? "tw-border-none tw-bg-seyed tw-text-white"
              : "tw-bg-white tw-color-seyed tw-border-2 tw-border-seyed"
          }`}
          style={{ cursor: "pointer", textDecoration: "none" }}
        >
          {activeInnerLayer[item.level] ? (
            <AiFillCheckCircle className="tw-my-auto" />
          ) : (
            ""
          )}
          <p>
            {activeInnerLayer[1].layersTitle &&
            activeInnerLayer[1].layersTitle[item.level]
              ? activeInnerLayer[1].layersTitle[item.level]
              : item.title}
          </p>
        </button>
      );
    }
  });

  return (
    <div
      className="tw-space-y-4 tw-flex tw-flex-col tw-justify-center"
      style={{ fontFamily: "Lalezar" }}
    >
      {renderedLayers}
    </div>
  );
};

export default Layers;
