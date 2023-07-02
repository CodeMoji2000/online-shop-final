import { Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import creatBrandApi from "../api/creatBrand.api";
import deletBrandApi from "../api/deletBrand.api";
import EditBrandApi from "../api/editBrand.api";
import UploadApi from "../api/Upload.api";
import Template from "../components/common/Template";

export default function ShopScreen({brand , userData}) {

////////////////////////////////////////////////////////////////////////
//variable
    const token = userData.token.token;
    let img = null;
    let idOfValue;
    let index;
    let val=[];
    /////////////////////////////////////////////////////////////////////////////
    //state
    const [active, setActive] = useState(false);
    const [title, setTitle] = useState(null);
    const [description, setdescription] = useState();
    const [image, setImage] = useState();
    const [id, setId] = useState();
    const [lan, setLan] = useState([]);

    //////////////////////////////////////////////////////////////////////////////////////
    //hooks
    useEffect(() => {
        console.log(brand)
        showBrand(brand)
    }, [lan])
    /////////////////////////////////////////////////////////////////////////////
    //function


    const showBrand=async(brand)=>{
     await setTimeout(() => {
      if (brand) {
        setLan(brand)
      }
    },3000 );
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
        const Obg = { id, title, description, image,token};
        EditBrandApi(Obg)
        setActive(!active);
      };
    
      const del = () => {
        lan.map((item) => {
          if (item.id == id) { 
            console.log(id)
            console.log(true)
            const newArray = { token, id};
            deletBrandApi(newArray)
            setActive(!active);
          }
        });
      };
    
      // function newId(prefix = "id") {
      //   let identify = brand[brand.length - 1].id;
      //   let max = Math.max(identify);
      //   max++;
      //   return `${max}`;
      // }
      const add = () => {
        const property = {title, description, image };
        const newArr = { property, token};
        creatBrandApi(newArr)
      };
    
      const setConst = () => {
        lan.map((el) => {
          if (el.id == idOfValue) {
            setTitle(el.title);
            setdescription(el.description);
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

    return <Template>
        <div className="tw-bg-white tw-flex tw-justify-end" style={{ fontFamily: "Lalezar" }}>
        <div className="tw-bg-white tw-flex-row tw-p-10 tw-w-full">
          <p className=" tw-text-center tw-text-2xl tw-p-5">
               برند
              </p>
          <p className="tw-border-b-2 tw-bg-white tw-border-green-500 tw-p-6 tw-text-right">
            افزودن برند جدید
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
            <p className="tw-mt-6 tw-text-sm tw-text-right tw-mr-2">توضیحات :</p>
            <textarea
              className="tw-mt-1 tw-border-2 tw-text-sm tw-border-green-600 tw-w-72 lg:tw-w-96 md:tw-w-96 tw-rounded-lg tw-shadow-md tw-px-6 tw-py-2"
              placeholder="کپشن"
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            />
            <p className="tw-mt-6 tw-text-sm tw-text-right tw-mr-2">
                اپلود عکس برند:
                </p>

            <div className="tw-flex tw-mt-2 tw-flex-col tw-justify-end tw-w-72">
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
            مدیریت برند ها
            </p>

            <table class="table">
              <thead class="tw-bg-green-900 tw-text-white">
                <tr className="tw-bg-green-600">
                  <th scope="col">
                    <p className="tw-text-center">id</p>
                  </th>
                  <th scope="col">
                    <p className="tw-text-center">عنوان</p>
                  </th>
                  <th scope="col">
                    <p className="tw-text-center">توضیحات</p>
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
                      {numberOfSlide(item)}
                      <td>
                        <p className="tw-text-center">{index}</p>
                      </td>

                      <td>
                        <p className="tw-text-center">{item.title}</p>
                      </td>

                      <td>
                        <p className="tw-text-center">{item.description}</p>
                      </td>
                      <td>
                        <p className="tw-text-center">{item.image}</p>
                      </td>
                      <td>
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
                              className={`tw-fixed tw-outline-none tw-flex-col tw-justify-end tw-bg-white tw-backdrop-blur-sm tw-flex tw-flex-wrap tw-text-seyed  tw-content-center tw-inset-x-5 lg:tw-inset-x-20 tw-inset-y-2`}
                              style={{ fontFamily: "Lalezar", direction: "rtl" }}
                            >
                              <div className="tw-px-4  tw-flex tw-flex-wrap tw-content-center tw-justify-between">
                                <AiFillCloseCircle
                                  className="tw-mb-2"
                                  size={40}
                                  style={{ color: "", cursor: "pointer" }}
                                  onClick={() => setActive(!active)}
                                />
                              </div>
                              <p className="tw-text-5xl tw-w-20 tw-text-green-900 tw-text-right">ویرایش</p>

                              <p className="tw-mt-3 tw-w-20 tw-text-sm tw-text-right tw-mr-1">:عنوان</p>
                              <input
                                value={title}
                                type="text"
                                className="tw-mt-3 tw-border-2 tw-text-sm tw-text-right tw-border-green-600 tw-w-96 lg:tw-w-96 tw-rounded-lg tw-shadow-md tw-px-3 tw-py-2 tw-duration-500"
                                placeholder="عنوان"
                                onChange={(e) => {
                                  setTitle(e.target.value);
                                }}
                              />

                              <p className="tw-mt-2 tw-text-sm tw-text-right tw-mr-2">:توضیحات</p>
                              <textarea
                                value={description}
                                className="tw-mt-3 tw-border-2 tw-text-sm tw-border-green-600 tw-w-96 lg:tw-w-96 tw-rounded-lg tw-shadow-md tw-px-6 tw-py-2"
                                placeholder="کپشن"
                                onChange={(e) => {
                                  setdescription(e.target.value);
                                }}
                              />

                              <p className="tw-mt-2 tw-text-sm tw-text-right tw-mr-2">:اپلود عکس</p>
                              <button
                               type="submit"
                               className=" tw-mt-2 tw-bg-green-600 tw-w-96 tw-m-1 tw-h-10 tw-text-white tw-rounded-xl hover:tw-bg-green-900 tw-duration-500 tw-shadow-md hover:tw-shadow-xl"
                               onClick={(e) =>{ onChooseImage()}}
                               >
                                بارگزاری
                               </button>
                              <div className="tw-flex tw-mt-1 tw-flex-col tw-justify-end">
                                <div className="tw-relative tw-h-40 tw-w-96 tw-border-2 tw-border-green-600 tw-rounded-lg tw-shadow-md tw-duration-500">
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
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        </div>
    </Template>
    
}
