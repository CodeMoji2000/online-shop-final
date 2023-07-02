import React from 'react'
import Templet from '../common/Templet'
import parchami from "../../images/parchami.jpg"
import CardTitle from '../VacumScreen/cardTitle'
import Description from '../VacumScreen/Description'
import Exclusive from './exclusive'
import CustomizedServices from '../HomeScreen/CustomizedServices'
import { services } from './common/nav'
export default function Parchami() {
    return <Templet>
         <div 
        className="tw-flex tw-w-full tw-flex-col tw-justify-center " 
        style={{ fontFamily: "Lalezar" }}
        >
             <div className="tw-flex tw-mt-8 tw-w-full tw-justify-center">
                <div className="tw-relative tw-h-60 tw-w-8/12 tw-rounded-lg tw-shadow-md">
                    <img className="tw-flex-wrap tw-h-full tw-w-full" src={parchami}></img>
                </div>
             </div>
             <CardTitle>تابلوهای دوطرفه پرچمی</CardTitle>
             <Description>
                 <p>
                 تابلوهای دوطرفه پرچمی بعلت مسلط بودن به پیاده و یا سواره رو دارای دید فوق العاده ای نسبت به تابلوهای سردرب هستن
                 </p>
                 <p>
                 که اگر این مزیت با نوآوری وخلاقیت همراه شود تاثیر قابل توجهی در دید مخاطب و حجم فروش محصولات و ارائه خدمات خواهد داشت
                 </p>
                 <p>
                 تابلوهای دوطرفه هم بدون نور وهم روشن وگردان قابلیت طراحی واجرا دارند 
                 </p>
                 <p>
                 البته نصب تابلو دوطرفه در تهران نیاز به اخذ مجوز از سازمان زیباسازی شهرداری تهران دارند
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
