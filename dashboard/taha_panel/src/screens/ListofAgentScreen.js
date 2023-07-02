import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import Input from '../component/Input/Input';
import Template from '../components/common/Template'
import { editListofAgent, getPublicDataRequest } from '../redux/action/publicData.action';
import { uploadRequest } from '../redux/action/upload.action';
import { selectorPublicData, selectorUserData } from '../redux/store/selector';




function ListofAgentScreen({publicData,userData,listOfAgent}) {


  //states
  const [title, setTitle] = useState()
  const [button, setbutton] = useState()
  const [content, setcontent] = useState()
  const [lan, setLan] = useState()
  const [idOfTable, setidOfTable] = useState(6)
  const [value, setvalue] = useState("fa")

   //hooks
   useEffect(() => {
    lang(value)
    setConst(language)
  }, [value]);

     //var
     const token=userData.token.token;
     let language
     let val="fa"
     //function

     const setConst=(la)=>{
      if(la){
        setTitle(la.title);setbutton(la.button);
        setcontent(la.content);
      }

    } 


     const edit=()=>{
        const Obg ={title,button,content};
        const newObg={property: Obg ,token,idOfTable};
        listOfAgent(newObg)
      }


      const lang=(value)=>{

        console.log(value)
       if (value=="fa") {
         if (publicData.listOfAgents) {
           language=publicData?.listOfAgents?.fa;
           setLan(language)
           setidOfTable(6)
         }
       } else {
         if (value=="en") {
           language=publicData?.listOfAgents?.en;
           setLan(language);
           setidOfTable(13)
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
     

    return <Template>
      {/* {setConst()} */}
        <div classname=" tw-border-2 tw-border-green-900  tw-flex lg:tw-flex-row tw-flex-col" 
         style={{ fontFamily: "Lalezar",backgroundColor:"white" }}>
           <p className="tw-mt-4 tw-text-sm tw-text-right tw-mr-6">زبان  :</p>
            <select
             className="tw-flex tw-m-6 tw-w-96 tw-py-2 tw-border-2 tw-text-sm tw-border-green-600  tw-rounded-lg tw-shadow-md"
             onChange={(e)=>{val=e.target.value; setvalue(val);console.log(value)}}
             >
              <option value="fa">farsi</option>
              <option value="en">english</option>
              <option value="tork">torkish</option>
              <option value="rus">russion</option>
            </select>
          <div className="tw-flex tw-flex-col lg:tw-flex-row tw-justify-center tw-p-10" style={{ fontFamily: "Lalezar",backgroundColor:"white" }}>
            <div className="tw-flex tw-flex-col tw-p-10 tw-mx-4 tw-space-y-8 tw-border-2 tw-border-gray-200 tw-shadow-xl">
            <Input setValue={setTitle} constValue={title} >عنوان</Input>
            <Input setValue={setbutton} constValue={button}>دکمه</Input>
            </div>
        </div>
        <div className="tw-flex tw-justify-center tw-mx-10 tw-py-10 tw-border-2  tw-border-gray-200 tw-shadow-xl">
        <textarea
              className="tw-m-3 tw-border-2 tw-text-sm tw-h-64 tw-border-green-600 tw-w-full  lg:tw-w-4/4 tw-rounded-lg tw-shadow-md tw-px-8 tw-py-5"
              placeholder="توضیحات"
              value={content}
              onChange={(e)=>{setcontent(e.target.value)}}
             />
        </div>
        <div className="tw-flex tw-justify-center tw-mx-10 tw-py-10">
           <button 
            className="tw-bg-green-600 tw-w-2/4 tw-m-1 tw-py-2 tw-text-white tw-rounded-xl hover:tw-bg-green-900 tw-duration-500 tw-shadow-md hover:tw-shadow-xl"
            onClick={(e)=>{edit();alert("با موفقیت انجام شد"); window.location.reload()}}
           >
              ویرایش
             </button>
        </div>
        {/* {global.hideLoader()} */}
        </div>
    </Template>
}

const mapStateToProps = (state) => {
    return {
      userData: selectorUserData(state)
    };
  };
  
  const mapDispatchToProps = {
    listOfAgent:editListofAgent,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ListofAgentScreen);
  

 

