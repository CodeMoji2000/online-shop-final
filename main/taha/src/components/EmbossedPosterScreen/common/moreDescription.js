import { Modal } from '@mui/material'
import React, { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import CardSlider from '../../common/CardSlider'

export default function MoreDescription({children ,src1 ,src2,par}) {
    const IMAGES=[
        {
            id:0,src:src1
        },
        {
            id:1,src:src2
        }
    ]
    const [active, setActive] = useState(false);
    return (
        <section className="tw-flex tw-justify-center tw-my-10">
        <div className=" tw-p-6 tw-flex tw-flex-col-reverse lg:tw-flex-row lg:tw-mx-32 tw-rounded-2xl tw-space-x-4 tw-h-full tw-bg-gray-800">
            <div className="lg:tw-mt-20 tw-mr-5 ">
                <button 
                  className="tw-flex tw-text-center tw-py-4 tw-px-5 tw-mt-5  tw-bg-green-600"
                  onClick={() => setActive(!active)}
                   style={{borderRadius:"10px"}}
                >
                   اطلاعات بیشتر
               </button>
            </div>
            <div className="tw-flex tw-w-full lg:tw-w-6/12 tw tw-text-lg tw-text-white tw-text-center">

           <p>{children}</p>

           </div>
           <div className="tw-flex tw-w-62 lg:tw-w-2/12">
               <img className="tw-flex-wrap tw-h-full tw-px-32 lg:tw-p-2 tw-w-full" src={src1}></img>
           </div>
           <div className="tw-flex lg:tw-w-2/12 ">
               <img className="tw-flex-wrap tw-h-full tw-px-32 lg:tw-p-2 tw-w-full" src={src2}></img>
           </div>
           <Modal open={active}>
                <div
                className={`tw-fixed tw-h-full tw-outline-none tw-flex-col tw-mb-3 tw-justify-center tw-text-center tw-bg-white tw-backdrop-blur-sm tw-flex tw-flex-wrap tw-text-seyed  tw-content-center tw-inset-x-0 lg:tw-inset-x-10 tw-inset-y-7`}
                style={{ fontFamily: "Lalezar" ,direction:"rtl" }}
                >
                    <AiFillCloseCircle
                    className="tw-mb-1 lg:tw-mx-5"
                     size={40}
                     
                     onClick={() => setActive(!active)}
                    />
                    <div className="tw-flex tw-flex-col lg:tw-mx-5">
                    {par}
                    </div>

                  <div className="tw-flex tw-flex-col lg:tw-flex-row ">
                     <div className="tw-hidden lg:tw-flex tw-w-96 tw-h-60 tw-border-2 tw-mt-10 lg:tw-mx-20">
                        <img className="tw-flex-wrap tw-h-full tw-p-2 tw-w-full" src={src2}></img>
                     </div>
                     <div className="tw-flex tw-w-96 tw-h-60 tw-border-2 tw-ml-20 lg:tw-mt-10 lg:tw-ml-72">
                        <img className="tw-flex-wrap tw-h-full tw-p-2 tw-w-full" src={src1}></img>
                     </div>
                   </div>
                </div>     
            </Modal>
        </div>
       </section>
    )
}
