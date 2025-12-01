import React from "react";

export default function Stat({ number, label }) {
  return (
    <div className="flex flex-col items-center p-4">
      <h3 className="text-3xl font-bold text-[#47346C]">{number}</h3>
      <p className="text-gray-600 text-sm mt-1">{label}</p>
    </div>
  );
}
