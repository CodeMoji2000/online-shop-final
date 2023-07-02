import React from 'react'
import CardTitle from '../VacumScreen/cardTitle';
import Description from '../../components/VacumScreen/Description';
import Templet from '../common/Templet';
import FreeConsult from '../common/FreeConsult';
import CardSlider from '../common/CardSlider'
import sarDarb from '../../images/sarDarb.jpg'
import Exclusive from './exclusive';
import sardarPoster1 from '../../images/sampleImages/sardarPoster1.jpg'
import sardarPoster2 from '../../images/sampleImages/sardarPoster2.jpg'
import sardarPoster3 from '../../images/sampleImages/sardarPoster3.jpg'
import sardarPoster4 from '../../images/sampleImages/sardarPoster4.jpg'
import sardarPoster5 from '../../images/sampleImages/sardarPoster5.jpg'
import sardarPoster6 from '../../images/sampleImages/sardarPoster6.jpg'
import sardarPoster7 from '../../images/sampleImages/sardarPoster7.jpg'
import sardarPoster8 from '../../images/sampleImages/sardarPoster8.jpg'
import sardarPoster9 from '../../images/sampleImages/sardarPoster9.jpg'
import CustomizedServices from '../HomeScreen/CustomizedServices';
import { services } from './common/nav';



function SarDarb() {

    const IMAGES=[
        {
        id:1,
        src:sardarPoster1,
        },
                {
        id:2,
        src:sardarPoster2,
        },
                {
        id:3,
        src:sardarPoster3,
        },
                {
        id:4,
        src:sardarPoster4,
        },
                {
        id:5,
        src:sardarPoster5,
        },
                {
        id:6,
        src:sardarPoster6,
        },
                {
        id:7,
        src:sardarPoster7,
        },
                {
        id:8,
        src:sardarPoster8,
        },
                {
        id:9,
        src:sardarPoster9,
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
             <CardTitle>تابلوهای سردرب</CardTitle>
             <Description>
                 <p>نکات حائز اهمیت در طراحی وساخت تابلوهای سردرب</p>
                 <p>ضمن مد نظر قرار دادن قابلیت خوانایی وآستانه دید از لحاظ زاویه وارتفاع نصب ، مسائل فنی و… به نکات فرهنگی،اجتماعی وسهل الوصول بودن امر انتقال مفهوم ومنظورنظر به مخاطب ، باید تفکر ویژه ای داشت واگر حرفه ای کار شود ، میتوان گفت خیلی اوقات امکان اینکه  بیننده  قبل ازخواندن متن تابلو، شغل ، فعالیت و کاربری ملک مورد نظر را تشخیص دهد وجود دارد واین امر مهم با استفاده طراحی قوی و خلاقانه ، رنگ، نور، فونت و متریال محقق میشود</p>
             </Description>
             <CardTitle>روش محاسبه قیمت تابلو سردرب</CardTitle>
             <Description>
                 <p>زمینه کار به صورت متر مربع و(قیمت حروف برجسته) به متر محیط  دورحروف محاسبه میشود</p>
                 <p>نصب تابلو سردرب در تهران نیاز به اخذ مجوز از سازمان زیباسازی شهرداری تهران دارد.</p>
                 <p>زمان مورد نیاز برای تولید ونصب معمولا 15 روز کاری است</p>
                 <p>تابلوهای سردر باعنایت به کاربری ومتریال مصرفی با عناوینی چون تابلو سردرب ، تابلو ورودی ، تابلونمایندگی ،  تابلوشناسایی ، تابلوتبلیغاتی، تابلو کامپوزیت ، تابلو ترموود  ، تابلو نئون ، تابلوحروف برجسته، تابلواستیل ، تابلو چنلیوم ، چلنیوم ، تابلو پلکسی و فلکسی فیس شناخته میشوند</p>
                 <p>گاهی اوقات برای تکمیل زیبایی وایجاد جلوه بصری متفاوت میتوان از تابلوهای گردان ،انواع لایت باکس، وکیوم فرمینگ، خدمات آبکاری وفانتاکروم هم استفاده نمود</p>
                 <p>ارائه بیمه نامه معتبر در خصوص تابلوهای تولیدی تابلوسازی طاها از ویژگی های این مجموعه است</p>
                 <p>قیمت تولید محصولات گروه تابلوسازی طاها در شهرهایی که نماینده رسمی دارد واز طریق دفتر مرکزی اقدام به سفارش مینمایید یکسان بوده ، وافزایش قیمتی مبنی بر اعزام پرسنل بابت ساخت وتحویل درمحل ونگرانی برای خدمات پس از فروش به موقع نخواهید نداشت</p>
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


export default SarDarb

 