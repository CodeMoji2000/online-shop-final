import React, { useState } from "react";
import Template from "../components/common/Template";
import Header from "../component/common/Header";
import SideBar from "../component/common/SideBar";

const AddMaterialScreen = () => {
  const[name ,setName]=useState();
  const[price,setPrice]=useState();
  const [id, setId] = useState();
  return (
  <Template>
    <div className="tw-w-full lg:tw-w-11/12 tw-rounded-xl lg:tw-m-6 tw-bg-white tw-m-1">
      <div className="tw-p-10 tw-bg-white">
          <p className=" tw-text-center tw-text-2xl tw-p-5">افزودن متریال</p>

          <div className="tw-flex tw-flex-col tw-justify-end">
            <p className="tw-border-b-2 tw-bg-white tw-border-green-500 tw-p-3 tw-text-right">
              افزودن متریال
            </p>
            {/* <label className="tw-text-right tw-mt-8 tw-text-sm tw-mr-2" for="id">id:</label>
            <input
              type="number"
              className="tw-mt-1 tw-border-2 tw-text-sm tw-border-green-600 tw-w-96 tw-rounded-lg tw-shadow-md tw-px-6 tw-py-2 tw-duration-500"
              placeholder="id"
              onChange={(e)=>{setId(e.target.value)}}
            /> */}
           
            <p className="tw-mt-8 tw-text-sm tw-text-right tw-mr-2">نام متریال :</p>
            <input
              type="text"
              className="tw-mt-1 tw-border-2 tw-text-sm tw-border-green-600 tw-w-96 tw-rounded-lg tw-shadow-md tw-px-6 tw-py-2 tw-duration-500"
              placeholder="عنوان"
              onChange={(e)=>{setName(e.target.value)}}
            />

            <p className="tw-mt-6 tw-text-sm tw-text-right tw-mr-2">قیمت متریال :</p>
            <textarea
              className="tw-mt-1 tw-border-2 tw-text-sm tw-border-green-600 tw-w-96 tw-rounded-lg tw-shadow-md tw-px-6 tw-py-2"
              placeholder="کپشن"
              onChange={(e)=>{setPrice(e.target.value)}}
            />
        </div>

      </div>

    </div>  
    <div className="tw-flex tw-justify-center tw-p-10 tw-mt-10">
    <table class="table">
              <thead class="tw-bg-green-900 tw-text-white">
                <tr className="tw-bg-green-600">
                <th scope="col">
                    <p className="tw-text-center">id</p>
                  </th>
                  <th scope="col">
                    <p className="tw-text-center">نام متریال</p>
                  </th>
                  <th scope="col">
                    <p className="tw-text-center">قیمت/برحسب کیلو</p>
                  </th>
                  <th scope="col">
                    <p className="tw-text-center">عملیات</p>
                  </th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                  <p className="tw-text-center">1</p>
                  </td>
                  <td>
                  <p className="tw-text-center">اهن</p>
                  </td>
                  <td>
                  <p className="tw-text-center">2.000.000</p>
                  </td>
                  <td>
                    <button className="tw-justify-center bg-info tw-px-3 tw-mr-2 tw-text-white tw-rounded-xl tw-py-1">
                    <p className="tw-text-center">ویرایش</p>
                     </button>
                  </td>

                </tr>
              </tbody>
            </table>
    </div>

      
    </Template>
  );
};
export default AddMaterialScreen;
