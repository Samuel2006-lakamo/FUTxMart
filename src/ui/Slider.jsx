import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

import clsx from "clsx";
function Slider() {
      const slides = [
        {
          id: 1,
          title: " Campus Deals 🔥",
          description:
            "  Buy smarter, cheaper — all from your fellow students!",
          image: "/images/banner1.jpg",
          color: "bg-gradient-to-r from-purple-700 to-indigo-700",
        },
        {
          id: 2,
          title: " Support Student Vendors 💼",
          description: "Shop directly from verified FUTMinna sellers.",
          image: "/images/banner2.jpg",
          color: "bg-gradient-to-r from-pink-700 to-purple-800 ",
        },

        {
          id: 3,
          title: " New Arrivals 🚀",
          description: "  Fresh listings daily — don’t miss out!",
          image: "/images/banner3.jpg",
          color: "bg-gradient-to-r from-purple-700 to-blue-600",
        },
        {
          id: 4,
          title: "Fashion That Speaks Styles",
          description: "Step into comfort and class with our latest arrivals",
          image: "/images/banner4.jpg",
          color: "bg-gradient-to-r from-purple-800 to-pink-700",
        },
      ];
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      loop
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="w-full h-full"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="h-full bg-cover pt-10 bg-center flex flex-col items-center justify-center text-center text-white relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={clsx(slide.color, "absolute inset-0 opacity-70")} />
            <div className="relative z-10 px-6 sm:px-12">
              <h2 className="text-2xl sm:text-4xl font-extrabold drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="mt-3 text-sm sm:text-lg max-w-md mx-auto drop-shadow-md">
                {slide.description}
              </p>
              <button className="mt-5 bg-amber-500 hover:bg-amber-400 transition text-white font-semibold py-2 px-6 rounded-full shadow-lg">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
