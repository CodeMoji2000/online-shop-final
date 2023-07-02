import { Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Upload from "../images/Upload.png";
import UploadApi from "../api/Upload.api";
import Template from "../components/common/Template";
import { editSlideshowRequest, getPublicDataRequest } from "../redux/action/publicData.action";
import { uploadRequest } from "../redux/action/upload.action";
import { AiFillCloseCircle } from "react-icons/ai";
import { selectorPublicData, selectorUserData } from "../redux/store/selector";
import FormData, { getHeaders } from "form-data";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const SliderScreen = ({ publicData, editPublicDataCall, userData, uploadRequestCall, pb }) => {
  /////////////////////////////////////////////////////////////////////////////////////////
  //states
  const [active, setActive] = useState(false);
  const [title, setTitle] = useState(null);
  const [caption, setcaption] = useState();
  const [image, setImage] = useState(Upload);
  const [id, setId] = useState();
  const [lan, setLan] = useState([]);
  const [value, setvalue] = useState("fa");
  const [idOfTable, setidOfTable] = useState(2);
  const [toRender, setToRender] = useState(null);
  const [error, setError] = useState({
    idEmpty: {
      message: " وارد کردن شناسه الزامی است ",
      visible: false,
    },

    imageEmpty: { message: " لطفا یک عکس انتخاب کنید", visible: false },
  });

  //hooks:
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    console.log(token);
    console.log(publicData);
    lang(value);
    console.log(lan);
  }, [value]);

  //functions:
  ///////////////////////////////////////////////////////////////////////////////////////////////////////

  const lang = (value) => {
    let language = [];

    console.log(value);
    if (publicData.slideshow) {
      if (value == "fa") {
        language = [...publicData?.slideshow?.fa];
        console.log("fa", language);
        setLan(language);
        setidOfTable(2);
      } else {
        if (value == "en") {
          language = [...publicData?.slideshow?.en];
          setLan(language);
          console.log("en", language);
          setidOfTable(9);
        } else {
          if (value == "tr") {
            console.log(publicData?.slideshow?.tr);
          }
        }
      }
    }
  };

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
        setImage(downloadUrl)
        console.log(image)
      }
    }
  };

  // const uploadImg= async (e)=>{
  //   const url=URL.createObjectURL(img)
  //   const ref = "main/slideshow"
  //   const data= new FormData()
  //   data.append("file",url)
  //   data.append("ref",ref)
  //   const image=await UploadApi ({file:url , ref})
  //   // uploadRequestCall({file:url , ref})
  //   // const image={property:{file:url , ref}}
  //   console.log(image)
  // }

  const imagePreview = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const edit = () => {
    const Obg = { id, title, caption, image };
    const Obg1 = lan.map((item) => (item.id == id ? Obg : item));
    const newObg = { property: Obg1, token, idOfTable };
    editPublicDataCall(newObg);
    console.log(idOfTable);
    setActive(!active);
  };

  const del = () => {
    lan.map((item) => {
      if (item.id == id) {
        const indexOf = lan.indexOf(item);
        lan.splice(indexOf, 1);
      }
      const newArray = { property: lan, token, idOfTable };
      console.log(newArray);
      editPublicDataCall(newArray);
      console.log(idOfTable);
      setActive(!active);
    });
  };

  function newId(prefix = "id") {
    let identify = lan[lan.length - 1].id;
    let max = Math.max(identify);
    max++;
    return `${max}`;
  }
  const add = () => {
    let Id = newId();
    const Obg = { id: Id, title, caption, image };
    const newArr = { property: [...lan, Obg], token, idOfTable };
    editPublicDataCall(newArr);
  };

  const setConst = () => {
    lan.map((el) => {
      if (el.id == idOfValue) {
        setTitle(el.title);
        setcaption(el.caption);
        setImage(el.image);
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
  const numberOfSlide = (item) => {
    index = lan.indexOf(item);
    index++;
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //variables:
  const token = userData.token.token;
  let img = null;
  let idOfValue;
  let index;
  let val = "fa";

  /////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <Template>
      <div
        classname="tw-border-2 tw-border-green-900 tw-p-10 tw-bg-white lg:tw-m-0 tw-flex tw-flex-col "
        style={{ fontFamily: "Lalezar" }}
      >
        <div className="tw-bg-white tw-flex-row tw-p-2 lg:tw-p-10 tw-w-full">
          <p className=" tw-text-center tw-text-2xl tw-p-5">مدیریت اسلایدر</p>
          <p className="tw-mt-4 tw-text-sm tw-text-right tw-mr-2">زبان :</p>
          <select
            className="tw-flex tw-mt-6 tw-w-72 lg:tw-w-96 md:tw-w-96 tw-py-2 tw-border-2 tw-text-sm tw-border-green-600  tw-rounded-lg tw-shadow-md"
            onChange={(e) => {
              val = e.target.value;
              setvalue(val);
              console.log(val);
            }}
          >
            <option value="fa">farsi</option>
            <option value="en">english</option>
            <option value="tr">torkish</option>
            <option value="rus">russion</option>
          </select>

          <p className="tw-border-b-2 tw-bg-white tw-border-green-500 tw-p-6 tw-text-right">
            افزودن اسلاید
          </p>

          <div className="tw-flex tw-flex-col tw-justify-start tw-w-10/12">
            <p className="tw-mt-4 tw-text-sm tw-text-right tw-mr-2">عنوان :</p>
            <input
              type="text"
              className="tw-mt-1 tw-border-2 tw-text-sm tw-border-green-600 tw-w-72 lg:tw-w-96 md:tw-w-96 tw-rounded-lg tw-shadow-md tw-px-6 tw-py-2 tw-duration-500"
              placeholder="عنوان"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />

            <p className="tw-mt-6 tw-text-sm tw-text-right tw-mr-2">کپشن :</p>
            <textarea
              className="tw-mt-1 tw-border-2 tw-text-sm tw-border-green-600 tw-w-72 lg:tw-w-96 md:tw-w-96 tw-rounded-lg tw-shadow-md tw-px-6 tw-py-2"
              placeholder="کپشن"
              onChange={(e) => {
                setcaption(e.target.value);
              }}
            />

            <p className="tw-mt-6 tw-text-sm tw-text-right tw-mr-2">اپلود عکس :</p>

            <div className="tw-flex tw-mt-2 tw-flex-col tw-justify-end tw-w-72">
              <div className="tw-relative tw-h-40 tw-w-60 tw-border-2 tw-border-green-600 tw-rounded-lg tw-shadow-md tw-duration-500">
                <img className="tw-flex-wrap tw-h-full" src={image}></img>
              </div>
            </div>

            <button
              type="submit"
              className=" tw-mt-2 tw-bg-green-600 tw-w-40 tw-m-1 tw-h-10 tw-text-white tw-rounded-xl hover:tw-bg-green-900 tw-duration-500 tw-shadow-md hover:tw-shadow-xl"
              onClick={(e) => onChooseImage()}
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

          <div className="tw-flex tw-flex-col tw-justify-end ">
            <p className="tw-mt-20 tw-border-b-2 tw-bg-white tw-border-green-500 tw-p-3 tw-text-right">
              مدیریت اسلایدها
            </p>
            <TableContainer component={Paper} className="tw-w-full">
              <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{direction:"rtl",fontFamily: "Lalezar"}}>
                <TableHead>
                  <TableRow>
                    <TableCell align="right" style={{color:"green"}}>id</TableCell>
                    <TableCell align="right" style={{color:"green"}}>نام</TableCell>
                    <TableCell align="right" style={{color:"green"}}>کپشن</TableCell>
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
                    {numberOfSlide(item)}
                      <TableCell align="right" component="th" scope="row"
                       style={{fontFamily: "Lalezar"}}>
                       {index}
                       </TableCell>
                      <TableCell align="right" style={{fontFamily: "Lalezar"}}>{item.title}</TableCell>
                      <TableCell align="right" style={{fontFamily: "Lalezar"}}>{item.caption}</TableCell>
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
                              className={`tw-fixed tw-pb-10 tw-outline-none tw-flex-col tw-justify-end tw-bg-white tw-backdrop-blur-sm tw-flex tw-flex-wrap tw-text-seyed  tw-content-center tw-inset-x-0 lg:tw-inset-x-20 tw-inset-y-2`}
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

                              <p className="tw-mt-3 tw-w-5 tw-text-sm tw-text-right tw-mr-1">:عنوان</p>
                              <input
                                value={title}
                                type="text"
                                className="tw-mt-3 tw-border-2 tw-text-sm tw-text-right tw-border-green-600 tw-w-80 lg:tw-w-96 tw-rounded-lg tw-shadow-md tw-px-4 tw-py-5 tw-duration-500"
                                placeholder="عنوان"
                                onChange={(e) => {
                                  setTitle(e.target.value);
                                }}
                              />

                              <p className="tw-mt-2 tw-text-sm tw-text-right tw-mr-2">:کپشن</p>
                              <textarea
                                value={caption}
                                className="tw-mt-3 tw-border-2 tw-text-sm tw-border-green-600 tw-w-80 lg:tw-w-96 tw-rounded-lg tw-shadow-md tw-px-6 tw-py-2"
                                placeholder="کپشن"
                                onChange={(e) => {
                                  setcaption(e.target.value);
                                }}
                              />

                              <p className="tw-mt-2 tw-text-sm tw-text-right tw-mr-2">:اپلود عکس</p>
                              <button
                               type="submit"
                               className=" tw-mt-2 tw-bg-green-600 tw-w-80 tw-m-1 tw-h-10 tw-text-white tw-rounded-xl hover:tw-bg-green-900 tw-duration-500 tw-shadow-md hover:tw-shadow-xl"
                               onClick={(e) => onChooseImage()}
                               >
                                بارگزاری
                               </button>
                              <div className="tw-flex tw-mt-1 tw-flex-col tw-justify-end">
                                <div className="tw-relative tw-h-28 tw-w-80 tw-border-2 tw-border-green-600 tw-rounded-lg tw-shadow-md tw-duration-500">
                                  <img className="tw-flex-wrap tw-h-full" src={image}></img>
                                </div>
                              </div>
                              <div className="tw-flex tw-flex-row tw-justify-center tw-content-center tw-mt-5">
                                <button
                                  className="tw-bg-green-600 tw-w-40 lg:tw-w-72 tw-m-1 tw-py-2 tw-text-white tw-rounded-xl hover:tw-bg-green-900 tw-duration-500 tw-shadow-md hover:tw-shadow-xl"
                                  onClick={(e) => {
                                    edit();
                                  }}
                                >
                                  ویرایش
                                </button>
                                <button
                                  className="bg-danger tw-w-40 lg:tw-w-72 tw-m-1 tw-text-white tw-rounded-xl "
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
  );
};

const mapStateToProps = (state) => {
  return {
    userData: selectorUserData(state),
  };
};

const mapDispatchToProps = {
  pb: getPublicDataRequest,
  editPublicDataCall: editSlideshowRequest,
  uploadRequestCall: uploadRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(SliderScreen);








{/* <table class="table">
<thead class="tw-bg-green-900 tw-text-white">
  <tr className="tw-bg-green-600">
    <th scope="col">
      <p className="tw-text-center">id</p>
    </th>
    <th scope="col">
      <p className="tw-text-center">عنوان</p>
    </th>
    <th scope="col">
      <p className="tw-text-center">کپشن</p>
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
  {lan.map((item) => {
    return (
      <tr>
        {numberOfSlide(item)}
        <td>
          <p className="tw-text-center">{index}</p>
        </td>

        <td>
          <p className="tw-text-center">{item.title}</p>
        </td>

        <td>
          <p className="tw-text-center">{item.caption}</p>
        </td>
        <td>
          <p className="tw-text-center">{item.image}</p>
        </td> */}