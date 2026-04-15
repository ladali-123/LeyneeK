import { useState, useEffect } from "react";
import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";

const slides = [
  {
    image: car1,
    tag: "Featured Product",
    title: "Interactive Flat Panel",
    description:
      "Free creation, seamless touch at fingertips, intelligent office experience for modern classrooms.",
    badge: "New Launch",
  },
  {
    image: car2,
    tag: "Digital Teaching",
    title: "Smart Teaching Device",
    description:
      "Empower educators with cutting-edge digital tools designed for the next generation of learning.",
    badge: "Best Seller",
  },
  {
    image: car3,
    tag: "Corporate Solution",
    title: "Conference Display System",
    description:
      "Seamless collaboration and crystal-clear presentations for your boardroom and beyond.",
    badge: "Premium",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (index) => {
    if (animating || index === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 400);
  };

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const slide = slides[current];

  return (
    <div className="relative w-full overflow-hidden select-none h-[420px] sm:h-[460px] md:h-[550px]">

      {/* Red top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-900 via-red-500 to-red-900 z-30" />

      {/* Full Background Image */}
      <img
        src={slide.image}
        alt={slide.title}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ${
          animating ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Slide Content — mobile: center, desktop: right */}
      <div
        className={`relative z-20 h-full flex items-center justify-center sm:justify-end px-6 sm:px-10 md:px-16 transition-opacity duration-400 ${
          animating ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex flex-col gap-3 sm:gap-5 w-full max-w-sm sm:max-w-lg text-white text-center sm:text-left items-center sm:items-start">

          {/* Tags */}
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-white border border-white/50 rounded-full px-3 py-1 bg-white/10 backdrop-blur-sm">
              {slide.tag}
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-white bg-red-600 rounded-full px-3 py-1">
              {slide.badge}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight uppercase drop-shadow-lg w-full">
            {slide.title}
          </h2>

          {/* Divider — desktop only */}
          <div className="hidden sm:flex items-center gap-2">
            <div className="h-0.5 w-12 bg-yellow-400 rounded" />
            <div className="h-0.5 w-4 bg-yellow-300/60 rounded" />
          </div>

          {/* Description — desktop only */}
          <p className="hidden sm:block text-white/80 text-sm sm:text-base leading-relaxed font-medium drop-shadow">
            {slide.description}
          </p>

          {/* Buttons */}
          <div className="flex gap-3 mt-1 sm:mt-2 w-full justify-center sm:justify-start">
            <button className="px-5 py-2.5 bg-gradient-to-r from-red-700 to-red-500 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-lg hover:-translate-y-0.5 transition-all duration-200 tracking-wide">
              Explore Now
            </button>
            <button className="px-5 py-2.5 border-2 border-white/60 text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-200 tracking-wide">
              Learn More
            </button>
          </div>

        </div>
      </div>

      {/* Prev Button */}
      <button
        onClick={prev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 bg-white/20 hover:bg-red-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 border border-white/30 backdrop-blur-sm"
      >
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={next}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 bg-white/20 hover:bg-red-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 border border-white/30 backdrop-blur-sm"
      >
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-7 h-2 bg-red-500"
                : "w-2 h-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-4 right-4 sm:right-8 text-[10px] sm:text-xs font-bold text-white/60 z-30 tracking-widest">
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>

    </div>
  );
}