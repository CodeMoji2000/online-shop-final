import React from 'react'
import Templet from '../common/Templet'
import rahnam from "../../images/Tablo_rahnama.jpg"
import CardTitle from '../VacumScreen/cardTitle'
import Description from '../VacumScreen/Description'
import Exclusive from '../MakingPosterScreen.js/exclusive'
import CardSlider from '../common/CardSlider'
import { services } from './common/nav'
import CustomizedServices from '../HomeScreen/CustomizedServices'

export default function StandOfWay() {
    return <Templet>
         <div 
        className="tw-flex tw-w-full tw-flex-col tw-justify-center " 
        style={{ fontFamily: "Lalezar" }}
        >
             <div className="tw-flex tw-mt-8 tw-w-full tw-justify-center">
                <div className="tw-relative tw-h-60 tw-w-8/12 tw-rounded-lg tw-shadow-md">
                    <img className="tw-flex-wrap tw-h-full tw-w-full" src={rahnam}></img>
                </div>
             </div>
             <CardTitle>استند راهنمای مسیر و محوطه</CardTitle>
             <Description>
                 <p>
                 تابلو استند یا تابلو های محوطه برای ادارات، سازمانها و مرکز تجاری که از درب ورودی تا ساختمانهای اصلی فاصله نسبتا زیادی دارند و یا در یک محوطه بزرگ ساختمانهای متعدد وجود دارد مناسب است. زیرا مهمترین مبحث، راهنمایی مراجعین به ساختمانهای مربوطه است که در این صورت تابلوهای محوطه ویا استند معنا و مفهوم پیدا میکنند
                 </p>
                 <p>
                 درطراحی وساخت تابلوهای محوطه در عین حال که باید از متریالهایی استفاده نمود که مقاوم در برابر شرایط جوی باشند باید حتما هماهنگی با تابلوهای داخلی و حتی پلاک روی میزکارمند کاملا مشهود باشد
                 </p>
                 <p>
                 برای جانمایی محل نصب، سایز و نوع آن میتوانید با کارشناسان ما مشورت نمایید
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