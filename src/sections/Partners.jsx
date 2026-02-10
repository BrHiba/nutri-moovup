export default function Partners() {
  const logos = [
    "Partner 1",
    "Partner 2",
    "Partner 3",
    "Partner 4",
    "Partner 5",
    "Partner 6",
    "Partner 7",
    "Partner 8",
  ];

  return (
    <section className="w-full bg-white py-12 overflow-hidden">
      {/* Inline keyframes */}
      <style>{`
        @keyframes marqueeMove {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="overflow-hidden">
        <div
          className="flex gap-18"
          style={{
            animation: "marqueeMove 20s linear infinite",
            width: "200%",
          }}
        >
          {[...logos, ...logos].map((name, index) => (
            <div
              key={index}
              className="
                min-w-62.5 h-20
                flex items-center justify-center
                border border-gray-200 rounded-lg
                bg-gray-50
                text-gray-500 font-semibold
                whitespace-nowrap text-lg
              "
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
