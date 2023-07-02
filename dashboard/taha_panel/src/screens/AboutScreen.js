import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Template from "../components/common/Template";
import { editExclusiveRequest, getPublicDataRequest } from "../redux/action/publicData.action";
import { uploadRequest } from "../redux/action/upload.action";
import { selectorPublicData, selectorUserData } from "../redux/store/selector";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const AboutScreen = ({publicData, publicDataCall,userData,editExclusive}) => {


  //states
  const[title ,setTitle]=useState();
  const[caption,setCaption]=useState();
  const [image,setImage]=useState(null);
  const [id, setId] = useState();
  const [lan, setLan] = useState([])
  const [idOfTable, setidOfTable] = useState(4)
  const [value, setvalue] = useState("fa")
  const [error, setError] = useState({
    idEmpty: {
      message: " وارد کردن ویژگی الزامی است ",
      visible: false,
    },

    imageEmpty: { message: " لطفا یک عکس انتخاب کنید", visible: false },
  })
 
  //var
  const token=userData.token.token;
  let val="fa"
  let Id
  let index;
  //functions
  const edit=()=>{
       setId(Id)
      const Obg ={id,title,caption,image};
      const Obg1= lan.map(item =>item.id==id? Obg:item);
      const newObg={property:Obg1 ,token,idOfTable};
      editExclusive(newObg);
  }
  const setConst=()=>{
    if(Id){
    setId(Id)
    lan.map(el=>{
      if (el.id==Id) {
        setTitle(el.title);setCaption(el.caption);setImage(el.image) 
      }
      })
    }
  } 

  const lang=(value)=>{
    let language=[]
    console.log(value)
   if (value=="fa") {
     if (publicData.exclusives) {
       language=[...publicData?.exclusives?.fa];
       setLan(language)
       setidOfTable(4)
     }
 
   } else {
     if (value=="en") {
       language=[...publicData?.exclusives?.en]
       setLan(language);
       setidOfTable(11)
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
const numberOfSlide = (item) => {
  index = lan.indexOf(item);
  index++;
};


//hooks
  useEffect(() => {
    lang(value)
  }, [value]);



  const renderedAbout=
    lan.map((item)=>{
      return (
        <TableRow
        key={item.name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
        {numberOfSlide(item)}
          <TableCell align="right" component="th" scope="row"
           style={{fontFamily: "Lalezar"}}>
           {index}
           </TableCell>
          <TableCell align="right" style={{fontFamily: "Lalezar"}}>{item.title}</TableCell>
          <TableCell align="right" style={{fontFamily: "Lalezar"}}>{item.caption}</TableCell>
          <TableCell align="right" style={{fontFamily: "Lalezar"}}>{item.image}</TableCell>
       </TableRow>
      )
  
    })
  

  return <Template>
    <div 
    classname=" tw-border-2 tw-border-green-900  tw-flex lg:tw-flex-row tw-flex-col" 
    style={{ fontFamily: "Lalezar",backgroundColor:"white" }}>
      <div className="tw-flex tw-flex-col tw-p-3 lg:tw-p-10"> 
         <p className=" tw-text-center tw-text-2xl tw-p-5">ویژگی ما</p>
        <div className="tw-flex tw-flex-col rtl tw-border-t-2 tw-bg-white tw-border-green-500 tw-p-3">
        <p className="tw-mt-4 tw-text-sm tw-text-right tw-mr-2">زبان  :</p>
            <select
             className="tw-flex tw-mt-6 tw-w-72 lg:tw-w-96 md:tw-w-96 tw-py-2 tw-border-2 tw-text-sm tw-border-green-600  tw-rounded-lg tw-shadow-md"
             onChange={(e)=> {val=e.target.value; setvalue(val)}}
             >
              <option value="fa">farsi</option>
              <option value="en">english</option>
              <option value="tork">torkish</option>
              <option value="rus">russion</option>
            </select>
          <label className="tw-text-right tw-mt-8 tw-text-sm tw-mr-2" for="about">ویژگی:</label>
          <select onChange={(e)=>{Id=e.target.value;setId(e.target.value);setConst()}}
          className="tw-border-2 tw-w-72 lg:tw-w-96 md:tw-w-96 tw-rounded-lg tw-shadow-md tw-px-6 tw-py-2 tw-border-green-600" id="about">
             <option value=""></option>
             <option value="1">ویژگی اول</option>
             <option value="2">ویژگی دوم</option>
             <option value="3">ویژگی سوم</option>
           </select>
            <div className="tw-flex tw-flex-col tw-justify-end">
              <p className="tw-mt-8 tw-text-sm tw-text-right tw-mr-2">عنوان :</p>
             <input
             value={title}
              type="text"
              className="tw-mt-1 tw-border-2 tw-text-sm tw-border-green-600 tw-w-72 lg:tw-w-96 md:tw-w-96 tw-rounded-lg tw-shadow-md tw-px-6 tw-py-2 tw-duration-500"
              placeholder="عنوان"
              onChange={(e)=>{setTitle(e.target.value)}}
            />

            <p className="tw-mt-6 tw-text-sm tw-text-right tw-mr-2">کپشن :</p>
            <textarea
            value={caption}
              className="tw-mt-1 tw-border-2 tw-text-sm tw-border-green-600 tw-w-72 lg:tw-w-96 md:tw-w-96 tw-rounded-lg tw-shadow-md tw-px-6 tw-py-2"
              placeholder="کپشن"
              onChange={(e)=>{setCaption(e.target.value)}}
            />

            <p className="tw-mt-6 tw-text-sm tw-text-right tw-mr-2">
              اپلود عکس :
            </p>
            <input className="tw-mt-2" type="file" 
             onChange={(e)=>{setImage(e.target.files[0])}}/>

            <button 
            className="tw-bg-green-600 tw-w-72 lg:tw-w-96 md:tw-w-96 tw-mt-8 tw-py-2 tw-text-white tw-rounded-xl hover:tw-bg-green-900 tw-duration-500 tw-shadow-md hover:tw-shadow-xl"
            onClick={(e)=>edit()}
            >
              ویرایش
            </button>
            </div>
        </div>
      </div>
        <TableContainer component={Paper} className="tw-w-full">
              <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{direction:"rtl",fontFamily: "Lalezar"}}>
                <TableHead>
                  <TableRow>
                    <TableCell align="right" style={{color:"green"}}>id</TableCell>
                    <TableCell align="right" style={{color:"green"}}>نام</TableCell>
                    <TableCell align="right" style={{color:"green"}}>کپشن</TableCell>
                    <TableCell align="right" style={{color:"green"}}>عکس</TableCell>
                   </TableRow>
              </TableHead>
              <TableBody>
                {renderedAbout}
              </TableBody>
            </Table>
        </TableContainer>
    </div>
  </Template>;
};
const mapStateToProps = (state) => {
  return {
    userData: selectorUserData(state)
  };
};

const mapDispatchToProps = {
  uploadRequestCall: uploadRequest,
  editExclusive : editExclusiveRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen);


      {/* <div className="tw-flex tw-justify-center tw-p-10">
        <p className="tw-border-b-2 tw-border-green-500 tw-p-3">مدیریت ویژگی های ما</p>
      </div>
      <div className="tw-flex tw-justify-center tw-p-10">
        <p className="tw-border-b-2 tw-border-green-500 tw-p-3">ویژگی اول</p>
      </div>
      <Slideer/>
      <div className="tw-flex tw-justify-center tw-p-10">
        <p className="tw-border-b-2 tw-border-green-500 tw-p-3">ویژگی دوم</p>
      </div>
      <Slideer/>
      <div className="tw-flex tw-justify-center tw-p-10">
        <p className="tw-border-b-2 tw-border-green-500 tw-p-3">ویژگی سوم</p>
      </div>
      <Slideer/> */}