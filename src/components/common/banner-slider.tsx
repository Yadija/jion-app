// Import Swiper styles
import "swiper/swiper-bundle.css";

import { MoveLeft, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
// import Swiper core and required modules
import { Autoplay } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// components
import BannerSliderSkeleton from "@/components/common/banner-slider-skeleton";
import GenreList from "@/components/common/genre-list";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
// types
import { Anime } from "@/types/anime.type";

function Navigation() {
  const swiper = useSwiper();

  return (
    <section className="absolute bottom-0 z-[1] w-full">
      <section className="mx-auto flex w-full max-w-7xl justify-end space-x-2 px-5">
        <Button
          onClick={() => swiper.slidePrev()}
          variant="ghost"
          size="icon"
          className="hover:text-fun-blue dark:hover:text-denim-blue"
        >
          <MoveLeft />
        </Button>

        <Button
          onClick={() => swiper.slideNext()}
          variant="ghost"
          size="icon"
          className="hover:text-fun-blue dark:hover:text-denim-blue"
        >
          <MoveRight />
        </Button>
      </section>
    </section>
  );
}

interface BannerSliderProps {
  title: string;
  link: string;
  data: Anime[] | null;
  isLoading: boolean;
}

export default function BannerSlider({
  title,
  link,
  data,
  isLoading,
}: BannerSliderProps) {
  if (isLoading || !data) {
    return <BannerSliderSkeleton />;
  }

  return (
    <section className="relative top-[calc(var(--navbar-height)_*_-1)]">
      <Swiper
        modules={[Autoplay]}
        className="h-[calc(var(--banner-height)_+_var(--navbar-height)_+_150px)]"
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
      >
        <section className="absolute top-[var(--navbar-height)] z-[5] w-full">
          <section className="mx-auto h-[40px] w-full max-w-7xl px-5 text-3xl font-bold">
            <Link to={link}>{title}</Link>
          </section>
        </section>

        <Navigation />

        {data.map((item) => (
          <SwiperSlide
            key={item.mal_id}
            className="w-full bg-fun-blue bg-cover bg-[center_top_30%] dark:bg-denim-blue"
            style={{
              backgroundImage: `url(${item.images.jpg.large_image_url})`,
            }}
          >
            <section className="flex h-full bg-gradient-to-t from-soft-peach from-10% to-transparent to-[150%] dark:from-baltic-sea">
              <Link
                to={`/anime/${item.mal_id}`}
                className="mx-auto mt-[calc(var(--navbar-height)_+_50px)] flex w-full max-w-7xl gap-5 px-5"
              >
                <section className="shrink-0">
                  <Card className="w-full max-w-[200px] border-none">
                    <img
                      className="w-[120px] rounded-md bg-gradient-to-tl from-gray-300 to-white shadow-sm sm:w-[150px] md:w-[200px]"
                      src={item.images.jpg.large_image_url}
                      alt={item.title}
                    />
                  </Card>
                </section>

                <section className="grow">
                  <h2 className="line-clamp-3 text-4xl font-bold text-fun-blue dark:text-denim-blue">
                    {item.title}
                  </h2>
                  <GenreList genres={item.genres} />

                  <section className="hidden py-2 text-baltic-sea dark:text-soft-peach md:block">
                    <ScrollArea type="auto" className="h-[200px]">
                      <p className="pr-5">{item.synopsis}</p>
                    </ScrollArea>
                  </section>
                </section>
              </Link>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
