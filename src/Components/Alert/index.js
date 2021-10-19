import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./styles.css";
function Index() {
  SwiperCore.use([Navigation]);
  SwiperCore.use([Pagination]);
  SwiperCore.use([Scrollbar]);
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={["Navigation", "Pagination", "Scrollbar", "A11y"]}
        // modules={["Navigation", "Pagination", "Scrollbar", "A11y"]}
        spaceBetween={50}
        effect={"fade"}
        loop={true}
        navigation
        pagination={{
          clickable: true,
          el: "blog-slider__pagination",
          renderBullet: () => {
            return <span>Hey</span>;
          },
        }}
        scrollbar={{ draggable: true, className: "swiperScrollbar" }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        direction={"vertical"}
      >
        {/* swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev */}
        <SwiperSlide>
          <div className="blog-slider__img">
            <img src="images/warning_without_bg.png" alt="" />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">30 December 2019</span>
            <div className="blog-slider__title">Lorem Ipsum Dolor</div>
            <div className="blog-slider__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae voluptate repellendus magni illo ea animi?{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="blog-slider__img">
            <img
              src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg"
              alt=""
            />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">26 December 2019</span>
            <div className="blog-slider__title">Lorem Ipsum Dolor</div>
            <div className="blog-slider__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae voluptate repellendus magni illo ea animi?{" "}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Index;
