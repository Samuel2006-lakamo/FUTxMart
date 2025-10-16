import React, { useState, useEffect } from "react";
import { HiPause, HiPlay } from "react-icons/hi2";
import {
  ShoppingBag,
  Store,
  Users,
  Shield,
  Zap,
  Heart,
  GraduationCap,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
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

  // Preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Auto-change every 5 seconds (pause on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Manual navigation
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
          style={{ backgroundImage: `url(${img})` }}
          role="group"
          aria-roledescription="slide"
          aria-label={`Slide ${index + 1} of ${images.length}`}
          aria-hidden={current !== index}
        ></div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-blend-overlay opacity-40 bg-purple-900 z-10"></div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-4">
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center inset-0backdrop-blur-lg bg-black/5 border-2 border-purple-700
               gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary ">
                <GraduationCap className="w-4 h-4" />
                Welcome to FUTMxMart
              </div>
             
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Buy & Sell Within Your
                <span className="text-primary text-purple-600"> Campus Community</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Connect students, enable commerce. The marketplace built for
                students, by students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <button size="lg" className="text-lg bg-purple-800 py-3 rounded-sm px-4 w-auto flex items-center overflow-hidden">
                  Start Buying
                  <ShoppingBag className="ml-2 w-5 h-5" />
                </button>
                <button size="lg" variant="outline" className=" text-lg border-2 border-purple-800 hover:bg- py-3 rounded-sm px-4 w-auto flex items-center overflow-hidden">
                  Become a Vendor
                  <Store className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
        ;
      </div>

      {/* Side Navigation Buttons */}
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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2    hidden
        md:block -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all hover:scale-110 z-20"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all ${
              current === index
                ? "bg-white w-8"
                : "bg-white/50 w-3 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={current === index ? "true" : "false"}
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
