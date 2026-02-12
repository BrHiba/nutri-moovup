import { Link } from "react-router-dom";
import FullscreenMenu from "../components/FullscreenMenu";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Navbar({ onVisibilityChange }) {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/menu") {
        const current = window.scrollY;

        if (current > lastScrollY && current > 100) {
          setShow(false);
          onVisibilityChange?.(false);
        } else {
          setShow(true);
          onVisibilityChange?.(true);
        }

        setLastScrollY(current);
      } else {
        setShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, location.pathname, onVisibilityChange]);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full
          py-2 px-6 lg:px-25
          flex items-center justify-between
          backdrop-blur-xl bg-white/80
          transition-transform duration-500
          ${show ? "translate-y-0" : "-translate-y-full"}
          z-50
        `}
      >
        {/* LEFT */}
        <div className="flex items-center gap-6 lg:gap-10">
          <Link to="/">
            <img
              src="/logo.png"
              className="h-12 lg:h-16 transition-transform duration-500 hover:scale-105 hover:-rotate-1"
              alt="Logo"
            />
          </Link>

          {/* NAV (PC فقط) */}
          <nav className="hidden lg:flex gap-8 text-sm text-[#343b42]">
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
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#24a170] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* زر كيبان غير فـ tablet+ */}
          <button className="hidden sm:block bg-[#24a170] hover:bg-[#1c7e57] text-white px-6 py-3 rounded-full text-sm transition-colors duration-300 cursor-pointer">
            See plans
          </button>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="relative w-11 h-11 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer border border-transparent hover:border-[#24a170]"
          >
            {!open && (
              <span className="absolute inset-0 rounded-full bg-white backdrop-blur-xl shadow-md transition" />
            )}
            <span className="relative text-xl transition-colors duration-300 text-[#1c7e57]">
              {open ? "✕" : <img src="/icons/menu.png" className="w-4 h-5" />}
            </span>
          </button>
        </div>
      </header>

      <FullscreenMenu open={open} setOpen={setOpen} />
    </>
  );
}

export default Navbar;
