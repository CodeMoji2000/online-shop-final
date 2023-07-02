import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCaretDown, AiFillCloseCircle } from "react-icons/ai";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import i18n from "../../Locale/i18";
import "../../styles/navBar.css";
import NavControl from "./NavControl";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import SideBarLink from "./SideBarLink";

const Navbar = () => { 


  const [link, setlink] = useState(true)
  const [link2, setlink2] = useState(true)
  const [link3, setlink3] = useState(true)
  const [link4, setlink4] = useState(true)
  const [link5, setlink5] = useState(true)
  const [screen, setscreen] = useState(true)


////////////////////////////////////////////////////////////////////////////////////////////////////////
// links
  const dataPoster={name:"تابلو سازی",link:"/making_poster",kind:
  [
    {title:"تابلو های سر درب",link:"/making_poster_sar_darb"}
    ,{title:"تابلو های کامپوزیت",link:"/making_poster_composite"},
    {title:"تابلو های فلکسی",link:"/making_poster_flaxi"},
    {title:" تابلو های گردان",link:"/making_poster_gardan"},
    {title:"تابلو های نما",link:"/making_poster_nama"},
    {title:"تابلو های دو طرفه پرچمی",link:"/making_poster_parchami"},
    {title:"تابلو های رویه بام",link:"/making_poster_roye_bam"},
    {title:"تابلوهای ترمووود",link:"/making_poster_termood"},
  ]
}
  const dataWord={name:"حروف برجسته",link:"/Embossed_Poster",kind:
  [
    {title:"چلنیوم",link:"/chalenum"},
    {title:"وکیوم",link:"/vacum-word"},
    {title:"پلکسی",link:"/plaxi"},
    {title:"استیل",link:"/still"},
    {title:"لاس وگاسی",link:"/las-vegas"},
    {title:"مینی لتر",link:"/mini-letter"},
    {title:"لبه سودی",link:"/swedish"},
    {title:"فلزی",link:"/metal"},
    {title:"ویژه",link:"/special"},
  ]}
  const dataStand={name:"تابلو های راهنما",link:"/stands",kind:[
    {title:"تابلو‌های پشت در",link:"/stand_pelak"},
    {title:"استند راهنمای طبقات",link:"/stand_guid"},
    {title:"استند راهنمای مسیر و محوطه",link:"/stand_way"},
    {title:"تابلو‌های آویز",link:"/stand_pendant_guid"},
    {title:"تابلو‌هی رومیزی",link:"/stand_desk"},
    {title:"تابلو اعلانات",link:"/stand_Announcement"}
  ]}
  const dataLightBox={name:"تابلو های گردان و لایت باکس",link:"/light_box",kind:[
    {title:"لایت باکس آلومینیومی",link:"/light_box_alominiom"},
    {title:"لایت باکس ترکیبی",link:"/light_box_combine"},
    {title:"کریستالی",link:"/light_box_crystal"},
    {title:"فریم لس",link:"/light_box_frame_less"},
    {title:"لگو باکس",link:"/light_box_logo_box"},
    {title:"لایت باکس مگنتی",link:"/light_box_magnet"},
    {title:"ام دی اف",link:"/light_box_mdf"},
    {title:"لایت باکس گردان",link:"/light_box_rotate"},
    {title:"لایت باکس اسنپ فریم",link:"/light_box_snapp_frame"},
  ]}
  const dataGuide={name:"تابلو های محیطی",link:"/Guide",kind:[
    {title:"استند تبلیغاتی",link:"/AD-Guide"},
    {title:"بیلبورد",link:"/AD-billboard"}
    ]}
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  //handleClose
  const [navbarState, setNavbarState] = useState(false);
  const onHamburClick = (newState) => {
    setNavbarState(newState);
  };
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (navbarState && ref.current && !ref.current.contains(e.target)) {
        setNavbarState(false);
        console.log(navbarState);
      }
    };
    console.log(navbarState, "1");

    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [navbarState]);

////////////////////////////////////////////////////////////////////////////////////////////////////////

useEffect(() => {
  if (window.innerWidth < 990) {
    setscreen(false)
  }else{
    setscreen(true)
    console.log(window.onresize)
  }
}, [window.innerWidth])

// useEffect(() => {
//   if (window.screen.width < 990) {
//     setscreen(false)
//   }else{
//     setscreen(true)
//     console.log(window.onresize)
//   }
// }, [window.screen.width])

const detectWindowSize=()=>{
  window.innerWidth <990 ? setscreen(false) : setscreen(true);
}
window.onresize = detectWindowSize;
  return screen? (
    <>
    <div style={{ direction: "rtl" }}>
       <div className="tw-bg-white tw-justify-end" >
         <GiHamburgerMenu
          className="lg:tw-hidden tw-mx-4"
          style={{ direction: "rtl" }}
          onClick={() => {
            onHamburClick(!navbarState);
          }}
          size={30}
          style={{ color: "black", cursor: "pointer" }}
        />
      </div>
    <div
      className={` lg:tw-flex tw-z-10 tw-w-8/12 lg:tw-w-full tw-hidden lg:tw-flex-row
      ${
        navbarState ? "tw-h-full tw-shadow-xl tw-absolute" : "tw-hidden"
      } lg:tw-translate-x-0  tw-bg-gray-100`}
      ref={ref}
      style={{ direction: "rtl" }}
    >
      <div className="tw-flex tw-bg-gray-100 tw-p-4  tw-flex-col lg:tw-bg-white tw-w-full tw-overflow-hidden">
        <div className="tw-px-4  tw-flex tw-flex-wrap tw-content-center tw-justify-between tw-border-b-2 lg:tw-border-b-0">
          <AiFillCloseCircle
            className="lg:tw-hidden tw-mb-2"
            size={30}
            style={{ color: "", cursor: "pointer" }}
            onClick={() => onHamburClick()}
          />
        </div>

        <ul className="tw-flex tw-flex-col lg:tw-flex-row tw-h-full lg:tw-h-10 lg:tw-space-x-5 ">
        <li >
            <Link
                to="/"
                className="tw-relative tw-text-center tw-block tw-py-6 tw-px-2 lg:tw-p-2 tw-text-sm  lg:tw-text-base tw-font-bold"
              >
                {i18n.t("navbarMainPage")}
              </Link>
            </li>
            <li className="tw-mb-4 lg:tw-mb-0 tw-text-center ab">
              <NavControl data={dataPoster}/>
            </li>
            <li className="tw-mb-4 lg:tw-mb-0 tw-text-center ab">
            <NavControl data={dataWord}/>
            </li>
            <li className="tw-mb-4 lg:tw-mb-0 tw-text-center ab">
            <NavControl data={dataStand}/>
            </li>
            <li className="tw-mb-4 lg:tw-mb-0 tw-text-center ab">
            <NavControl data={dataLightBox}/>
            </li>
            <li className="tw-mb-4 lg:tw-mb-0 tw-text-center ab">
            <NavControl data={dataGuide}/>
            </li>
            <li>
              <Link to="/special_services" className="tw-relative tw-text-center tw-block tw-py-6 tw-px-2 lg:tw-p-2 tw-text-sm  lg:tw-text-base tw-font-bold">
                خدمات ویژه
              </Link>
            </li>
            <li>
              <Link to="/vacum" className="tw-relative tw-text-center tw-block tw-py-6 tw-px-2 lg:tw-p-2 tw-text-sm  lg:tw-text-base tw-font-bold">
                وکیوم فرمینگ
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="tw-relative tw-text-center tw-block tw-py-6 tw-px-2 lg:tw-p-2 tw-text-sm  lg:tw-text-base tw-font-bold"
              >
                {i18n.t("navbarAboutUs")}
              </a>
            </li>
            <li>
              <Link
                to="/playground"
                className="tw-relative tw-text-center tw-block tw-py-6 tw-px-2 lg:tw-p-2 tw-text-sm  lg:tw-text-base tw-font-bold"
              >
                {i18n.t("navbarPlayground")}
              </Link>
            </li>
         
        </ul>
      </div>
    </div>
    </div>
  </>
  )
  :
  (
    <div style={{direction:"rtl"}} >
      <div className="tw-bg-white tw-justify-center" style={{direction:"rtl"}}>
         <GiHamburgerMenu
          className="lg:tw-hidden tw-mx-4"
          style={{ direction: "rtl" }}
          onClick={() => {
            onHamburClick(!navbarState);
          }}
          size={30}
          style={{ color: "black", cursor: "pointer" }}
        />
      </div>
      <div 
    className={` tw-flex tw-z-20 tw-w-8/12 lg:tw-w-3/12 lg:tw-border-l-2 tw-flex-wrap  lg:tw-hidden
    ${
      navbarState ? "tw-h-screen tw-absolute tw-border-2 tw-rounded-lg tw-overflow-hidden tw-border-gray-400 tw-shadow-xl" : "tw-hidden"
    } lg:tw-translate-x-0  tw-bg-white `}
    ref={ref}
    style={{ direction: "rtl" }}>
    {/* <p className="tw-text-4xl tw-text-center tw-text-white tw-border-b-gray-500" style={{fontFamily: "Lalezar", borderBottomWidth: 1}}>طاها</p> */}
    <div className="tw-flex tw-p-3 lg:tw-my-5 tw-border-seyed tw-flex-col tw-bg-white tw-w-full tw-h-full">
          <div className="tw-px-4 tw-my-4 lg:tw-my-0 tw-flex tw-flex-wrap tw-content-center tw-justify-between">
            <AiFillCloseCircle
              className="lg:tw-hidden"
              size={30}
              style={{ color: "", cursor: "pointer" }}
              onClick={() => onHamburClick()}
            />
            </div>
            <ProSidebar rtl={true} style={{ fontFamily: "Lalezar"}}>
              <Menu iconShape="square">
                <SideBarLink link="/" title="صفحه اصلی"  />
                <SubMenu title="تابلو سازی" onOpenChange={()=>{
                    setlink(!link);
                     if (!link) {
                        document.location.href ="/making_poster"
                       }
                }}>
                  {dataPoster.kind.map((item)=>{
                    return (<SideBarLink title={item.title} link={item.link}/>)
                  })}
                </SubMenu>
                <SubMenu title="حروف برجسته" onOpenChange={()=>{
                setlink2(!link2);
                if (!link2) {
                  document.location.href ="/Embossed_Poster"
                }
                }}>
                  {dataWord.kind.map((item)=>{
                    return (<SideBarLink title={item.title} link={item.link}/>)
                  })}
                </SubMenu>
                <SubMenu title="تابلو های راهنما" onOpenChange={()=>{
                 setlink3(!link3);
                if (!link3) {
                  document.location.href ="/stands"
                }
                }}>
                  {dataStand.kind.map((item)=>{
                    return (<SideBarLink title={item.title} link={item.link}/>)
                  })}
                </SubMenu>
                <SubMenu title="تابلو های گردان و لایت باکس" onOpenChange={()=>{
                 setlink4(!link4);
                if (!link4) {
                  document.location.href ="/light_box"
                }
                }}>
                  {dataLightBox.kind.map((item)=>{
                    return (<SideBarLink title={item.title} link={item.link}/>)
                  })}
                </SubMenu>
                <SubMenu title="تابلو های محیطی" onOpenChange={()=>{
                 setlink5(!link5);
                if (!link5) {
                  document.location.href ="/Guide"
                }
                }}>
                  {dataGuide.kind.map((item)=>{
                    return (<SideBarLink title={item.title} link={item.link}/>)
                  })}
                </SubMenu>
                <SideBarLink title="خدمات ویژه" link="/special_services"/>
                <SideBarLink title="وکیوم فرمینگ" link="/vacum"/>
                <SideBarLink title="درباره ما" link="#"/>
                <SideBarLink title="حروف سازی" link="/playground"/>
              </Menu>
            </ProSidebar>
     </div>


    </div>
    </div>

  )

};

export default Navbar;






    ////////////////////////
  //   <li className="toggleable">
  //   <input
  //     type="checkbox"
  //     defaultValue="selected"
  //     id="toggle-one"
  //     className="toggle-input"
  //     style={{ display: "none" }}
  //   />
  //   <label
  //     htmlFor="toggle-one"
  //     className="tw-block tw-cursor-pointer tw-text-center tw-py-6 tw-px-4 lg:tw-p-6 tw-text-sm lg:tw-text-base tw-font-bold"
  //   >
  //     {i18n.t("navbarOrderedServices")}
  //   </label>
  //   <div
  //     role="toggle"
  //     className="tw-p-6 mega-menu tw-mb-16 sm:tw-mb-0 tw-shadow-xl tw-bg-white tw-z-25"
  //   >
  //     <div className="tw-container tw-mx-auto tw-w-full tw-flex tw-flex-wrap tw-justify-space-x-1 tw-mx-2">
        
  //       {/* <ul className="tw-px-4 tw-w-full sm:tw-w-1/2 lg:tw-w-1/4 tw-border-gray-600 tw-border-b sm:tw-border-r lg:tw-border-b-0 tw-pb-6 tw-pt-6 lg:tw-pt-3">
  //         <li className="tw-justify-center tw-text-center tw-h-12 tw-border-b-2 tw-border-green-700">
  //           <Link className="tw-px-16 tw-py-8" to="/making_poster">تابلو سازی</Link>
  //         </li>

  //         <li >
  //           <Link
  //             to="/making_poster_flaxi"
  //             className="tw-block tw-p-3  hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //             تابلو های فلکسی
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             to="/making_poster_sar_darb"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //             تابلو های سردرب 
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             to="/making_poster_composite"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //             تابلو های کامپوزیت
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             to="/making_poster_termood"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //             تابلوهای ترمووود
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             to="/making_poster_nama"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //             تابلو های نما
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             to="/making_poster_roye_bam"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //             تابلو های رویه بام
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             to="/making_poster_parchami"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //             تابلو های دو طرفه پرچمی
  //           </Link>
  //         </li>
  //         <li>
  //         <Link
  //             to="/making_poster_gardan"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //             تابلو های گردان
  //           </Link>
  //         </li>
  //       </ul> */}
  //       <ul className="tw-px-4 tw-w-full sm:tw-w-1/2 lg:tw-w-1/4 tw-border-gray-600 tw-border-b sm:tw-border-r-0 lg:tw-border-r lg:tw-border-b-0 tw-pb-6 tw-pt-6 lg:tw-pt-3">
  //       <li className="tw-justify-center tw-text-center tw-h-12 tw-border-b-2 tw-border-green-700">
  //           <Link className="tw-px-16 tw-py-8" to="/light_box">لایت باکس</Link>
  //         </li>
  //         <li>
  //           <Link
  //             to="/light_box_frame_less"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //             فریم لس
  //           </Link>
  //         </li>
  //         <li>
  //         <Link
  //             to="/light_box_crystal"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //             کریستالی
  //           </Link>
  //         </li>
  //         <li>
  //         <Link
  //             to="/light_box_magnet"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //             لایت باکس مگنتی
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             to="/light_box_mdf"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //             ام دی اف
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             to="/light_box_logo_box"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //           لگو باکس
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             to="/light_box_combine"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //           لایت باکس ترکیبی
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             to="/light_box_rotate"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //           لایت باکس گردان
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             to="/light_box_alominiom"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //           لایت باکس آلومینیومی
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             to="/light_box_snapp_frame"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //             لایت باکس اسنپ فریم
  //           </Link>
  //         </li>
  //       </ul>
  //       <ul className="tw-px-4 tw-w-full sm:tw-w-1/2 lg:tw-w-1/4 tw-border-gray-600 tw-border-b sm:tw-border-r lg:tw-border-b-0 tw-pb-6 tw-pt-6 lg:tw-pt-3">
  //         <li className="tw-justify-center tw-text-center tw-h-12 tw-border-b-2 tw-border-green-700">
  //           <Link className="tw-px-16 tw-py-8" to="/stands">تابلو های راهنما</Link>
  //         </li>

  //         <li className="">
  //         <Link
  //             to="/stand_way"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //             استند راهنمای مسیر و محوطه
  //           </Link>
  //         </li>
  //         <li>
  //         <Link
  //             to="/stand_guid"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //             استند راهنمای طبقات
  //           </Link>
  //         </li>
  //         <li>
  //         <Link
  //             to="/stand_wall_guid"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //             راهنمای طبقات دیواری
  //           </Link>
  //         </li>
  //         <li>
  //         <Link
  //             to="/stand_pelak"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //             پلاک پشت درب
  //           </Link>
  //         </li>
  //         <li>
  //         <Link
  //             to="/stand_double_wall"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //             راهنمای دوطرفه دیواری
  //           </Link>
  //         </li>
  //         <li>
  //         <Link
  //             to="/stand_pendant_guid"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //             تابلو راهنمای آویز
  //           </Link>
  //         </li>
  //         <li>
  //         <Link
  //             to="/stand_desk"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //             پلاک رومیزی پرسنلی
  //           </Link>
  //         </li>
  //         <li>
  //         <Link
  //             to="/stand_Announcement"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //             تابلو اعلانات
  //           </Link>
  //         </li>
  //       </ul>
  //       <ul className="tw-px-4 tw-w-full sm:tw-w-1/2 lg:tw-w-1/4  tw-pb-6 tw-pt-6 lg:tw-pt-3">
  //         <li className="tw-justify-center tw-text-center tw-h-12 tw-border-b-2 tw-border-green-700">
  //           <Link className="tw-px-16 tw-py-8" to="/Embossed_Poster">تابلو حروف برجسته</Link>
  //         </li>

  //         <li className="">
  //           <Link
  //             to="/chalenum"
  //             className="tw-block tw-p-3  hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //             تابلو چلنیوم
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             to="/metal"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //             فلزی
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             to="/still"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //             استیل
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             to="/plaxi"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //             پلکسی
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             to="/las-vegas"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //             لاس وگاسی
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             to="/swedish"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //             لبه سودی
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             to="/vacum-word"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //             وکیوم
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             to="/mini-letter"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //             مینی لتر
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             to="/special"
  //             className="tw-block tw-p-3 hover:tw-bg-gray-100 tw-text-black hover:tw-text-green-600"
  //           >
  //             ویژه
  //           </Link>
  //         </li>
  //       </ul>
        
  //     </div>
  //   </div>
  // </li>




  //////////////////////////////////////////////////////////////////
      // <div>
    //   <div className="tw-bg-white tw-text-center">
    //     <GiHamburgerMenu
    //       className="lg:tw-hidden tw-mx-auto "
    //       onClick={() => {
    //         onHamburClick(!navbarState);
    //       }}
    //       size={30}
    //       style={{ color: "black", cursor: "pointer" }}
    //     />
    //   </div>
    //   <nav
    //     className={`lg:tw-flex ${
    //       navbarState ? "tw-relative" : "tw-hidden"
    //     } tw-bg-white tw-z-20  tw-border-b-2 tw-border-gray-300 tw-text-gray-900`}
    //     ref={ref}
    //   >
    //     <div className="tw-container tw-flex tw-mx-auto tw-justify-center rtl">
    //       <ul className="tw-flex tw-justify-end tw-flex-col lg:tw-flex-row tw-w-full">
    //         <li>
    //           <Link
    //             to="/"
    //             className="tw-relative tw-text-center tw-block tw-py-6 tw-px-2 lg:tw-p-6 tw-text-sm  lg:tw-text-base tw-font-bold"
    //           >
    //             {i18n.t("navbarMainPage")}
    //           </Link>
    //         </li>
    //         <li className="tw-mb-4 lg:tw-mb-0 tw-text-center">
    //           <NavControl data={dataPoster}/>
    //         </li>
    //         <li className="tw-mb-4 lg:tw-mb-0 tw-text-center">
    //         <NavControl data={dataWord}/>
    //         </li>
    //         <li className="tw-mb-4 lg:tw-mb-0 tw-text-center">
    //         <NavControl data={dataStand}/>
    //         </li>
    //         <li className="tw-mb-4 lg:tw-mb-0 tw-text-center">
    //         <NavControl data={dataLightBox}/>
    //         </li>
    //         <li className="tw-mb-4 lg:tw-mb-0 tw-text-center">
    //         <NavControl data={dataGuide}/>
    //         </li>
    //         <li>
    //           <Link to="/special_services" className="tw-relative tw-text-center tw-block tw-py-6 tw-px-2 lg:tw-p-6 tw-text-sm  lg:tw-text-base tw-font-bold">
    //             خدمات ویژه
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/vacum" className="tw-relative tw-text-center tw-block tw-py-6 tw-px-2 lg:tw-p-6 tw-text-sm  lg:tw-text-base tw-font-bold">
    //             وکیوم فرمینگ
    //           </Link>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             className="tw-relative tw-text-center tw-block tw-py-6 tw-px-2 lg:tw-p-6 tw-text-sm  lg:tw-text-base tw-font-bold"
    //           >
    //             {i18n.t("navbarAboutUs")}
    //           </a>
    //         </li>
    //         <li>
    //           <Link
    //             to="/playground"
    //             className="tw-relative tw-text-center tw-block tw-py-6 tw-px-2 lg:tw-p-6 tw-text-sm  lg:tw-text-base tw-font-bold"
    //           >
    //             {i18n.t("navbarPlayground")}
    //           </Link>
    //         </li>

    //       </ul>
    //     </div>
    //   </nav>
    // </div>