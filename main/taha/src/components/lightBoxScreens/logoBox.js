import React from 'react'
import Templet from '../common/Templet'
import logoBox from "../../images/logo-box.jpg"
import CardTitle from '../VacumScreen/cardTitle'
import Description from '../VacumScreen/Description'
import Exclusive from '../MakingPosterScreen.js/exclusive'
import CardSlider from '../common/CardSlider'
import CustomizedServices from '../HomeScreen/CustomizedServices'
import { services } from './common/nav'


export default function LogoBox() {
    return <Templet>
         <div 
        className="tw-flex tw-w-full tw-flex-col tw-justify-center " 
        style={{ fontFamily: "Lalezar" }}
        >
             <div className="tw-flex tw-mt-8 tw-w-full tw-justify-center">
                <div className="tw-relative tw-h-60 tw-w-8/12 tw-rounded-lg tw-shadow-md">
                    <img className="tw-flex-wrap tw-h-full tw-w-full" src={logoBox}></img>
                </div>
             </div>
             <CardTitle>لوگو باکس</CardTitle>
             <Description>
                 <p>
                 بیشتر مواقع یکی از اجزا تکمیل کننده طراحی دکوراسیون داخلی ویا حتی تابلونما ، تابلو سردب ، تابلو نمایندگی و یا سازمان وشرکتی ، لوگو وآرم مجموعه است که لازمه روشن شود و نمیخواهیم که خود را مجبور به استفاده از کادر های مربع مستطیل  کنیم لذا طرح مورد نظر را با متریال های گوناگون ومتناسب با محل نصب وپروژه خود برجسته ساخته ونور پردازی میکنیم که در واقع لوگو باکس تولید نمودیم . لوگو باکس ها میتوانند برای فضای داخلی وبیرونی طراحی وتولید شوند .
                 </p>
                 <p>
                 قیمت لوگو باکس با توجه به استفاده از نوع متریال وابعاد متفاوت وتوافقی است
                 </p>
                 <p>
                 زمان مورد نیاز برای تولید لوگو باکس معمولا 7 روز کاری است
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