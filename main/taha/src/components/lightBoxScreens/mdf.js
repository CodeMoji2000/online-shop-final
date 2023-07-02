import React from 'react'
import Templet from '../common/Templet'
import mdf from "../../images/mdf.jpg"
import CardTitle from '../VacumScreen/cardTitle'
import Description from '../VacumScreen/Description'
import Exclusive from '../MakingPosterScreen.js/exclusive'
import CardSlider from '../common/CardSlider'
import CustomizedServices from '../HomeScreen/CustomizedServices'
import { services } from './common/nav'

export default function Mdf() {
    return <Templet>
         <div 
        className="tw-flex tw-w-full tw-flex-col tw-justify-center " 
        style={{ fontFamily: "Lalezar" }}
        >
             <div className="tw-flex tw-mt-8 tw-w-full tw-justify-center">
                <div className="tw-relative tw-h-60 tw-w-8/12 tw-rounded-lg tw-shadow-md">
                    <img className="tw-flex-wrap tw-h-full tw-w-full" src={mdf}></img>
                </div>
             </div>
             <CardTitle>MDF</CardTitle>
             <Description>
                 <p>
                 لایت باکس هایی که از چوب ام دی اف روکش دار ساخته شوند را لایت لاکس ام دی اف مینامیم.اینگونه لایت باکس کاملا سفارشی بوده واندازه وضخامت آن متناسب با محل نصب وکاربرد آن تعیین میگردد.
                 </p>
                 <p>
                 در لایت باکس ام دی اف از چاپ بک لایت ، پارچه تکس تایل وفلکسی فیس میتوان استفاده نمود.نور داخل لایت باکس ام دی اف براساس ضخامت آن میتواند تفاوت داشته باشد لکن بهترین گزینه لامپ های اس ام دی است به جهت مصرف برق بسیار کم 
                 </p>
                 <p>
                 ابعاد قابل ساخت از سابز 30 در40 تا 200 در 300  سانتیمتر است
                 </p>
                 <p>
                 قیمت لایت باکس ام دی اف به نوع و کیفیت اقلام مصرفی در آن متفاوت خواهد بود
                 </p>
            </Description>
            <CardTitle>مشخصات فایل برای چاپ :</CardTitle>
            <Description>
                <p className="tw-text-lg" style={{direction:"rtl"}}>
                سایزچاپ متناسب با ابعاد سفارش لایت باکس شما و رزولوشن فایل حداقل 100 Dpi به صورت Cmyk با
                  فرمت Tif یا Jpeg باشد  
                </p>
            </Description>
            <Exclusive/>
             <CardTitle>نمونه کار ها</CardTitle>
             {/* <CardSlider itemsPerSlide={2} images={IMAGES} /> */}
             <CardTitle>محصولات مرتبط</CardTitle>
             <CustomizedServices services={services} cname="tw-mt-4"/>

        </div>
    </Templet>
}