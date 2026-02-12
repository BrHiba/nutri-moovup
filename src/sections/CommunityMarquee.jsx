/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

/* FAKE DATA */
const communityData = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/100?img=1",
    name: "Mostyle Coach",
    username: "@mostyle_coach",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/100?img=2",
    name: "Kate Hogg",
    username: "@kate_hogg",
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/100?img=3",
    name: "Sultan Falasi",
    username: "@sultanfalasi",
  },
  {
    id: 4,
    avatar: "https://i.pravatar.cc/100?img=4",
    name: "Sarah Mozak",
    username: "@s_mozakzak",
  },
  {
    id: 5,
    avatar: "https://i.pravatar.cc/100?img=5",
    name: "Laura Zara",
    username: "@laurazaraa",
  },
  {
    id: 6,
    avatar: "https://i.pravatar.cc/100?img=6",
    name: "John Fit",
    username: "@johnfit",
  },
  {
    id: 7,
    avatar: "https://i.pravatar.cc/100?img=7",
    name: "Emma Power",
    username: "@emmapower",
  },
  {
    id: 8,
    avatar: "https://i.pravatar.cc/100?img=8",
    name: "Alex Gym",
    username: "@alexgym",
  },
  {
    id: 9,
    avatar: "https://i.pravatar.cc/100?img=9",
    name: "Nina Strong",
    username: "@ninastrong",
  },
  {
    id: 10,
    avatar: "https://i.pravatar.cc/100?img=10",
    name: "Mark Lift",
    username: "@marklift",
  },
];

export default function CommunityMarquee() {
  return (
    <section className="bg-[#24a170] py-14 overflow-hidden relative">
      <h2 className="text-white text-4xl font-bold mb-12 px-20">
        From The Community
      </h2>

      <motion.div
        className="flex gap-12 w-max px-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 70,
            ease: "linear"
        }}
      >
        {[...communityData, ...communityData].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02, rotate: 0 }}
            className="relative w-60 h-70 rounded-2xl overflow-hidden bg-white shadow-2xl cursor-pointer group"
          >
            {/* Post image */}
            {/* IMAGE PLACEHOLDER */}
            <div className="flex justify-center items-center p-3 h-57.5">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm rounded-xl">
                Image
              </div>
            </div>

            {/* Bottom user info */}
            <div className="absolute bottom-0 left-0 w-full p-3  to-transparent flex items-center gap-2">
              <img
                src={item.avatar}
                alt=""
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <div className="text-[#343b42] text-sm leading-tight">
                <p className="font-semibold opacity-80">{item.username}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
