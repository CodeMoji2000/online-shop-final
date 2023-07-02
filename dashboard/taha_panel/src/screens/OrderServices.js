import React, { useEffect, useState } from "react";
import Template from "../components/common/Template";
import { connect } from "react-redux";
import { getPublicDataRequest } from "../redux/action/publicData.action";
import { selectorPublicData, selectorUserData } from "../redux/store/selector";
import Input from "../component/Input/Input";
import customizedServicesApi from "../api/customizedServices.api";

const OrderServices = ({publicData,userData}) => {

//states
///////////////////////////////////////////////////////////////////////////////
const [title1, setTitle1] = useState()
const [title2, setTitle2] = useState()
const [title3, setTitle3] = useState()
const [title4, setTitle4] = useState()
const [title5, setTitle5] = useState()
const [title6, setTitle6] = useState()
const [title7, setTitle7] = useState()
const [title8, setTitle8] = useState()
const [lan, setLan] = useState([])
const [idOfTable, setidOfTable] = useState(3)
const [value, setvalue] = useState("fa")

//variables 
///////////////////////////////////////////////////
let val;let id1=1;let id2=2;let id3=3;let id4=4;let id5=5;let id6=6;let id7=7;let id8=8;let id9=9;
let language=[]
const token=userData.token.token;
//////////////////////////////////////////////////////////////////////////////
//hooks
useEffect(() => {

  console.log(publicData)
  lang(value)
  console.log(lan)
  setConst(language)
}, [value])

////////////////////////////////////////////////////////////////////////////////
//functions


const lang=(value)=>{

  console.log(value)
 if (value=="fa") {
   if (publicData.customizedServices) {
     language=[...publicData?.customizedServices?.fa];
     setLan(language)
     setidOfTable(3)
   }
 } else {
   if (value=="en") {
     language=[...publicData?.customizedServices?.en];
     setLan(language);
     setidOfTable(10)
   }
   // else {
   //   if (value=="tork") {
   //     tork=publicData?.slideshowTork?.tork
   //   } else {
   //     rus=publicData?.slideshowRus?.rus
   //   }
   // }
 }
}

const edit= async ()=>{
  const Obg1=[{id1,title1},{id2,title2},{id3,title3},{id4,title4},{id5,title5},{id6,title6},{id7,title7},{id8,title8}]
  const newObg={property: Obg1 ,token,idOfTable}
  let response=await customizedServicesApi(newObg);
  if (response=="done") {
    alert("با موفقیت انجام شد");
    window.location.reload();
  } 
}



const setConst=(language)=>{
     language.map((item)=>{  
    if (item.id==1) {
      setTitle1(item.title)
    } else {
      if (item.id==2) {
        setTitle2(item.title)
      } else {
        if (item.id==3) {
          setTitle3(item.title)
        } else {
          if (item.id==4) {
            setTitle4(item.title)
          } else {
            if (item.id==5) {
              setTitle5(item.title)
            } else {
              if (item.id==6) {
                setTitle6(item.title)
              } else {
                if (item.id==7) {
                  setTitle7(item.title)
                } else {
                  setTitle8(item.title)
                }
              }
            }
          }
        }
      }
    }
}
  )

  
} 

  return (
  <Template>
    <div className="tw-flex tw-flex-col tw-justify-center">
      <div className="tw-flex tw-flex-col tw-justify-center tw-p-10  tw-space-y-8 tw-border-2 tw-border-gray-200 tw-shadow-xl">
      <p className="tw-mt-4 tw-text-sm tw-text-right tw-mr-2">زبان  :</p>
            <select
             className="tw-flex tw-mt-6 tw-w-80 lg:tw-w-96 tw-py-2 tw-border-2 tw-text-sm tw-border-green-600  tw-rounded-lg tw-shadow-md"
             onChange={(e)=>{val=e.target.value; setvalue(val);console.log(value)}}
             >
              <option value="fa">farsi</option>
              <option value="en">english</option>
              <option value="tork">torkish</option>
              <option value="rus">russion</option>
            </select>
            <Input setValue={setTitle1} constValue={title1}>عنوان اول</Input>
        <Input setValue={setTitle2} constValue={title2}>عنوان دوم</Input>
        <Input setValue={setTitle3} constValue={title3}>عنوان سوم</Input>
        <Input setValue={setTitle4} constValue={title4}>عنوان چهارم</Input>
        <Input setValue={setTitle5} constValue={title5}>عنوان پنجم</Input>
        <Input setValue={setTitle6} constValue={title6}>عنوان ششم</Input>
        <Input setValue={setTitle7} constValue={title7}>عنوان هفتم</Input>
        <Input setValue={setTitle8} constValue={title8}>عنوان هشتم</Input>
      </div>
      <div className="tw-flex tw-justify-center tw-mx-10 tw-py-10">
           <button 
            className="tw-bg-green-600 tw-w-2/4 tw-m-1 tw-py-2 tw-text-white tw-rounded-xl hover:tw-bg-green-900 tw-duration-500 tw-shadow-md hover:tw-shadow-xl"
            onClick={(e)=>{edit()}} 
            >
              ویرایش
             </button>
        </div>


    </div>


    </Template>
  );
};

export default OrderServices;

