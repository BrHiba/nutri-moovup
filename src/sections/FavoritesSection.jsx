/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import meals from "../data/favorites.json";
import MacroBar from "../components/MacroBar";

export default function FavoritesSection() {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="px-4 sm:px-8 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10 px-7">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#343b42]">
              Find your perfect meal plan
            </h2>
            <p className="text-gray-500 mt-4">
              Starting at MAD 29/meal and MAD 19/breakfast
            </p>

            <button className="mt-5 bg-[#24a170] hover:bg-[#1c7e57] text-white px-10 py-4 rounded-full font-medium transition">
              See plans
            </button>
          </div>

          {/* ARROWS */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-13 h-13 rounded-full bg-[#e9f6f1] text-[#24a170] flex items-center justify-center hover:bg-[#bce7d6] transition"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-13 h-13 rounded-full bg-[#e9f6f1] text-[#24a170] flex items-center justify-center hover:bg-[#bce7d6] transition"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-2 pl-7 scroll-smooth"
        >
          {meals.map((meal) => (
            <motion.div
              key={meal.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
              className="min-w-65 sm:min-w-75 bg-white rounded-3xl shadow-sm hover:shadow-lg transition cursor-pointer overflow-hidden"
            >
              {/* IMAGE */}
              <div className="relative h-95 overflow-hidden">
                <motion.img
                  src={meal.image}
                  alt={meal.title}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full h-full object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-md flex items-center gap-3">
                    <div className="w-9 h-12 flex items-center justify-center">
                      {meal.labelIcon && (
                        <img
                          src={meal.labelIcon}
                          alt=""
                          className="w-7 h-7"
                        />
                      )}
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-semibold text-[#343b42] leading-tight">
                        {meal.label}
                      </p>

                      <MacroBar
                        protein={meal.macros.protein}
                        carbs={meal.macros.carbs}
                        fat={meal.macros.fat}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MOBILE ARROWS */}
        <div className="flex sm:hidden justify-center gap-4 mt-6">
          <button
            onClick={() => scroll("left")}
            className="w-11 h-11 rounded-full bg-[#e9f6f1] hover:bg-[#bce7d6] text-[#24a170] flex items-center justify-center active:scale-95 transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-11 h-11 rounded-full bg-[#e9f6f1] hover:bg-[#bce7d6] text-[#24a170] flex items-center justify-center active:scale-95 transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
