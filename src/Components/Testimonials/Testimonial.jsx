/*eslint-disable */
import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/pagination"
import {Pagination} from "swiper"
const Testimonial = () => {
    const client = [
        {
            img: "https://th.bing.com/th/id/OIP.UGlKxiZQylR3CnJIXSbFIAHaLL?pid=ImgDet&rs=1",
            reviw: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            img: "https://th.bing.com/th/id/OIP.UGlKxiZQylR3CnJIXSbFIAHaLL?pid=ImgDet&rs=1",
            reviw: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            img: "https://th.bing.com/th/id/OIP.UGlKxiZQylR3CnJIXSbFIAHaLL?pid=ImgDet&rs=1",
            reviw: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
    ]

    return (
        <div className='container mt-5 mb-2'  id='testi'>
            <span className='top'>Testimonial</span>
            <h2>What our <span className='h2_span'>clients says</span><br /> about us</h2>
            <div className='row row_custom'>
            </div>
            <div className='t_blur blur'></div>
            <div className='r_blur blur'></div>
            <div className='iner_cicle'></div>
            <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable:true}}
            >
                {client.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                        <center>
                        <div className='col-lg-6 textimonial_slide'>
                        <img src={client.img}  alt=""/>
                            <p>{client.reviw}</p>
                        </div>
                        </center>
  
                        </SwiperSlide>
                        
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Testimonial