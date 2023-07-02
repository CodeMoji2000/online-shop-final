import { Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import creatProductApi from "../api/creatProduct.api";
import deletProductApi from "../api/deletProduct.api";
import EditProductApi from "../api/editProduct";
import EditStuckApi from "../api/editStuck.api";
import UploadApi from "../api/Upload.api";
import Template from "../components/common/Template";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ProductScreen({brand , userData,product}) {

////////////////////////////////////////////////////////////////////////
//variable
    const token = userData.token.token;
    let img = null;
    let idOfValue;
    let index;
    let val;
    let brandid
    let stuckValue
    /////////////////////////////////////////////////////////////////////////////
    //state
    const [active, setActive] = useState(false);
    const [name, setname] = useState(null);
    const [description, setdescription] = useState();
    const [image, setImage] = useState();
    const [id, setId] = useState();
    const [lan, setLan] = useState([]);
    const [value, setvalue] = useState();
    const [brandId, setBrandId] = useState()
    const [price, setPrice] = useState()
    const [stuck, setstuck] = useState(0)
    const [brandState, setbrandState] = useState([])

    //////////////////////////////////////////////////////////////////////////////////////
    //hooks
    useEffect(() => {
      showProduct(product)
      
    }, [lan])
    useEffect(() => {
      showBrand(brand)
  }, [brandState])
    /////////////////////////////////////////////////////////////////////////////
    //function
    const showProduct=async(product)=>{
     await setTimeout(() => {
      if (product) {
        setLan(product)
      }
    },3000 );
    }
    const showBrand=async(brand)=>{
      await setTimeout(() => {
       if (brand) {
         setbrandState(brand)
       }
     },3000 );
     }

    const onChooseImage = async () => {
        var input = document.createElement("input");
        input.type = "file";
        input.accept = "image/png, image/jpeg, image/jpg";
        input.click();
        input.addEventListener("input", uploadImage);
        
      };
    
      const uploadImage = async (e) => {
        const pickedImage = e.target.files[0];
    
        if (pickedImage) {
          const url = URL.createObjectURL(pickedImage);
          const ref = `public/brand`;
          let blob = await fetch(url).then((r) => r.blob());
          let data = new FormData();
          data.append("file", pickedImage, pickedImage.name);
          data.append("ref", ref);
          console.log(data.getAll("file"));
          console.log(data.getAll("ref"));
          const picture = await UploadApi(data, token);
          if (picture) {
            const downloadUrl=picture.downloadUrl
            setImage(downloadUrl)
          }
        }
      };
      // const imagePreview = (e) => {
      //   if (e.target.files && e.target.files[0]) {
      //     let reader = new FileReader();
      //     reader.onload = (e) => {
      //       setImage(e.target.result);
      //     };
      //     reader.readAsDataURL(e.target.files[0]);
      //   }
      // };
    
      const edit =async () => {
        const Obg = { id,name, description, image,price,brandId,token};
         EditProductApi(Obg)
        const stuckObg={id,amount:stuck,token}
        let stuckResponse = await EditStuckApi(stuckObg)
        if (stuckResponse=="done") {
          alert("ویرایش محصول انجام شد")
          window.location.reload()
        }else{
          document.location.href = "/"
         }
        setActive(!active);
      };
    
      const del =async () => {
        lan.map( async(item) => {
          if (item.id == id) { 
            console.log(id)
            console.log(true)
            const newArray = { token, id};
            const proResponse = await deletProductApi(newArray)
            if (proResponse=="done") {
              alert("ویرایش محصول انجام شد")
              window.location.reload()
            }else{
              document.location.href = "/"
             }
            setActive(!active);
          }
        });
      };
    
      const add =async() => {
        const property = {name, description, image,brandId,price};
        const newArr = { property, token};
       const response = await creatProductApi(newArr)
       const Obg={id:response.stuck.id,amount:stuck,token}
       const responseStuck= await EditStuckApi(Obg)
       if (responseStuck=="done") {
         alert("محصول با موفقیت اضاف شد")
         window.location.reload()
       }else{
        document.location.href = "/"
       }
      };
    
      const setConst = () => {
        lan.map((el) => {
          if (el.id == idOfValue) {
            setname(el.name);
            setdescription(el.description);
            setImage(el.image);
            setstuck(el.stuck.amount)
            setPrice(el.price)
          }
        });
      };
    
      const handleClick = (e) => {
        idOfValue = e.currentTarget.getAttribute("id-of-value");
        setId(idOfValue);
        setActive(!active);
        console.log(idOfValue);
        setConst();
      };

    return <Template>
        <div className="tw-bg-white tw-flex tw-justify-end" style={{ fontFamily: "Lalezar" }}>
        <div className="tw-bg-white tw-flex-row tw-p-5 lg:tw-p-10 tw-w-full">
          <p className=" tw-text-center tw-text-2xl tw-p-5">
               محصولات
              </p>
              <select
            className="tw-flex tw-mt-6 tw-w-72 lg:tw-w-96 md:tw-w-96 tw-py-2 tw-border-2 tw-text-sm tw-border-green-600  tw-rounded-lg tw-shadow-md"
            onChange={(e) => {
              val = e.target.value;
              setvalue(val);
              console.log(val);
            }}
          >
            <option value="all">نمایش محصولات همه برند ها</option>
            {brandState.map((item)=>{return(<option value={item.id}>{item.title}</option>)})}
          </select>
          <p className="tw-border-b-2 tw-bg-white tw-border-green-500 tw-p-6 tw-text-right">
            افزودن محصولات جدید
          </p>
          <div className="tw-flex tw-flex-col tw-justify-start tw-w-10/12">
          <p className="tw-mt-4 tw-text-sm tw-text-right tw-mr-2">برند</p>
          <select
            className="tw-flex tw-mt-6 tw-w-72 lg:tw-w-96 md:tw-w-96 tw-py-2 tw-border-2 tw-text-sm tw-border-green-600  tw-rounded-lg tw-shadow-md"
            onChange={(e) => {
              brandid = e.target.value;
              setBrandId(brandid);
              console.log(brandid);
            }}
          >
            <option value={null}></option>
            {brandState.map((item)=>{return(<option value={item.id}>{item.title}</option>)})}
          </select>
            <p className="tw-mt-4 tw-text-sm tw-text-right tw-mr-2">نام محصول:</p>
            <input
              type="text"
              className="tw-mt-1 tw-border-2 tw-text-sm tw-border-green-600 tw-w-72 lg:tw-w-96 md:tw-w-96 tw-rounded-lg tw-shadow-md tw-px-6 tw-py-2 tw-duration-500"
              placeholder="عنوان"
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <p className="tw-mt-6 tw-text-sm tw-text-right tw-mr-2">توضیحات :</p>
            <textarea
              className="tw-mt-1 tw-border-2 tw-text-sm tw-border-green-600 tw-w-72 lg:tw-w-96 md:tw-w-96 tw-rounded-lg tw-shadow-md tw-px-6 tw-py-2"
              placeholder="کپشن"
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            />
             <p className="tw-mt-4 tw-text-sm tw-text-right tw-mr-2">موجودی محصول</p>
            <input
              type="number"
              className="tw-mt-1 tw-border-2 tw-text-sm tw-border-green-600 tw-w-72 lg:tw-w-96 md:tw-w-96 tw-rounded-lg tw-shadow-md tw-px-6 tw-py-2 tw-duration-500"
              placeholder="موجودی"
              onChange={(e) => {
                stuckValue=e.target.value
                setstuck(stuckValue)
                console.log(stuckValue);
              }}
            />
             <p className="tw-mt-4 tw-text-sm tw-text-right tw-mr-2">قیمت محصول</p>
            <input
              type="number"
              className="tw-mt-1 tw-border-2 tw-text-sm tw-border-green-600 tw-w-72 lg:tw-w-96 md:tw-w-96 tw-rounded-lg tw-shadow-md tw-px-6 tw-py-2 tw-duration-500"
              placeholder="قیمت"
              onChange={(e) => {
                setPrice(e.target.value)
              }}
            />
            <p className="tw-mt-6 tw-text-sm tw-text-right tw-mr-2">
                اپلود عکس محصول
                </p>
            <div className="tw-flex tw-mt-2 tw-flex-col tw-justify-end tw-w-72 ">
              <div className="tw-relative tw-h-40 tw-w-60 tw-border-2 tw-border-green-600 tw-rounded-lg tw-shadow-md tw-duration-500">
                <img className="tw-flex-wrap tw-h-full" src={image}></img>
              </div>
            </div>
            <button
              type="submit"
              className=" tw-mt-2 tw-bg-green-600 tw-w-40 tw-m-1 tw-h-10 tw-text-white tw-rounded-xl hover:tw-bg-green-900 tw-duration-500 tw-shadow-md hover:tw-shadow-xl"
              onClick={(e) =>{ onChooseImage()}}
            >
              بارگزاری
            </button>
            <button
              className="tw-bg-green-600 tw-w-72 lg:tw-w-96 md:tw-w-96 tw-mt-8 tw-py-2 tw-text-white tw-rounded-xl hover:tw-bg-green-900 tw-duration-500 tw-shadow-md hover:tw-shadow-xl"
              onClick={(e) => {
                add();
              }}
            >
              ثبت
            </button>
          </div>

          <div className="tw-flex tw-flex-col tw-justify-end">
            <p className="tw-mt-20 tw-border-b-2 tw-bg-white tw-border-green-500 tw-p-3 tw-text-right">
            مدیریت محصولات
            </p>
            <TableContainer component={Paper} className="tw-w-full">
                <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{direction:"rtl",fontFamily: "Lalezar"}}>
                  <TableHead>
                 <TableRow>
                     <TableCell align="right" style={{color:"green"}}>برند</TableCell>
                     <TableCell align="right" style={{color:"green"}}>نام محصول</TableCell>
                     <TableCell align="right" style={{color:"green"}}>توضیحات</TableCell>
                     <TableCell align="right" style={{color:"green"}}>موجودی</TableCell>
                     <TableCell align="right" style={{color:"green"}}>قیمت</TableCell>
                     <TableCell align="right" style={{color:"green"}}>عکس</TableCell>
                     <TableCell align="right" style={{color:"green"}}>عملیات</TableCell>
                  </TableRow>
                 </TableHead>
                <TableBody>
                 {lan.map((item) => (
                  <TableRow
                    key={item.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                       <TableCell align="right" component="th" scope="row"
                        style={{fontFamily: "Lalezar"}}>
                       {brandState.map((el)=>{if (el.id==item.brandId) {return (el.title)} })}
                       </TableCell>
                       <TableCell align="right" style={{fontFamily: "Lalezar"}}>{item.name}</TableCell>
                       <TableCell align="right" style={{fontFamily: "Lalezar"}}>{item.description}</TableCell>
                       <TableCell align="right" style={{fontFamily: "Lalezar"}}>{item.stuck.amount}</TableCell>
                       <TableCell align="right" style={{fontFamily: "Lalezar"}}>{item.price}</TableCell>
                       <TableCell align="right" style={{fontFamily: "Lalezar"}}>{item.image}</TableCell>
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
                          <Modal open={active}>
                            <div
                              className={`tw-fixed lg:tw-pb-36 tw-outline-none tw-flex-col tw-justify-end tw-bg-white tw-backdrop-blur-sm tw-flex tw-flex-wrap tw-text-seyed  tw-content-center tw-inset-x-0  tw-inset-y-0`}
                              style={{ fontFamily: "Lalezar", direction: "rtl" }}
                            >
                              <div className="tw-px-4  tw-flex tw-flex-wrap tw-content-center tw-justify-between">
                                <AiFillCloseCircle
                                  className="tw-mb-2"
                                  size={20}
                                  style={{ color: "", cursor: "pointer" }}
                                  onClick={() => setActive(!active)}
                                />
                              </div>
                              <p className="tw-text-xl tw-w-20 tw-text-green-900 tw-text-right">ویرایش</p>

                              <p className="tw-mt-1 tw-w-20 tw-text-sm tw-text-right tw-mr-1">:عنوان</p>
                              <input
                                value={name}
                                type="text"
                                className="tw-mt-1 tw-border-2 tw-text-sm tw-text-right tw-border-green-600 tw-w-72 lg:tw-w-96 md:tw-w-96 tw-rounded-lg tw-shadow-md tw-px-3 tw-py-2 tw-duration-500"
                                placeholder="عنوان"
                                onChange={(e) => {
                                  setname(e.target.value);
                                }}
                              />

                              <p className="tw-mt-1 tw-text-sm tw-text-right tw-mr-2">:توضیحات</p>
                              <textarea
                                value={description}
                                className="tw-mt-1 tw-border-2 tw-text-sm tw-border-green-600 tw-w-72 lg:tw-w-96 md:tw-w-96 tw-rounded-lg tw-shadow-md tw-px-6 tw-py-2"
                                placeholder="کپشن"
                                onChange={(e) => {
                                  setdescription(e.target.value);
                                }}
                              />
                               <p className="tw-mt-1 tw-w-20 tw-text-sm tw-text-right tw-mr-1">:موجودی</p>
                              <input
                                value={stuck}
                                type="text"
                                className="tw-mt-1 tw-border-2 tw-text-sm tw-text-right tw-border-green-600 tw-w-72 lg:tw-w-96 md:tw-w-96 tw-rounded-lg tw-shadow-md tw-px-3 tw-py-2 tw-duration-500"
                                placeholder="عنوان"
                                onChange={(e) => {
                                  setstuck(e.target.value);
                                }}
                              />
                           <p className="tw-mt-1 tw-w-20 tw-text-sm tw-text-right tw-mr-1">:قیمت</p>
                              <input
                                value={price}
                                type="text"
                                className="tw-mt-1 tw-border-2 tw-text-sm tw-text-right tw-border-green-600 tw-w-72 lg:tw-w-96 md:tw-w-96 tw-rounded-lg tw-shadow-md tw-px-3 tw-py-2 tw-duration-500"
                                placeholder="عنوان"
                                onChange={(e) => {
                                  setPrice(e.target.value);
                                }}
                              /
                              >
                              <p className="tw-mt-1 tw-text-sm tw-text-right tw-mr-2">:اپلود عکس</p>
                              <button
                               type="submit"
                               className=" tw-mt-1 tw-bg-green-600 tw-w-72 lg:tw-w-96 md:tw-w-96 tw-p-1 tw-h-10 tw-text-white tw-rounded-xl hover:tw-bg-green-900 tw-duration-500 tw-shadow-md hover:tw-shadow-xl"
                               onClick={(e) =>{ onChooseImage()}}
                               >
                                بارگزاری
                               </button>
                              <div className="tw-flex tw-mt-1 tw-flex-col tw-justify-end">
                                <div className="tw-relative tw-h-40 tw-w-72 lg:tw-w-96 md:tw-w-96 tw-border-2 tw-border-green-600 tw-rounded-lg tw-shadow-md tw-duration-500">
                                  <img className="tw-flex-wrap tw-h-full" src={image}></img>
                                </div>
                              </div>
                              <div className="tw-flex tw-flex-row tw-justify-center tw-content-center tw-mt-1">
                                <button
                                  className="tw-bg-green-600 tw-w-40 lg:tw-w-60 tw-p-1 tw-py-2 tw-text-white tw-rounded-xl hover:tw-bg-green-900 tw-duration-500 tw-shadow-md hover:tw-shadow-xl"
                                  onClick={(e) => {
                                    edit();
                                  }}
                                >
                                  ویرایش
                                </button>
                                <button
                                  className="bg-danger tw-w-40 lg:tw-w-60 tw-mr-1 tw-text-white tw-rounded-xl "
                                  onClick={(e) => del()}
                                >
                                  حذف
                                </button>
                              </div>
                            </div>
                          </Modal>
                        </div>
                      </TableCell>
                   </TableRow>
                   ))}
               </TableBody>
             </Table>   
          </TableContainer>
        </div>
      </div>
     </div>
  </Template>
    
}





{/* 
            <table class="table">
              <thead class="tw-bg-green-900 tw-text-white">
                <tr className="tw-bg-green-600">
                  <th scope="col">
                    <p className="tw-text-center">برند</p>
                  </th>
                  <th scope="col">
                    <p className="tw-text-center">نام</p>
                  </th>
                  <th scope="col">
                    <p className="tw-text-center">توضیحات</p>
                  </th>
                  <th scope="col">
                    <p className="tw-text-center">موجودی</p>
                  </th>
                  <th scope="col">
                    <p className="tw-text-center">قیمت</p>
                  </th>
                  <th scope="col">
                    <p className="tw-text-center">عکس</p>
                  </th>
                  <th scope="col">
                    <p className="tw-text-center">عملیات</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                { lan.map((item) => {
                  return (
                    <tr>
                      <td>
                        <p className="tw-text-center">{brandState.map((el)=>{if (el.id==item.brandId) {return (el.title)} })}</p>
                      </td>
                      <td>
                        <p className="tw-text-center">{item.name}</p>
                      </td>
                      <td>
                        <p className="tw-text-center">{item.description}</p>
                      </td>
                      <td>
                        <p className="tw-text-center">{item.stuck.amount}</p>
                      </td>
                      <td>
                        <p className="tw-text-center">{item.price}</p>
                      </td>
                      <td>
                        <p className="tw-text-center">{item.image}</p>
                      </td> */}