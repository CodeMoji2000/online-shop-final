import React from 'react'
import Templet from '../common/Templet'
import magnet from "../../images/magnet.jpg"
import CardTitle from '../VacumScreen/cardTitle'
import Description from '../VacumScreen/Description'
import Exclusive from '../MakingPosterScreen.js/exclusive'
import CardSlider from '../common/CardSlider'
import CustomizedServices from '../HomeScreen/CustomizedServices'
import { services } from './common/nav'


export default function Magnet() {
    return <Templet>
         <div 
        className="tw-flex tw-w-full tw-flex-col tw-justify-center " 
        style={{ fontFamily: "Lalezar" }}
        >
             <div className="tw-flex tw-mt-8 tw-w-full tw-justify-center">
                <div className="tw-relative tw-h-60 tw-w-8/12 tw-rounded-lg tw-shadow-md">
                    <img className="tw-flex-wrap tw-h-full tw-w-full" src={magnet}></img>
                </div>
             </div>
             <CardTitle>لایت باکس مگنتی</CardTitle>
             <Description>
                 <p>
                 لایت باکسی که پلکسی شفاف روی آن که کار محافظت از چاپ را بعهده دارد توسط مگنت ( آهنربا ) نصب شود را لایت باکس مگنتی مینامیم .چاپ مورد استفاده در اینگونه لایت باکس ، فیلم بک لایت است که تا عرض 5/1 متر وطول دلخواه قابلیت چاپ دارد. معمولا فریم لایت باکس مگنتی آلومینیوم آنادایزشده با ضخامت 18 میلیمتراست و نورآن توسط اس ام دی 12 ولت تامین میگردد که نباید بدون استفاده از مبدل 220 ولت به 12 ولت مستقیما به برق شهر شود.در لایت باکس مگنتی تعویض تصویر بسیار آسان وبدون هر گونه ابزار وتخصصی انجام میپذیرد.
                 </p>
                 <p>
                 مناسبترین ابعاد برای لایت باکس مگنتی با عنایت به اخذ بهترین  ویکنواخت ترین حالت نور از اندازه
                 </p>
                 <p srtyle={{direction:"rtl"}}>
                 30 در 40 سانتیمتر تا 80 در 120 سانتیمتراست
                 </p>
            </Description>
            <CardTitle>قیمت لایت باکس مکنتی :</CardTitle>
            <Description>
                <p>
                قیمت انواع لایت باکس مگنتی مطابق با سایر محصولات موثر از کیفیت اقلام واجزائ مصرفی در آن است که مستلزم روئیت از نزدیک بوده وبراساس عکس های تبلیغاتی وتصاویر در سایت ها قابل تشخیص نیست.
                </p>
            </Description>
            <CardTitle>مشخصات فایل ارسالی برای چاپ :</CardTitle>
            <Description>
                <p>
                ابعادباید متناسب با سفرش مورد نظر و رزولوشن فایل حداقل 100 Dpi و به صورت Cmyk با فرمت  Tif یا Jpeg باشد.
                </p>
            </Description>
            <CardTitle>مشخصات فایل برای چاپ :</CardTitle>
            <Description>
                <p className="tw-text-lg" style={{direction:"rtl"}}>
                سایزچاپ متناسب با ابعاد سفارش لایت باکس شما و رزولوشن فایل حداقل 100 Dpi به صورت Cmyk با
                  فرمت Tif یا Jpeg باشد  
                </p>
                <p>
                وزن بسیار کم ، تعویض تصویر بسیار آسان ، ضخامت بسیار کم واستحکام بسیار بالا مقرون به صرفه بودن و هماهنگی با هر دکور و رنگ زمینه از مزایای لایت باکس مگنتی است
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