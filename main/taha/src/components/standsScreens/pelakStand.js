import React, { useState } from 'react'
import Templet from '../common/Templet'
import pelak from "../../images/pelak.jpg"
import pelak2 from "../../images/pelak2.jpg"
import pelak3 from "../../images/pelek3.jpg"
import pelak4 from "../../images/pelak4.jpg"
import CardTitle from '../VacumScreen/cardTitle'
import Description from '../VacumScreen/Description'
import Exclusive from '../MakingPosterScreen.js/exclusive'
import CardSlider from '../common/CardSlider'
import { Modal } from '@mui/material'
import { AiFillCloseCircle } from 'react-icons/ai'
import { services } from './common/nav'
import CustomizedServices from '../HomeScreen/CustomizedServices'

export default function PelakStand() {
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
                    <img className="tw-flex-wrap tw-h-full tw-w-full" src={pelak}></img>
                </div>
             </div>
             <CardTitle>پلاک پشت درب</CardTitle>
             <Description>
                 <p>
                 به تابلویی که متن آن حاوی فعالیت ، عنوان و معرفی پرسنل آن اطاق و پشت در نصب گردد، تابلو پشت در یا پلاک پشت درب گفته میشود
                 </p>
                 <p>
                 برای محل نصب ، ارتفاع از سطح زمین ، فاصله تا درب واندازه آن، استانداردها وقوانینی وجود دارد که پیشنهاد میشود با کارشناسان ما مشورت نمایید
                 </p>
            </Description>
            <Exclusive/>
            <section className="tw-flex tw-my-14 lg:tw-px-80 tw-pl-36 sm:tw-pl-52 md:tw-pl-64 lg:tw-pl-0 tw-space-y-16 tw-place-content-center lg:tw-space-y-0 lg:tw-space-x-6 tw-justify-center tw-flex-col lg:tw-flex-row">
                 <div className="tw-flex tw-justify-center tw-flex-col tw-w-72  tw-h-60 tw-mt-10">
                 <img onClick={()=>setActive1(!active1)} className="tw-flex-wrap tw-h-full tw-w-full" src={pelak2}/>
                      <p className="tw-text-center tw-text-xl tw-mt-6">پلاک پشت در با قابلیت تعویض آسان متن</p>
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
                 <img onClick={()=>setActive2(!active2)} className="tw-flex-wrap tw-h-full tw-w-full" src={pelak3}/>
                      <p className="tw-text-center tw-text-xl tw-mt-6">پلاک پشت در با قابلیت روشنایی</p>
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
                      <img onClick={()=>setActive3(!active3)} className="tw-flex-wrap tw-h-full tw-w-full" src={pelak4}/>
                      <p className="tw-text-center tw-text-xl tw-mt-6">پلاک پشت سفارشی</p>
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
             <CardTitle>نمونه کار ها</CardTitle>
             {/* <CardSlider itemsPerSlide={2} images={IMAGES} /> */}
             <CardTitle>محصولات مرتبط</CardTitle>
             <CustomizedServices services={services} cname="tw-mt-12"/>

        </div>
    </Templet>
}