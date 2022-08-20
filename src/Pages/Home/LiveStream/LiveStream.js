import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import 'swiper/css';
// import './Live.css'
import LiveCard from "./LiveCard";
const LiveStream = () => {
  const [live, setLive] = useState([]);
  useEffect(() => {
    fetch("live.json")
      .then((res) => res.json())
      .then((data) => setLive(data));
  }, []);
  return (
    <div >
      <h1 className="text-3xl text-center font-bold uppercase mt-16">
        Live <span className="text-orange-400">Stream</span>
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
      {
          live.map(lives=> 
          <SwiperSlide key={lives.id}>
            <LiveCard lives={lives}></LiveCard>            
          </SwiperSlide>)
      }
      </Swiper>
      </div>
    </div>
  );
};

export default LiveStream;
