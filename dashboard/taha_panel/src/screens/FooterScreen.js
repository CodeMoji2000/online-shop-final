import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import Input from '../component/Input/Input';
import Template from '../components/common/Template';
import { editFooterRequest, getPublicDataRequest } from '../redux/action/publicData.action';
import { selectorPublicData, selectorUserData } from '../redux/store/selector';



function FooterScreen({publicData,editFooter,userData}) {


  ///////////////////////////////////////////////////////////////
//states
const [telephone, settelephone] = useState()
const [phone, setphone] = useState()
const [fax, setfax] = useState()
const [address, setaddress] = useState()
const [email, setemail] = useState()
const [chars, setchars] = useState([])
const [lan, setLan] = useState({})
const [idOfTable, setidOfTable] = useState(8)
const [value, setvalue] = useState("fa")
const [aboutCompany, setaboutCompany] = useState()

   //var  
  const token=userData.token.token;
  let val="fa"
  let language={}
  //function
  const edit=()=>{
    const Obg ={telephone,phone,fax,email,address,chars:[chars],aboutCompany};
    const newObg={property: Obg ,token,idOfTable};
    editFooter(newObg);
  }

  const setConst=(langu)=>{
    if (langu) {
      settelephone(langu.telephone);setphone(langu.phone);
      setfax(langu.fax);setaddress(langu.address);
     setemail(langu.email);setchars(langu.chars);
     setaboutCompany(langu.aboutCompany) 
    
      
    }

  }

  const lang=(value)=>{

    console.log(value)
   if (value=="fa") {
     if (publicData.footer) {
       language={...publicData?.footer?.fa};
       console.log(language,"fa")
       setLan(language)
       setidOfTable(8)
     }
   } else {
     if (value=="en") {
       language={...publicData?.footer?.en};
       console.log(language,"en")
       setLan(language);
       setidOfTable(14)
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
 /////////////////////////////////////////////////
   //hooks
   useEffect(() => {
    lang(value)
    console.log(language)
    setConst(language)
  }, [value]);
  
    
    return <Template>
      <div className="tw-flex tw-flex-col lg:tw-flex-row tw-m-5" style={{ fontFamily: "Lalezar",backgroundColor:"white" }}>
      <p className="tw-mt-4 tw-text-sm tw-text-right tw-mr-2">زبان  :</p>
            <select
             className="tw-flex tw-mt-6 tw-w-96 tw-py-2 tw-border-2 tw-text-sm tw-border-green-600  tw-rounded-lg tw-shadow-md"
             onChange={(e)=>{val=e.target.value;setvalue(val);console.log(value)}}
             >
              <option value="fa">farsi</option>
              <option value="en">english</option>
              <option value="tork">torkish</option>
              <option value="rus">russion</option>
            </select>
      </div>

        <div className="tw-flex tw-flex-col lg:tw-flex-row tw-justify-center tw-p-10" style={{ fontFamily: "Lalezar",backgroundColor:"white" }}>
            <div className="tw-flex tw-flex-col tw-p-10 tw-mx-4 tw-space-y-8 tw-border-2 tw-border-gray-200 tw-shadow-xl">
            <Input setValue={settelephone} constValue={telephone} >telephone</Input>
            <Input setValue={setphone} constValue={phone}>phone</Input>
            <Input setValue={setfax} constValue={fax}>fax</Input>
            </div>
            <div className="tw-flex tw-flex-col tw-p-10 tw-mx-4 tw-space-y-8 tw-border-2 tw-border-gray-200 tw-shadow-xl">
            <Input setValue={setaddress} constValue={address}>address</Input>
            <Input setValue={setemail} constValue={email}> email</Input>
            <Input setValue={setchars} constValue={chars}>chars</Input>
            </div>
        </div>
        <div className="tw-flex tw-justify-center tw-mx-10 tw-py-10 tw-border-2  tw-border-gray-200 tw-shadow-xl">
        <textarea
        className="tw-mt-1 tw-border-2 tw-text-sm tw-h-72 tw-border-green-600 tw-w-full  lg:tw-w-4/4 tw-rounded-lg tw-shadow-md tw-px-8 tw-py-5"
         placeholder="درباره ما"
        value={aboutCompany}
        onChange={(e)=>{setaboutCompany(e.target.value)}}
         />
        </div>
        <div className="tw-flex tw-justify-center tw-mx-10 tw-py-10">
           <button 
            className="tw-bg-green-600 tw-w-2/4 tw-m-1 tw-py-2 tw-text-white tw-rounded-xl hover:tw-bg-green-900 tw-duration-500 tw-shadow-md hover:tw-shadow-xl"
            onClick={(e)=>{edit();alert("با موفقیت انجام شد"); window.location.reload()}} >
              ویرایش
             </button>
        </div>
    </Template>
}
const mapStateToProps = (state) => {
    return {
      userData: selectorUserData(state)
    };
  };
  
  const mapDispatchToProps = {
    editFooter:editFooterRequest,
  };

  export default connect(mapStateToProps, mapDispatchToProps)(FooterScreen);
