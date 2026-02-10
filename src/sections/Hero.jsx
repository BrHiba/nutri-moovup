import { useEffect, useState } from "react";

const slides = [
  { title: "For Busy People", img: "/images/hero1.png" },
  { title: "To Lose Weight", img: "/images/hero2.png" },
  { title: "To Gain Muscle", img: "/images/hero3.png" },
  { title: "For High Performers", img: "/images/hero4.png" },
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
    <section className="relative h-screen w-full flex overflow-hidden bg-white font-sans">
      {/* LEFT */}
      <div className="relative z-20 w-1/2 flex flex-col justify-center pl-22  space-y-4">

        {/* TITLE */}
        <div className="space-y-2">
          <h1 className="text-6xl font-bold tracking-tight text-[#343B42] leading-tight">
            Healthy Meals
          </h1>

          {/* Animated subtitle */}
          <div className="relative h-17.5 overflow-hidden">
  <div key={current} className="absolute inset-0 animate-subtitle">
    <h1 className="text-6xl font-bold tracking-tight text-[#343B42] whitespace-nowrap">
  {slides[current].title}
</h1>

  </div>
</div>

        </div>

        <p className="text-[#697886] max-w-lg text-lg font-medium leading-relaxed">
          Designed by nutritionists, crafted by chefs, personalized to your goals.
          Fresh daily. Just heat and eat.
        </p>

        <button className="w-fit bg-[#24a170] text-white px-10 py-4  mt-3 rounded-full hover:bg-emerald-700  transition  font-semibold cursor-pointer">
          See plans
        </button>
      </div>

      {/* RIGHT */}
      <div className="relative w-1/2 h-full overflow-hidden">
        {slides.map((slide, i) => {
          const isActive = i === current;
          const isPrev =
            i === (current - 1 + slides.length) % slides.length;

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
