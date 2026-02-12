import { useState, useRef, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion ,  AnimatePresence } from "framer-motion";

const languages = ["English", "Français"];

export default function LanguageDropdown({ value, onChange }) {
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
        className="flex items-center gap-21 px-5 py-4 rounded-xl
                    hover:bg-gray-100 border border-[#ebedef] transition text-[#697886] font-medium cursor-pointer"
      >
        
         {value}

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-[#697886]"
        >
          <img src="/icons/arrow-down.png" alt="" className="w-5 h-5" />
        </motion.span>
      </button>

      {/* DROPDOWN (TOP) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full mb-3 right-0
                       w-50 rounded-xl bg-white z-50
                       border border-[#ebedef] overflow-hidden"
          >
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  onChange(lang);
                  setOpen(false);
                }}
                className={`w-full flex justify-between px-5 py-4
              hover:bg-gray-50 transition  text-[#343b42] 
              ${value === lang ? "bg-gray-50" : ""}`}
              >
                {lang}
                

               
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
