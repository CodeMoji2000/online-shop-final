import React from 'react'
import Templet from '../common/Templet'
import list from "../../images/ListOfAgents.png"
import CardTitle from '../VacumScreen/cardTitle'
import Description from '../VacumScreen/Description'
import Exclusive from './exclusive'
import CardSlider from '../common/CardSlider'
import CustomizedServices from '../HomeScreen/CustomizedServices'
import { services } from './common/nav'


export default function RoyeBam() {
    return <Templet>
         <div 
        className="tw-flex tw-w-full tw-flex-col tw-justify-center " 
        style={{ fontFamily: "Lalezar" }}
        >
             <div className="tw-flex tw-mt-8 tw-w-full tw-justify-center">
                <div className="tw-relative tw-h-60 tw-w-8/12 tw-rounded-lg tw-shadow-md">
                    <img className="tw-flex-wrap tw-h-full tw-w-full" src={list}></img>
                </div>
             </div>
             <CardTitle>تابلوهای روی بام</CardTitle>
             <Description>
                 <p>
                 معمولا برای تصمیم گیری درخصوص طراحی ،ساخت ونصب تابلو بروی بام شاید با سوالات ذیل مواجه باشید
                 </p>
                 <p>
                 الف – چگونه تابلوروی بام را طراحی کنیم ؟
                 </p>
                 <p>
                 ب – استحکام سازه تابلو وحفظ آبندی سقف ساختمان چطور محاسبه شود ؟
                 </p>
                 <p>
                 ج – چگونه سایز تابلووحروف برجسته مندرج در آن را انتخاب کنیم ؟
                 </p>
                 <p>
                 د – سایز فونت با قابلیت رویت وخوانایی حروف ونمای آن در شب و روزرا چطور برآورد کنیم ؟
                 </p>
                 <p>
               : با چه هدفی تابلوروی بام یا نمای ساختمان نصب شود وحوزه انتظارات 
                 </p>
                 <p>
                  الف - شناسایی ساختمان ازموقعیت های دورتر ومتمایز نمودن آن از ساختمان های مجاور
                 </p>
                 <p>
                 ب - ثبت برند در بالاترین نقطه وتاثیر تبلیغاتی وروانی آن.
                 </p>
                 <p>
                ج - تکمیل نما وخلق زیبایی بصری وهمچنین امکان ایجاد فضای تبلیغاتی.
                 </p>
                 <p>
                 چ - پوشش مناسب وزیبا برای تجهیزات ساختمان که بروی بام قرار گرفته اند
                 </p>
                 <p>
                  ح-قابلیت دیده شدن های مکرر وایجاد ارتباط روانی در ذهن مخاطب.
                 </p>
                 <p>
                 خ–شخصیت بخشیدن به ساختمان.
                 </p>
                 <p>
                 گروه تابلوسازی طاها با تکیه برعلم و تجربه خود در این حوزه میتواند پاسخی مناسب و راهکاری ارزشمند ارائه دهد.
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
