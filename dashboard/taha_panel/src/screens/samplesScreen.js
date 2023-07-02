import React ,{useEffect, useState} from "react";
import { Modal } from "@mui/material";
import Upload from "../images/Upload.png"
import Template from "../components/common/Template";
import { AiFillCloseCircle } from "react-icons/ai";
import UploadApi from "../api/Upload.api";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SampleApi from "../api/sample.api";


const SamplesScreen =({ publicData,userData })=>{

  let token=userData.token.token
  //states
    const[active,setActive]=useState(false);
    const[open,setOpen]=useState(true);
    const[src,setSrc]=useState();
    const [lan, setLan] = useState([])
    const [id, setId] = useState();
    const [idOfTable, setidOfTable] = useState(5)
    const [value, setvalue] = useState("fa")
    //hooks
    useEffect(() => {
      lang(value)
    }, [value]);
    //functions
    const lang=(value)=>{
      let language=[]
      console.log(value)
     if (value=="fa") {
       if (publicData.sampleWorks) {
         language=[...publicData?.sampleWorks?.fa];
         setLan(language)
         setidOfTable(5)
       }
     } else {
       if (value=="en") {
         language=[...publicData?.sampleWorks?.en]
         setLan(language);
         setidOfTable(12)
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

   const onChooseImage = async () => {
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "image/png, image/jpeg, image/jpg";
    input.click();
    input.addEventListener("input", uploadImage,imagePreview);
  };

  const uploadImage = async (e) => {
    const pickedImage = e.target.files[0];

    if (pickedImage) {
      const url = URL.createObjectURL(pickedImage);
      const ref = `public/infoAndList/slideshow`;
      let blob = await fetch(url).then((r) => r.blob());
      let data = new FormData();
      data.append("file", pickedImage, pickedImage.name);
      data.append("ref", ref);
      console.log(data.getAll("file"));
      console.log(data.getAll("ref"));
      const picture = await UploadApi(data, token);
      if (picture) {
        const downloadUrl=picture.downloadUrl
        setSrc(downloadUrl)
      }
    }
  };

    const imagePreview=(e)=>{
      if (e.target.files && e.target.files[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          setSrc(e.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
        if (!open) {
          return;
        }else setOpen(!open)
      }
    }
    const edit =async () => {
      const Obg = { id, src };
      const Obg1 = lan.map((item) => (item.id == id ? Obg : item));
      const newObg = { property: Obg1, token, idOfTable };
      const response=await SampleApi(newObg);
      if (response=="done") {
        alert("با موفقیت ویرایش شد")
        window.location.reload()
      }else{
        document.location.href = "/"
       }
      setActive(!active);
    };

    const newId=(prefix = "id")=> {
      let identify = lan[lan.length - 1].id;
      let max = Math.max(identify);
      max++;
      return `${max}`;
    }
    const add = async() => {
      let Id = newId();
      const Obg = { id: Id, src };
      const newArr = { property: [...lan, Obg], token, idOfTable };
      const response=await SampleApi(newArr);
      if (response=="done") {
        alert("با موفقیت افزوده شد")
        window.location.reload()
      }else{
        document.location.href = "/"
       }
    };
  

    const handleClick = (e) => {
      idOfValue = e.currentTarget.getAttribute("id-of-value");
      setId(idOfValue);
      setActive(!active);
      console.log(idOfValue);
    };
    const numberOfSlide = (item) => {
      index = lan.indexOf(item);
      index++;
    };
    //variables
    /////////////////////////////////////////////////////////////////////////
    
    let val="fa"
    let Id;
    let index;
    let idOfValue;
//////////////////////////////////////////////////////////////////////////////
    const renderedSample=lan.map((item)=>{
       return(
          <TableRow
           key={item.name}
           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >
           {numberOfSlide(item)}
             <TableCell align="right" component="th" scope="row"
              style={{fontFamily: "Lalezar"}}>
              {index}
              </TableCell>
             <TableCell align="right" style={{fontFamily: "Lalezar"}}>{item.src}</TableCell>
             <TableCell align="right" style={{fontFamily: "Lalezar"}}>
                <div className="tw-flex tw-justify-center">
                 <button
                   className="bg-info tw-px-3 tw-mr-2 tw-text-white tw-rounded-xl tw-py-1"
                   id-of-value={item.id}
                   onClick={(e) => {
                     handleClick(e);
                   }}
                 >
                   ویرایش
                 </button>
                </div>
              </TableCell>
          </TableRow>

       );
 
    })

    return <Template>
      <div 
        classname=" tw-border-2 tw-border-green-900 tw-p-10 lg:tw-m-0 tw-flex lg:tw-flex-row tw-flex-col" 
         style={{ fontFamily: "Lalezar",backgroundColor:"white"}}>
             <p className="tw-border-b-2 tw-bg-white tw-border-green-500 tw-m-5 tw-text-center tw-text-2xl tw-p-5">نمونه کار ها</p>
             <p className="tw-mt-4 tw-text-sm tw-text-right tw-mr-6">زبان  :</p>
            <select
             className="tw-flex tw-mt-6 tw-w-72 tw-py-2 tw-mr-6 tw-border-2 tw-text-sm tw-border-green-600  tw-rounded-lg tw-shadow-md"
             onChange={(e)=> {val=e.target.value; setvalue(val)}}
             >
              <option value="fa">farsi</option>
              <option value="en">english</option>
              <option value="tork">torkish</option>
              <option value="rus">russion</option>
            </select>
         <div className="tw-justify-center tw-rounded-xl tw-mx-6 tw-my-10" style={{border:"dashed 2px gray"}}>
             <div className={`tw-flex tw-flex-col tw-justify-end tw-w-full`}>  
              <div className={`${open?"tw-hidden":"tw-flex tw-flex-col"} tw-h-60 tw-w-full tw-border-2 tw-border-green-600 tw-rounded-lg tw-shadow-md tw-duration-500`}>
                  <img className="tw-flex-wrap tw-h-full" src={src}></img>
                </div>
              </div>
            <div 
            className={`tw-w-full ${open?"tw-block":"tw-hidden"} tw-h-58 tw-pt-16 tw-justify-center tw-rounded-xl tw-flex-col`}
            >
              
                <div className="tw-justify-self-center">
                  <img src={Upload} className="tw-mx-auto tw-h-16" />
                </div>
                <div className="tw-justify-center tw-flex tw-py-8">
                 <button
                 type="submit"
                  className=" tw-w-2/4 tw-py-2 tw-rounded-lg"
                  style={{border:"ridge 1px gray"}}
                  onClick={(e)=>{ onChooseImage()}}
                  >افزودن تصویر نمونه کار
                  </button>
                </div>
            </div>
         </div>
         <div className="tw-flex tw-justify-center">
           <button 
           onClick={(e)=>{add()}} 
           className=" tw-my-4 tw-bg-green-600 tw-w-2/3 tw-m-1 tw-h-10 tw-text-white tw-rounded-xl hover:tw-bg-green-900 tw-duration-500 tw-shadow-md hover:tw-shadow-xl">
             ثبت
           </button>
         </div>
         
       <Modal open={active}>
          <div
           className={` tw-fixed tw-flex-col tw-space-y-10 tw-outline-none tw-bg-white tw-bg-opacity-50 tw-backdrop-filter tw-backdrop-blur-sm tw-flex tw-flex-wrap tw-text-seyed tw-space-x-8 tw-justify-center tw-content-center tw-inset-0`}
           style={{ fontFamily: "Lalezar" }}
          >
             <div className="tw-px-4  tw-flex tw-flex-wrap tw-content-center tw-justify-between">
             <AiFillCloseCircle
               className="tw-mb-8"
                size={40}
               style={{ color: "", cursor: "pointer" }}
              onClick={() => setActive(!active)}
                   />
              </div>
            <button
              type="submit"
              className=" tw-mt-2 tw-bg-green-600 tw-w-40 tw-m-1 tw-h-10 tw-text-white tw-rounded-xl hover:tw-bg-green-900 tw-duration-500 tw-shadow-md hover:tw-shadow-xl"
              onClick={(e) =>{ onChooseImage()}}
            >
              بارگزاری عکس
            </button>
            <button
            onClick={(e)=>{edit()}}
            className=" tw-mt-2 tw-bg-green-600 tw-w-40 tw-m-1 tw-h-10 tw-text-white tw-rounded-xl hover:tw-bg-green-900 tw-duration-500 tw-shadow-md hover:tw-shadow-xl"
            >
              افزودن
            </button>
           </div>
      </Modal>
      <div className="lg:tw-p-16 tw-min-h-screen tw-px-2 tw-bg-white">
          <TableContainer component={Paper} className="tw-w-full">
              <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{direction:"rtl",fontFamily: "Lalezar"}}>
                <TableHead>
                  <TableRow>
                    <TableCell align="right" style={{color:"green"}}>id</TableCell>
                    <TableCell align="right" style={{color:"green"}}>عکس</TableCell>
                    <TableCell align="right" style={{color:"green"}}>عملیات</TableCell>
                   </TableRow>
                </TableHead>
                <TableBody>
                   {renderedSample}
                </TableBody>
              </Table>
            </TableContainer>
      </div>
       </div>
    </Template>
}
export default SamplesScreen;