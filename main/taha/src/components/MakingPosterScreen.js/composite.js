import React from 'react'
//images
/////////////////////////////////////////////////////
import felaxi from '../../images/felaxi.jpg'
import felaxi1 from '../../images/sampleImages/felaxi1.jpg'
import felaxi2 from '../../images/sampleImages/felaxi2.jpg'
import felaxi3 from '../../images/sampleImages/felaxi3.jpg'
import felaxi4 from '../../images/sampleImages/felaxi4.jpg'
import felaxi5 from '../../images/sampleImages/felaxi5.jpg'
import felaxi6 from '../../images/sampleImages/felaxi6.jpg'
import composite from '../../images/composite.jpg'
////////////////////////////////////////////////////////////////////////
import CardSlider from '../common/CardSlider'
import Templet from '../common/Templet'
import CardTitle from '../VacumScreen/cardTitle'
import Description from '../VacumScreen/Description'
import Exclusive from './exclusive'
import CustomizedServices from '../HomeScreen/CustomizedServices'
import { services } from './common/nav'

const Composite=()=> {
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
                    <img className="tw-flex-wrap tw-h-full tw-w-full" src={composite}></img>
                </div>
             </div>
             <CardTitle>تابلوهای کامپوزیت</CardTitle>
             <Description>
                 <p>
                 سهولت وسرعت در نصب وتنوع در رنگ ورقهای کامپوزیت موجب شده که در صنعت تابلوسازی جزو اولین گزینه های انتخاب باشد، ازآنجا که در طراحی واجرای نمای ساختمان و ساخت تابلو کامپوزیت از لحاظ وزنی بسیار سبک ، اقتصادی و مقرون به صرفه است ، در ساخت تابلو سردرب ، تابلومغازه ، تابلوفروشگاه ، تابلو ورودی ، استند، تابلوهای راهنما و…. ، ورقهای کامپوزیت بعنوان گزینه ای مناسب برای بک گراند انواع حروف برجسته ، چلنیوم ( چنلیوم ) حروف استیل ، حروف وکیوم ، حروف پلکسی ، حروف لاسوگاسی ، نئون و ترکیب با ترموود است 
                 </p>
                 <p>قیمت تابلو کامپوزیت به نوع ورق ،طرح ومتراژ آن وبه طورمعمول میزان مصرفی  ورق ملاک قرارمیگیرد</p>
                 <p>زمان مورد نیازمعمولا برای طراحی و نصب تابلوکامپوزیت 15 روز کاری است</p>
                 <p>برای آشنایی با ورق کامپوزیت به قسمت مقالات مراجعه نمایید</p>
             </Description>
             <Exclusive/>
             <CardTitle>نمونه کار ها</CardTitle>
             <CardSlider itemsPerSlide={2} images={IMAGES} />
             <CardTitle>محصولات مرتبط</CardTitle>
             <CustomizedServices services={services} cname="tw-mt-4"/>
        </div>
    </Templet>
}


export default Composite

