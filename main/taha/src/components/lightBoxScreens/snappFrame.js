import React from 'react'
import Templet from '../common/Templet'
import snappFrame from "../../images/snap_frame.jpg"
import CardTitle from '../VacumScreen/cardTitle'
import Description from '../VacumScreen/Description'
import Exclusive from '../MakingPosterScreen.js/exclusive'
import CardSlider from '../common/CardSlider'
import CustomizedServices from '../HomeScreen/CustomizedServices'
import { services } from './common/nav'

export default function SnappFrame() {
    return <Templet>
         <div 
        className="tw-flex tw-w-full tw-flex-col tw-justify-center " 
        style={{ fontFamily: "Lalezar" }}
        >
             <div className="tw-flex tw-mt-8 tw-w-full tw-justify-center">
                <div className="tw-relative tw-h-60 tw-w-8/12 tw-rounded-lg tw-shadow-md">
                    <img className="tw-flex-wrap tw-h-full tw-w-full" src={snappFrame}></img>
                </div>
             </div>
             <CardTitle>لایت باکس اسنپ فریم</CardTitle>
             <Description>
                 <p>
                 لایت باکسی که فریم آن از جنس آلومینیوم و رویه نگهدارنده تصویر دارای حرکت وبراحتی وبدون نیاز به ابزاری بازشو باشند را اسنپ فریم مینامند.معمولا اسنپ فریم ها با ضخمات 3 سانتیمتر و منبع نور آنها اس ام دی 12 ولت  و پلکسی نگدارنده تصویر شفاف وبا ضخامت 2 میلیمتر وحاشیه اسنپ به پهنای 25 میلیمتر از هر طرف و چاپ مورد استفاده در لایت باکس اسنپ فریم ، فیلم بک لایت است .از مزایای اسنپ فریم وزن کم، ظرافت وتعویض آسان تصویر ومقرون به صرفه بودن آن نام برد.قیمت اسنپ فریم بستگی مستقیم با کیفیت فریم وچاپ و ابعاد آن دارد.
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