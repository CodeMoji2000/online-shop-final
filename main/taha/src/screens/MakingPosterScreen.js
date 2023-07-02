import React from 'react'
import CardTitle from '../components/VacumScreen/cardTitle';
import Description from '../components/VacumScreen/Description';
import Templet from '../components/common/Templet';
import FreeConsult from '../components/common/FreeConsult';
import CardSlider from '../components/common/CardSlider'
import makingPoster from '../images/makingPoster.jpg'
import EmbossedPoster from "../images/EmbossedPoster.jpg"
import gardan from '../images/gardan.jpg'
import royeBam from '../images/ListOfAgents.png'
import felaxi from '../images/felaxi.jpg'
import sarDarb from '../images/sarDarb.jpg'
import composite from '../images/composite.jpg'
import { Link } from 'react-router-dom';
import CustomizedServices from '../components/HomeScreen/CustomizedServices';
import { services } from '../components/MakingPosterScreen.js/common/nav';

function MakingPosterScreen() {

    const IMAGES=[
        {
        id:1,
        src:gardan,
        legend:"تابلو های گردان",
        // link:""
         },
         {
        id:2,
        src:royeBam,
        legend:"تابلو رویه بام",
        // link:
         },
        {
        id:3,
        src:felaxi,
        legend:"تابلو های فلکسی فیس",
        // link:
         },
        {
        id:4,
        src:sarDarb,
        legend:" تابلو های سردرب",
        // link:
         },
         {
        id:5,
        src:composite,
        legend:" تابلو های کامپوزیت",
        // link:
         },
         {
         id:6,
        src:sarDarb,
        legend:" تابلو های سردرب",
        //  link:
         },
]
    return <Templet>
        <div 
        className="tw-flex tw-w-full tw-flex-col tw-justify-center " 
        style={{ fontFamily: "Lalezar" }}
        >
             <div className="tw-flex tw-mt-8 tw-w-full tw-justify-center">
                <div className="tw-relative tw-h-60 tw-w-8/12 tw-rounded-lg tw-shadow-md">
                    <img className="tw-flex-wrap tw-h-full tw-w-full" src={makingPoster}></img>
                </div>
             </div>
             <CardTitle>تابلوسازی طاها</CardTitle>
             <Description>
                 <p>تابلوسازی تبلیغاتی روش‌های متنوعی دارد که وجود آن برای هر کسب و کاری امری ضروری تلقی می‌شود. در واقع تبلیغاتی است که نگاه مشتریان را هدف می‌گیرد. همه مخاطبان سعی می‌کنند بر اساس تبلیغات و نوع بازاریابی یک برند، به منظور خرید محصولات و دریافت خدمات به آن مراجعه کنند</p>
                 <p>گروه تابلوسازی طاها با تکیه بر تجربه و تجهیزات و ماشین آلات به‌ روز خود توانایی کامل در طراحی و اجرای هرگونه تابلو را با بالاترین کیفیت دارا است و با توجه به گستردگی فعالیت‌های این مجموعه در زمینه تولید و ساخت انواع تابلو ، در خصوص رضایتمندی مشتریان محترم و ارائه خدمات با کیفیت و با قیمت مناسب، همچون همیشه پاسخگوی خواسته‌ها و نیاز‌های شما عزیزان خواهد بود</p>
             </Description>
             <div className="tw-flex tw-mt-8 tw-w-full tw-justify-center">
                <div className="tw-relative tw-text-xl tw-py-4 tw-h-24 tw-w-8/12 tw-text-center tw-rounded-lg tw-shadow-xl tw-bg-gray-300 tw-border-r-4 tw-border-green-700">
                   <p>تماس برای مشاوره سریع</p>
                   <a href="tel://+989121126383">۰۹۱۲۱۱۲۶۳۸۳</a>
                </div>
             </div>
             <CardTitle>تابلوهای تبلیغاتی سنتی</CardTitle>
             <Description>
                 <p>این روش از تابلو سازی که به عنوان تبلیغات سنتی به حساب می‌آید، همواره مورد توجه مشتریان قرار می‌گیرد. ممکن است شما برای تبلیغات کسب و کار خود از روش تابلو سازی تبلیغاتی استفاده کنید، مطمئناً با رفتن به بازار و پرس و جو کردن از آژانس‌ها و کارگاه‌های تبلیغاتی با قیمت‌های متفاوتی مواجه خواهید شد. از نوع قیمت‌ها تعجب نکنید زیرا با توجه به فرایند ساخت تابلوهای تبلیغاتی هر کدام از کارگاه و متخصصان ممکن است قیمت‌های متفاوتی به شما ارائه کنند</p>
                 <p>حتماً در این مورد برای شما سوالاتی مطرح خواهد شد که قیمت تابلو سازی بر چه اساسی تعیین می‌شود؟ چه عواملی بر قیمت گذاری تابلوهای تبلیغاتی تاثیر دارد؟ آیا در کارگاه‌های ساخت تابلو از متریال استانداردی استفاده می‌کنند؟ همه این‌ها سوالاتی است که هنگام سفارش و خرید تابلوهای تبلیغاتی برای شما مطرح می‌شود. در ادامه مقاله همراه ما باشید تا پاسخ سوالات خود را پیدا کنید</p>
             </Description>
             <CardTitle>چه مواردی بر قیمت تابلو سازی موثر است؟</CardTitle>
             <Description>
                 <p>در تعیین قیمت تابلوهای تبلیغاتی عوامل متعددی نقش دارند، در این بخش به مهم‌ترین این عوامل اشاره کرده‌ایم تا شما اطلاعات کافی را برای سفارش تابلو داشته باشید. همان‌طور می‌دانید برای انجام بیشتر کارهای مربوط به تبلیغات متراژ فضا بسیار مهم است. در نتیجه شما با ارائه متراژ محیط کاری خود به تکنسین تابلو سازی، به او نشان خواهید داد که برای چه مقدار فضایی توسط تابلو اشغال خواهد شد</p>
             </Description>
             <CardTitle>متراژ محیط بر قیمت تابلو سازی تهران</CardTitle>
             <Description>
                 <p>متراژ از عواملی است که در تعیین قیمت تابلو از اهمیت بسیار زیادی برخوردار می‌باشد، زیرا روی بدنه تابلو بر اساس ابعاد و اندازه ای که دارد حروف برجسته مندرج می‌شود. یکی از مواردی که در قیمت ساخت تابلو تأثیر دارد، قطر و اندازه قلم است. به طوری که هر چه قدر قطر قلم از فونت و ضخامت بیشتری برخوردار باشد، می‌تواند محیط بیشتری را اشغال کند، در نتیجه اندازه آن باعث افزایش و کاهش قیمت تابلو می‌شود</p>
             </Description>
             <CardTitle>طراحی و نوع تابلو</CardTitle>
             <Description>
                 <p>قیمت تابلو سازی تهران به نوع طراحی، سبک‌های پیچیده و خاص بودن تابلوها بستگی دارد. شما اگر بخواهید برای تبلیغات کسب و کار خود تابلویی زیبا با بهترین طراحی‌ها و پیچیدگی‌های منحصر به فردی سفارش دهید، قطعاً باید هزینه بیشتری هم بپردازید، زیرا ابزارها و متریال بیشتری در این نوع تابلوها کاربرد دارد. کارگاه تابلو سازی سعی می‌کند با توجه به نوع سفارش شما و مبلغی که پرداخت کرده‌اید، بهترین مدل تابلو را با کیفیت عالی به شما تحویل دهد. اعتبار برند آخرین عاملی که می‌تواند قیمت سفارش تابلوی شما را افزایش دهد، برند و کشوری است که متریال و مواد سازنده ابزار تابلوسازی را تولید می‌کند. معمولاً در بازار بین‌المللی اجناس و ابزارهای ساخت دو کشور تایوان و کره از قیمت و البته کیفیت بسیار بالایی برخوردار هستند. در این بین جنس‌های ایرانی و چینی آنچنان رقابتی در این بازار ندارند، زیرا دارا کیفیت و قیمت پایین‌تری می‌باشند. همین امر سبب شده تا برندها محصولات خود را با قیمت‌های مختلفی به بازار ارائه کنند.</p>
             </Description>
             <div className="tw-flex tw-flex-col tw-mt-8 tw-w-full tw-justify-center tw-space-y-10">
                <CardTitle>معرفی انواع تابلو</CardTitle>
                <CardSlider itemsPerSlide={2} images={IMAGES} />
                <FreeConsult/>
             </div>
             <CardTitle>محصولات مرتبط</CardTitle>
             <CustomizedServices services={services} cname="tw-mt-12"/>

        </div>
    </Templet>
}

export default MakingPosterScreen

