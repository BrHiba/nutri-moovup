export default function PromoSection() {
  return (
    <section className="px-4 sm:px-8 py-16">
      <div className="max-w-7xl mx-auto bg-[#e9f6f1] rounded-4xl p-10 md:p-24 flex flex-col md:flex-row items-center justify-center gap-18">
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#343b42] leading-tight">
            This Ramadan, we cook <br /> with purpose 🌙
          </h2>

          <p className="mt-6 text-[#24a170] font-medium whitespace-nowrap">
            Thoughtfully prepared Ramadan meals — balanced, nourishing, and
            guilt-free.
          </p>

          <p className="mt-6 text-[#343b42] max-w-xl">
            Celebrate Ramadan with wholesome meals designed to keep you
            energized throughout the day. Choose from our special Ramadan
            packages — crafted for mindful fasting.
          </p>

          <button className="mt-7 inline-flex items-center gap-2 cursor-pointer bg-[#24a170] text-white px-6 py-4 rounded-full font-semibold hover:bg-[#1c7e57] transition">
            Explore Ramadan plans
          </button>
        </div>

        {/* RIGHT IMAGE */}
        {/* RIGHT IMAGE */}
        <div className="flex justify-center ">
          <div className="w-85 sm:w-95 md:w-112.5  rounded-[28px] overflow-hidden shadow-xl">
            <img
              src="/images/ramadan.jpg"
              alt="Promo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
