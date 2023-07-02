import React from 'react'
import Templet from '../components/common/Templet'
import CardTitle from '../components/VacumScreen/cardTitle'
import Description from '../components/VacumScreen/Description'
import stands from "../images/stands.jpg"
import CustomizedServices from '../components/HomeScreen/CustomizedServices'
import { services } from '../components/standsScreens/common/nav'

function StandsScreen(props) {
    return <Templet>
        <div 
        className="tw-flex tw-w-full tw-flex-col tw-justify-center " 
        style={{ fontFamily: "Lalezar" }}
        >
            <div className="tw-flex tw-mt-8 tw-w-full tw-justify-center">
                <div className="tw-relative tw-h-60 tw-w-8/12 tw-rounded-lg tw-shadow-md">
                    <img className="tw-flex-wrap tw-h-full tw-w-full" src={stands}></img>
                </div>
             </div>
             <CardTitle>تابلو راهنما</CardTitle>
             <Description>
                 <p>تیم گروه تابلوسازی طاها با کارومطالعه بروی جنبه های مختلف معماری هرساختمان والهام ازآن درتابلوهای راهنما ( شناسایی ومعرفی بخش های گوناگون هرسازمان ) دراجرای گام به گام هر پروژه ، به داشتن دانش وتخصص در طراحی وتوان تولید تابلوهای راهنمای خاص شناخته شده وتبدیل به الگویی شاخص شده است </p>
                 <p>هدف وانگیزه ما کمک به مردم برای کسب تجربه یک حس خوب نسبت به محیط های پیش روی آنهاست</p>
                 <p>برای رسیدن به این مهم اطلاعات وتحقیق را محترم میشماریم </p>
                 <p>شما احتمالا متوجه شده اید که پروانه ها را دوست دارید ومحونقوش زیبای آنها میشوید . پروانه پادشاه و الگوی زیبایی ومالک مجموعه ای چشم نواز در ترکیب رنگهاست که با خود حس مرموزی به همراه دارد</p>
                 <p>هرزمستان میلیون ها پروانه به محل خاص وجدیدی مهاجرت میکنند بدون آنکه قبلا به آن نقطه سفرکرده باشند وباخود دنیایی از زیبایی وطیف های مختلف رنگی را به ارمغان میبرند</p>
                 <p>این همان چیزی است که ما درطراحی واجرای پروژه هایمان ازآن الهام میگیریم وبرای کمک به افراد برای ورود اولین باردرمحیط های نا آشنا وایجاد ارتباط ودرک فعالیت محیط جدید بهره میجوییم</p>
             </Description>
             <CardTitle>چرا ما ؟</CardTitle>
             <Description>
                 <p>ما برای ایجاد محیطی جدید وچشم نواز به طراحی تابلوهای راهنما واستانداردهای جهانی توجه میکنیم</p>
             </Description>
             <CardTitle>چه کسی ؟</CardTitle>
             <Description>
                 <p>تیم ما با تکیه به دانش فنی ومطالعات بروز، حرفه ای و واجد شرایط برای اجرای پروژه های شماست.</p>
             </Description> 
             <CardTitle>؟چگونه</CardTitle>
             <Description>
                 <p>ما فکر میکنیم وبرای رسیدن به هدف ( تشخیص صحیح وسعی دریک پارچه سازی ) عمل میکنیم</p>
             </Description>
             <CardTitle>جهت مشاوره و استعلام قیمت رایگان با ما درارتباط باشید:</CardTitle>
             <div className="tw-flex tw-mt-8 tw-w-full tw-justify-center">
                <div className="tw-relative tw-text-xl tw-py-4 tw-h-24 tw-w-8/12 tw-text-center tw-rounded-lg tw-shadow-xl tw-bg-gray-300 tw-border-r-4 tw-border-green-700">
                   <p>پاسخگوی سریع</p>
                   <a href="tel://+989392644472">09392644472</a>
                </div>
             </div>
             <CardTitle>انواع تابلو راهنما</CardTitle>
             <Description>
                 <p>تابلوهای راهنمای طبقات از لحاظ کلی وبا توجه به نیاز کارفرما به سه دسته تقسیم میگردند</p>
                 <p>1- تابلوهایی که درصورت تغییر کاربری اتاقها وتغییر در متون مندرج در تابلوها  قابلیت تعویض وتغییر آسان را داشته باشند که کد معرفی آنها با عدد(1) شروع میشوئد.</p>
                 <p>2- تابلوهایی که متون آنها ثابت وغیر قابل تغییر هستند ونهایتا ، طراحی اولیه باید به گونه ای باشد که احتمال جابجایی اتاقها در نظر گرفته شود وجای پیچهای اتصال به ساختمان ، یکسان پیش بینی شده که در صورت لزوم امکان تعویض تابلوها با یکدیگر میسر باشد که کد معرفی آنها با عدد (2) شروع وکد گذاری شده اند</p>
                 <p>3- تابلوهایی که متون آنها ثابت وبا طراحی خاص برای محیط طراحی وساخته شده وامکان جابجایی وتغییر در آنها وجود ندارند که کد معرفی آنها با عدد (3) شروع میشوند </p>
             </Description>
             <CardTitle>محصولات مرتبط</CardTitle>
             <CustomizedServices services={services} cname="tw-mt-12"/>
        </div>     
    </Templet>
}


export default StandsScreen

