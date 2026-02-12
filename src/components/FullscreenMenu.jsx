import { Link } from "react-router-dom";

export default function FullscreenMenu({ open, setOpen }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-9999 flex bg-black animate-fadeIn">
      {/* LEFT SIDE (غير فـ PC) */}
      <div className="hidden md:flex w-3/4 h-full flex-col">
        <div className="relative flex-1 overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1529059997568-3d847b1154f0"
            alt="Nutri lifestyle"
            className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1800 ease-out"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="relative bg-[#3cad68] hover:bg-[#35a763] px-8 py-12 flex items-center justify-between transition-all duration-500">
          <button className="absolute -top-5 left-14 bg-[#1c7e57] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            ✨ Join us
          </button>

          <h3 className="text-white text-3xl font-semibold tracking-tight">
            Download app
          </h3>

          <div className="flex gap-3">
            <img
              src="https://calo.app/_next/static/media/appstore-no-background.91a9ecbb.svg"
              className="h-11 cursor-pointer hover:scale-110 hover:-translate-y-1 transition-all duration-300"
            />
            <img
              src="https://calo.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload-google-play.ea966ed8.png&w=320&q=75"
              className="h-11 cursor-pointer hover:scale-110 hover:-translate-y-1 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* RIGHT MENU */}
      <div className="relative w-full md:w-2/4 bg-white flex flex-col justify-center px-8 md:px-16">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 md:right-20 text-2xl font-medium text-[#343b42] hover:text-[#24a170] transition-all duration-300"
        >
          ✕
        </button>

        <nav className="space-y-8 text-xl font-medium">
          {[
            ["/", "Homepage"],
            ["/plans", "Plans & Packages"],
            ["/menu", "Menu"],
            ["/blog", "Blog"],
            ["/contact", "Contact Us"],
          ].map(([path, label]) => (
            <Link
              key={path}
              to={path}
              onClick={() => setOpen(false)}
              className="group block text-[#343b42] hover:text-[#24a170] transition-all duration-300"
            >
              <span className="relative inline-block">
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
