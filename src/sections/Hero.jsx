import { useEffect, useState } from "react";

const slides = [
  { img: "/images/hero1.png" },
  { img: "/images/hero2.png" },
  { img: "/images/hero3.png" },
  { img: "/images/hero4.png" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col lg:flex-row overflow-hidden bg-white font-sans">
      {/* LEFT */}
      <div className="relative z-20 w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 sm:px-10 lg:pl-22 space-y-4 h-1/2 lg:h-auto">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#343B42] leading-tight">
            Nutri Moov'up <br />
            <span>sports nutrition</span>
          </h1>
        </div>

        <p className="text-[#697886] max-w-lg text-base sm:text-lg font-medium leading-relaxed">
          Designed by nutritionists, crafted by chefs, personalized to your
          goals. Fresh daily. Just heat and eat.
        </p>

        <button className="w-fit bg-[#24a170] text-white px-8 sm:px-10 py-3 sm:py-4 mt-3 rounded-full hover:bg-[#1c7e57] transition font-semibold cursor-pointer">
          See plans
        </button>
      </div>

      {/* RIGHT */}
      <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full overflow-hidden">
        {slides.map((slide, i) => {
          const isActive = i === current;
          const isPrev = i === (current - 1 + slides.length) % slides.length;

          return (
            <img
              key={i}
              src={slide.img}
              alt=""
              className={`
                absolute inset-0 w-full h-full object-cover
                transition-transform duration-2200
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${isActive ? "translate-y-0 z-30" : ""}
                ${isPrev ? "translate-y-0 z-20" : ""}
                ${!isActive && !isPrev ? "translate-y-full z-0" : ""}
              `}
            />
          );
        })}
      </div>
    </section>
  );
}
