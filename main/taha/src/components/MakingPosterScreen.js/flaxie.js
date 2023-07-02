import React from 'react'
import felaxi from '../../images/felaxi.jpg'
import felaxi1 from '../../images/sampleImages/felaxi1.jpg'
import felaxi2 from '../../images/sampleImages/felaxi2.jpg'
import felaxi3 from '../../images/sampleImages/felaxi3.jpg'
import felaxi4 from '../../images/sampleImages/felaxi4.jpg'
import felaxi5 from '../../images/sampleImages/felaxi5.jpg'
import felaxi6 from '../../images/sampleImages/felaxi6.jpg'
import CardSlider from '../common/CardSlider'
import Templet from '../common/Templet'
import CustomizedServices from '../HomeScreen/CustomizedServices'
import CardTitle from '../VacumScreen/cardTitle'
import Description from '../VacumScreen/Description'
import { services } from './common/nav'
import Exclusive from './exclusive'

function flaxie() {

    const IMAGES=[
        {
        id:1,
        src:felaxi1,
        },
        {
        id:2,
        src:felaxi2,
        },
         {
        id:3,
        src:felaxi3,
        },
         {
        id:4,
        src:felaxi4,
        },
        {
        id:5,
        src:felaxi5,
        },
        {
        id:6,
        src:felaxi6,
        }
    ]
    return <Templet>
        <div 
        className="tw-flex tw-w-full tw-flex-col tw-justify-center " 
        style={{ fontFamily: "Lalezar" }}
        >
             <div className="tw-flex tw-mt-8 tw-w-full tw-justify-center">
                <div className="tw-relative tw-h-60 tw-w-8/12 tw-rounded-lg tw-shadow-md">
                    <img className="tw-flex-wrap tw-h-full tw-w-full" src={felaxi}></img>
                </div>
             </div>
             <CardTitle>تابلوهای فلکسی فیس</CardTitle>
             <Description>
                 <p>فلکسی فیس در لغت به معنای صفحه قابل انعطاف است و در صنعت تابلوسازی به نوعی پارچه پلاستیکی که مابین تاروپود آن نخ ابریشم بکار رفته وقابلیت عبور نور از خود را داراست اطلاق میگردد</p>
                 <p>تابلوهای فلکسی فیس دارای جعبه ای فلزی ونور پردازی آن توسط لامپ فلورسنت ویا اس ام دی انجام میپذیرد</p>
                 <p>قیمت تابلو فلکسی فیس بر اساس متر مربع و کیفیت چاپ و نوع نور آن برآورد میگردد</p>
                 <p>بدلیل استفاده از تکنیک چاپ میتوان تصاویر و متون را با طیف های رنگی متنوعی بروی فلکسی فیس اجرا نمود</p>
                 <p className="tw-text-xl">برای آشنایی بیشتر با فلکسی فیس وبنر به قسمت مقالات مراجعه بفرمایید</p>
             </Description>
             <Exclusive/>
             <CardTitle>نمونه کار ها</CardTitle>
             <CardSlider itemsPerSlide={2} images={IMAGES} />
             <CardTitle>محصولات مرتبط</CardTitle>
             <CustomizedServices services={services} cname="tw-mt-4"/>
        </div>
    </Templet>
}

export default flaxie

