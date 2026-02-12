// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function MealCard({ meal, showDescription }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="min-w-55 sm:min-w-60 md:min-w-65 cursor-grab"
    >
      {/* IMAGE */}
      <div className="relative rounded-[22px] overflow-hidden bg-gray-100">
        <img
          src={meal.image}
          alt={meal.title}
          className="w-full h-50 sm:h-55 md:h-65 object-cover"
        />

        {/* KCAL BADGE */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-[#343b42] shadow-sm">
          {meal.calories} kcal
        </div>
      </div>

      {/* TEXT */}
      <div className="mt-3">
        <h3 className="font-semibold text-[#343b42] leading-snug text-sm sm:text-base">
          {meal.title}
        </h3>
        {showDescription && (
          <p className="mt-1 text-xs sm:text-sm text-[#697886] line-clamp-2">
            {meal.description}
          </p>
        )}

        {/* MACROS */}
        <div className="mt-2 flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-[#697886]">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#987dde]" />
            {meal.protein}g Protein
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#f4b248]" />
            {meal.carbs}g Carbs
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#61a7e6]" />
            {meal.fat}g Fat
          </div>
        </div>
      </div>
    </motion.div>
  );
}
