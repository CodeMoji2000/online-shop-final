import React from 'react'
import b from "../images/b.png"
import c from "../images/c.png"
import d from "../images/d.png"
import a from '../images/a.png'
import e from '../images/e.png'
import f from '../images/f.png'
import g from '../images/g.png'
import h from '../images/h.png'
import i from '../images/i.png'
import CardTitle from '../components/VacumScreen/cardTitle';
import Description from '../components/VacumScreen/Description';
import Templet from '../components/common/Templet';
import FreeConsult from '../components/common/FreeConsult';
import EmbossedPoster from "../images/EmbossedPoster.jpg"
import CardSlider from '../components/common/CardSlider'

function EmbossedPosterScreen() {
    const IMAGES = [
        {
          id: 1,
          src:b ,
          legend: "حروف چنلیوم",
        },
        {
          id: 2,
          src:c ,
          legend: "حروف فلزی",
        },
        {
          id: 3,
          src:d ,
          legend: "حروف استیل",
        },
        {
            id:4 ,
            src:a ,
            legend: "حروف پلاستیک",
          },
          {
            id:5 ,
            src:e ,
            legend: "حروف سوئدی",
          },
          {
            id:6 ,
            src:f ,
            legend: "حروف لاسوگاسی",
          },
          {
            id: 7,
            src:g ,
            legend: "حروف وکیوم",
          },
          {
            id: 8,
            src:h ,
            legend: "حروف مینی لتر",
          },
          {
            id: 9,
            src:i ,
            legend: "حروف ویژه",
          },
      ];
    return <Templet>
        <div 
        className="tw-flex tw-w-full tw-flex-col tw-justify-center " 
        style={{ fontFamily: "Lalezar" }}
        >
             <div className="tw-flex tw-mt-8 tw-w-full tw-justify-center">
                <div className="tw-relative tw-h-60 tw-w-8/12 tw-rounded-lg tw-shadow-md">
                    <img className="tw-flex-wrap tw-h-full tw-w-full" src={EmbossedPoster}></img>
                </div>
             </div>
             <CardTitle>تابلو حروف برجسته</CardTitle>
             <Description>
                 <p>اهمیت استفاده از انواع حروف برجسته در تابلو ، جداسازی متن از صفحه است که بصورت کلی با نور ( تابش نور از صفحه حروف و یا زیر آن ) وبدون نور ساخته میشوند و تبدیل به محصولات تبلیغاتی زیبا و جذابی میشوند که مناسب برای مکانهایی است که صاحبان آنها خواهان بالابردن محبوبیت و بهتر دیده شدن نام و نشان تجاری خودهستند</p>
                <p>این مهم با استفاده از مهارت و تخصص حرفه ای گروه طراحان و ایده پردازان و سازندگان حروف های برجسته مجموعه طاها برای طراحی پروژه ها و ارائه راه حل های مؤثر و خلاقانه ایجاد خواهد شد</p>
             </Description>
             <section className=" tw-text-center">
             <div className="tw-flex tw-mt-8 tw-w-full tw-justify-center">
                <div className="tw-relative tw-py-4 tw-h-16 tw-w-8/12 tw-text-center tw-rounded-lg tw-shadow-xl tw-bg-gray-300 tw-border-r-4 tw-border-green-700">
                   <p>ما می توانیم با تکیه بر سابقه طولانی و درخشان خود تمام نیازهای شما را در این زمینه ساخت تابلو با انواع حروف برجسته فراهم سازیم</p>
                </div>
             </div>
             <Description>
                 <p>محصولاتی که تحت عنوان حروف برجسته تولید میشوند تماما سفارشی و متناسب با نیاز و جزئیات پروژه های شما هستند که برای تولید آنها از متریالهای گوناگونی از قبیل اکرولیک ،ای بی اس ، آلومینیوم (چنلیوم )، استنلس استیل ، آهن ، پی وی سی ، چوب ، کریستال ، مس و برنج استفاده شده و قابل نصب بر روی سطوحی مانند سنگ ، نمای سیمانی و آجری ، چوب ، کامپوزیت ،آهن و غیره خواهند بود</p>
                <p>نورپردازی حروف برجسته با ال ای دی و یا اس ام دی انجام میشود</p>
                <p>سفارش شما پس از فرآیند تولید و کنترل کیفیت بسته بندی شده و بوسیله شرکت های حمل و نقل زمینی ،هوایی و یا دریایی در سراسر دنیا قابل تحویل و همچنین برای پروژه های مستمر ، امکان نگهداری محصولات تولید شده تا زمان مقرر برای ارسال و نصب در انبارکارگاه تابلوسازی طاها مهیا بوده تا در زمان مقتضی وحسب الامر شما نسبت به نصب و تحویل در محل اقدام گردد</p>
             </Description>
             <CardTitle>قیمت تابلو حروف برجسته</CardTitle>
             <Description>
                 <p>قیمت تابلو حروف برجسته براساس متر دور حروف محاسبه میشود و به طور حدودی اگر از ابتدا تا انتهای متن حروف برجسته شما یک متر باشد ، متراژ دور آن 5 متر خواهد بود</p>
                 <p>برای دریافت قیمت دقیق انواع تابلو حروف برجسته با مشاوران ما در ارتباط باشید</p>
                 <p>لطفا برای جواب سؤالات مربوط به پروژه های خود با ما در تماس باشید</p>
                 <p>ما منتظر دیدن شما در میان مشتریان خود هستیم</p>
             </Description>
             <div className="tw-flex tw-justify-center tw-text-2xl tw-my-10">
                 <a href="tel://+989121126383">۰۹۱۲۱۱۲۶۳۸۳</a>
             </div>
             </section>
             <section>
                <CardSlider itemsPerSlide={2} images={IMAGES} />
             </section>
             <section>
                <FreeConsult cname="tw-mt-32"/>
             </section>
        </div>
    </Templet>
}


export default EmbossedPosterScreen

