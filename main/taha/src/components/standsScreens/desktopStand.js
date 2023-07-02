import React from 'react'
import Templet from '../common/Templet'
import romizi from "../../images/romizi.jpg"
import CardTitle from '../VacumScreen/cardTitle'
import Description from '../VacumScreen/Description'
import Exclusive from '../MakingPosterScreen.js/exclusive'
import { services } from './common/nav'
import CustomizedServices from '../HomeScreen/CustomizedServices'


export default function DesktopGuid() {
    return <Templet>
         <div 
        className="tw-flex tw-w-full tw-flex-col tw-justify-center " 
        style={{ fontFamily: "Lalezar" }}
        >
             <div className="tw-flex tw-mt-8 tw-w-full tw-justify-center">
                <div className="tw-relative tw-h-60 tw-w-8/12 tw-rounded-lg tw-shadow-md">
                    <img className="tw-flex-wrap tw-h-full tw-w-full" src={romizi}></img>
                </div>
             </div>
             <CardTitle>پلاک رومیزی پرسنلی</CardTitle>
             <Description>
                 <p>
                 به پلاک و یا تابلویی که متن آن حاوی معرفی کارمند مربوطه باشد و روی میز ایشان قرار گیرد تابلو رومیزی گفته می شود
                 </p>
                 <p>
                 انتخاب محل قرارگیری باید طوری باشد که در اولین نگاه دیده شود.هماهنگی طرح ورنگ آن با سایر تابلوهای راهنما الزامی است
                 </p>
            </Description>
            <Exclusive/>
             <CardTitle>نمونه کار ها</CardTitle>
             <CardTitle>محصولات مرتبط</CardTitle>
             <CustomizedServices services={services} cname="tw-mt-12"/>
        </div>
    </Templet>
}