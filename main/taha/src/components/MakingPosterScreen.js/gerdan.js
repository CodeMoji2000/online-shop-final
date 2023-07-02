import React from 'react'
import Templet from '../common/Templet'
import gardan from "../../images/gardan.jpg"
import CardTitle from '../VacumScreen/cardTitle'
import Description from '../VacumScreen/Description'
import Exclusive from './exclusive'
import CustomizedServices from '../HomeScreen/CustomizedServices'
import { services } from './common/nav'
export default function Gerdan() {
    return <Templet>
         <div 
        className="tw-flex tw-w-full tw-flex-col tw-justify-center " 
        style={{ fontFamily: "Lalezar" }}
        >
             <div className="tw-flex tw-mt-8 tw-w-full tw-justify-center">
                <div className="tw-relative tw-h-60 tw-w-8/12 tw-rounded-lg tw-shadow-md">
                    <img className="tw-flex-wrap tw-h-full tw-w-full" src={gardan}></img>
                </div>
             </div>
             <CardTitle>تابلوهای گردان</CardTitle>
             <Description>
                 <p>
                 تابلو گردان به سبب چرخش و دید 360 درجه ، امکان عدم توجه از سوی بیننده را از ایشان گرفته و همیشه چون نگینی بروی نما و یا بام ساختمان و محوطه مورد نظرخودنمایی میکند
                 </p>
                 <p>
                 طراحی تابلوگردان از لحاظ متون مندرج درآن، سرعت چرخش ، ارتفاع محل نصب و تکنولوژی در ساخت وتجربه ، گزینه های هستند که توجه ویژه ای میطلبد
                 <p>
                 تابلو چرخشی یا به عبارتی تابلوگردان میتواند بک لایت ( نوراز داخل ) مثل فلکسی فیس ویا نور از روبرو که سطح آن  پوشیده از ورق کامپوزیت ، چوب ترموود وآهن باشد که به حروف برجسته چنلیوم (چلنیوم ) وکیوم فرمینگ ، حروف برجسته استیل ، حروف برجسته لاسوگاسی ، حروف پلکسی ، حروف فلزی و نئون مزین شود وبرای نور پردازی ازاس ام دی ،ال ای دی ویا پرژکتوراستفاده نمود.
                </p>
                 </p>
                 <p>
                 محاسبه قیمت تابلو گردان بدلیل خاص بودن آن پس از طراحی میسر است.
                 </p>
                 <p>
                 زمان مورد نیاز برای تابلو گردان بستگی به طراحی آن دارد وبه طور معمول 30 روز کاری است 
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