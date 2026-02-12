/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import meals from "../data/meals.json";
import { Link } from "react-router-dom";
import MealFilters from "../components/MealFilters";
import MealCard from "../components/MealCard";

export default function MealsSection() {
  const [active, setActive] = useState("All");

  const filteredMeals =
    active === "All" ? meals : meals.filter((meal) => meal.category === active);

  return (
    <section className="bg-white py-20 sm:py-24 overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-8">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#343B42] leading-tight">
            Discover our <br /> daily-changing menu
          </h2>
          <p className="mt-4 text-[#697886] text-base sm:text-lg">
            80+ new meals options every week, you'll never get bored.
          </p>

          {/* BADGES */}
          <div className="mt-6 flex items-center justify-center gap-6 sm:gap-8 text-[#343B42] flex-wrap">
            <div className="flex items-center gap-2">
              <img src="/icons/leaf.png" alt="" className="w-5 h-5" />
              <span className="font-medium text-sm sm:text-base">
                Natural ingredients
              </span>
            </div>

            <div className="flex items-center gap-2">
              <img src="/icons/shield.png" alt="" className="w-5 h-5" />
              <span className="font-medium text-sm sm:text-base">
                Allergen-friendly
              </span>
            </div>

            <div className="flex items-center gap-2">
              <img src="/icons/salad.png" alt="" className="w-5 h-5" />
              <span className="font-medium text-sm sm:text-base">
                Vegetarian options
              </span>
            </div>
          </div>

          {/* CTA */}
          <Link to="/menu" className="inline-block mt-8">
            <button className="inline-flex items-center justify-center rounded-full bg-[#24a170] hover:bg-[#1c7e57] px-7 py-3 text-white font-semibold shadow-sm transition cursor-pointer">
              See full menu
            </button>
          </Link>
        </motion.div>

        {/* ================= SLIDER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-14 sm:mt-16 flex gap-6 sm:gap-8 overflow-x-auto scrollbar-hide pb-4 px-4 sm:px-8 lg:ml-15"
        >
          {filteredMeals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </motion.div>

        {/* ================= FILTERS ================= */}
        <div className="mt-10 sm:mt-12">
          <MealFilters active={active} setActive={setActive} />
        </div>
      </div>
    </section>
  );
}
