/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack"];

export default function MealTypeDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-8 px-4 py-3 rounded-full
                   bg-gray-100 hover:bg-gray-200 transition text-gray-700 cursor-pointer"
      >
        {value === "All" ? "Type of meal" : value}
        <motion.span
  animate={{ rotate: open && value === "All" ? 180 : 0 }}
  transition={{ duration: 0.25 }}
  className="text-gray-500 cursor-pointer"
  onClick={(e) => {
    if (value !== "All") {
      e.stopPropagation(); 
      onChange("All");
    }
  }}
>
  {value === "All" ? (
    <img src="/icons/arrow-down.png" alt="" className="w-5 h-5" />
  ) : (
    <img src="/icons/close.png" alt="" className="w-5 h-5" />
  )}
</motion.span>

      </button>

      {/* DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute mt-3 right-0 w-55 rounded-2xl bg-white text-gray-700 
                        shadow-xl  z-50 overflow-hidden border border-[#ebedef] "
          >
            {mealTypes.map((type) => (
              <button
                key={type}
                onClick={() => {
                  if (value === type) {
                    onChange("All"); // remove filter
                  } else {
                    onChange(type); // select
                  }
                }}
                className="w-full flex items-center justify-between
                           px-5 py-5 font-medium text-black
                           hover:bg-gray-50 transition border-b border-[#ebedef] cursor-pointer"
              >
                {type}

                {/* CHECK */}
                <span
                  className={`w-5 h-5 rounded-md border flex items-center justify-center
                    ${
                      value === type
                        ? "bg-emerald-600 border-emerald-600 text-white"
                        : "border-gray-300"
                    }`}
                >
                  {value === type && "✓"}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
