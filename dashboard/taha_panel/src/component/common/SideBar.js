import React, { useEffect, useRef, useState } from "react";
import Vector from "../../images/Vector.png";
import VectorLogo from "../../images/VectorLogo.png";
import VectorHome from "../../images/VectorHome.png";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdAddCircleOutline } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import SideBarLink from "../../components/SideBar/SideBarLink";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const SideBar = ({ navbarState, handleCrossClick, setNavbarState }) => {
  const [link, setlink] = useState(true)
  // const location = useLocation().pathname;
  // const [showItem, setShowItem] = useState(
  //   location === "/letters" ? true : false
  // );
  let image=()=>{return <img src={VectorLogo} className="tw-justify-start tw-ml-2" />}
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (navbarState && ref.current && !ref.current.contains(e.target)) {
        setNavbarState(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [navbarState]);

  return (
    <div 
    className={`tw-min-h-screen lg:tw-flex tw-z-20 tw-w-8/12 lg:tw-w-3/12  tw-right-0 lg:tw-border-l-2
    ${
      navbarState ? "tw-h-full tw-absolute tw-border-2 tw-rounded-lg tw-mt-1 tw-border-gray-400 tw-shadow-xl" : "tw-hidden"
    } lg:tw-translate-x-0 tw-flex-row tw-bg-white `}
    ref={ref}
    style={{ direction: "rtl" }}>
    {/* <p className="tw-text-4xl tw-text-center tw-text-white tw-border-b-gray-500" style={{fontFamily: "Lalezar", borderBottomWidth: 1}}>طاها</p> */}
    <div className="tw-flex tw-p-3 lg:tw-my-5 tw-border-seyed tw-flex-col tw-bg-white tw-w-full tw-overflow-hidden tw-h-full">
          <div className="tw-px-4 tw-my-4 lg:tw-my-0 tw-flex tw-flex-wrap tw-content-center tw-justify-between">
            <AiFillCloseCircle
              className="lg:tw-hidden"
              size={30}
              style={{ color: "", cursor: "pointer" }}
              onClick={() => handleCrossClick()}
            />
            </div>
            <ProSidebar rtl={true} style={{ fontFamily: "Lalezar" }}>
              <Menu iconShape="square">
                <SideBarLink link="/dashboard" title="داشبورد" icon={VectorHome} />
                <SideBarLink
                link="/order"
                 title="مدیریت خدمات سفارشی"
                icon={Vector}
                />
                <SideBarLink link="/" title="مدرر" icon={Vector} />
                <SubMenu title="مدیریت حروف سازی">
                    <SideBarLink link="/letters" title="افزودن متریال" icon={Vector}/>
                    <SideBarLink link="/word" title="افزودن متریال به حروف" icon={Vector}/>
                </SubMenu>
                <SubMenu title="مدیریت صفحه اصلی" onOpenChange={()=>{
                setlink(!link);
                if (!link) {
                  document.location.href ="/samples"
                }
                }}>
                  <SideBarLink link="/slider" title="اسلایدر" icon={Vector} />
                  <SideBarLink link="/about" title="ویژگی ما" icon={Vector} />
                  <SideBarLink link="/samples" title="نمونه کار ها" icon={Vector} />
                  <SideBarLink link="/footer" title="پاورقی" icon={Vector} />
                  <SideBarLink link="/listofAgent" title="نمایندگی ها" icon={Vector} />
                </SubMenu>
                <SubMenu title="فروشگاه">
                <SideBarLink link="/shop-screen-brand" title="برند" icon={Vector} />
                <SideBarLink link="/shop-screen-product" title="محصولات" icon={Vector} />
                <SideBarLink link="/shop-screen-discount" title="تخفیفات" icon={Vector} />
                </SubMenu>
              </Menu>
            </ProSidebar>
     </div>


    </div>
  );
};
export default SideBar;



              {/* <Link>
                <MenuItem>
                <span
                 className="tw-inline-flex tw-items-center tw-justify-center tw-h-12 tw-w-8 
                  tw-text-lg tw-text-black"
                >
                  <img src={VectorHome} className="tw-justify-start tw-ml-2" />
                </span>
                داشبورد
                </MenuItem>
                </Link>  */}





      {/* <div
        className={`tw-min-h-screen lg:tw-flex tw-z-20 tw-w-6/12 lg:tw-w-2/12  tw-right-0
        ${
          navbarState ? "tw-h-1/2 tw-absolute" : "tw-hidden"
        } lg:tw-translate-x-0 tw-flex-row tw-bg-gray-100`}
        ref={ref}
        style={{ direction: "rtl" }}
      >
        <div className="tw-flex tw-border-2 tw-p-4 tw-border-seyed tw-flex-col tw-bg-white tw-w-full tw-overflow-hidden ">
          <div className="tw-px-4  tw-flex tw-flex-wrap tw-content-center tw-justify-between">
            <AiFillCloseCircle
              className="lg:tw-hidden"
              size={30}
              style={{ color: "", cursor: "pointer" }}
              onClick={() => handleCrossClick()}
            />
          </div>

          <ul className="tw-flex tw-flex-col tw-py-1 tw-min-h-screen">
            <SideBarLink link="/dashboard" title="داشبورد" icon={VectorHome} />

            <SideBarLink
              link="/order"
              title="مدیریت خدمات سفارشی"
              icon={Vector}
            />

            <SideBarLink link="/" title="مدرر" icon={Vector} />

            <SideBarLink
              hasDropDown={true}
              icon={VectorLogo}
              title="مدیریت حروف سازی"
            >
              <SideBarLink link="/letters" title="افزودن متریال" />
              <SideBarLink link="/word" title="افزودن متریال به حروف" />
            </SideBarLink>
            <SideBarLink
              hasDropDown={true}
              icon={VectorLogo}
              title="مدیریت صفحه اصلی"
            >
               <SideBarLink link="/slider" title="اسلایدر" icon={Vector} />
               <SideBarLink link="/about" title="ویژگی ما" icon={Vector} />
               <SideBarLink link="/samples" title="نمونه کار ها" icon={Vector} />
               <SideBarLink link="/footer" title="پاورقی" icon={Vector} />
               <SideBarLink link="/listofAgent" title="نمایندگی ها" icon={Vector} />
            </SideBarLink>
            <SideBarLink link="/shop-screen" title="فروشگاه" icon={Vector} />
          </ul>
        </div>
      </div> */}