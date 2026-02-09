import { useState } from "react";
import { Link } from "react-router-dom";
import FullscreenMenu from "../components/FullscreenMenu";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className={`
          fixed w-full px-25 py-2
          flex items-center justify-between
          transition-all duration-500 ease-out
          translate-y-0 backdrop-blur-xl bg-white/80
          ${open ? "z-10001" : "z-50"}
        `}
      >
        {/* LEFT */}
        <div className="flex items-center gap-10">
          <Link to="/">
            <img
              src="/logo.png"
              className="
                h-16
                transition-transform duration-500
                hover:scale-105 hover:-rotate-1
              "
            />
          </Link>

          {/* NAV ديما باين */}
          <nav className="hidden md:flex gap-8 text-sm text-gray-700">
            {[
              ["Plans & Packages", "/plans"],
              ["Menu", "/menu"],
              ["Blog", "/blog"],
              ["Contact Us", "/contact"],
            ].map(([label, path]) => (
              <Link
                key={path}
                to={path}
                className="group relative overflow-hidden"
              >
                <span className="transition-colors duration-300 group-hover:text-[#24a170]">
                  {label}
                </span>
                <span
                  className="
                    absolute left-0 -bottom-1 h-0.5 w-full
                    bg-[#24a170]
                    scale-x-0 origin-left
                    transition-transform duration-300
                    group-hover:scale-x-100
                  "
                />
              </Link>
            ))}
          </nav>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* BUTTON ديما باين */}
          <button
            className="
              bg-[#24a170]
              hover:bg-[#1d8a60]
              text-white
              px-6 py-3
              rounded-full
              text-sm
              transition-colors duration-300 cursor-pointer
            "
          >
            See plans
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="
              relative w-11 h-11 flex items-center justify-center
              rounded-full
              transition-all duration-300 cursor-pointer
              border border-transparent
              hover:border-[#24a170]
            "
          >
            {/* Circle background فقط إلا ما كانش open */}
            {!open && (
              <span
                className="
                  absolute inset-0 rounded-full
                  bg-white
                  backdrop-blur-xl
                  shadow-md
                  transition
                "
              />
            )}

            {/* Icon */}
            <span
              className="
                relative text-xl transition-colors duration-300 
                text-green-600
              "
            >
              {open ? "✕" : (
                <img src="/icons/menu.png" className="w-4 h-5" />
              )}
            </span>
          </button>
        </div>
      </header>

      <FullscreenMenu open={open} setOpen={setOpen} />
    </>
  );
}

export default Navbar;
