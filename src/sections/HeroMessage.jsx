import { useState } from "react";

export default function HeroMessage() {
  const [emojis, setEmojis] = useState([]);

  const handleMove = (e) => {
    const newEmoji = {
      id: Math.random(),
      x: e.clientX + (Math.random() * 80 - 40),
      y: e.clientY + (Math.random() * 80 - 40),
    };

    setEmojis((prev) => [...prev, newEmoji]);

    setTimeout(() => {
      setEmojis((prev) => prev.slice(1));
    }, 1000);
  };

  return (
    <div
      onMouseMove={handleMove}
      className="relative h-screen flex items-center justify-center bg-[#24a170] overflow-hidden"
    >
      <h1 className="text-white text-5xl md:text-7xl font-bold text-center leading-tight">
        SLAMMED SCHEDULE?
        <br />
        PERSONALISED MEALS.
        <br />
        READY TO EAT.
      </h1>

      {emojis.map((emoji) => (
        <span
          key={emoji.id}
          className="absolute text-3xl animate-float pointer-events-none"
          style={{
            left: emoji.x,
            top: emoji.y,
          }}
        >
          😍
        </span>
      ))}
    </div>
  );
}
