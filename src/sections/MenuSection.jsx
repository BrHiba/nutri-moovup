/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import meals from "../data/meals.json";

const filters = [
  { label: "All" },
  { label: "High Protein", icon: "/icons/proteine.png" },
  { label: "Balanced", icon: "/icons/balance.png" },
  { label: "Vegetarian", icon: "/icons/vegetarian.png" },
  { label: "Chef's Picks", icon: "/icons/chef.png" },
  { label: "Custom Macros", icon: "/icons/macros.png" },
  { label: "Low Carb", icon: "/icons/lowcarb.png" },
];
export default function MealsSection() {
  const [active, setActive] = useState("All");

  const filteredMeals =
    active === "All" ? meals : meals.filter((meal) => meal.category === active);

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#343B42] leading-tight">
            Discover our <br /> daily-changing menu
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            80+ new meals options every week, you'll never get bored.
          </p>

          {/* BADGES */}
          <div className="mt-6 flex items-center justify-center gap-8 text-transform: uppercase  text-[#343B42] flex-wrap">
            <div className="flex items-center gap-2">
              <img src="/icons/leaf.png" alt="" className="w-5 h-5" />
              <span className="font-medium">Natural ingredients</span>
            </div>

            <div className="flex items-center gap-2">
              <img src="/icons/shield.png" alt="" className="w-5 h-5" />
              <span className="font-medium">Allergen-friendly</span>
            </div>

            <div className="flex items-center gap-2">
              <img src="/icons/salad.png" alt="" className="w-5 h-5" />
              <span className="font-medium">Vegetarian options</span>
            </div>
          </div>

          {/* CTA */}
          <button className="mt-8 inline-flex items-center justify-center rounded-full bg-emerald-600 px-7 py-3 text-white font-semibold shadow-sm hover:bg-emerald-700 cursor-pointer transition">
            See full menu
          </button>
        </motion.div>

        {/* ================= SLIDER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-16 ml-16 flex gap-8 overflow-x-auto scrollbar-hide pb-4"
        >
          {filteredMeals.map((meal) => (
            <motion.div
              key={meal.id}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="min-w-60 sm:min-w-65  cursor-grab"
            >
              {/* IMAGE */}
              <div className="relative rounded-[22px] overflow-hidden  bg-gray-100">
                <img
                  src={meal.image}
                  alt={meal.title}
                  className="w-full h-55 object-cover "
                />

                {/* KCAL BADGE */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-sm">
                  {meal.calories} kcal
                </div>
              </div>

              {/* TEXT */}
              <div className="mt-3">
                <h3 className="font-semibold text-gray-900 leading-snug">
                  {meal.title}
                </h3>

                {/* MACROS */}
                <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                    {meal.protein}g Protein
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-orange-400" />
                    {meal.carbs}g Carbs
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                    {meal.fat}g Fat
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= FILTERS ================= */}
 <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-12 flex items-center justify-center flex-wrap gap-3"
        >  {filters.map((f) => (
    <button
      key={f.label}
      onClick={() => setActive(f.label)}
      className={`flex items-center gap-2 px-4 py-3 rounded-full  whitespace-nowrap transition-all cursor-pointer
        ${
          active === f.label
            ? "bg-emerald-900 text-white shadow-sm"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
    >
      {f.icon && <img src={f.icon} alt="" className="w-4 h-4" />}
      {f.label}
    </button>
  ))}
</motion.div>
      </div>
    </section>
  );
}



