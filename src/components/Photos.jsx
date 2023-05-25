import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Photos.css";

// Import Photos
import Me1 from "../assets/photosSwiper/selfie2.jpg";
import Me2 from "../assets/photosSwiper/selfie1.jpg";
import Me3 from "../assets/photosSwiper/selfie3.jpg";
import Me4 from "../assets/photosSwiper/selfie4.jpg";
import Ls1 from "../assets/photosSwiper/1.jpg";
import Ls2 from "../assets/photosSwiper/2.jpg";
import Ls3 from "../assets/photosSwiper/3.jpg";
import Ls4 from "../assets/photosSwiper/4.jpg";

const Photos = () => {
  return (
    <>
      <Swiper
        direction="horizontal"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-[50%]">
            <img className="w-100 block" src={Me1} alt="Selfie 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[50%]">
            <img className="w-100 block" src={Ls1} alt="Landscape 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[50%]">
            <img className="w-100 block" src={Me2} alt="Selfie 2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[50%]">
            <img className="w-100 block" src={Ls2} alt="Landscape 2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[50%]">
            <img className="w-100 block" src={Me3} alt="Selfie 3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[50%]">
            <img className="w-100 block" src={Ls3} alt="Landscape 3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[50%]">
            <img className="w-100 block" src={Me4} alt="Selfie 4" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[50%]">
            <img className="w-100 block" src={Ls1} alt="Landscape 4" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Photos;
