import React from 'react'
import CardTitle from '../components/VacumScreen/cardTitle';
import Description from '../components/VacumScreen/Description';
import Templet from '../components/common/Templet';
import FreeConsult from '../components/common/FreeConsult';
import EmbossedPoster from "../images/EmbossedPoster.jpg"
import CardSlider from '../components/common/CardSlider'
import lightBox from '../images/lightBox.jpg'
import CustomizedServices from '../components/HomeScreen/CustomizedServices';
import {services} from "../components/lightBoxScreens/common/nav"

function LightBoxScreen() {
    return <Templet>
        <div 
        className="tw-flex tw-w-full tw-flex-col tw-justify-center " 
        style={{ fontFamily: "Lalezar" }}
        >
             <div className="tw-flex tw-mt-8 tw-w-full tw-justify-center">
                <div className="tw-relative tw-h-60 tw-w-8/12 tw-rounded-lg tw-shadow-md">
                    <img className="tw-flex-wrap tw-h-full tw-w-full" src={lightBox}></img>
                </div>
             </div>
             <CardTitle>لایت باکس</CardTitle>
             <Description>
                 <p>تابلوهایی که به صورت جعبه نورانی با اشکال ومتریالهای گوناگون ساخته شده ودر داخل آنها تابش نور به گونه ای پیش بینی شود که نوراز پشت به تصویر بتابد تا موجب درخشندگی رنگهای موجود در تصویر شود را لایت باکس مینامیم</p>
                 <p>متریال ونوع ساخت لایت باکس ها با کاربری آنها ارتباط مستقیم دارد </p>
                 <p>در ساخت انواع لایت باکس با محدودیت هایی روبرو هستیم و این محدودیتها معلول نوع کاربری لایت باکس هستند .

                پیشنهاد میکنیم برای تهیه لایت باکس مناسب برای محل ومورد استفاده خود با کارشناسان ما مشورت نمایید </p>
                <p>قیمت لایت باکس متاثراز متریال ، سایز ، ابعاد وکیفیت آن است.

                 زمان مورد نیاز برای ساخت بستگی به نوع وتعداد آنها دارد</p>
             </Description>
             <CardTitle>محصولات مرتبط</CardTitle>
             <CustomizedServices services={services} cname="tw-mt-3"/>
        </div>
    </Templet>
}


export default LightBoxScreen

