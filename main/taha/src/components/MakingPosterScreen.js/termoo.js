import React from 'react'
import CardTitle from '../VacumScreen/cardTitle';
import Description from '../../components/VacumScreen/Description';
import Templet from '../common/Templet';
import FreeConsult from '../common/FreeConsult';
import CardSlider from '../common/CardSlider'
import sarDarb from '../../images/sarDarb.jpg'
import Exclusive from './exclusive';
import termood1 from '../../images/sampleImages/termood1.jpg'
import termood2 from '../../images/sampleImages/termood2.jpg'
import termood3 from '../../images/sampleImages/termood3.jpg'
import CustomizedServices from '../HomeScreen/CustomizedServices';
import { services } from './common/nav';

function Termoo() {

    const IMAGES=[
        {
        id:1,
        src:termood1,
        },
                {
        id:2,
        src:termood2,
        },
                {
        id:3,
        src:termood3,
        }, 
    ]
return <Templet>
    <div 
    className="tw-flex tw-w-full tw-flex-col tw-justify-center " 
    style={{ fontFamily: "Lalezar" }}
    >
         <div className="tw-flex tw-mt-8 tw-w-full tw-justify-center">
            <div className="tw-relative tw-h-60 tw-w-8/12 tw-rounded-lg tw-shadow-md">
                <img className="tw-flex-wrap tw-h-full tw-w-full" src={sarDarb}></img>
            </div>
         </div>
         <CardTitle>تابلوهای ترمووود</CardTitle>
         <Description>
             <p>تنوع در رنگ ، طراحی و ایجاد حس بهتری در بیننده بواسطه وجود روح طبیعی در ذات انواع چوب گاهی اوقات ومتناسب با نوع معماری ساختمان موجب میگردد از چوب ترموود در ساخت بک گراند تابلو ونما استفاده شود</p>
             <p>چوب ترموود بدلیل گذراندن فرایندهای خاص در تولید، فرآورده شده وضمن سبکی وعدم نفوذ رطوبت وموریانه از دوام و زیبایی منحصربه فردی برخوردار است</p>
             <p>قیمت تابلو ترموود به کیفیت چوب مصرفی بستگی دارد وروش محاسبه براساس متر مربع برآورد میگردد</p>
             <p>زمان مورد نیاز برای تولید تابلو ترموود معمولا  15 روز کاری است</p>
             <p>برای آشنایی با تفاوت در کیفیت وهمچنین مراحل تولید ترموود به قسمت مقالات مراجعه نمایید</p>
        </Description>
         <div className="tw-border-b-5 tw-border-green-600 tw-my-5">
            <Exclusive/>
         </div>
         <CardTitle>نمونه کار ها</CardTitle>
         <CardSlider itemsPerSlide={2} images={IMAGES} />
         <CardTitle>محصولات مرتبط</CardTitle>
        <CustomizedServices services={services} cname="tw-mt-4"/>

    </div>
</Templet>
}


export default Termoo

