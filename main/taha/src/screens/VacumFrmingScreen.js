import React from 'react';
import vacum from "../images/vacum.jpg"
import vacumEx from "../images/vacum-ex.png"
import vacumLogo from "../images/logo-vacum.jpg"
import guranty from "../images/Guranty.png"
import phone from "../images/phone.png"
import CardTitle from '../components/VacumScreen/cardTitle';
import Description from '../components/VacumScreen/Description';
import Templet from '../components/common/Templet';
import FreeConsult from '../components/common/FreeConsult';


function VacumFrmingScreen() {

    return <Templet>
        <div 
        className="tw-flex tw-w-full tw-flex-col tw-justify-center " 
        style={{ fontFamily: "Lalezar" }}
        >
            <div className="tw-flex tw-mt-8 tw-w-full tw-justify-center">
                <div className="tw-relative tw-h-60 tw-w-8/12 tw-rounded-lg tw-shadow-md">
                    <img className="tw-flex-wrap tw-h-full tw-w-full" src={vacum}></img>
                </div>
             </div>
             <div className="tw-flex tw-justify-center tw-flex-col">
                 <CardTitle>وکیوم فرمینگ</CardTitle>
                 <Description>
                    <p>فرآیند انجام کار وکیوم فرمینگ بدین صورت است که ابتدا طرح مورد نظر که حروف، آرم و یا لوگو است را به صورت 2 و یا 3 بعدی طراحی نموده و چوب ام دی اف خام را با ضخامت دلخواه توسط ماشین سی ان سی تراش داده و پس از پرداخت کاری قالب ساخته شده را در ماشین وکیوم فرمینگ قرار می دهیم.</p>
                     <p>  سپس با گرما دهی به ورق گرما پذیر مورد نظر ( اکرولیک یا ای بی اس و یا هایمپک ) و قرار دادن آن بروی قالب ، هوای ما بین قالب و ورق را تخلیه نموده که این امر موجب شکل پذیری ورق شده و سپس ضایعات ورق از محصول ساخته شده جدا سازی میشود و محصول آماده استفاده برای پروژه و یا آبکاری میگردد.</p>
                 </Description>
                 <section className="tw-flex tw-justify-center tw-my-10 tw-text-center tw-text-xl">
                   <div className=" tw-h-96 tw-w-80 tw-rounded-lg tw-shadow-md tw-bg-transparent tw-flex-col tw-space-y-3">
                      <img className="tw-flex-wrap tw-h-full tw-w-full" src={vacumEx}></img>
                       <p>حروف وکیوم فرمینگ ساده</p>
                   </div>
                 </section>
                 <CardTitle>وکیوم ساده</CardTitle>
                 <Description>
                         <p>زمانیکه طرح حروف واشکال به صورت ساده در چوب ام دی اف با ضخامت دلخواه برش خورده و ورق گرما پذیر را بر اساس آن فرم دهیم را وکیوم ساده می نامیم</p>
                         <p>کاربرد این روش در تولید حروف های برجسته بسیار زیاد است</p>
                         <p>پیشنهاد میکنیم بعلت بالا رفتن مقاومت ورق بخاطر فرم گرفتن آن، در ساخت حروف های بزرگ و منصوب بروی بام و نما که همیشه در معرض فشار باد و طوفان هستند از این مدل استفاده شود</p>
                         <p>قیمت وکیوم ساده مطابق انواع حروف برجسته براساس متراژ دور حروف بوده و البته کیفیت ام دی اف برای قالب و ورق گرما پذیر و سایز و ابعاد آن سه عنصر تاثیر گذار در قیمت هستند</p>
                 </Description>
                 <CardTitle>وکیوم سه بعدی</CardTitle>
                 <Description>
                    <p>هنگامی که طرح ما به صورت 3 بعدی باشد بدیهی است بر اساس آن قالب هم باید 3 بعدی ساخته شود </p>
                    <p>تفاوت وکیوم سه بعدی با وکیوم ساده در نوع و میزان ماشین کاری و کیفیت ام دی اف مصرفی است که البته برای تعداد کم از قالب چوبی و برای کیفیت بهتر محصول و دوام قالب از آلومینیوم استفاده می شود </p>
                     <p>بعنوان مثال : لوگو خودروسازی های تویوتا ، هیوندای و… در سردرب نمایندگی های خود از آرمهای سه بعدی با این تکنیک استفاده می کنند</p>
                 </Description>
                 <section className="tw-flex tw-justify-center tw-my-10 tw-text-center tw-text-xl">
                   <div className=" tw-h-96 tw-w-80 tw-rounded-lg tw-shadow-md tw-bg-transparent tw-flex-col tw-space-y-3">
                      <img className="tw-flex-wrap tw-h-full tw-w-full" src={vacumLogo}></img>
                       <p>لوگو وکیوم فرمینگ با آبکاری</p>
                   </div>
                 </section>
                 <CardTitle>وکیوم با آبکاری</CardTitle>
                 <Description>
                     <p>زمانیکه میخواهیم محصول وکیوم شده ظاهر استیل به خود بگیرد ، پس از مراحل تولید به 3 روش فانتاکروم یا آبکاری تحت خلاء و آبکاری به روش شیمیایی آن را آبکاری میکنیم که البته متناسب با ابعاد و مورد مصرف روش آبکاری متفاوت است.</p>
                     <p>در روش فانتاکروم نیترات نقره را با پیستولت مخصوص بروی قطعه پاشیده تا قطعه مورد نظر کروم رنگ شده و نمای استیل بخود بگیرد واز آنجا که نیترات نقره بخودی خود در مجاورت هوا اکسیده شده و تغییر رنگ میدهد ، بروی آن مواد تثبیت کننده پاشیده میشود و در صورتی که هدف ، تولید استیل رنگی باشد ، جوهر رنگی به مواد تثبیت کننده افزوده می گردد که این امر موجب شدن استیل رنگی میگردد. بدیهی است قطعات رنگی به غیر از کروم سیلور اگر در مقابل تابش نور مستقیم آفتاب قرار گیرند رنگ جوهر افزوده شده به مواد تثبیت کنند رفته و به رنگ سیلور مبدل میگردد.</p>
                 </Description>
                 <CardTitle>وکیوم با قابلیت عبور نور</CardTitle>
                 <Description>
                     <p>این مدل کار بسیار زیبا و نسبتا پرهزینه است ، بدین صورت که حتما برای عملیات وکیوم فرمینگ باید از ورق اکرولیک شفاف و قالب آلومینیوم استفاده گردد و در زمان پاشش نیترات نقره باید به صورت کاملا حرفه ای و نازک پاشش انجام شود تا ضمن سیلور شدن محصول ، توان عبور نور را هم از خود داشته باشد </p>
                     <p>انجام مراحل فوق الذکرموجب میشود تا محصول نهایی در روز به شکل فلز استیل و در شب به رنگ نوری که داخل آن تعبیه شده مثلا سفید روشن و دیده شود</p>
                 </Description>
                 <section className="tw-flex tw-my-7 tw-space-y-16 lg:tw-space-y-0 tw-justify-center tw-flex-col lg:tw-flex-row">
                     <div className="tw-flex lg:tw-w-2/6 tw-justify-center tw-my-5">
                        <div className="tw-relative tw-h-20 tw-w-20">
                           <img className="tw-flex-wrap tw-h-full tw-w-full" src={guranty}></img>
                           <p>ضمانت کیفیت</p>
                        </div>
                     </div>
                     <div className="tw-flex lg:tw-w-2/6 tw-justify-center tw-my-5">
                        <div className="tw-relative tw-h-20 tw-w-24">
                           <img className="tw-flex-wrap tw-h-full tw-w-full" src={phone}></img>
                           <p className="tw-text-red-500">پاسخگوی سریع</p>
                           <a href="te:+989392644472">09392644472</a>
                        </div>
                     </div>
                 </section>
                 <section>
                     <FreeConsult cname="tw-mt-32"/>
                 </section>
             </div>
        </div>
    </Templet>
}


export default VacumFrmingScreen

