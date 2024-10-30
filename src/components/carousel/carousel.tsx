// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import Swiper core and required modules
import { Autoplay, FreeMode, Mousewheel } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// components
import CardItem, { CardItemProps } from "../cards/card-item";

interface CarouselProps {
  data: CardItemProps[];
}

export default function Carousel({ data }: CarouselProps) {
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
      {data.map((item) => (
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
