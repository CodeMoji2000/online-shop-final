import React from 'react'
import CardSlider from '../common/CardSlider'
import CardTitle from '../VacumScreen/cardTitle'
import Exclusive from './exclusive'
import nama from '../../images/nama.jpg'
import Description from '../VacumScreen/Description'
import Templet from '../common/Templet'
import CustomizedServices from '../HomeScreen/CustomizedServices'
import { services } from './common/nav'

export default function Nama() {
    return <Templet>
    <div 
   className="tw-flex tw-w-full tw-flex-col tw-justify-center " 
   style={{ fontFamily: "Lalezar" }}
   >
        <div className="tw-flex tw-mt-8 tw-w-full tw-justify-center">
           <div className="tw-relative tw-h-60 tw-w-8/12 tw-rounded-lg tw-shadow-md">
               <img className="tw-flex-wrap tw-h-full tw-w-full" src={nama}></img>
           </div>
        </div>
        <CardTitle>تابلوهای نما</CardTitle>
        <Description>
            <p>تابلوهای منصوبه به نما با اهداف ذیل طراحی ونصب میگردند:</p>
            <ul className="tw-list-disc tw-px-40 rtl" style={{direction:"rtl"}}>
                <li style={{direction:"rtl"}}>مکمل نما وعامل زیبایی هرچه بیشتر نمای ساختمان.</li>
                <li>طراحی و نصب نام و لوگوی ساختمان برای معرفی وکاربری ساختمان.</li>
                <li>شاخص و متمایز نمودن ساختمان وتشخیص وشناسایی آن از مسافت های دورتر</li>
            </ul>
            <p>که همه این موارد در راستای هویت بخشیدن به ساختمان هستند</p>
            <p>
            برای دستیابی به هر یک از اهداف مذکور استانداردهای خاص خود را باید رعایت نمود که بعنوان مثال نوع کاربری ، موقعیت جغرافیایی ، ارتفاع نصب ، آستانه دید وآستانه خوانایی نکات مهمی هستند که با تکیه علم و تجربه حاصل میگردد
            </p>
            <p>
            گاهی اوقات برای نصب در ارتفاع ( تابلونما وحروف برجسته ) مجبور به استفاده از داربست هستیم که این امرکارفرما را دچار مشکلات عدیده ای چون هزینه بالا وچه بسا درگیری با همسایگان وشهرداری مینماید از این رو تابلوسازی طاها برای حل این معضل جدی از روش راپل ( کار در ارتفاع با مدد از طناب ونیروی متخصص) استفاده مینماید
            </p>
            <p>پرسنل راپل کار تابلوسازی طاها در طول انجام وظیفه خود تحت پوشش بیمه مسئولیت بیمه ایران هستن</p>
            
        </Description>
        <Exclusive/>
        <CardTitle>نمونه کار ها</CardTitle>
        {/* <CardSlider itemsPerSlide={2} images={IMAGES} /> */}
        <CardTitle>محصولات مرتبط</CardTitle>
        <CustomizedServices services={services} cname="tw-mt-4"/>
   </div>
</Templet>
}
 