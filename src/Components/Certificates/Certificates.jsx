import React from 'react'
import './Certificates.css'
import {Data} from "./data"
import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Certificates = () => {
  
  return (
    <section className='Certificates'>
      <h5> My Credentials </h5>
      <h2> Certificates </h2>
      <Swiper className="app__work-portfolios"
        loop={true}
        
        spaceBetween={24}
        pagination={{
          slidesPerView: 1,
          clickable: true,
        }}
        breakpoints={{
          1240:{
            slidesPerView: 3,
          },
          780:{
            slidesPerView: 2,
          },
          560: {
            slidesPerView: 2,
          },
        }}
        modules={[Pagination]}
      >

        {Data.map(({id,image,title,desc}) => {
          return (
            <SwiperSlide className="app__work-items app__flex">
              <div  className="app__work-imgs app__flex">
              <img src={image} alt="" />

                  <div className='app__work-hovers'>
                    <div>
                    <h3 >{title}</h3>
                    <p >{desc}</p>
                    </div>
                  </div>

              </div>

            </SwiperSlide>
          );
        })}

      </Swiper>
    </section>
  )
}

export default Certificates