import React from 'react'
import Templet from '../components/common/Templet'
import CardTitle from '../components/VacumScreen/cardTitle'
import Description from '../components/VacumScreen/Description'
import guide from "../images/guide.jpg"
import CustomizedServices from '../components/HomeScreen/CustomizedServices'
import { services } from '../components/standsScreens/common/nav'
import Exclusive from '../components/MakingPosterScreen.js/exclusive'

function GuideScreen(props) {
    return <Templet>
        <div 
        className="tw-flex tw-w-full tw-flex-col tw-justify-center " 
        style={{ fontFamily: "Lalezar" }}
        >
            <div className="tw-flex tw-mt-8 tw-w-full tw-justify-center">
                <div className="tw-relative tw-h-60 tw-w-8/12 tw-rounded-lg tw-shadow-md">
                    <img className="tw-flex-wrap tw-h-full tw-w-full" src={guide}></img>
                </div>
             </div>
             <CardTitle>تابلوهای محیطی</CardTitle>
             <Description>
                 <p>
                 به انواع تابلو که در محیط بیرونی وبه منظور ارائه تبلیغات طراحی ونصب میگردند تابلو محیطی میگوییم که در دو دسته کلی میتوان آنها را دسته بندی کرد
                 </p>
                 <ul>
                     <li>استند تبلیغاتی</li>
                     <li>بیلبرد</li>
                 </ul>
                 <p>
                 نور استندهای تبلیغاتی یا خود ایستا میتواند  از داخل ویا بیرون تابلو تامین گردد
                 </p>
                 <p>
                 گروه تبلیغاتی طاها در ساخت انواع بیلبرد ، تابلو گردان ، استند بک لایت ، اسکرولینگ ، استرابرد وپرتابل  دارای تجاربی ارزنده وقابل ارائه است که پیشنهاد میکنیم برای اجرای تبلیغات محیطی  موفق قبل از هر گونه اقدامی با کارشناسان ما مشورت نمایید
                 </p>
                 <p>
                 برای آشنایی بیشتر با اصطلاحات انواع تابلو محیطی به بخش مقالات مراجعه نمایید
                 </p>
             </Description>
             <Exclusive/>
             <CardTitle>محصولات مرتبط</CardTitle>
             <CustomizedServices services={services} cname="tw-mt-12"/>
        </div>     
    </Templet>
}


export default GuideScreen

