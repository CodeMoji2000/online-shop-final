import React from "react";
import Main from "../component/MainDashboard/Main";
import Template from "../components/common/Template";

const MainDashboard = () => {
  return (
    <Template>
      <div className="tw-w-full tw-border-2 tw-border-seyed tw-bg-white tw-shadow-lg">
        <Main />
      </div>
    </Template>
  );
};
export default MainDashboard;
