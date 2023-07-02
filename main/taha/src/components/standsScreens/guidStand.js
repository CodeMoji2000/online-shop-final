import React from 'react'
import Templet from '../common/Templet'
import guidStand from "../../images/guid_stand.jpg"
import CardTitle from '../VacumScreen/cardTitle'
import Description from '../VacumScreen/Description'
import Exclusive from '../MakingPosterScreen.js/exclusive'
import CardSlider from '../common/CardSlider'
import { services } from './common/nav'
import CustomizedServices from '../HomeScreen/CustomizedServices'

export default function GuidStand() {
    return <Templet>
         <div 
        className="tw-flex tw-w-full tw-flex-col tw-justify-center " 
        style={{ fontFamily: "Lalezar" }}
        >
             <div className="tw-flex tw-mt-8 tw-w-full tw-justify-center">
                <div className="tw-relative tw-h-60 tw-w-8/12 tw-rounded-lg tw-shadow-md">
                    <img className="tw-flex-wrap tw-h-full tw-w-full" src={guidStand}></img>
                </div>
             </div>
             <CardTitle>استند راهنمای طبقات</CardTitle>
             <Description>
                 <p>
                 تابلوهایی که خود ایستا وبا عدم نیاز اتصال به ساختمان و یا ستونهای برق و… درمحلی نصب میشوند را تابلواستند مینامند
                 </p>
                 <p>
                 تابلوهای استند از لحاظ کاربرد با یکدیگرمتفاوت هستند
                 </p>
                 <p>
                 نورپردازی استندها میتواند از داخل یا بیرون آنها انجام پذیرد
                 </p>
            </Description>
            <CardTitle> کاربرد استند :</CardTitle>
            <Description>
                <p>
                    الف) اکران پوسترهای تبلیغاتی ، فرهنگی ، تجاری ، سیاسی به صورت ثابت یا متحرک.
                </p>
                <p>
                    ب)  استند راهنمای مسیر
                </p>
                <p>
                پ)استند نشان ولوگوی یک مجموعه برای نصب در ورودی ها ویا محوطه های مختلف
                </p>
                <p>
                    ث)استند راهنمای طبقات ( داخلی )
                </p>
                <p>
                بدیهی است نوع طراحی وانتخاب متریال وسایز، باید متناسب با کاربرد آنها وهماهنگ با سایرتابلوهای مرتبط باشد
                </p>
                <p>
                قیمت تابلواستند بستگی به نوع کاربرد و انتخاب متریال ، ابعاد و تعداد دارد.
                </p>
            </Description>
            <Exclusive/>
             <CardTitle>نمونه کار ها</CardTitle>
             {/* <CardSlider itemsPerSlide={2} images={IMAGES} /> */}
             <CardTitle>محصولات مرتبط</CardTitle>
             <CustomizedServices services={services} cname="tw-mt-12"/>

        </div>
    </Templet>
}