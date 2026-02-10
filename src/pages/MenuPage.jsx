/* eslint-disable no-unused-vars */
import Navbar from "../sections/Navbar";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import meals from "../data/meals.json";
import MealCard from "../components/MealCard";
import MealFilters from "../components/MealFilters";
import MealTypeDropdown from "../components/MealTypeDropdown";
// 👉 date range (yesterday → +6 days)

function getWeekRange() {
  const start = new Date();
  start.setDate(start.getDate() - 1); // yesterday

  const end = new Date(start);
  end.setDate(start.getDate() + 6); // 6 days ba3d

  const format = (d) =>
    d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });

  return `${format(start)} – ${format(end)}`;
}



function MenuPage() {
    const [visibleCount, setVisibleCount] = useState(8);

  const [navbarVisible, setNavbarVisible] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTime, setActiveTime] = useState("All");

  const filteredMeals = useMemo(() => {
    return meals.filter((meal) => {
      const categoryOk =
        activeCategory === "All" || meal.category === activeCategory;

      const timeOk = activeTime === "All" || meal.bestTime === activeTime;

      return categoryOk && timeOk;
    });
  }, [activeCategory, activeTime]);

  const filters = [
    { label: "All" },
    { label: "High Protein" },
    { label: "Balanced" },
    { label: "Vegetarian" },
    { label: "Low Carb" },
  ];

  return (
    <section className="px-6 md:px-12 pt-10 pb-20   mx-auto">
      <Navbar onVisibilityChange={setNavbarVisible} />

      {/* Spacer for fixed navbar */}
      <div className="h-24" />
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 mx-6"
      >
        {/* DATE RANGE */}
        <div className="flex  items-center mb-5 px-5 py-3 rounded-xl bg-[#d5ffd1] gap-2 w-fit">
          <img src="/icons/date.png" alt="" className="w-5 h-5" />
          <span className="inline-block  text-emerald-700  font-medium">
            {getWeekRange()}
          </span>{" "}
        </div>

        <h1 className="text-4xl md:text-4xl font-bold text-gray-900">
          Check out this week's <span className="text-emerald-600">Menu</span>
        </h1>

        <p className="mt-3 text-gray-500 max-w-xl">
          Discover meals tailored to your goals and lifestyle.
        </p>

        <button className="w-fit bg-[#24a170] text-white px-10 py-3  mt-8 rounded-full hover:bg-emerald-700  transition  font-semibold cursor-pointer">
          Order Now{" "}
        </button>
      </motion.div>
      {/* FILTER BAR */}
      {/* STICKY FILTER BAR */}
      <div
        className={`
          sticky z-40 transition-all duration-300
          ${navbarVisible ? "top-20" : "top-0"}
          bg-white/70 backdrop-blur-xl 
        `}
      >
        <div className="w-full mx-auto flex items-center justify-between py-4 px-6">
          <MealFilters active={activeCategory} setActive={setActiveCategory} />
          <MealTypeDropdown value={activeTime} onChange={setActiveTime} />
        </div>
      </div>

      {/* GRID CARDS */}
      <motion.div
        layout
        className="mt-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        <AnimatePresence>
          {filteredMeals.slice(0, visibleCount).map((meal, index) => (

            <motion.div
              key={meal.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
            >
              <MealCard meal={meal} showDescription />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {visibleCount < filteredMeals.length && (
  <div className="mt-16 flex justify-center">
    <button
      onClick={() => setVisibleCount((prev) => prev + 8)}
      className="bg-[#d5ffd1] text-emerald-700  px-10 py-3 rounded-full
                 hover:bg-[#a7ff9e] transition font-semibold cursor-pointer"
    >
      Load more meals
    </button>
  </div>
)}


      {/* EMPTY STATE */}
      {filteredMeals.length === 0 && (
        <p className="mt-16 text-center text-gray-400">No meals found 🍽️</p>
      )}
    </section>
  );
}

export default MenuPage;
