import React, { useState } from 'react'
import CardTitle from '../VacumScreen/cardTitle';
import Description from '../VacumScreen/Description';
import Templet from '../common/Templet';
import metal from '../../images/metal.jpg'
import MoreDescription from './common/moreDescription';
import metal1 from '../../images/metal1.png'
import metal2 from '../../images/metal2.png'
import metal3 from '../../images/metal3.png'
import metal5 from '../../images/metal5.png'
import metal7 from '../../images/metal7.png'
import metal9 from '../../images/metal9.png'
import metal10 from '../../images/metal10.png'
import metal11 from '../../images/metal11.png'
import metal12 from '../../images/metal12.png'
import metal13 from '../../images/metal13.png'
import metal14 from '../../images/sampleImages/metal1.png'
import metal15 from '../../images/sampleImages/metal2.png'
import metal16 from '../../images/sampleImages/metal3.png'
import metal17 from '../../images/sampleImages/metal5.png'
import metal18 from '../../images/sampleImages/metal6.png'
import CustomizedServices from '../HomeScreen/CustomizedServices';
import { services } from './common/nav';



function Metal() { 

    const Par = ()=>{
        return (
         <div className="tw-space-y-1 lg:tw-space-y-7">
             <p className="tw-text-2xl tw-text-gray-700">حروف برجسته فلزی با اکرولیک لوله ای</p>
                <p>
                صفحه :  ورق آهن ویا استنلس استیل با ضخامت6/0 الی 1 میلیمتر توسط فایبر سوراخهایی به قطر یک سانتیمتر ایجاد شده و پلکسی لوله ای شفاف را به بروی پلکسی شیری رنگ میچسبانیم به صورتی که لوله ها از سطح حروف به میزان دلخواه بیرون آید. ( ضخامت ورق بستگی به قطر قلم حروف وسایز آن دارد )
                </p>
                <p>
                لبه :  ورق باضخامت 6/0 میلیمتر فلزی ویا استنلس استیل از 4 الی11 سانتی متر(درسایز های بیش از 11 سانت باید ورق ضخیمتر استفاده گردد)
                </p>
                <p>
                پشت کار : پی وی سی 10 میلیمتردر لبه تا 11 سانت و16 میلیمتردرلبه های بیشتر از 11 سانت استفاده میگردد.
                </p>
                <p>
                نور : اس ام دی منصوب بروی پی وی سی  به طور مستقیم نور به اکرولیک میتابد که موجب روشن شدن لوله های شفاف در صفحه حروف خواهدشد ( برای زیبایی بیشتر بهتراست از اس ام دی آرجی بی استفاده شود)
                </p>
                <p>
                توضیحات : رنگ آمیزی حروف در صورتی که از آهن ساخته شود را میتوان با رنگ روغن ،  فوری ، کوره ای و یا الکترواستاتیک انجام نمود
                </p>
                <p>
                درکارخانه ما صفحه آهن واستنلس استیل به لبه حروف توسط جوش لیزر متصل ولبه توسط دستگاه تمام اتوماتیک شکل وفرم میگیرد.
                </p>
        </div>

    )
}
const Par2=()=>{
    return (
        <div className="tw-space-y-1 lg:tw-space-y-7">
            <p className="tw-text-2xl tw-text-gray-700">حروف برجسته فلزی لبه پانچ دو طرفه</p>
               <p>
               لبه : ورق آهن 6/0میلیمتر با ارتفاع 4 الی 50 سانتیمترکه توسط فایبر با نقشهای گوناگون دردو ردیف مجزا برش میخورد. ( ضخامت ورق بستگی به قطر قلم وسایز حروف دارد ).
               </p>
               <p>
               پشت کار : پی وی سی 10 میلیمتردر لبه تا 11 سانت و16 میلیمتردرلبه های بیشتر از 11 سانت استفاده میگردد.
               </p>
               <p>
               نور: تابش نور توسط اس ام دی در دورنگ در پشت و روی یک صفحه که در قسمت میانی حروف نصب میشود تامین میگردد.
               </p>
               <p>
               توضیحات : رنگ آمیزی حروف را میتوان با رنگ روغن ،  فوری ، کوره ای و یا الکترواستاتیک انجام داد.
                   </p>
               <p>
               درکارخانه ما صفحه آهن واستنلس استیل به لبه حروف توسط جوش لیزر متصل ولبه توسط دستگاه تمام اتوماتیک شکل وفرم میگیرد.
               </p>
       </div>

   )
}
const Par3=()=>{
    return (
        <div className="tw-space-y-1 lg:tw-space-y-7">
            <p className="tw-text-2xl tw-text-gray-700">حروف برجسته فلزی دولایه باهاله نور</p>
               <p>
               صفحه: ورق فلزی ( آهن یا استنلس استیل ) با ضخامت حداقل 6/0 میلیمتر و دو لایه به صورت معکوس ساخته ومابین آنها پلکسی شفاف ویا دوغی رنگ که به صورت استروگ برش خورده قرارمیگیرد. ( ضخامت ورق بستگی به قطر قلم وسایزحروف دارد )
               </p>
               <p>
               لبه : ورق آهن یا استنلس استیل به ضخامت حداقل6/0میلیمتر ( ضخامت ورق متناسب با سایز حروف معین میگردد)
               </p>
               <p>
               پشت کار : حروفی که به صورت معکوس ساخته شده قرار میگیرد 
               </p>
               <p>
               نور: تابش نور توسط اس ام دی که به کف حروف معکوس چسبانده میشود تامین میگردد.
                   </p>
               <p>
               توضیحات : در صورت استفاده از آهن میتوان آن را  با رنگ روغن ،  فوری ، کوره ای و یا الکترواستاتیک رنگ آمیزی نمود .
               </p>
               <p>
               درکارخانه ما صفحه آهن واستنلس استیل به لبه حروف توسط جوش لیزر متصل ولبه توسط دستگاه تمام اتوماتیک شکل وفرم میگیرد.
               </p>
       </div>

   )
}
const Par4=()=>{
    return (
        <div className="tw-space-y-1 lg:tw-space-y-7">
            <p className="tw-text-2xl tw-text-gray-700">حروف برجسته فلزی تو در تو</p>
               <p>
               صفحه :  ورق آهن با ضخامت 6/0 الی 1 میلیمتر به صورت استروگ با لبه و سایز دلخواه برش خورده و داخل  حروف کوچکتر پس از ساخت جای میگیرد.
               </p>
               <p>
               لبه :  ورق با ضخامت 6/0 میلیمتر آهن از 3 الی50 سانتی متری (درسایز های بیش از 11 سانت باید ورق ضخیمتر استفاده گردد)
               </p>
               <p>
               پشت کار : پی وی سی 10 میلیمتردر لبه تا 11 سانت و16 میلیمتردرلبه های بیشتر از 11 سانت استفاده میگردد
               </p>
               <p>
               توضیحات : رنگ آمیزی حروف را میتوان با رنگ روغن ،  فوری ، کوره ای و یا الکترواستاتیک انجام داد
                   </p>
               <p>
               درکارخانه ما صفحه آهن با فایبر برش خورده و اتصال آن به لبه حروف توسط جوش لیزر وفرم دهی لبه توسط دستگاه تمام اتوماتیک انجام میپذیرد.
               </p>

       </div>

   )
}
const Par5=()=>{
    return (
        <div className="tw-space-y-1 lg:tw-space-y-7">
            <p className="tw-text-2xl tw-text-gray-700">حروف برجسته فلزی نور متمرکز</p>
               <p>
               صفحه: ورق آهن با پوشش رنگهای متنوع براق و مات روغنی ، فوری کوره ای و یا الکترواستاتیک(ضخامت ورق به سایز حروف بستگی دارد) .
               </p>
               <p>
               لبه :  ورق 6/0 میلیمتر آهن با ارتفاع از 1 الی ...... سانتی متر
               </p>
               <p>
               پشت کار : پلکسی دوغی رنگ با ضخامت از 5 /0 الی 1 سانتی متر
               </p>
               <p>
               نور : اس ام دی به پشت سطح حروف نصب شده و به طور مستقیم نور به پلکسی میتابد (پلکسی زیر حروف روشن میشود)
                </p>
               <p>
               درکارخانه ما صفحه آهن با فایبر برش خورده و اتصال آن به لبه حروف توسط جوش لیزر وفرم دهی لبه توسط دستگاه تمام اتوماتیک انجام میپذیرد.
               </p>
       </div>

   )
}
const Par6=()=>{
    return (
        <div className="tw-space-y-1 lg:tw-space-y-7">
            <p className="tw-text-2xl tw-text-gray-700">حروف برجسته نوراندریک</p>
               <p>
               صفحه: ورق آهن با پوشش رنگهای متنوع براق و مات روغنی ، فوری کوره ای و یا الکترواستاتیک(ضخامت ورق به سایز حروف بستگی دارد) .
               </p>
               <p>
               لبه : ورق آهن 6/0میلیمتر با ارتفاع از 1 الی 50 سانتیمتر(درسایز بیش از 8 سانتیمتر بایدضخامت ورق بیشتر باشد)
               </p>
               <p>
               پشت کار : نداشته وبعلت پایه های تعبیه شده در اطراف حروف موجب با فاصله قرارگرفتن حروف از زمینه میشود
               </p>
               <p>
               نور: تابش نور بوسیله اس ام دی که در داخل و پشت سطح حروف نصب شده تامین میگردد 
                   </p>
               <p>
               لامپهای داخل حروف دوازده ولت بوده و اگر مستقیما به برق شهری وصل شوند سوخته و کارایی خود را از دست خواهند داد
               </p>
               <p>
               درکارخانه ما صفحه آهن با فایبر برش خورده و اتصال آن به لبه حروف توسط جوش لیزر وفرم دهی لبه توسط دستگاه تمام اتوماتیک انجام میپذیرد
               </p>
       </div>

   )
}
const Par7 = ()=>{
    return (
     <div className="tw-space-y-1 lg:tw-space-y-7">
         <p className="tw-text-2xl tw-text-gray-700">حروف برجسته فلزی با رینگی تخت و پلکسی آگاما</p>
            <p>
            صفحه :  ورق آهن با ضخامت 6/0 الی 1 میلیمتر به صورت استروگ با لبه و سایز دلخواه برش خورده و پلکسی  آگاما  با ضخامت 8/2 میلیمتر داخل حروف برجسته رینگی تخت فلزی جای میگیرد ( آگاما ) در 4 رنگ قرمز، آبی ، سبز و سیاه میباشد که در روز و حالت خاموشی رنگ خود و در شب و حالت روشنایی رنگ نور اس ام دی را به خود میگیرد مثل نمایندگی های شرکت رنو که حروف آنها در روز سیاه ودر شب سفید دیده میشوند.
            </p>
            <p>
            لبه :  ورق با ضخامت 6/0 میلیمتر آهن با ارتفاع از 4 الی11 سانتی متر
            </p>
            <p>
            پشت کار : پی وی سی 10 میلیمتر
            </p>
            <p>
            نور : اس ام دی منصوب بروی پی وی سی  به طور مستقیم نور به پلکسی میتابد که موجب روشن شدن حروف وتغییر رنگ آن خواهدشد.
            </p>
            <p>
            توضیحات : رنگ آمیزی حروف را میتوان با رنگ روغن، فوری،کوره ای و یا الکترواستاتیک انجام داد.
            </p>
            <p>
            درکارخانه ما صفحه آهن با فایبر برش خورده و اتصال آن به لبه حروف توسط جوش لیزر وفرم دهی لبه توسط دستگاه تمام اتوماتیک انجام میپذیرد.
            </p>
    </div>

)
}
const Par8 = ()=>{
    return (
     <div className="tw-space-y-1 lg:tw-space-y-7">
         <p className="tw-text-2xl tw-text-gray-700">حروف برجسته فلزی رینگی تخت با وکیوم</p>
            <p>
            صفحه :  ورق آهن با ضخامت حداقل 6/0 میلیمتر به صورت استروگ برش خورده و سطح اصلی حروف توسط پلکسی وکیوم شده به صورت ساده ویا سه بعدی پوشانده میشود ( ضخامت ورق بستگی به قطر قلم و سایز حروف دارد )
            </p>
            <p>
            لبه :  ورق با ضخامت حداقل 6/0 میلیمتر آهن با ارتفاع از 3 الی 50 سانتی متر  ( ضخامت ورق بستگی به قطر قلم و سایز حروف دارد )
            </p>
            <p>
            پشت کار : پی وی سی 10 میلیمتردر لبه تا 11 سانت و16 میلیمتردرلبه های بیشتر از 11 سانت استفاده میگردد.
            </p>
            <p>
            نور : اس ام دی منصوب بروی پی وی سی  به طور مستقیم نور به پلکسی میتابد که موجب روشن شدن صفحه حروف خواهدشد.
            </p>
            <p>
            توضیحات : در صورت استفاده از آهن میتوان آن را  با رنگ روغن ،  فوری ، کوره ای و یا الکترواستاتیک رنگ آمیزی نمود .
            </p>
            <p>
            درکارخانه ما صفحه آهن واستنلس استیل به لبه حروف توسط جوش لیزر متصل ولبه توسط دستگاه تمام اتوماتیک شکل وفرم میگیرد
            </p>
    </div>

)
}
const Par9 = ()=>{
    return (
     <div className="tw-space-y-1 lg:tw-space-y-7">
         <p className="tw-text-2xl tw-text-gray-700">حروف برجسته فلزی</p>
            <p>
            صفحه: ورق آهن و یا استنلس استیل با ضخامت حداقل 6/0 میلیمتر( ضخامت ورق بستگی به قطر قلم و سایز حروف دارد )
            </p>
            <p>
            لبه :  ورق با ضخامت حداقل 6/0 میلیمتر آهن با ارتفاع از 1 الی 50 سانتی متر  ( ضخامت ورق بستگی به قطر قلم و سایز حروف دارد )
            </p>
            <p>
            پشت کار : پی وی سی 10 میلیمتردر لبه تا 11 سانت و16 میلیمتردرلبه های بیشتر از 11 سانت استفاده میگردد
            </p>
            <p>
            نور: تابش نور توسط پرژکتور از روبرو ویا توسط اس ام دی زیر حروف به صورت نوراندریک ویا نورمتمرکز تامین میشود.
            </p>
            <p>
            توضیحات : در صورت استفاده از آهن میتوان آن را  با رنگ روغن ،  فوری ، کوره ای و یا الکترواستاتیک رنگ آمیزی نمود .
            </p>
            <p>
            درکارخانه ما صفحه آهن واستنلس استیل به لبه حروف توسط جوش لیزر متصل ولبه توسط دستگاه تمام اتوماتیک شکل وفرم میگیرد.
            </p>
    </div>

)
}
const Par10 = ()=>{
    return (
     <div className="tw-space-y-1 lg:tw-space-y-7">
         <p className="tw-text-2xl tw-text-gray-700">حروف برجسته فلزی رینگی منقوش واکرولیک</p>
            <p>
            صفحه :  ورق آهن باضخامت 6/0 الی 1 میلیمتر به صورت استروگ و سطح اصلی با نقشهای گوناگون برش خورده و پلکسی  با ضخامت 8/2 میلیمتر پشت فلز صفحه نصب میشود.
            </p>
            <p>
            لبه :  ورق با ضخامت 6/0 میلیمتر آهن با ارتفاع از 4 الی50 سانتی متر( در ابعاد بیش از 11 سانت باید از صفحه ولبه با ضخامت بیشتری استفاده نمود.
            </p>
            <p>
            پشت کار : پی وی سی 10 میلیمتر تا لبه 11 سانت و16 میلیمتر برای بیش از 11 سانتیمتر
            </p>
            <p>
            نور : اس ام دی منصوب بروی پی وی سی  به طور مستقیم نور به پلکسی میتابد که موجب روشن شدن صفحه حروف خواهدشد.
            </p>
            <p>
            توضیحات : رنگ آمیزی حروف را میتوان با رنگ روغن ،  فوری ، کوره ای و یا الکترواستاتیک انجام داد.
            </p>
            <p>
            درکارخانه ما صفحه آهن با فایبر برش خورده و اتصال آن به لبه حروف توسط جوش لیزر وفرم دهی لبه توسط دستگاه تمام اتوماتیک انجام میپذیرد.
            </p>
    </div>

)
}
const Par11 = ()=>{
    return (
     <div className="tw-space-y-1 lg:tw-space-y-7">
         <p className="tw-text-2xl tw-text-gray-700">حروف فلزی رینگی دوبل با اکرولیک(پلکسی)</p>
            <p>
            صفحه :  ورق آهن با ضخامت 6/0 تا 10 میلیمتر به صورت استروگ برش خورده که از بیرون ، لبه با سایز دلخواه و از داخل لبه به اندازه 1 سانتیمتر به صفحه متصل میگردد و پلکسی  با ضخامت 8/2 میلیمتر پشت صفحه نصب میشود.            </p>
            <p>
            در مدل رینگی دوبل به نظر میآید که دور پلکسی را یک پروفیل فلزی با ضخامت و پهنای 1 سانتیمتر ویا دلخواه احاطه نموده است.            </p>
            <p>
            لبه : ضخامت ورق 6/0 میلیمتر آهن از 4 الی50 سانتی مترکه در ارتفاع بیش از 11 سانت از ورق ضخیمتر استفاده میشود.            </p>
            <p>
            پشت کار : پی وی سی 10 میلیمتردر لبه تا 11 سانت و16 میلیمتر در لبه های بیشتر از 11 سانت استفاده میگردد.            </p>
            <p>
            نور : اس ام دی منصوب بروی پی وی سی  به طور مستقیم نور به پلکسی با رنگ دلخواه میتابد که موجب روشن شدن صفحه حروف خواهدشد.
            </p>
            <p>
            توضیحات : رنگ آمیزی حروف را میتوان با رنگ روغن ،  فوری ، کوره ای و یا الکترواستاتیک انجام داد.

درکارخانه ما صفحه آهن با فایبر برش خورده و اتصال آن به لبه حروف توسط جوش لیزر وفرم دهی لبه توسط دستگاه تمام اتوماتیک انجام میپذیرد.            </p>
    </div>

)
}
const Par12 = ()=>{
    return (
     <div className="tw-space-y-1 lg:tw-space-y-7">
         <p className="tw-text-2xl tw-text-gray-700">حروف برجسته فلزی لبه پانچ</p>
            <p>
            صفحه: ورق آهن با ضخامت حداقل 6/0میلیمتر ( ضخامت ورق بستگی به قطر قلم حروف وسایز آن دارد )
            </p>
            <p>
            لبه : ورق آهن با ضخامت 6/0میلیمتر با ارتفاع از 4 الی 50 سانتیمترکه توسط فایبربا نقشهای گوناگون برش میخورد. ( ضخامت ورق بستگی به قطر قلم حروف وسایز آن دارد )
            </p>
            <p>
            پشت کار : پی وی سی 10 میلیمتردر لبه تا 11 سانت و16 میلیمتردرلبه های بیشتر از 11 سانت استفاده میگردد.
            </p>
            <p>
            نور: تابش نور توسط اس ام دی که به پشت آهن چسبانده میشود تامین میگردد
            </p>
            <p>
            توضیحات : رنگ آمیزی حروف را میتوان با رنگ روغن ،  فوری ، کوره ای و یا الکترواستاتیک انجام داد.
            </p>
            <p>
            درکارخانه ما صفحه آهن واستنلس استیل به لبه حروف توسط جوش لیزر متصل ولبه توسط دستگاه تمام اتوماتیک شکل وفرم میگیرد.
            </p>
    </div>

)
}
const Par13 = ()=>{
    return (
     <div className="tw-space-y-1 lg:tw-space-y-7">
         <p className="tw-text-2xl tw-text-gray-700">حروف برجسته فلزی چند لایه نوراندریک</p>
            <p>
            صفحه: ورق فلزی با ضخامت حداقل 6/0 میلیمتر در لایه اول و آخر به طور ساده و لایه های مابینی به صورت استروگ به داخل برش داده میشود ( ضخامت ورق بستگی به قطر قلم وسایز حروف دارد ).
            </p>
            <p>
                لبه : ورق آهن با ضخامت حداقل 6/0میلیمتر به ارتفاع حداقل 1 سانتیمتر. ( ضخامت ورق بستگی به قطر قلم وسایزحروف دارد )
            </p>
            <p>
            پشت کار : پی وی سی 10 میلیمتر برای حروف 4 لایه تا قطر قلم 10 سانت و16 میلیمتردرحروف های بزرگتر ویا با لایه های بیشتراستفاده میگردد.
            </p>
            <p>
            نور: تابش نور توسط اس ام دی که به پشت آهن اولین لایه چسبانده میشود تامین میگردد.
            </p>
            <p>
            توضیحات : رنگ آمیزی حروف را میتوان با رنگ روغن ،  فوری ، کوره ای و یا الکترواستاتیک انجام داد.
            </p>
            <p>
            درکارخانه ما صفحه آهن واستنلس استیل به لبه حروف توسط جوش لیزر متصل ولبه توسط دستگاه تمام اتوماتیک شکل وفرم میگیرد.
            </p>
    </div>

)
}
const Par14 = ()=>{
    return (
     <div className="tw-space-y-1 lg:tw-space-y-7">
         <p className="tw-text-2xl tw-text-gray-700">حروف برجسته فلزی اس ام دی فلکسی بل</p>
            <p>
            صفحه :  ورق آهن با ضخامت 6/0 الی 1 میلیمتر به صورت شیار دار برش خورده وجای اس ام دی فلکسی بل در آن پیشبینی شده ودر شیار ایجاد شده اس ام دی فلکسی بل نصب میشود.
            </p>
            <p>
            لبه :  ورق با ضخامت حداقل 6/0 میلیمتر آهن با اندازه دلخواه
            </p>
            <p>
            پشت کار : پی وی سی 10 میلیمتر
            </p>
            <p>
            نور : اس ام دی منصوب بروی صفحه روشن شده ومثل نئون میدرخشد .
            </p>
            <p>
            توضیحات : ورقهای آهن را میتوان به روشهای گوناگون اعم از رنگ روغنی، فوری اتومبیلی ،کوره ای والکترواستاتیک رنگ آمیزی نمود..
            </p>
            <p>
            اس ام دی فلکسی بل  مصرفی در حروف نباید به طور مستقیم به برق شهر وصل گردد.

درکارخانه ما صفحه آهن به لبه حروف توسط جوش لیزر متصل ، و لبه توسط دستگاه تمام اتوماتیک شکل وفرم میگیرد.
            </p>
    </div>

)
}

    return <Templet>
        <div 
        className="tw-flex tw-w-full tw-flex-col tw-justify-center " 
        style={{ fontFamily: "Lalezar" }}
        >
             <div className="tw-flex tw-mt-8 tw-w-full tw-justify-center">
                <div className="tw-relative tw-h-60 tw-w-8/12 tw-rounded-lg tw-shadow-md">
                    <img className="tw-flex-wrap tw-h-full tw-w-full" src={metal}></img>
                </div>
             </div>
             <CardTitle>فلزی</CardTitle>
             <Description>
                 <p> 
                 حروف برجسته ای که صفحه ویا لبه آن از ورق آهن ساخته شود را حروف برجسته فلزی مینامیم.                     
                 </p>
                 <p> 
                 حروف فلزی را میتوان پس ساخت با تکنیک های مختلف اعم از کوره ای ، الکترواستاتیک ، رنگ اتومبیلی ویا ساختمانی رنگ آمیزی نمود.
                 </p> 
                 <p>
                 در طراحی وساخت حروف فلزی تنوع بسیاری وجود دارد ونور پردازی آن را میتوان به شیوه های گوناگون انجام داد. اگر با پایه فلزی با صفحه زمینه فاصله اجاد شود نوراندیک واگر زیر حروف پلکسی دوغی رنگ کار شود نورمتمرکز واگر صفحه حروف برش خورده وجای خالی با پلکسی پر شود که حاصل آن روشن شدن سطح حروف خواهد بود را مدل رینگی مینامیم
                 </p>
                 <p>
                 ترکیب حروف فلزی با ورق اکرولیک وحروف وکیوم جلوه های دیگری از انواع حروف برجسته  فلزی است .
                 </p>
                 <p>
                 قیمت حروف فلزی مطابق سایر حروف برجسته ، براساس متر محیط دور حروف محاسبه میشود 
                 </p>
                 <p>
                 ضخامت وکیفیت ورق آهن و دقت در ساخت ونوع رنگ آمیزی 3 عنصر تاثیرگذار در قیمت هستند.
                 </p>
                 <p>
                 در مجموعه تابلوسازی طاها صفحه حروف برجسته فلزی با دستگاه فایبربرش خورده ولبه آن توسط ماشین تمام اتوماتیک فرم دهی واتصال لبه به صفحه توسط جوش لیزر انجام میشود
                 </p>
                 <p>
                 امکان بازدید از مراحل کار وتولید سفارشات شما با هماهنگی قبلی از کارگاه اختصاصی گروه تابلوسازی  طاها مهیا است
                 </p>
                 <p>
                 برای دیدن تنوع حروف برجسته فلزی و نوع نور پردازی و اطلاع از مشخصات فنی به عکسهای سرفصل آنها مراجعه بفرمایید
                 </p>

             </Description> 
             <CardTitle>
                 <p className="tw-text-green-600">
                 انواع حروف فلزی
                </p>
            </CardTitle>
             <MoreDescription src1={metal1} src2={metal2} par={<Par/>}> 
                 <p className="tw-py-3 tw-text-xl tw-text-gray-600">حروف برجسته فلزی با اکرولیک لوله ای</p>
                 <p>
                 صفحه :  ورق آهن ویا استنلس استیل با ضخامت6/0 الی 1 میلیمتر توسط فایبر سوراخهایی به قطر یک سانتیمتر ایجاد شده و پلکسی لوله ای شفاف را به بروی پلکسی شیری رنگ میچسبانیم به صورتی که لوله ها از سطح حروف به میزان دلخواه بیرون آید. ( ضخامت ورق بستگی...
                 </p>
             </MoreDescription>
             <MoreDescription  src1={metal3} src2={metal3} par={<Par2/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600">حروف برجسته فلزی لبه پانچ دو طرفه</p>
             <p>
             لبه : ورق آهن 6/0میلیمتر با ارتفاع 4 الی 50 سانتیمترکه توسط فایبر با نقشهای گوناگون دردو ردیف مجزا برش میخورد. ( ضخامت ورق بستگی به قطر قلم وسایز حروف دارد ). پشت کار : پی وی سی 10 میلیمتردر لبه تا 11 سانت و16 میلیمتردرلبه های بیشتر از 11...
             </p>
             </MoreDescription>
             <MoreDescription src1={metal5} src2={metal5} par={<Par3/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600">حروف برجسته فلزی دولایه باهاله نور</p>
             <p>
             صفحه: ورق فلزی ( آهن یا استنلس استیل ) با ضخامت حداقل 6/0 میلیمتر و دو لایه به صورت معکوس ساخته ومابین آنها پلکسی شفاف ویا دوغی رنگ که به صورت استروگ برش خورده قرارمیگیرد. ( ضخامت ورق بستگی به قطر قلم وسایزحروف دارد ) لبه : ورق آهن یا...
             </p>
             </MoreDescription>
             <MoreDescription src1={metal7} src2={metal9} par={<Par4/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600">حروف برجسته فلزی تو در تو</p>
             <p>
             صفحه :  ورق آهن با ضخامت 6/0 الی 1 میلیمتر به صورت استروگ با لبه و سایز دلخواه برش خورده و داخل  حروف کوچکتر پس از ساخت جای میگیرد. لبه :  ورق با ضخامت 6/0 میلیمتر آهن از 3 الی50 سانتی متری (درسایز های بیش از 11 سانت باید ورق...
             </p>
             </MoreDescription>
             <MoreDescription src1={metal10} src2={metal11} par={<Par5/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600">حروف برجسته فلزی نور متمرکز</p>
             <p>
             صفحه: ورق آهن با پوشش رنگهای متنوع براق و مات روغنی ، فوری کوره ای و یا الکترواستاتیک(ضخامت ورق به سایز حروف بستگی دارد) . لبه :  ورق 6/0 میلیمتر آهن با ارتفاع از 1 الی ...... سانتی متر پشت کار : پلکسی دوغی رنگ با ضخامت از 5 /0...
             </p>
             </MoreDescription>
             <MoreDescription src1={metal12} src2={metal13} par={<Par6/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600">حروف برجسته نوراندریک</p>
             <p>
             صفحه: ورق آهن با پوشش رنگهای متنوع براق و مات روغنی ، فوری کوره ای و یا الکترواستاتیک(ضخامت ورق به سایز حروف بستگی دارد) . لبه : ورق آهن 6/0میلیمتر با ارتفاع از 1 الی 50 سانتیمتر(درسایز بیش از 8 سانتیمتر بایدضخامت ورق بیشتر باشد) پشت کار : نداشته وبعلت...
             </p>
             </MoreDescription>
             <MoreDescription src1={metal14} src2={metal15} par={<Par7/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600">حروف برجسته فلزی با رینگی تخت و پلکسی آگاما</p>
             <p>
             صفحه :  ورق آهن با ضخامت 6/0 الی 1 میلیمتر به صورت استروگ با لبه و سایز دلخواه برش خورده و پلکسی  آگاما  با ضخامت 8/2 میلیمتر داخل حروف برجسته رینگی تخت فلزی جای میگیرد ( آگاما ) در 4 رنگ قرمز، آبی ، سبز و سیاه میباشد که در... 
             </p>
             </MoreDescription>
             <MoreDescription src1={metal16} src2={metal16} par={<Par8/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600">حروف برجسته فلزی رینگی تخت با وکیوم</p>
             <p>
             صفحه :  ورق آهن با ضخامت حداقل 6/0 میلیمتر به صورت استروگ برش خورده و سطح اصلی حروف توسط پلکسی وکیوم شده به صورت ساده ویا سه بعدی پوشانده میشود ( ضخامت ورق بستگی به قطر قلم و سایز حروف دارد ) لبه :  ورق با ضخامت حداقل 6/0 میلیمتر...
             </p>
             </MoreDescription>
             <MoreDescription  par={<Par9/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600">حروف برجسته فلزی</p>
             <p>
             صفحه: ورق آهن و یا استنلس استیل با ضخامت حداقل 6/0 میلیمتر( ضخامت ورق بستگی به قطر قلم و سایز حروف دارد ) لبه :  ورق با ضخامت حداقل 6/0 میلیمتر آهن با ارتفاع از 1 الی 50 سانتی متر  ( ضخامت ورق بستگی به قطر قلم و سایز حروف...
             </p>
             </MoreDescription>
             <MoreDescription  par={<Par10/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600">حروف برجسته فلزی رینگی منقوش واکرولیک</p>
             <p>
             صفحه :  ورق آهن باضخامت 6/0 الی 1 میلیمتر به صورت استروگ و سطح اصلی با نقشهای گوناگون برش خورده و پلکسی  با ضخامت 8/2 میلیمتر پشت فلز صفحه نصب میشود. لبه :  ورق با ضخامت 6/0 میلیمتر آهن با ارتفاع از 4 الی50 سانتی متر( در ابعاد بیش از...
             </p>
             </MoreDescription>
             <MoreDescription  par={<Par11/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600">حروف فلزی رینگی دوبل با اکرولیک(پلکسی)</p>
             <p>
             صفحه :  ورق آهن با ضخامت 6/0 تا 10 میلیمتر به صورت استروگ برش خورده که از بیرون ، لبه با سایز دلخواه و از داخل لبه به اندازه 1 سانتیمتر به صفحه متصل میگردد و پلکسی  با ضخامت 8/2 میلیمتر پشت صفحه نصب میشود.  در مدل رینگی دوبل به...
             </p>
             </MoreDescription>
             <MoreDescription  par={<Par12/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600">حروف برجسته فلزی لبه پانچ</p>
             <p>
             صفحه: ورق آهن با ضخامت حداقل 6/0میلیمتر ( ضخامت ورق بستگی به قطر قلم حروف وسایز آن دارد ) لبه : ورق آهن با ضخامت 6/0میلیمتر با ارتفاع از 4 الی 50 سانتیمترکه توسط فایبربا نقشهای گوناگون برش میخورد. ( ضخامت ورق بستگی به قطر قلم حروف وسایز آن دارد...
             </p>
             </MoreDescription>
             <MoreDescription src1={metal17} src2={metal18} par={<Par13/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600">حروف برجسته فلزی چند لایه نوراندریک</p>
             <p>
             صفحه: ورق فلزی با ضخامت حداقل 6/0 میلیمتر در لایه اول و آخر به طور ساده و لایه های مابینی به صورت استروگ به داخل برش داده میشود ( ضخامت ورق بستگی به قطر قلم وسایز حروف دارد ). لبه : ورق آهن با ضخامت حداقل 6/0میلیمتر به ارتفاع حداقل...
             </p>
             </MoreDescription>
             <MoreDescription  par={<Par14/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600">حروف برجسته فلزی اس ام دی فلکسی بل</p>
             <p>
             صفحه :  ورق آهن با ضخامت 6/0 الی 1 میلیمتر به صورت شیار دار برش خورده وجای اس ام دی فلکسی بل در آن پیشبینی شده ودر شیار ایجاد شده اس ام دی فلکسی بل نصب میشود. لبه :  ورق با ضخامت حداقل 6/0 میلیمتر آهن با اندازه دلخواه پشت...
             </p>
             </MoreDescription>
             <CustomizedServices services={services} cname="tw-mt-4"/>
        </div>
    </Templet>
}


export default Metal