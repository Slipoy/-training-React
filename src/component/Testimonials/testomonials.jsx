import React from 'react'
import style from "./testoomonials.module.css"
import Hero from "../../assets/testimonialHero.png"
import {TestimonialsData} from "../../data/testimonials"
import {SwiperSlide, Swiper} from "swiper/react";



const Testimonials = ()=>{
    return(
        <div className={style.testimonials}>
            <div className={style.wrapper}>
                <div className={style.container}>
                    <span>Top Raped</span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolor doloremque earum eos magni numquam odit officia optio
                    </span>
                </div>


                <img src={Hero} alt=""/>


                <div className={style.container}>
                    <span>100K</span>
                    <span>Happy Customer with us</span>
                </div>
            </div>

            <div className={style.reviews}>Reviews</div>
            <div className={style.carousel}>
                <Swiper
                slidesPerView={3}
                slidesPerGroup={1}
                spaceBetween={20}
                className={style.tCarousel}
                >
                    {
                        TestimonialsData.map((item, i)=>(
                            <SwiperSlide>
                                <div className={style.testimonial}>
                                    <img src={item.image} alt=""/>
                                    <span>{item.comment}</span>
                                    <hr/>
                                    <span>{item.name}</span>

                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </div>
    )
}
export default Testimonials