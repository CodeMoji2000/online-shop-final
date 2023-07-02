import React from 'react'
import Templet from '../common/Templet'
import vacum from "../../images/Tablo_rahnama.jpg"
import CardTitle from '../VacumScreen/cardTitle'
import Description from '../VacumScreen/Description'
import Exclusive from '../MakingPosterScreen.js/exclusive'
import { services } from './common/nav'
import CustomizedServices from '../HomeScreen/CustomizedServices'


export default function PendantGuid() {
    return <Templet>
         <div 
        className="tw-flex tw-w-full tw-flex-col tw-justify-center " 
        style={{ fontFamily: "Lalezar" }}
        >
             <div className="tw-flex tw-mt-8 tw-w-full tw-justify-center">
                <div className="tw-relative tw-h-60 tw-w-8/12 tw-rounded-lg tw-shadow-md">
                    <img className="tw-flex-wrap tw-h-full tw-w-full" src={vacum}></img>
                </div>
             </div>
             <CardTitle>تابلو راهنمای آویز</CardTitle>
             <Description>
                 <p>
                 تابلوهای دوطرفه آویز معمولا برای راهنمای مسیر و یا سیستم اداری اوپن کاربرد دارد و تحت هیچ شرایطی از یک طرف آن بعنوان تابلو تبلیغاتی نباید استفاده گردد
                 </p>
                 <p>
                 برای محل نصب ، ارتفاع از سطح زمین و اندازه آن، استانداردها وقوانینی وجود دارد که پیشنهاد میشود با کارشناسان ما مشورت نمایید
                 </p>
            </Description>
            <Exclusive/>
             <CardTitle>نمونه کار ها</CardTitle>
             <CardTitle>محصولات مرتبط</CardTitle>
             <CustomizedServices services={services} cname="tw-mt-12"/>
        </div>
    </Templet>
}