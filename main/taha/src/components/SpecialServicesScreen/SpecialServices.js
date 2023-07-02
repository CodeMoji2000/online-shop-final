import React from "react";
import i18n from "../../Locale/i18";
import directions from "../../Locale/direction";

const SpecialServices = ({ cname }) => {
  return (
    <div className={`lg:tw-px-52 ${cname}`} style={{ fontFamily: "Lalezar" }}>
      <div className="tw-mt-12 tw-mx-16 text-center">
        <span
          className="tw-text-3xl"
          style={{ borderBottom: "3px solid green" }}
        >
          {i18n.t("specialServices")}
        </span>

        <ul
          className={`${directions.align} ${directions.direction} tw-text-seyed tw-list-disc tw-list-inside tw-leading-8 tw-text-lg tw-mt-12`}
        >
          <li>{i18n.t("specialService1")}</li>
          <li>{i18n.t("specialService2")}</li>
          <li>{i18n.t("specialService3")}</li>
          <li>{i18n.t("specialService4")}</li>
          <li>{i18n.t("specialService5")}</li>
          <li>{i18n.t("specialService6")}</li>
          <li>{i18n.t("specialService7")}</li>
        </ul>
      </div>
    </div>
  );
};

export default SpecialServices;
