import React from "react";
import Upload from "../../images/Upload.png"

const OrderServicesChhange =()=>{
    return(
     <div className="tw-flex-col">
        <div className="tw-flex tw-justify-end tw-p-10" >
            <h3 className="tw-border-r-2 tw-border-green-500 tw-p-3">مدیریت خدمات سفارشی </h3>
        </div>
        <div className="tw-justify-center tw-rounded-xl tw-mx-6" style={{border:"dashed 2px gray"}}>
            <div 
            className="tw-w-full tw-h-64 tw-pt-16 tw-justify-center tw-rounded-xl tw-flex-col"
            >
                <div className="tw-justify-self-center">
                  <img src={Upload} className="tw-mx-auto tw-h-16" />
                </div>
                <div className="tw-justify-center tw-flex tw-py-8">
                 <button className=" tw-w-2/4 tw-py-2 tw-rounded-lg" style={{border:"ridge 1px gray"}}>افزودن تصویر بنر</button>
                </div>
            </div>
        </div>
        <div className="tw-justify-center tw-rounded-xl tw-mx-6 tw-my-10" style={{border:"dashed 2px gray"}}>
            <div 
            className="tw-w-full tw-h-64 tw-pt-16 tw-justify-center tw-rounded-xl tw-flex-col"
            >
                <div className="tw-justify-self-center">
                  <img src={Upload} className="tw-mx-auto tw-h-16" />
                </div>
                <div className="tw-justify-center tw-flex tw-py-8">
                 <button className=" tw-w-2/4 tw-py-2 tw-rounded-lg" style={{border:"ridge 1px gray"}}>افزودن ویدیو دسته بندی</button>
                </div>
            </div>
        </div>
        <div className="tw-flex tw-justify-center tw-p-6">
          <input type="text" placeholder="توضیحات" 
          className="tw-w-full tw-h-40 tw-px-4 tw-rounded-lg" 
          style={{direction:"rtl",border:"ridge 1px gray"}}
          >
          </input>
        </div>
        <div className="tw-justify-center tw-flex tw-py-8">
            <button className=" tw-w-2/4 tw-py-2 tw-rounded-lg tw-text-white" style={{border:"ridge 1px gray",background:"#006600"}}>
                   ثبت
             </button>
             <button className=" tw-w-1/4 tw-py-2 tw-mx-3 tw-rounded-lg" style={{border:"ridge 1px gray"}}>
                   
             </button>
        </div>
 
    </div>
    )
}
export default OrderServicesChhange;