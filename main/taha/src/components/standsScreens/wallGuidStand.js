import React from 'react'
import Templet from '../common/Templet'
import guidStand from "../../images/guid_stand.jpg"
import CardTitle from '../VacumScreen/cardTitle'
import Description from '../VacumScreen/Description'
import Exclusive from '../MakingPosterScreen.js/exclusive'
import CardSlider from '../common/CardSlider'
import { services } from './common/nav'
import CustomizedServices from '../HomeScreen/CustomizedServices'

export default function WallGuidStand() {
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
             <CardTitle>راهنمای طبقات دیواری</CardTitle>
             <Description>
                 <p>
                 به مجموع اطلاعاتی که حاوی عناوین وتعداد اطاقها در طبقات را که دریک تابلو درج و در محل ورودی ساختمان ( لابی ) و یا ورودی هرطبقه ( مقابل راه پله وآسانسور) نصب میشود راهنمای طبقات گفته میشود
                 </p>
                 <p>
                 ابعاد آن متناسب با محتویات وفاصله دید مخاطب محاسبه میگردد که اگر به دیوار متصل شود دیواری، واگر از دیوار مستقل باشد، به آن خود ایستا و یا استند راهنما اطلاق میگردد
                 </p>
                 <p>
                 برای انتخاب سایز و فونت مندرج درآن و ارتفاع از سطح زمین استانداردهای جهانی وجود دارد که پیشنهاد میشود با کارشناسان ما مشورت نمایید
                 </p>
            </Description>
            <CardTitle>تقسیم بندی کلی تابلوهای راهنمای طبقات وتوضیح در خصوص معرفی آنها :</CardTitle>
            <Description>
                <p>
                    الف) تابلوهایی که درصورت تغییر کاربری اتاقها وتغییر در متون مندرج در آنها  قابلیت تعویض وتغییرمتن را به آسانی داشته باشند که کد معرفی آنها با عنوان قابلیت آسان تعویض متن معرفی شدند.
                </p>
                <p>
                    ب) تابلوهایی که متون آنها ثابت وغیر قابل تغییر هستند ونهایتا ، طراحی اولیه میتواند به گونه ای باشد که در صورت احتمال جابجایی اتاقها ، جای پیچهای اتصال به ساختمان ، یکسان پیش بینی شده وامکان تعویض تابلوها با یکدیگر میسر باشد با عنوان سفارشی معرفی شده اند.
                </p>
                <p>
                پ) تابلوهایی که قابلیت روشن شدن دارند و با همین عنوان معرفی شده اند  
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