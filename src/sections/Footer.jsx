// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import WorldDropdown from "../components/WorldDropdown";
import LanguageDropdown from "../components/LanguageDropdown";

export default function Footer() {
  const [country, setCountry] = useState("World");
  const [lang, setLang] = useState("English");
  return (
    <footer className="bg-white border-t border-gray-200 px-6 md:px-20 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          {/* Logo */}
          <Link to="/">
            <img
              src="/logo.png"
              className="h-20  transition-transform duration-500 hover:scale-105 hover:-rotate-1"
              alt="Logo"
            />
          </Link>

          {/* Nav */}
         

          <nav className="flex flex-col mt-5 md:flex-row gap-8 text-sm font-medium text-gray-700">
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

          {/* Selects */}

          <div className="flex gap-4">
            <WorldDropdown value={country} onChange={setCountry} />
            <LanguageDropdown value={lang} onChange={setLang} />
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">© 2026 Nutri MoovUp.</p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col items-start md:items-end gap-10">
          {/* QR */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-5 border border-gray-200 rounded-xl px-5 py-5"
          >
            <div className="w-20 h-18 bg-gray-100 rounded-lg flex items-center justify-center text-xs text-gray-400">
              QR
            </div>
            <p className="text-sm/4 font-medium  ">
              Scan the QR code to <br />
              download app
            </p>
          </motion.div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <span className="font-medium">Follow us</span>

            <a
              href="https://web.facebook.com/Advancedagencymaroc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition text-xl sm:text-2xl"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>

            <a
              href="https://www.instagram.com/advanced__agency/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition text-xl sm:text-2xl"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href="https://wa.me/212666571808"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition text-xl sm:text-2xl"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a
              href="https://wa.me/212666571808"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition text-xl sm:text-2xl"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
