import React from 'react'
import Templet from '../common/Templet'
import crystal from "../../images/crystal.jpg"
import CardTitle from '../VacumScreen/cardTitle'
import Description from '../VacumScreen/Description'
import Exclusive from '../MakingPosterScreen.js/exclusive'
import CardSlider from '../common/CardSlider'
import CustomizedServices from '../HomeScreen/CustomizedServices'
import { services } from './common/nav'


export default function Crystal() {
    return <Templet>
         <div 
        className="tw-flex tw-w-full tw-flex-col tw-justify-center " 
        style={{ fontFamily: "Lalezar" }}
        >
             <div className="tw-flex tw-mt-8 tw-w-full tw-justify-center">
                <div className="tw-relative tw-h-60 tw-w-8/12 tw-rounded-lg tw-shadow-md">
                    <img className="tw-flex-wrap tw-h-full tw-w-full" src={crystal}></img>
                </div>
             </div>
             <CardTitle>کریستالی</CardTitle>
             <Description>
                 <p className="tw-font-bold">
                 لایت باکس کریستالی با ضخامت بسیار کم از دو پلکسی شفاف تشکیل شده که یکی با ضخامت 2 میلیمتر برای حفاظت از چاپ ودیگری 6 ویا 8 میلیمتر که در برگیرنده ای اس ام دی وصفحه پشت چاپ خواهد بود
                 </p>
                 <p>
                 نور داخل لایت باکس 12 ولت بوده ونباید مستقیما به برق شهر متصل گردد
                 </p>
                 <p>فیلم بک لایت مابین دو پلکسی قرارگرفته وبا 4 عدد فیکسچر با هم یکی شده وبه دیوار نصب میشود</p>
                 <p>
                 محاسبه قیمت لایت باکس کریستال بر اساس ابعاد پلکسی است در حالیکه ابعد چاپ تصویر 5/2 سانتیمتر از هر طرف پلکسی کوچکتر است و کیفیت چاپ وپلکسی واس ام دی مصرفی در قیمت نهایی بسیار تاثیر گذاراست
                 </p>

            </Description>
            <CardTitle>سایز قابل ساخت لایت باکس کریستالی</CardTitle>
            <Description>
                <p className="tw-text-lg" style={{direction:"rtl"}}>
                از اندازه 30 در 40 تا 120 در 180 سانتیمتراست.
                </p>
                <p>
                برای پی بردن به طریقه تعویض تصویر ونصب به بخش مقالات مراجعه بفرمایید.
                </p>
            </Description>
            <CardTitle>کاربرد تابلو لایت باکس کریستالی</CardTitle>
            <Description>
                <ul>
                    <li>تابلو لایت باکس کریستالی تبلیغاتی به منظور تبلیغات در فروشگاه ها، مراکز تجاری، فضاهای عمومی، ترمینال ها، متروها، نمایشگاه ها و…</li>
                    <li>تابلو لایت باکس کریستالی برای اطلاع رسانی  در مراکز آموزشی، مراکز درمانی، فرودگاه ها، آژانس های مسافرتی و…</li>
                    <li>تابلو لایت باکس کریستالی برای معرفی محصول در فروشگاه ها، داروخانه ها، دفاتر فروش و…</li>
                    <li>تابلو لایت باکس کریستالی برای معرفی خدمات در مجموعه های ورزشی، آموزشی، کلینیک ها و…</li>
                    <li>تابلو لایت باکس کریستالی برای به اطلاع رساندن رویدادهایی مثل نمایش ها، همایش ها، سمینارها و…</li>
                    <li>تابلو لایت باکس کریستالی در امور دکوراتیو</li>
                </ul>
            </Description>
            <CardTitle>مزایای استفاده از لایت باکس کریستالی</CardTitle>
            <Description>
                <p>
                وزن  کم ، قابلیت حمل و تعویض تصویر آسان ومصرف بسیار ناچیز انرژی وظرافت وکیفیت بالای آن از مزایای تابلو لایت باکس کریستالی است
                </p>
            </Description>
            <CardTitle>مشخصات فایل برای چاپ :</CardTitle>
            <Description>
                <p className="tw-text-lg" style={{direction:"rtl"}}>
                سایزچاپ متناسب با ابعاد سفارش لایت باکس شما و رزولوشن فایل حداقل 100 Dpi به صورت Cmyk با
                  فرمت Tif یا Jpeg باشد  
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