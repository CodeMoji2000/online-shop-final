import React from "react";
import logo3 from "../../images/logo3.png";
import Iran from "../../images/iran.png";
import Tork from "../../images/tork.png";
import Arabi from "../../images/arabi.png";
import UnitedKingdom from "../../images/united kingdom.png";
import Russia from "../../images/russia.png";

const Language = () => {
  return (
    <body className="tw-bg-yellow-400" style={{ fontFamily: "Lalezar" }}>
      <div className="tw-flex tw-justify-end tw-p-8">
        <button
          className="tw-px-4 tw-py-2 tw-rounded-xl tw-justify-self-end"
          style={{
            border: "1px solid #006600",
            color: "white",
            backgroundColor: "#006600",
          }}
        >
          {" "}
          ورود/ثبت نام
        </button>
      </div>
      <div className="tw-px-16 tw-mt-0 md:tw-mt-24  lg:tw-px-52 tw-mt-4 tw-flex-col tw-space-y-16 tw-flex tw-justify-center">
        <div className=" tw-flex tw-justify-center">
          <img classname="tw-mx-auto" src={logo3} style={{ width: "200px" }} />
        </div>
        <div className="tw-flex tw-justify-center">
          <button
            className=" tw-px-12 tw-py-2"
            style={{ border: "1px solid #006600", color: "#006600" }}
          >
            حروف سازی
          </button>
        </div>

        <div className="tw-flex tw-justify-center tw-space-x-6">
          <div>
            <img className="tw-w-16" src={UnitedKingdom} />
            <p className="tw-text-center">en</p>
          </div>
          <div>
            <img className="tw-w-16" src={Russia} />
            <p className="tw-text-center">ru</p>
          </div>
          <div>
            <img className="tw-w-16" src={Arabi} />
            <p className="tw-text-center">ar</p>
          </div>
          <div>
            <img className="tw-w-16" src={Tork} />
            <p className="tw-text-center">tu</p>
          </div>
          <div>
            <img className="tw-w-16" src={Iran} />
            <p className="tw-text-center">fa</p>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Language;
