import React from 'react'
import guranty from '../../images/Guranty.png'
import phone from "../../images/phone.png"
import agents from '../../images/agents.png'
import insurance from '../../images/insurance.png'
function Exclusive() {
    return (
    <section className="tw-flex tw-my-7  lg:tw-space-y-0 tw-justify-center tw-flex-col lg:tw-flex-row">
        <div className="tw-flex lg:tw-w-2/6 tw-justify-center tw-my-5">
           <div className="tw-relative tw-h-24 tw-w-24 tw-text-gray-700">
              <img className="tw-flex-wrap tw-h-full tw-w-full" src={guranty} alt="guranty"></img>
              <p className='tw-ml-3 '>ضمانت کیفیت</p>
           </div>
        </div>
        <div className="tw-flex lg:tw-w-2/6 tw-justify-center tw-my-7">
           <div className="tw-relative tw-h-24 tw-w-28">
              <img className="tw-flex-wrap tw-h-full tw-w-full" src={phone} alt="phone"></img>
              <p className="tw-text-red-500 tw-ml-4">پاسخگوی سریع</p>
              <a className='tw-ml-3' href="te:+989392644472">09392644472</a>
           </div>
        </div>
        <div className="tw-flex lg:tw-w-2/6 tw-justify-center tw-my-7">
           <div className="tw-relative tw-h-24 tw-w-28">
              <img className="tw-flex-wrap tw-h-full tw-w-full" src={agents} alt="agents"></img>
              <p className="tw-text-gray-700 tw-pl-4 tw-mt-4">شبکه نمایندگان</p>
           </div>
        </div>
        <div className="tw-flex lg:tw-w-2/6 tw-justify-center tw-my-7">
           <div className="tw-relative tw-h-24 tw-w-28">
              <img className="tw-flex-wrap tw-h-full tw-w-full" src={insurance} alt="insurance"></img>
              <p className="tw-text-gray-700 tw-pl-4 tw-mt-4">شبکه نمایندگان</p>
           </div>
        </div>
    </section>
    )
}



export default Exclusive

