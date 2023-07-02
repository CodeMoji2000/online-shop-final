import React, { useState } from "react";
import i18n from "../../Locale/i18";
import directions from "../../Locale/direction";
import { AiFillPhone } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import creatConsultApi from "../../API/creatCosult.api";

const FreeConsult = ({ cname }) => {

//states
const [fullName, setFullName] = useState();
const [phoneNumber, setPhoneNumber] = useState();
const [item, setItem] = useState();
///////////////////////////////////////////////////////////////////////////////////////////////////////
//varieble
let num;
let value
//////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div
      className={`lg:tw-px-52  tw-text-center tw-mt-8 ${cname}`}
      style={{ fontFamily: "Lalezar" }}
    >
      <span
        className="tw-text-3xl "
        style={{ borderBottom: "3px solid green" }}
      >
        {i18n.t("freeConsult")}
      </span>

      <div
        className={`${directions.direction} tw-py-16 tw-px-8 tw-space-y-16 lg:tw-space-y-0 tw-grid tw-grid-cols-1 tw-mt-8 lg:tw-grid-cols-2`}
      >
        <div className="tw-text-2xl tw-mx-auto lg:tw-mx-0 tw-my-auto tw-space-y-12">
          <div className="tw-flex  tw-space-x-4">
            <AiFillPhone size={40} className="tw-text-seyed tw-my-auto" />{" "}
            <div>
              <p>{i18n.t("fastResponse")}</p>{" "}
              <p
                className="tw-my-auto tw-text-xl tw-flex tw-justify-start"
                style={{
                  fontFamily: `${i18n.locale == "fa" ? "Yekan" : ""}`,
                  fontWeight: `${i18n.locale == "fa" ? "bolder" : ""}`,
                }}
              >
                <a href="te:+989392644472">09392644472</a>
              </p>
            </div>
          </div>
          <div className="tw-flex tw-space-x-4">
            <BsWhatsapp size={40} className="tw-text-seyed tw-my-auto" />{" "}
            <div>
              <p className="tw-flex tw-justify-start">{i18n.t("whatCall")}</p>{" "}
              <p
                className="tw-my-auto tw-flex tw-justify-start tw-text-xl"
                style={{
                  fontFamily: `${i18n.locale == "fa" ? "Yekan" : ""}`,
                  fontWeight: `${i18n.locale == "fa" ? "bolder" : ""}`,
                }}
              >
                <a href="te:+989392644472">09392644472</a>
              </p>
            </div>
          </div>
        </div>
        <div className="tw-flex tw-flex-col tw-px-24">
          <label className="tw-flex tw-justify-start">
            {i18n.t("formFieldName")}
          </label>
          <input
            onChange={(e)=>{setFullName(e.target.value)}}
            type="text"
            className="tw-border-2 tw-border-gray-200 tw-rounded-xl tw-py-2 tw-px-6"
          ></input>
          <label className="tw-mt-6 tw-flex tw-justify-start">
            {i18n.t("formFieldNumber")}
          </label>
          <input
            onChange={(e)=>{
              num=e.target.value
              setPhoneNumber(num)
            }}
            type="number"
            style={{
              fontFamily: `${i18n.locale == "fa" ? "Yekan" : ""}`,
              fontWeight: `${i18n.locale == "fa" ? "bolder" : ""}`,
            }}
            placeholder="09120000000"
            className="ltr tw-text-left tw-border-2 tw-border-gray-200 tw-rounded-xl tw-py-2 tw-px-6"
          ></input>
          <label className="tw-mt-6 tw-flex tw-justify-start">
            {i18n.t("formFieldChooseItem")}
          </label>
          <select onChange={(e)=>{value=e.target.value;setItem(value)}}  className="tw-border-2 tw-border-gray-200 tw-rounded-xl tw-py-2 tw-px-6">
            <option value={null}></option>
            <option value="makingPoster">تابلو سازی</option>
            <option value="EmbossedPoster">تابلو حروف برجسته</option>
            <option value="stands">تابلو راهنما</option>
            <option value="lightBox">لایت باکس</option>
          </select>
          <button
          onClick={async(e)=>{
            const response= await creatConsultApi({fullName,phoneNumber,item})
            console.log(response)
            if (response.status=="200") {
              alert("با موفقیت ارسال شد")
            }
          }}
          style={{
            fontFamily: `${i18n.locale == "fa" ? "Yekan" : ""}`,
             fontWeight: `${i18n.locale == "fa" ? "bolder" : ""}`,
            }}
           className="tw-border-2 tw-border-green-700 tw-rounded-xl tw-py-2 tw-px-6 tw-mt-7" 
          >
            ارسال</button>

        </div>
      </div>
    </div>
  );
};

export default FreeConsult;
