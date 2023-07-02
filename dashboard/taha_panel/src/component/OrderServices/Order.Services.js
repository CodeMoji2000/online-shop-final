import React from "react";
import Upload from "../../images/Upload.png"


const OrderServicesChange2 =()=>{
    return(
        <>
        <div className="tw-flex tw-justify-end tw-p-10" >
            <h3 className="tw-border-r-2 tw-border-green-500 tw-p-3"> مدیریت خدمات سفارشی</h3>
        </div>
        <div className="tw-justify-center tw-rounded-xl tw-mx-6 tw-my-10" style={{border:"dashed 2px gray"}}>
            <div 
            className="tw-w-full tw-h-58 tw-pt-16 tw-justify-center tw-rounded-xl tw-flex-col"
            >
                <div className="tw-justify-self-center">
                  <img src={Upload} className="tw-mx-auto tw-h-16" />
                </div>
                <div className="tw-justify-center tw-flex tw-py-8">
                 <button className=" tw-w-2/4 tw-py-2 tw-rounded-lg" style={{border:"ridge 1px gray"}}>افزودن تصویر شاخص</button>
                </div>
            </div>
        </div>
        <form className="tw-flex-col tw-justify-center tw-p-6" style={{direction:"rtl"}}>
          <label for="taha"  >انتخاب دسته بندی</label>
          <select  
          className="tw-w-full tw-h-16 tw-px-4 tw-rounded-lg" 
          style={{direction:"rtl",border:"ridge 1px gray"}}
          >
              <option value="taha">استدیو طاها</option>
          </select>

          <a href="#" className="tw-underline tw-text-green-500" >+افزودن دسته بندی جدید</a>

          <label for="taha2" >انتخاب زیر شاخه</label>
          <select  
          className="tw-w-full tw-h-16 tw-px-4 tw-mt-10 tw-rounded-lg" 
          style={{direction:"rtl",border:"ridge 1px gray"}}
          >
              <option value="taha2">استدیو طاها</option>
          </select>
          <a href="#" className="tw-underline tw-text-green-500" >+افزودن  زیر شاخه های دسته بندی</a>
          <div className="tw-pt-16">
          <button className=" tw-w-full tw-py-2 tw-rounded-lg tw-text-white" style={{border:"ridge 1px gray",background:"#006600"}}>
                   ثبت
         </button>
          </div>
        </form>
        </>
    )
}

export default OrderServicesChange2;