import React from "react";
import {Swiper,SwiperSlide } from "swiper/react"
import {Pagination, Navigation} from "swiper";


import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./slider.css"

import {SliderProducts} from '../../data/products'

const Slider = ()=>{
    console.log(SliderProducts)
    const test = [...SliderProducts]
    return(
        <div className="s_container">
            <Swiper
                    modules={[Pagination, Navigation]}
                    navigation={true}
                    loopFillGroupWithBlank={true}
                    slidesPerView={3}
                    spaceBetween={40}
                    slidesPerGroup={1}
                    loop={true}>
                {test.map(item =>
                    <SwiperSlide >
                    <div className="left-s">
                        <div className="name">
                            <span>{item.name}</span>
                            <span>{item.detail}</span>
                        </div>
                        <span>{item.price}$</span>
                        <div>Shop now</div>
                    </div>
                        <img className="img-p" src={item.img} alt="product"/>
                </SwiperSlide>)}
            </Swiper>

        </div>
    )
}
export default Slider