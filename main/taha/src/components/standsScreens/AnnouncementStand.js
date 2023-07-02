import React from 'react'
import Templet from '../common/Templet'
import elanat from "../../images/elanat.jpg"
import CardTitle from '../VacumScreen/cardTitle'
import Description from '../VacumScreen/Description'
import Exclusive from '../MakingPosterScreen.js/exclusive'
import Holder from '../MakingPosterScreen.js/imageHolder'
import CustomizedServices from '../HomeScreen/CustomizedServices'
import { services } from './common/nav'




export default function AnnouncementStand() {
    return <Templet>
         <div 
        className="tw-flex tw-w-full tw-flex-col tw-justify-center " 
        style={{ fontFamily: "Lalezar" }}
        >
            <Holder>
             <img className="tw-flex-wrap tw-h-full tw-w-full" src={elanat}></img>
             </Holder>


             <CardTitle>تابلو اعلانات</CardTitle>
             <Description>
                 <p>
                 متریال : فریم ام دی اف و رویه پی وی سی وشیشه2 میل
                 </p>
                 <p>
                 ابعاد : سفارشی
                 </p>
                 <p>
                 محل نصب :ادارات ، بیمارستان ها و… لابی مجتمع های مسکونی
                 </p>
            </Description>
            <Exclusive/>
             <CardTitle>محصولات مرتبط</CardTitle>
             <CustomizedServices services={services} cname="tw-mt-12"/>
        </div>
    </Templet>
}