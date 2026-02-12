/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Find your perfect meal plan",
    desc: "We create your menu around your lifestyle and goals.",
    img: "/images/hero1.png",
  },
  {
    id: 2,
    title: "You choose, we cook",
    desc: "Pick your dishes, we prepare them fresh daily.",
    img: "/images/hero2.png",
  },
  {
    id: 3,
    title: "Enjoy daily deliveries",
    desc: "Fresh meals delivered to your door every day.",
    img: "/images/hero3.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-4 py-16">
      {/* HEADER */}
      <div className="text-center mb-6 sm:mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold text-[#343b42]"
        >
          How it works
        </motion.h2>

        <p className="text-[#343b42] mt-3">
          Hit your goals effortlessly with Nutri MoovUp in 3 simple steps
        </p>

        <motion.button
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-7 bg-[#24a170] text-white cursor-pointer px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-[#1c7e57] transition"
        >
          See plans
        </motion.button>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {steps.map((step) => (
          <motion.div
            key={step.id}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 180, damping: 14 }}
            className="group relative min-w-65 sm:min-w-75 snap-start"
          >
            {/* NUMBER */}
            <div className="absolute -top-8 -left-6 z-20 bg-white rounded-br-[40px] flex items-start justify-start p-3">
              <div className="w-12 h-12 text-xl rounded-full bg-[#114b34] text-white flex items-center justify-center font-semibold shadow-md">
                {step.id}
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative rounded-3xl rounded-bl-4xl overflow-hidden">
              <img
                src={step.img}
                alt={step.title}
                className="w-full h-95 object-cover transition duration-500 group-hover:scale-110"
              />

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition" />

              {/* SHINE */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent" />
            </div>

            {/* TEXT */}
            <div className="mt-4 px-4">
              <h3 className="font-bold text-2xl text-[#343b42]">{step.title}</h3>
              <p className="mt-2 text-lg text-gray-500">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
