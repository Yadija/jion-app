// Import Swiper styles
import "swiper/swiper-bundle.css";

import { Link } from "react-router-dom";
// import Swiper core and required modules
import { Autoplay, FreeMode, Mousewheel } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// components
import { Card } from "@/types/card.type";

interface CardSliderProps {
  data: Card[];
  title: string;
  link?: string;
}

export default function CardSlider({ data, title, link }: CardSliderProps) {
  return (
    <section className="mx-4 mb-4">
      <section className="mb-2 flex justify-between text-baltic-sea dark:text-soft-peach">
        <h2 className="text-xl font-bold">{title}</h2>
        {link && (
          <Link
            to={link}
            className="hover:text-fun-blue active:text-fun-blue hover:dark:text-denim-blue active:dark:text-denim-blue"
          >
            See All
          </Link>
        )}
      </section>

      <Swiper
        modules={[Autoplay, Mousewheel, FreeMode]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        mousewheel={true}
        spaceBetween={20}
        slidesPerView="auto" // this is a point to make the carousel fixed
      >
        {data.map((item) => (
          <SwiperSlide
            className="max-w-[130px] sm:max-w-[160px] md:max-w-[200px]"
            key={item.id}
          >
            <Link to={item.link}>
              <section
                className="select-none overflow-hidden rounded-lg text-soft-peach shadow-md dark:text-baltic-sea"
                title={item.title}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`${
                    item.rating?.toLowerCase().includes("rx") &&
                    "blur-md" /* filter for nsfw */
                  } pointer-events-none h-[200px] w-full bg-gradient-to-tl from-gray-300 to-white object-cover object-center sm:h-[220px] md:h-[260px]`}
                />
              </section>
              <h2 className="line-clamp-2 font-semibold">{item.title}</h2>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
