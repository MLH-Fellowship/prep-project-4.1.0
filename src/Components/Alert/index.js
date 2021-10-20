import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import axios from "axios";
import "./styles.css";

const CustomToastWithLink = (msg) => {
  if (typeof msg == 'string') {
    return (
      <div onClick={() => {
        let div = document.querySelector("#alertDiv")
        div.scrollIntoView();
      }}>{msg}</div>
    )
  }
}
function Index({ city }) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const [data, setData] = useState([]);
  useEffect(() => {
    console.log(city)
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_ALERTKEY}&q=${city}&alerts=yes`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        console.log(res?.alerts?.alert);
        const apiData = res?.alerts?.alert;
        console.log(apiData)
        setData(apiData);
        if (apiData.length > 0) {
          toast.error(() => CustomToastWithLink(`Some alerts have been detected in ${capitalizeFirstLetter(city)}`), {
            theme: "colored",
            hideProgressBar: true,
            closeButton: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("dats is ", data);
  }, [city]);
  SwiperCore.use([Navigation]);
  SwiperCore.use([Pagination]);
  SwiperCore.use([Scrollbar]);
  return (
    <>
      {data?.length &&
        <Swiper
          // install Swiper modules
          modules={["Navigation", "Pagination", "Scrollbar", "A11y"]}
          // modules={["Navigation", "Pagination", "Scrollbar", "A11y"]}
          spaceBetween={50}
          effect={"fade"}
          loop={false}
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
      }
      <div id="alertDiv"></div>
    </>
  );
}

export default Index;
