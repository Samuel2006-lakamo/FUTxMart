import React, { useState, useEffect } from "react";
import { HiPause, HiPlay } from "react-icons/hi2";
import { ShoppingBag, Store, GraduationCap } from "lucide-react";
import Button from "../ui/Button"; // ✅ make sure this points to your reusable button file

const images = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.jpg",
  "/images/hero5.jpg",
  "/images/hero6.jpg",
];

function HeroBackground() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const goToSlide = (index) => setCurrent(index);

  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label="Product showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${img}) `}}
        />
      ))}

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-slate-900 to-gray-900 opacity-90 z-10"></div>

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-6">
        <div className="inline-flex items-center gap-2 backdrop-blur-2xl bg-white/10 border border-amber-400 px-4 py-2 rounded-full text-sm font-medium text-white shadow-md">
          <GraduationCap className="w-4 h-4" />
          Welcome to FUTMxMart
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold mt-6 leading-tight">
          Buy & Sell Within Your{" "}
          <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(251,191,36,0.3)]">
            Campus Community
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl mx-auto leading-relaxed">
          Connect students, enable commerce — the marketplace built for students, by students.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <Button
            variant="solid"
            size="lg"
            className="bg-amber-500 hover:bg-amber-400 text-black font-semibold shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
          >
            Start Buying
            <ShoppingBag className="w-5 h-5" />
          </Button>

          <Button

            variant="outline"
            size="lg"
            className="border-teal-400 text-teal-300 hover:bg-white/20 flex items-center gap-2"
          >
            Become a Vendor
            <Store className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Prev / Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 hidden md:block -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all hover:scale-110 z-20"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 hidden md:block -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all hover:scale-110 z-20"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all ${
              current === index
                ? "bg-amber-400 w-8"
                : "bg-white w-3 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Pause indicator */}
      {isPaused && (
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm z-20">
          {isPaused ? <HiPlay /> : <HiPause />}
        </div>
      )}
    </div>
  );
}

export default HeroBackground;