export default function MacroBar({ protein, carbs, fat }) {
  return (
    <div className="mt-2">
      {/* BAR */}
      <div className="w-full h-1.25 bg-gray-200 rounded-full overflow-hidden flex gap-0.5">
        <div
          className="h-full bg-[#987dde]"
          style={{ width: `${protein}%` }}
        />
        <div
          className="h-full bg-[#f4b248]"
          style={{ width: `${carbs}%` }}
        />
        <div
          className="h-full bg-[#61a7e6]"
          style={{ width: `${fat}%` }}
        />
      </div>

      {/* TEXT */}
      <div className="flex justify-between text-[11px] text-[#697886] mt-1">
        <span>{protein}% Protein</span>
        <span>{carbs}% Carbs</span>
        <span>{fat}% Fat</span>
      </div>
    </div>
  );
}
