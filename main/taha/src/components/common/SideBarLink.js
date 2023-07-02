import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MenuItem } from 'react-pro-sidebar';
import Vector from "../../images/Vector.png"

const SideBarLink = ({ link, title, icon}) => {

  return (

      <Link
        to={link}
        style={{ direction: "rtl", textDecoration: "none" ,fontFamily: "Lalezar" }}
        className="tw-flex tw-flex-row tw-items-center tw-px-2 tw-transform hover:tw-bg-gray-200 tw-rounded-xl
                hover:tw-translate-x-2 hover:tw-text-green-800 tw-transition-transform tw-ease-in tw-duration-200 tw-text-gray-500 "
      >
        <MenuItem>
        <span
          className="tw-inline-flex tw-items-center tw-justify-center tw-h-12 tw-w-8 
                  tw-text-lg tw-text-gray-400"
        >
          <img src={Vector} className="tw-justify-start tw-mx-2" />
        </span>
        {title}

        </MenuItem>
        
      </Link>  
  );
};

export default SideBarLink;







{/* <li
className={`tw-duration-500  tw-rounded-xl ${
  (hasDropDown && dropDownState) ||
  (location == "/letters" && hasDropDown) ||
  (location == "/word" && hasDropDown)
    ? "tw-bg-gray-200"
    : "hover:tw-bg-gray-200"
}`}
style={{ fontFamily: "Lalezar" }}
>
<Link
  to={link}
  style={{ direction: "rtl", textDecoration: "none" }}
  onClick={(e) => {
    if (hasDropDown) {
      e.preventDefault();
      setDropDownState(!dropDownState);
    }
  }}
  className="tw-flex tw-flex-row tw-items-center tw-px-2 tw-transform 
          hover:tw-translate-x-2 hover:tw-text-green-800 tw-transition-transform tw-ease-in tw-duration-200 tw-text-gray-500 "
>
  <span
    className="tw-inline-flex tw-items-center tw-justify-center tw-h-12 tw-w-8 
            tw-text-lg tw-text-gray-400"
  >
    <img src={icon} className="tw-justify-start tw-ml-4" />
  </span>
  <span
    className={`tw-text-xs  tw-font-medium ${
      location == link && "tw-font-bold tw-text-gray-500"
    }`}
  >
    {title}
  </span>
</Link>
{dropDownState ||
(location == "/letters" && hasDropDown) ||
(location == "/word" && hasDropDown)
  ? children && children
  : null}
</li> */}