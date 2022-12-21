import React from "react";
import style from "./virtual.module.css"
import Shade from "../../assets/shade.png"
import ReactCompareImage from "react-compare-image";
import Before from "../../assets/before.png"
import After from "../../assets/after.png"
import test1 from '../../assets/test/2022-12-21 16.19.26.jpg'
import test2 from '../../assets/test/2022-12-21 16.19.39.jpg'
import {motion} from "framer-motion";


const Virtual = ()=>{
    return(
        <div className={style.virtual}>
            <div className={style.left}>
                <span>Virtual try-on</span>
                <span>never buy the wrong shade again!</span>
                <span>Try Now</span>
                <img src={Shade} alt=""/>
            </div>
            <div className={style.right}>
                <div className={style.wrapper}>
                    <ReactCompareImage leftImage={Before} rightImage={After}/>
                </div>

            </div>
        </div>
    )

}
export default Virtual