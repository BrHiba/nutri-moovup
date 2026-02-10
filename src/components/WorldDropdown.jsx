/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 6 countries m3a drapo
const countries = [
  { name: "World", flag: "/icons/world.png" },
  { name: "Morocco", flag: "/icons/flags/morocco.png" },
  { name: "Spain", flag: "/icons/flags/spain.png" },
  { name: "Italy", flag: "/icons/flags/italy.png" },
  { name: "Portugal", flag: "/icons/flags/portugal.png" },
  { name: "Tunisia", flag: "/icons/flags/tunisia.png" },
  { name: "Algeria", flag: "/icons/flags/algeria.png" },
  { name: "Egypt", flag: "/icons/flags/egypt.png" },
];

export default function WorldDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const selectedCountry =
    countries.find((c) => c.name === value) || countries[0];

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
        className="flex items-center gap-17 px-5 py-4 rounded-xl
                   hover:bg-gray-100 border border-[#ebedef] transition text-gray-500 font-medium cursor-pointer"
      >
        <div className="flex items-center gap-2">
          {/* FLAG OF SELECTED COUNTRY */}
          <img
            src={selectedCountry.flag}
            className="w-5 h-5"
            alt={selectedCountry.name}
          />
          {selectedCountry.name}
        </div>

        {/* ARROW */}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          className="text-gray-500"
        >
          <img src="/icons/arrow-down.png" className="w-5 h-5" />
        </motion.span>
      </button>

      {/* DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full mb-3 right-0 w-51 rounded-xl bg-white z-50 border border-[#ebedef] overflow-hidden"
          >
            {countries.map((c) => (
              <button
                key={c.name}
                onClick={() => {
                  onChange(c.name);
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition text-gray-700
                  ${value === c.name ? "bg-gray-50" : ""}`}
              >
                <div className="flex items-center gap-2">
                  <img src={c.flag} className="w-5 h-5" alt={c.name} />
                  {c.name}
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
