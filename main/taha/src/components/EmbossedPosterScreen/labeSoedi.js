import React, { useState } from 'react'
import CardTitle from '../VacumScreen/cardTitle';
import Description from '../VacumScreen/Description';
import Templet from '../common/Templet';
import CardSlider from '../common/CardSlider'
import swedish from '../../images/swedish.jpg'
import MoreDescription from './common/moreDescription';
import b from '../../images/b.png'
import b2 from '../../images/b2.png'
import almasi1 from '../../images/chalenum-almasi1.png'
import almasi2 from '../../images/chalenum-almasi2.png'
import crystal1 from '../../images/chalenum-crystal1.png'
import crystal2 from '../../images/chalenum-crystal2.png'
import CustomizedServices from '../HomeScreen/CustomizedServices';
import { services } from './common/nav';

function Swedish() { 

    const Par = ()=>{
        return (
         <div className="tw-space-y-1 lg:tw-space-y-3">
             <p className="tw-text-2xl tw-text-gray-700">حروف برجسته لبه فیتو</p>
                <p>
                صفحه : پلکسی که اطراف آن توسط ماشین سی ان سی 2 میلیمتر به داخل حروف، شیار ایجاد میشود
                </p>
                <p>
                لبه : آلومینیوم مات یا براق ویا خش دار با ارتفاع  3 تا 7 سانتیمتر
                </p>
                <p>
                پشت کار : پی وی سی 5 الی 10 میلیمتر
                </p>
                <p>
                نور: اس ام دی دوازده ولت مدل زیگزاگی که نباید به طور مستقیم به برق شهر وصل گردد
                </p>
                <p>
                توضیحات : در صورتی که لبه اکرولیک شیاردار نشود با گذشت زمان آلومینیوم لبه از صفحه جدا خواهدشد
                </p>
                <p>
                درکارخانه ما لبه آلومینیوم با دستگاه تمام اتوماتیک شکل وفرم میگیرد
                </p>
        </div>

    )
}
const Par2=()=>{
    return (
        <div className="tw-space-y-1 lg:tw-space-y-3">
            <p className="tw-text-2xl tw-text-gray-700">حروف برجسته لبه سوئدی یا آلومینیوم</p>
               <p>
               صفحه : اکرولیک با ضخامت 8/2 میلیمتر که در اطراف آن با ماشین سی ان سی یک پله ایجاد میشود
               </p>
               <p>
               لبه : آلومینیوم مات ، براق ویا خش دار از 3 سانتیمتر تا 7 سانتیمتر
               </p>
               <p>
               پشت کار : پی وی سی 5 الی 10 میلیمتر
               </p>
               <p>
               نور: اس ام دی دوازده ولت مدل زیگزاگی که نباید به طور مستقیم به برق شهر وصل گردد.
                 </p>
               <p>
               توضیحات : در صورتی که لبه اکرولیک پله نشود با گذشت زمان آلومینیوم لبه از صفحه خواهدشد .
درکارخانه ما لبه آلومینیوم با دستگاه تمام اتوماتیک شکل وفرم میگیرد.
               </p>
       </div>
   )
}
const Par3=()=>{
    return (
        <div className="tw-space-y-1 lg:tw-space-y-3">
            <p className="tw-text-2xl tw-text-gray-700">حروف برجسته لبه سوئدی یا آلومینیوم با صفحه کروم وقابلیت عبور نور</p>
               <p>
               صفحه : اکرولیک با ضخامت 8/2 میلیمتر که در اطراف آن با ماشین سی ان سی یک پله ایجاد میشودوپس از ساخت صفحه آبکاری شده وجلوه استیل به خود میگیرد.
               </p>
               <p>
               لبه : آلومینیوم مات ، براق ویا خش دار از 3 سانتیمتر تا 7 سانتیمتر
               </p>
               <p>
               پشت کار : پی وی سی 5 الی 10 میلیمتر
               </p>
               <p>
               نور: اس ام دی دوازده ولت مدل زیگزاگی که نباید به طور مستقیم به برق شهر وصل گردد.
                   </p>
               <p>
               توضیحات : در صورتی که لبه اکرولیک پله نشود با گذشت زمان آلومینیوم لبه از صفحه خواهدشد
               </p>
               <p>
               آبکاری این مدل حروف به گونه ای است که امکان عبور نور از صفحه وجود دارد و موجب این خواهد شدکه در روز حروف را استیل ودر شب روشن ببینیم.
درکارخانه ما لبه آلومینیوم با دستگاه تمام اتوماتیک شکل وفرم میگیرد.
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
                    <img className="tw-flex-wrap tw-h-full tw-w-full" src={swedish}></img>
                </div>
             </div>
             <CardTitle>حروف لبه سوئدی</CardTitle>
             <Description>
                 <p> 
                 حروف لبه سوئدی به حروف برجسته ای اطلاق می شود که  که صفحه آن از ورق اکرولیک و لبه از آلومینیوم باشد وهر دو متریال بصورت لب به لب چسبانده شوند و درصورتی که در حاشیه صفحه شکافی ایجاد و لبه آلومینیوم یک میلیمتر کو چکتر از صفحه چسبانده شودريا، آن را لبه فیتو مینامیم . حروف لبه سوئدی برخلاف حروف چنلیوم و مثل حروف برجسته فلزی واستنلس استیل محدویتی در اندازه لبه آن وجود ندارد و میتوان در ساخت حروف های خیلی ظریف از این مدل بهره جست.                
                 </p>
             </Description> 
             <CardTitle>نحوه ساخت حروف لبه سوئدی در گروه طاها</CardTitle>
             <Description>
                 <p>
                 در مجموعه تابلوسازی طاها صفحه حروف لبه سوئدی با دستگاه سی ان سی برش خورده ولبه آن توسط ماشین تمام اتوماتیک فرم دهی واتصال لبه به صفحه توسط چسب انجام میشود. اتصال لبه آلومینیوم به ورق اکرولیک توسط چسب انجام میپذیرد که بعلت اینکه عکس العمل اکرولیک و آلومینیوم در مقابل سرما و گرمای محیط بسیار با یکدیگر متفاوت است و قطعا پس از مدتی این دو از هم جدا میشوند در صورت تمایل به سفارش حروف لبه سوئدی حتما باید در اطراف ورق اکرولیک با سی ان سی پله و شکافی ایجاد شود تا آلومینیوم در شیار تعبیه شده قرارگرفته و سپس چسب کاری شود که این مهم باعث افزایش طول عمر و ایجاد ظرافت لازم در حروف میشود
                 </p>
             </Description>
             <CardTitle> قیمت ساخت حروف لبه سوئدی</CardTitle>
             <Description>
                 <p>
                 قیمت حروف سوئدی مطابق سایر حروف برجسته ، براساس متر محیط دور حروف محاسبه میشود. امکان بازدید از مراحل کار و تولید سفارشات شما با هماهنگی قبلی از کارگاه اختصاصی گروه تابلوسازی  طاها مهیا است. برای دیدن تنوع حروف برجسته آلومینیومی و نوع نور پردازی و اطلاع از مشخصات فنی از عکس های و نمونه های زیر دیدن فرمایید.
                 </p>
             </Description>
             <div className="tw-flex tw-mt-8 tw-w-full tw-justify-center">
                <div className="tw-relative tw-py-4 tw-h-16 tw-w-8/12 tw-text-center tw-rounded-lg tw-shadow-xl tw-bg-gray-300 tw-border-r-4 tw-border-green-700">
                   <a href="tel://+989121126383">09120480676</a>
                </div>
             </div>
             <CardTitle>
                 <p className="tw-text-green-600">
                 انواع حروف استیل
                </p>
            </CardTitle>
             <MoreDescription src1={b} src2={b2} par={<Par/>}> 
                 <p className="tw-py-3 tw-text-xl tw-text-gray-600">حروف برجسته لبه فیتو</p>
                 <p>
                 صفحه : پلکسی که اطراف آن توسط ماشین سی ان سی 2 میلیمتر به داخل حروف، شیار ایجاد میشود. لبه : آلومینیوم مات یا براق ویا خش دار با ارتفاع  3 تا 7 سانتیمتر پشت کار : پی وی سی 5 الی 10 میلیمتر نور: اس ام دی دوازده ولت...                 </p>
             </MoreDescription>
             <MoreDescription  src1={almasi1} src2={almasi2} par={<Par2/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600">حروف برجسته لبه سوئدی یا آلومینیوم</p>
             <p>
             صفحه : اکرولیک با ضخامت 8/2 میلیمتر که در اطراف آن با ماشین سی ان سی یک پله ایجاد میشود. لبه : آلومینیوم مات ، براق ویا خش دار از 3 سانتیمتر تا 7 سانتیمتر پشت کار : پی وی سی 5 الی 10 میلیمتر نور: اس ام دی دوازده...             </p>
             </MoreDescription>
             <MoreDescription src1={crystal1} src2={crystal2} par={<Par3/>}>
             <p className="tw-py-3 tw-text-xl tw-text-gray-600">حروف برجسته لبه سوئدی یا آلومینیوم با صفحه کروم وقابلیت عبور نور</p>
             <p>
             صفحه : اکرولیک با ضخامت 8/2 میلیمتر که در اطراف آن با ماشین سی ان سی یک پله ایجاد میشودوپس از ساخت صفحه آبکاری شده وجلوه استیل به خود میگیرد. لبه : آلومینیوم مات ، براق ویا خش دار از 3 سانتیمتر تا 7 سانتیمتر پشت کار : پی وی...             </p>
             </MoreDescription>
             <CustomizedServices services={services} cname="tw-mt-4"/>
        </div>
    </Templet>
}


export default Swedish