import React from 'react'
import Templet from '../common/Templet'
import CardTitle from '../VacumScreen/cardTitle'
import Description from '../VacumScreen/Description'
import vacum from "../../images/vacum.jpg"
import CustomizedServices from '../HomeScreen/CustomizedServices'
import { services } from '../standsScreens/common/nav'
import Exclusive from '../MakingPosterScreen.js/exclusive'
import FreeConsult from '../common/FreeConsult'

function BillBoardGuide(props) {
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
             <CardTitle>بیلبورد</CardTitle>
             <Exclusive/>
             <CardTitle>محصولات مرتبط</CardTitle>
             <CustomizedServices services={services} cname="tw-mt-12"/>
             <FreeConsult></FreeConsult>
        </div>     
    </Templet>
}


export default BillBoardGuide

