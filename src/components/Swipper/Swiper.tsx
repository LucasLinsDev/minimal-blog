import styles from "./Swiper.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CardHero } from "../Card/CardHero/CardHero";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { useMediaQuery } from "react-responsive";
export function SwiperWrapper({ children }: any) {
  let breakpoints = {
    640: {
      width: 640,
      slidesPerView: 1.8,
    },

    768: {
      width: 768,
      slidesPerView: 2.8,
    },
    1400: {
      width: 1400,
      slidesPerView: 2,
    },
    1900: {
      width: 1900,
      slidesPerView: 3,
    },
  };
  return (
    <Swiper
      breakpoints={breakpoints}
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={26}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className={styles.swiper}
    >
      {[1, 2, 3, 4, 5, 6, 7].map(() => (
        <SwiperSlide>
          <CardHero />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
