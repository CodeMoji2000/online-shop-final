import React from "react";

const Main =()=>{
    return(
        <>
 <div className="lg:tw-p-16 tw-min-h-screen tw-px-2">
    <div>
        <div className="tw-justify-end tw-border-r-2 tw-text-green-600 tw-border-green-600 tw-text-right tw-py-1 tw-my-10">
            <span className="tw-mr-4">پیگیری سفارشات</span>
        </div>
     <table className="tw-border-collapse tw-w-full" style={{direction:"rtl"}}>
         <thead className="tw-bg-green-600 tw-h-14" >
           <tr>
            <th className=" tw-border-gray-400 tw-text-center">#</th>
            <th className=" tw-border-gray-400 tw-text-center">سفارش</th>
            <th className=" tw-border-gray-400 tw-text-center">تاریخ ثبت سفارش</th>
            <th className=" tw-border-gray-400 tw-text-center">مبلغ کل</th>
            <th className=" tw-border-gray-400 tw-text-center">عملیات پرداخت</th>
           </tr>
        </thead>
         <tbody className="">
         <tr className="tw-border-b-2 tw-h-14 tw-justify-items-center">
            <td className=" tw-border-gray-400 tw-text-center">1</td>
             <td className=" tw-border-gray-400 tw-text-center">حروف سازی</td>
             <td className=" tw-border-gray-400 tw-text-center">21مهر1400</td>
             <td className=" tw-border-gray-400 tw-text-center">40000تومان</td>
             <td className=" tw-border-gray-400 tw-text-center tw-text-green-800">پرداخت موفق</td>
         </tr>
         <tr className="tw-border-b-2 tw-h-14">
             <td className=" tw-border-gray-400 tw-text-center">2</td>
             <td className=" tw-border-gray-400 tw-text-center">حروف سازی</td>
             <td className=" tw-border-gray-400 tw-text-center">21مهر1400</td>
             <td className=" tw-border-gray-400 tw-text-center">40000تومان</td>
             <td className=" tw-border-gray-400 tw-text-center tw-text-green-800">پرداخت موفق</td>

        </tr>
         <tr className="tw-border-b-2 tw-h-14">
            <td className=" tw-border-gray-400 tw-text-center">3</td>
            <td className=" tw-border-gray-400 tw-text-center">حروف سازی</td>
            <td className=" tw-border-gray-400 tw-text-center">21مهر1400</td>
            <td className=" tw-border-gray-400 tw-text-center">40000تومان</td>
            <td className=" tw-border-gray-400 tw-text-center tw-text-green-800">پرداخت موفق</td>

        </tr>
    </tbody>
  </table>
     </div>

</div>
        </>
    )
}
export default Main;