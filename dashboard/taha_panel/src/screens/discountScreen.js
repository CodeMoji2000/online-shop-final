import React, { useEffect, useState } from 'react'
import Template from '../components/common/Template'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import creatDiscountApi from '../api/creatDiscount';
import getDiscountApi from '../api/getDiscount';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Modal } from '@mui/material';
import EditDiscountApi from '../api/editDiscount.api';
import deletDiscountApi from '../api/deletDiscount';

export default function DiscountScreen({product,userData,discount}) {


    //states
    const [productId, setProductId] = useState();
    const [productState, setProductState] = useState([]);
    const [percent, setpercent] = useState();
    const [expiresIn, setexpiresIn] = useState();
    const [active, setActive] = useState()
    const [id, setId] = useState();
    const [lan, setLan] = useState([]);
    ///////////////////////////////////////////////////////////////////////////////////////////
    //variebles
    let productid;
    let percentValue;
    let date;
    let idOfValue;
    const token = userData.token.token;
    /////////////////////////////////////////////////////////////////////////////////
    //hooks
    useEffect(() => {
        showProduct(product)
      }, [productState])
      useEffect(() => {
        showDiscount(discount)
      }, [lan])
    /////////////////////////////////////////////////////////////////////////////////
    //functions
    const showProduct=async(product)=>{
        await setTimeout(async() => {
         if (product) {
           setProductState(product)
         }
       },3000 );
       }
       const showDiscount=async(discount)=>{
        await setTimeout(async() => {
          if (discount) {
            setLan(discount)
          }
        },3000 );
       }
       const add =async() => {
        const property = {productId,percent,expiresIn};
        const newArr = { property, token};
       const response = await creatDiscountApi(newArr)
       console.log(response)
       if (response.status=="200") {
         alert("محصول با موفقیت اضاف شد")
         window.location.reload()
       }else{
        document.location.href = "/"
       }
      };
      const edit=async()=>{
        const obg={id,percent,expiresIn,token}
        const response=await EditDiscountApi(obg)
        console.log(response)
        if (response.status=="200") {
          alert("محصول با موفقیت ویرایش شد")
          window.location.reload()
        } else{
         document.location.href = "/"
        }
      }
      const del=async ()=>{
         await EditDiscountApi({enable:false})
        const response=await deletDiscountApi({id,token})
        if (response=="done") {
          alert("محصول با موفقیت حذف شد")
          window.location.reload()
        } else{
         document.location.href = "/"
        }
      }
      const setConst = () => {
        lan.map((el) => {
          if (el.id == idOfValue) {
            setpercent(el.percent);
            setexpiresIn(el.expiresIn)

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
        <div className="tw-bg-white tw-flex-row tw-p-5 lg:tw-p-7 tw-w-full">
            <p className=" tw-text-center tw-text-2xl tw-p-5">
             تخفیفات
            </p>
            <p className="tw-border-b-2 tw-bg-white tw-border-green-500 tw-p-6 tw-text-right">
            اعمال تخفیف محصول
             </p>
             <div className="tw-flex tw-flex-col tw-justify-start tw-w-full  ">
                 <p className="tw-mt-4 tw-text-sm tw-text-right tw-mr-2">محصول</p>
                <select
                 className="tw-flex tw-mt-6 tw-w-72 lg:tw-w-96 md:tw-w-96 tw-py-2 tw-border-2 tw-text-sm tw-border-green-600  tw-rounded-lg tw-shadow-md"
                 onChange={(e) => {
                 productid = e.target.value;
                setProductId(productid);
                  console.log(productid);
                  }}
                >

                     {productState.map((item)=>{return <option value={item.id}>{item.name}</option>})}
                 </select>
                 <p className="tw-mt-4 tw-text-sm tw-text-right tw-mr-2">درصد تخفیف</p>
                 <input
                 type="number"
                 className="tw-mt-1 tw-border-2 tw-text-sm tw-border-green-600 tw-w-72 lg:tw-w-96 md:tw-w-96 tw-rounded-lg tw-shadow-md tw-px-6 tw-py-2 tw-duration-500"
                 placeholder="درصد تخفیف"
                 onChange={(e) => {
                     percentValue=e.target.value;
                     setpercent(percentValue)
                    }}
                 />
                 <p className="tw-mt-4 tw-text-sm tw-text-right tw-mr-2">تاریخ انقضای تخفیف</p>
                 <input
                 type="date"
                 className="tw-mt-1 tw-border-2 tw-text-sm tw-border-green-600 tw-w-72 lg:tw-w-96 md:tw-w-96 tw-rounded-lg tw-shadow-md tw-px-6 tw-py-2 tw-duration-500"
                 placeholder="تاریخ انقضا"
                 onChange={(e) => {
                     date=e.target.value
                     setexpiresIn(date)
                    }}
                 />
                 <button
                  className="tw-bg-green-600 tw-w-72 lg:tw-w-96 md:tw-w-96 tw-mt-8 tw-py-2 tw-text-white tw-rounded-xl hover:tw-bg-green-900 tw-duration-500 tw-shadow-md hover:tw-shadow-xl"
                   onClick={(e) => {
                   add();
                  }}
                  >
                   ثبت
                </button>
               <div className="tw-flex tw-flex-col tw-justify-end tw-w-full">
            <p className="tw-mt-20 tw-border-b-2 tw-bg-white tw-border-green-500 tw-p-3 tw-text-right">
              تخفیف ها
            </p>
            <TableContainer component={Paper} className="tw-w-full">
               <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{direction:"rtl",fontFamily: "Lalezar"}}>
                  <TableHead>
                    <TableRow>
                       <TableCell align="right" style={{color:"green"}}>محصول</TableCell>
                       <TableCell align="right" style={{color:"green"}}>درصد تخفیف</TableCell>
                       <TableCell align="right" style={{color:"green"}}>تاریخ انقضا</TableCell>
                       <TableCell align="center" style={{color:"green"}}>عملیات</TableCell>
                    </TableRow>
                  </TableHead>
                <TableBody>
                  {lan.map((row) => (
                   <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                     >
                      <TableCell align="right" component="th" scope="row"
                       style={{fontFamily: "Lalezar"}}>
                         {row.product?.name}
                         </TableCell>
                        <TableCell align="right" style={{fontFamily: "Lalezar"}}>{row.percent}</TableCell>
                        <TableCell align="right" style={{fontFamily: "Lalezar"}}>{row.expiresIn}</TableCell>
                        <TableCell  align="right" style={{fontFamily: "Lalezar"}}>
                        <div className="tw-flex tw-justify-center">
                          <button
                            className="bg-info tw-px-3 tw-mr-2 tw-text-white tw-rounded-xl tw-py-1"
                            id-of-value={row.id}
                            onClick={(e) => {
                              handleClick(e);
                            }}
                          >
                            ویرایش
                          </button>

                          <Modal open={active}>
                            <div
                              className={`tw-fixed tw-pb-10 tw-outline-none tw-flex-col tw-justify-end tw-bg-white tw-backdrop-blur-sm tw-flex tw-flex-wrap tw-text-seyed  tw-content-center tw-inset-x-2 lg:tw-inset-x-20 tw-inset-y-2`}
                              style={{ fontFamily: "Lalezar", direction: "rtl" }}
                            >
                              <div className="tw-px-4 tw-flex tw-flex-wrap tw-content-center tw-justify-between">
                                <AiFillCloseCircle
                                  className="tw-mb-2"
                                  size={40}
                                  style={{ color: "", cursor: "pointer" }}
                                  onClick={() => setActive(!active)}
                                />
                              </div>
                              <p className="tw-text-5xl tw-w-5 tw-text-green-900 tw-text-right">ویرایش</p>

                              <p className="tw-mt-3 tw-w-5 tw-text-sm tw-text-right tw-mr-1">:درصد</p>
                              <input
                                value={percent}
                                type="text"
                                className="tw-mt-3 tw-border-2 tw-text-sm tw-text-right tw-border-green-600 tw-w-80 lg:tw-w-96 tw-rounded-lg tw-shadow-md tw-px-4 tw-py-5 tw-duration-500"
                                placeholder="عنوان"
                                onChange={(e) => {
                                  setpercent(e.target.value)
                                }}
                              />
                               <p className="tw-mt-3 tw-w-5 tw-text-sm tw-text-right tw-mr-1">:تاریخ انقضا</p>
                              <input
                                value={expiresIn}
                                type="date"
                                className="tw-mt-3 tw-border-2 tw-text-sm tw-text-right tw-border-green-600 tw-w-80 lg:tw-w-96 tw-rounded-lg tw-shadow-md tw-px-4 tw-py-5 tw-duration-500"
                                placeholder="عنوان"
                                onChange={(e) => {
                                  setexpiresIn(e.target.value)
                                }}
                              />
                              <div className="tw-flex tw-flex-row tw-justify-center tw-content-center tw-mt-5">
                                <button
                                  className="tw-bg-green-600 tw-w-40 lg:tw-w-72 tw-m-1 tw-py-2 tw-text-white tw-rounded-xl hover:tw-bg-green-900 tw-duration-500 tw-shadow-md hover:tw-shadow-xl"
                                  onClick={(e) => {
                                    edit()
                                  }}
                                >
                                  ویرایش
                                </button>
                                <button
                                  className="bg-danger tw-w-40 lg:tw-w-72 tw-m-1 tw-text-white tw-rounded-xl "
                                  onClick={()=>del()}
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
    </div>
    
</Template>
}
