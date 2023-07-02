import React from "react";
import directions from "../../Locale/direction";
import i18n from "../../Locale/i18";

const EnvAdTypes = () => {
  return (
    <div
      style={{ fontFamily: "Lalezar" }}
      className={`${directions.align} ${directions.direction}`}
    >
      <div className={`tw-mt-12 tw-px-16 tw-text-center`}>
        <span
          className="tw-text-2xl"
          style={{ borderBottom: "3px solid green" }}
        >
          {i18n.t("envAdTypes")}
        </span>

        <p className="tw-mt-12 tw-text-lg tw-flex tw-flex-start">
          {i18n.t("aboutEnvAdTypes")}{" "}
        </p>

        <ul
          className={`${directions.align} ${directions.direction} tw-list-disc tw-list-inside tw-leading-8 tw-text-lg tw-mt-6`}
        >
          <li>{i18n.t("aboutEnvAdType1")}</li>
          <li>{i18n.t("aboutEnvAdType2")}</li>
          <li>{i18n.t("aboutEnvAdType3")}</li>
          <li>{i18n.t("aboutEnvAdType4")}</li>
          <li>{i18n.t("aboutEnvAdType5")}</li>
        </ul>
      </div>
    </div>
  );
};

export default EnvAdTypes;
