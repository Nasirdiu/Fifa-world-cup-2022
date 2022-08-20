import React from 'react';
import img from '../../../assets/sadium/alianz arena.jpg'

import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination } from "swiper";
import 'swiper/css';
const Studium = () => {
    return (
        <div>
      <h1 className="text-3xl text-center font-bold uppercase mt-40">
        All Stadium
      </h1>
      <div className="mt-10">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div class="card card-compact w-96 bg-base-100 shadow-xl hover:bg-red-500">
        <SwiperSlide>
          <figure>
            
            <img
              src={img}
              alt=""
            />
         
          </figure>
          </SwiperSlide>
        </div>
        <div class="card card-compact w-96 bg-base-100 shadow-xl hover:bg-red-500">
        <SwiperSlide>
          <figure>
            
            <img
              src={img}
              alt=""
            />
         
          </figure>
          </SwiperSlide>
        </div>
        <div class="card card-compact w-96 bg-base-100 shadow-xl hover:bg-red-500">
        <SwiperSlide>
          <figure>
            
            <img
              src={img}
              alt=""
            />
         
          </figure>
          </SwiperSlide>
        </div>
        <div class="card card-compact w-96 bg-base-100 shadow-xl hover:bg-red-500">
        <SwiperSlide>
          <figure>
            
            <img
              src={img}
              alt=""
            />
         
          </figure>
          </SwiperSlide>
        </div>
        <div class="card card-compact w-96 bg-base-100 shadow-xl hover:bg-red-500">
        <SwiperSlide>
          <figure>
            
            <img
              src={img}
              alt=""
            />
         
          </figure>
          </SwiperSlide>
        </div>
        <div class="card card-compact w-96 bg-base-100 shadow-xl hover:bg-red-500">
        <SwiperSlide>
          <figure>
            
            <img
              src={img}
              alt=""
            />
         
          </figure>
          </SwiperSlide>
        </div>
        <div class="card card-compact w-96 bg-base-100 shadow-xl hover:bg-red-500">
        <SwiperSlide>
          <figure>
            
            <img
              src={img}
              alt=""
            />
         
          </figure>
          </SwiperSlide>
        </div>
      </Swiper>
      </div>
    </div>
    );
};

export default Studium;