// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ali Alsadeq",
    avatar: "https://i.pravatar.cc/100?img=12",
    text: "Over the past three years I've tried several meal plans, and I would say Nutri MoovUp was one of the best!"
  },
  {
    name: "Zainab Bucheeri",
    avatar: "https://i.pravatar.cc/100?img=32",
    text: "My second family. Excellent service and delicious meals, always the best!"
  },
  {
    name: "Sarah Ben",
    avatar: "https://i.pravatar.cc/100?img=45",
    text: "Very flexible plans and great support. Highly recommended!"
  },
  {
    name: "Youssef K.",
    avatar: "https://i.pravatar.cc/100?img=18",
    text: "Lost weight and gained energy thanks to Nutri MoovUp!"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-[#e9f6f1] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-5xl font-bold mb-12 text-[#343b42] ">
          Real results, real stories
        </h2>

        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear"
          }}
        >
          {[...testimonials, ...testimonials].map((item, i) => (
            <div
              key={i}
              className="min-w-[320px] bg-white rounded-2xl p-6 shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={item.avatar}
                  className="w-10 h-10 rounded-full"
                />
                <p className="font-semibold">{item.name}</p>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
