import React from "react";
import Logo from "../../images/Logo.png";
import Background from "../../images/background.jpg";
import GoogleMap from "../../images/GoogleMap.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Footer = ({ cname, data, google }) => {
  const position = [51.505, -0.09];
  const renderedFooterChars = data?.chars.map((item) => {
    return (
      <a href="#">
        <p className="tw-mt-3">{item}</p>
      </a>
    );
  });
  return (
    <div
      style={{
        direction: "rtl",
        fontFamily: "Lalezar",
        backgroundImage: `url(${Background})`,
      }}
      className={`tw-grid lg:tw-grid-cols-4 tw-grid-cols-1 ${cname}`}
    >
      <div className="tw-p-16">
        <img src={Logo} style={{ width: 180 }} />
        <p className="tw-mt-3" style={{ direction: "rtl", textAlign: "right" }}>
          {data?.aboutCompany}
        </p>
      </div>
      <div
        className="tw-p-16"
        style={{ direction: "rtl", textAlign: "CENTER" }}
      >
        <p className="tw-mt-3 tw-text-3xl">انواع حروف برجسته</p>
        <div className="tw-grid tw-grid-cols-4 tw-mt-8">
          {renderedFooterChars}
        </div>
      </div>
      <div
        className="tw-p-16"
        style={{ direction: "rtl", textAlign: "CENTER" }}
      >
        <p className="tw-mt-3 tw-text-3xl">اطلاعات تماس</p>
        <p className="tw-mt-3 rtl">{data?.address}</p>
        <p className="tw-mt-3 rtl">تلفن :{data?.telephone}</p>
        <p className="tw-mt-3 ">موبایل : {data?.phone} </p>
        <p className="tw-mt-3 ">فکس : {data?.fax} </p>
        <p className="tw-mt-3 ">ایمیل : {data?.email} </p>
        <p className="tw-mt-3 ">اینستاگرام : {data?.instagram} </p>
      </div>
      <div
        className="tw-p-16"
        style={{ direction: "rtl", textAlign: "CENTER" }}
      >
        <div className="tw-mt-3" style={{ width: "250px", height: "300px" }}>
          <MapContainer
            style={{ height: "300px" }}
            center={[35.63533073520901, 51.299668939115115]}
            zoom={13}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[35.63533073520901, 51.299668939115115]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
