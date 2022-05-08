
import React from 'react'
import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './BLog.css'
function Blog() {
    return (
        <div className='container blog'>
            <div className="text">    <h2>Recently <br/><span>Blog Project</span></h2></div>
        <Swiper 
       spaceBetween={130}
       autoplay={true}
       speed={1000}
       slidesPerView={4}
       loop={true}
       delay={200}
        centeredSlides={false}
        className="blog-slider"
        >
    
            <SwiperSlide>
                <img src="https://i.pinimg.com/736x/28/a4/70/28a470426182529c6a58593f69eb1117--handsome-boys.jpg"  alt='me'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://lh6.googleusercontent.com/-9LjuZ1bVhSE/AAAAAAAAAAI/AAAAAAAAAB4/3WyuR17Wxc8/photo.jpg"  alt='me'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.pinimg.com/736x/fe/b4/b0/feb4b0b3d2faa55f96fefcc7fb0324b2--little-boy-photography-toddler-photography.jpg"  alt='me'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://cdn.shopify.com/s/files/1/0076/3622/2029/products/tfgVvxk__97826.1526663271.1280.1280_c4c61aa4-58dd-46ec-b64d-29338a74de67_1800x1800.jpg?v=1594616814"  alt='me'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.pinimg.com/736x/28/a4/70/28a470426182529c6a58593f69eb1117--handsome-boys.jpg"  alt='me'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.pinimg.com/736x/28/a4/70/28a470426182529c6a58593f69eb1117--handsome-boys.jpg"  alt='me'/>
            </SwiperSlide>
        </Swiper>
        </div>
    )
}

export default Blog