import React, { useRef , } from "react";


const Alert = () => {
    let divRef = useRef()
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(true)
    return(
        <>
         <div className="position-fixed grid lg:grid-cols-3 tw-w-96 tw-h-80 tw-z-100 tw-p-4" ref={divRef} style={{backgroundColor:"lightgray"
          ,marginBottom:"120rem",borderRadius:"15px",fontFamily:"Lalezar"}}>
            <button style={{direction:"rtl"}} onClick={onclick}>aa
            </button>
            <h2 className="tw-text-4xl tw-p-3 text-right">گروه تابلو سازی طاها</h2>
            <p className="text-right">لورم ایپسوم یا طرح نما به متنی آزمایشی و بی معنی در صنعت چاپ،
            صفحه آرایی و طراحی گرافیک گفته می شود. طراح گرافیک از این متن به    
            عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل
            ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر
             گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.
             </p>
            <button className="tw-p-3 tw-text-left tw-mt-2" style={{
                backgroundColor:"#FFAD4C",borderRadius:"15px",
                }}> مشاهده محصولات</button>
         </div>
        </>
    )
}
export default Alert ;