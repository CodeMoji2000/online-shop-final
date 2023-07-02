import React from 'react'
import Templet from '../common/Templet'
import CardTitle from '../VacumScreen/cardTitle'
import Description from '../VacumScreen/Description'
import vacum from "../../images/vacum.jpg"
import CustomizedServices from '../HomeScreen/CustomizedServices'
import { services } from '../standsScreens/common/nav'
import Exclusive from '../MakingPosterScreen.js/exclusive'
import FreeConsult from '../common/FreeConsult'

function ADGuide(props) {
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
             <CardTitle>استند تبلیغاتی</CardTitle>
             <Description>
                 <p>
                 معمولا در گذرراه ها که مخاطب با سرعت حرکتی کمتری از مقابل تابلوها عبور میکند ودر پی آن هستیم که پیام خود را بی واسطه و با جزئیات بیشتری به آنها عرضه کنیم ، از تابلوهای خود ایستا و یا استند به صورت یک ویا دوطرفه استفاده میکنیم . بدیهی است ظرافت در طراحی وساخت ونورپردازی وهماهنگی آن با محیط پیرامونی عوامل موثری در جذابیت تابلو ودر نتیجه بهتر دیده شدن پیام تبلیغاتی ویا فرهنگی خواهد بود . تکرار استندها با فواصل منطقی ومعین قدرت تبلیغ واثر گذاری آن را چندین برابر میکند
                 </p>
                 <p>
                 گروه تابلوسازی طاها  با تجاربی ارزنده در خصوص طراحی وساخت استند های یک ودوطرفه با تصویر ثابت ومتحرک در خدمت شما مشتریان معزز خواهد بود 
                 </p>
             </Description>
             <Exclusive/>
             <CardTitle>محصولات مرتبط</CardTitle>
             <CustomizedServices services={services} cname="tw-mt-12"/>
             <FreeConsult></FreeConsult>
        </div>     
    </Templet>
}


export default ADGuide

