import { useState, useRef } from "react";

export default function HeroMessage() {
  const [emojis, setEmojis] = useState([]);
  const lastTime = useRef(0);

  const handleMove = (e) => {
    const now = Date.now();

    if (now - lastTime.current < 120) return;
    lastTime.current = now;

    const spacing = 60; 
    const newEmoji = {
      id: Math.random(),
      x: e.clientX + (Math.random() * spacing - spacing / 2),
      y: e.clientY + (Math.random() * spacing - spacing / 2),
    };

    setEmojis((prev) => [...prev.slice(-15), newEmoji]); 

    setTimeout(() => {
      setEmojis((prev) => prev.slice(1));
    }, 2000); 
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
          className="absolute text-3xl animate-float-slow pointer-events-none"
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
