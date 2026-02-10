/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// VIDEOS IMPORT
import mealPlanVideo from "/public/videos/meal-plan.mp4";
import workoutVideo from "/public/videos/workout.mp4";
import progressVideo from "/public/videos/progress.mp4";

const sections = [
  {
    id: 1,
    title: "Calories and macros that match your goals",
    desc: "We do the hard work for you, measuring, cooking, and preparing meals that match your goals, with nothing but fresh, whole ingredients.",
    video: mealPlanVideo,
  },
  {
    id: 2,
    title: "Choose what you like. Swap what you don't.",
    desc: "Pick your meals and swap the ones you don't like. Allergens and exclusions never reach your plate.",
    video: workoutVideo,
  },
  {
    id: 3,
    title: "Pause. Skip. Change. Anytime.",
    desc: "Life changes and your plan can too. Adjust up to 24 hours before delivery with no hassle.",
    video: progressVideo,
  },
];

export default function NutriSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleVideoEnd = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % sections.length);
  };

  const active = sections[activeIndex];

  return (
    <section className="bg-[#f9fafb]">
      <div className="grid md:grid-cols-2 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6 px-8">
          <h2 className="text-4xl font-bold leading-tight">
            Total control.<br />Full flexibility.
          </h2>

          <div className="space-y-4 max-w-xl">
            {sections.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left px-8 py-6 rounded-xl cursor-pointer transition-all duration-300
                  ${activeIndex === index ? "border-gray-400 bg-white" : ""}`}
              >
                <h3
                  className={`text-xl font-semibold mb-2 transition-all duration-300
                ${activeIndex === index ? "text-black" : "text-[#7c7d7d]"}`}
                >
                  {item.title}
                </h3>
                {activeIndex === index && (
                  <p className="text-gray-600 mt-1 text-sm">{item.desc}</p>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT VIDEO */}
        <div className="relative w-full h-100 md:h-125 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.video
              key={active.video}
              src={active.video}
              autoPlay
              muted
              loop={false}
              playsInline
              onEnded={handleVideoEnd}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }} // fade khfifa
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
