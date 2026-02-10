/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const filters = [
  { label: "All" },
  { label: "High Protein", icon: "/icons/proteine.png" },
  { label: "Balanced", icon: "/icons/balance.png" },
  { label: "Vegetarian", icon: "/icons/vegetarian.png" },
  { label: "Chef's Picks", icon: "/icons/chef.png" },
  { label: "Custom Macros", icon: "/icons/macros.png" },
  { label: "Low Carb", icon: "/icons/lowcarb.png" },
];

export default function MealFilters({ active, setActive }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      viewport={{ once: true }}
      className="flex items-center justify-center flex-wrap gap-3"
    >
      {filters.map((f) => (
        <button
          key={f.label}
          onClick={() => setActive(f.label)}
          className={`flex items-center gap-2 px-4 py-3 rounded-full whitespace-nowrap transition-all cursor-pointer
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
  );
}
