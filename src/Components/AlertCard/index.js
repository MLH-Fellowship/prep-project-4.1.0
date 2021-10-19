import React from "react";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
function Index() {
  return (
    <SwiperSlide>
      <div className="blog-slider__img">
        <img src="images/warning_without_bg.png" alt="" />
      </div>
      <div className="blog-slider__content">
        <span className="blog-slider__code">30 December 2019</span>
        <div className="blog-slider__title">Lorem Ipsum Dolor</div>
        <div className="blog-slider__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          voluptate repellendus magni illo ea animi?{" "}
        </div>
      </div>
    </SwiperSlide>
  );
}

export default Index;
