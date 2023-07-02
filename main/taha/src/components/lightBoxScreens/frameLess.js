import React from 'react'
import Templet from '../common/Templet'
import frame from "../../images/frame_less.jpg"
import CardTitle from '../VacumScreen/cardTitle'
import Description from '../VacumScreen/Description'
import Exclusive from '../MakingPosterScreen.js/exclusive'
import CardSlider from '../common/CardSlider'
import CustomizedServices from '../HomeScreen/CustomizedServices'
import { services } from './common/nav'


export default function FrameLess() {
    return <Templet>
         <div 
        className="tw-flex tw-w-full tw-flex-col tw-justify-center " 
        style={{ fontFamily: "Lalezar" }}
        >
             <div className="tw-flex tw-mt-8 tw-w-full tw-justify-center">
                <div className="tw-relative tw-h-60 tw-w-8/12 tw-rounded-lg tw-shadow-md">
                    <img className="tw-flex-wrap tw-h-full tw-w-full" src={frame}></img>
                </div>
             </div>
             <CardTitle>فریم لس</CardTitle>
             <Description>
                 <p>
                 لایت باکسی که در دید اول حاشیه ای از فریم دیده نشود وچاپ تصویر بروی پارچه ای خاص انجام پذیرد را فریم لس  یا لایت باکس تکس تایل و یا  لایت باکس پارچه ای مینامند.نور لایت باکس فریم لس با اس ام دی 12 ولت  که توسط مبدل به برق شهر متصل میگردد تامین شده وضخامت آنها در مدلهای یک طرفه 75 ودوطرفه 120 میلیمتر است .تابلوهای فریم لس دارای وزن بسیار کم وقابلیت نصب بروی دیوار ویا به صورت آویز واستند را دارا هستند.قیمت لایت باکس فریم لس به ابعاد وکیفیت اجزا مصرفی در آن بستگی دارد .در لایت باکس پارچه ای محدودیت کمتری نسبت به سایر لایت باکس ها وجود دارد وتا عرض 150 وطول 600 سانتیمتر قابل تولید هستند.
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