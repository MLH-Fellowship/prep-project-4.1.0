import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import axios from "axios";
import "./styles.css";
function Index({ city }) {
  const [data, setData] = useState([1]);
  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_ALERTKEY}&q=${city}&alerts=yes`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (typeof res !== "undefined" && res.length > 0)
          setData(res?.alerts?.alert);
      })
      .catch((err) => {
        alert(err);
      });

    console.log("dats is ", data);
  }, [city]);
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
        {data?.map((alert) => {
          return (
            <SwiperSlide>
              <div className="blog-slider__img">
                <img src="images/warning_without_bg.png" alt="" />
              </div>
              <div className="blog-slider__content">
                <span className="blog-slider__code">
                  Effective from: {alert?.effective}
                </span>
                <span className="blog-slider__code">
                  Expires on: {alert?.expires}
                </span>
                <div className="blog-slider__title">{alert?.event}</div>
                <div className="blog-slider__text">{alert?.desc}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default Index;
