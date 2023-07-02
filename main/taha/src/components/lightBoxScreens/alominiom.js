import React, { useState } from 'react'
import ratateAlominiom from '../../images/rotate_alominiom.jpg'
import lolaee from '../../images/lolaee.jpg'
import alominiomAD from '../../images/alminiomAD.jpg'
import alominiom from "../../images/alominiom.jpg"
import Templet from '../common/Templet'
import CardTitle from '../VacumScreen/cardTitle'
import Description from '../VacumScreen/Description'
import Exclusive from '../MakingPosterScreen.js/exclusive'
import CardSlider from '../common/CardSlider'
import { Link } from 'react-router-dom'
import { Modal } from '@mui/material'
import { AiFillCloseCircle } from 'react-icons/ai'
import CustomizedServices from '../HomeScreen/CustomizedServices'
import { services } from './common/nav'


export default function Alominiom() {
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    return <Templet>
         <div 
        className="tw-flex tw-w-full tw-flex-col tw-justify-center " 
        style={{ fontFamily: "Lalezar" }}
        >
             <div className="tw-flex tw-mt-8 tw-w-full tw-justify-center">
                <div className="tw-relative tw-h-60 tw-w-8/12 tw-rounded-lg tw-shadow-md">
                    <img className="tw-flex-wrap tw-h-full tw-w-full" src={alominiom}></img>
                </div>
             </div>
             <CardTitle>لایت باکس آلومینیومی(لولایی و گوشه گرد)</CardTitle>
             <Description>
                 <p>
                 لایت باکس لولایی از جنس آلومینیوم با ضخامت 7 و9 سانتیمتر تولید میشود که یک سمت آن درب لولایی داشته تا برای تعویض چاپ نیاز به باز کردن لایت باکس نیست . لایت باکس لولایی معمولا برای جاهایی مناسب است که چاپ آن در مقاطع زمانی کوتاه وسرعت در تعویض چاپ ملاک عمل باشد .در لایت باکس لولایی امکان استفاده از یک طلق شیری رنگ ویک طلق شیشه ای وجود دارد ودر صورتی که چاپ بروی استیکر پشت چسبدار انجام پذیرد استفاده از یک طلق شیری هم به تنهایی وجود دارد . نور داخل لایت باکس به طور معمول smd  است که در گذشته از لامپ مهتابی هم استفاده میکردند.
                 </p>
                 <CardTitle>لایت باکس گوشه گرد:</CardTitle>
                 <p>
                 لایت باکس گوشه دار از پروفیل آلومینیوم در سایزهای 5- 7 -9 و13 سانتیمتری ساخته میشود وگوشه های لایت باکس پلاستیکی و به صورت گرد میباشد .لایت باکس گوشه گرد برای مواردی کاربرد داردکه چاپ آن تغییر نداشته باشد بدلیل اینکه تعویض چاپ نسبتا کمی مشکل است . در لایت باکس گوشه گرد از یک تا دو طلق میتوان بهره جست وبا مدلهای یک طرفه ، دوطرفه ، آویز وایستاده ( استند ) تولید وعرضه میگردد. نور داخل لایت باکس به طور معمول smd  است که در گذشته از لامپ مهتابی هم استفاده میکردند.
                 </p>
            </Description>
            <Exclusive/>
             <CardTitle>نمونه کار ها</CardTitle>
             <section className="tw-flex tw-my-14 tw-px-80 tw-space-y-16 tw-place-content-center lg:tw-space-y-0 lg:tw-space-x-6 tw-justify-center tw-flex-col lg:tw-flex-row">
                 <div className="tw-flex tw-flex-col tw-w-72  tw-h-60 ">
                 <img onClick={()=>setActive1(!active1)} className="tw-flex-wrap tw-h-full tw-w-full" src={alominiomAD}/>
                      <p className="tw-text-center tw-text-xl tw-mt-6">فریم آلومینیوم تبلیغاتی</p>
                     <Modal open={active1}>
                       <div
                        className={`tw-fixed tw-outline-none tw-flex-col tw-mb-5 tw-justify-end tw-bg-white tw-backdrop-blur-sm tw-flex tw-flex-wrap tw-text-seyed  tw-content-center tw-inset-x-10 tw-inset-y-20`}
                        style={{ fontFamily: "Lalezar" ,direction:"rtl" }}
                        >
                          <div className="tw-px-4  tw-flex tw-flex-wrap tw-content-center tw-justify-between">
                            <AiFillCloseCircle
                            className="tw-mb-8"
                              size={40}
                             style={{ color: "", cursor: "pointer" }}
                             onClick={() => setActive1(!active1)}
                             />
                             <CardSlider/>
                         </div>
                    </div>     
                   </Modal>
                 </div>
                 <div className="tw-flex tw-w-72 tw-flex-col tw-h-60">
                 <img onClick={()=>setActive2(!active2)} className="tw-flex-wrap tw-h-full tw-w-full" src={lolaee}/>
                      <p className="tw-text-center tw-text-xl tw-mt-6">درب لولایی</p>
                     <Modal open={active2}>
                       <div
                        className={`tw-fixed tw-outline-none tw-flex-col tw-mb-5 tw-justify-end tw-bg-white tw-backdrop-blur-sm tw-flex tw-flex-wrap tw-text-seyed  tw-content-center tw-inset-x-10 tw-inset-y-20`}
                        style={{ fontFamily: "Lalezar" ,direction:"rtl" }}
                        >
                          <div className="tw-px-4  tw-flex tw-flex-wrap tw-content-center tw-justify-between">
                            <AiFillCloseCircle
                            className="tw-mb-8"
                              size={40}
                             style={{ color: "", cursor: "pointer" }}
                             onClick={() => setActive2(!active2)}
                             />
                             <CardSlider/>
                         </div>
                    </div>     
                   </Modal>
                 </div>
                 <div className="tw-flex tw-w-72 tw-flex-col tw-h-60">
                      <img onClick={()=>setActive3(!active3)} className="tw-flex-wrap tw-h-full tw-w-full" src={ratateAlominiom}/>
                      <p className="tw-text-center tw-text-xl tw-mt-6"> فریم آلومینیومی گرد</p>
                     <Modal open={active3}>
                       <div
                        className={`tw-fixed tw-outline-none tw-flex-col tw-mb-5 tw-justify-end tw-bg-white tw-backdrop-blur-sm tw-flex tw-flex-wrap tw-text-seyed  tw-content-center tw-inset-x-10 tw-inset-y-20`}
                        style={{ fontFamily: "Lalezar" ,direction:"rtl" }}
                        >
                          <div className="tw-px-4  tw-flex tw-flex-wrap tw-content-center tw-justify-between">
                            <AiFillCloseCircle
                            className="tw-mb-8"
                              size={40}
                             style={{ color: "", cursor: "pointer" }}
                             onClick={() => setActive3(!active3)}
                             />
                             <CardSlider/>
                         </div>
                    </div>     
                   </Modal>
                 </div>
             </section>
             {/* <CardSlider itemsPerSlide={2} images={IMAGES} /> */}
             <CardTitle>محصولات مرتبط</CardTitle>
             <CustomizedServices services={services} cname="tw-mt-4"/>
        </div>
    </Templet>
}