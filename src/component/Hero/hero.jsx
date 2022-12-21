import React from "react"

import style from "./hero.module.css"
import {BsArrowRight} from "react-icons/bs";
import HeroImg from "../../assets/hero.png"
import {RiShoppingBagFill} from "react-icons/ri"
import {motion} from "framer-motion";


const Hero =()=>{
    const transition = {duration: 3, type: "spring"}
    return(
        <div className={style.container}>
            <div className={style.h_sides}>
                <span className={style.text1}>skin protection cream</span>
                <div className={style.text2}>
                    <span className={style.first}>Trendy Collection</span>
                    <span className={style.second}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </span>
                </div>

            </div>
            <div className={style.wrapper}>
                <motion.div
                    initial={{bottom: "2rem"}}
                    whileInView={{bottom: "0rem"}}
                    className={style.blueCircle}
                    transition={transition}>
                </motion.div>


                <motion.img
                    transition={transition}
                    initial={{bottom: "-2rem"}}
                    whileInView={{bottom:"0rem"}}
                    src={HeroImg} alt="" width={600}/>



                <motion.div
                    transition={transition}
                    initial={{right: "4%"}}
                    whileInView={{right: "2%"}}
                    className={style.cart2}>
                    <RiShoppingBagFill/>
                    <div className={style.signup}>
                        <span className={style.title}>Best SignUp Offers</span>
                        <div className={style.arrowIcon}>
                            <BsArrowRight/>
                        </div>
                    </div>

                </motion.div>
            </div>
            <div className={style.h_sides}>
                <div className={style.traffic}>
                    <span className={style.trafficCount}>1.5m</span>
                    <span>Month Traffic</span>
                </div>
                <div className={style.customers}>
                    <span className={style.customersCount}>100k</span>
                    <span>Happy custom</span>

                </div>

            </div>

        </div>
    )
}

export default Hero