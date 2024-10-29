// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import Swiper core and required modules
import { Autoplay, FreeMode, Mousewheel } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// components
import CardItem from "../Cards/CardItem";

export default function Carousel({ data }: any) {
  return (
    <Swiper
      modules={[Autoplay, Mousewheel, FreeMode]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop={true}
      freeMode={true}
      mousewheel={true}
      spaceBetween={20}
      slidesPerView="auto" // this is a point to make the carousel fixed
    >
      {data.map((item: any) => (
        <SwiperSlide
          key={item.mal_id}
          style={{ width: "80%", maxWidth: "180px", marginRight: "20px" }} // and this the second
        >
          <CardItem {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
