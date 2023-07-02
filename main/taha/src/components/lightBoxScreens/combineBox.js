import React from 'react'
import Templet from '../common/Templet'
import combine from "../../images/combine.jpg"
import CardTitle from '../VacumScreen/cardTitle'
import Description from '../VacumScreen/Description'
import Exclusive from '../MakingPosterScreen.js/exclusive'
import CardSlider from '../common/CardSlider'
import CustomizedServices from '../HomeScreen/CustomizedServices'
import { services } from './common/nav'


export default function CombineBox() {
    return <Templet>
         <div 
        className="tw-flex tw-w-full tw-flex-col tw-justify-center " 
        style={{ fontFamily: "Lalezar" }}
        >
             <div className="tw-flex tw-mt-8 tw-w-full tw-justify-center">
                <div className="tw-relative tw-h-60 tw-w-8/12 tw-rounded-lg tw-shadow-md">
                    <img className="tw-flex-wrap tw-h-full tw-w-full" src={combine}></img>
                </div>
             </div>
             <CardTitle>لایت باکس ترکیبی</CardTitle>
             <Description>
                 <p>
                 لایت باکس ترکیبی همانطور که از نامش پیداست میتواند از ترکیب متریالهای مختلف واشکال گوناگون در هر سایزی ، متناسب به کابردی که از آن انتظار میرود ساخته شود تابلوسازی طاها باعنایت به اینکه مجهز به ابزارآلات مختلف میباشد محدودیتی در طراحی واجرای اینگونه لایت باکس ها ندارد.
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