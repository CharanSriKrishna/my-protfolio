import React from 'react';
import './Certificates.css';
import { Data } from './data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

const Certificates = () => {
  return (
    <section className="Certificates">
      <h5> My Credentials </h5>
      <h2> Certificates </h2>
      <Swiper
        className="app__work-portfolios"
        loop={true}
        spaceBetween={24}
        pagination={{
          slidesPerView: 1,
          clickable: true,
        }}
        breakpoints={{
          1240: {
            slidesPerView: 3,
          },
          780: {
            slidesPerView: 2,
          },
          560: {
            slidesPerView: 2,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, desc }) => (
          <SwiperSlide key={id} className="app__work-items">
            <a href="https://drive.google.com/drive/folders/19Jg5qUNeToVsIz0C8Z39ik0zXrpHaOsx?usp=sharing" target="_blank" rel="noopener noreferrer">
              <div className="app__work-imgs">
                <img src={image} alt={title} />
                <div className="app__work-hovers">
                  <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Certificates;
