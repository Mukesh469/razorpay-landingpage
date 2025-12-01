import React from "react";

export default function FeatureCard({ title, desc, icon }) {
  return (
    <div className="relative bg-white w-[320px] rounded-3xl shadow-md p-7 hover:shadow-xl transition-all">

      {/* ICON CIRCLE */}
      <div className="absolute -right-4 -top-4 bg-[#47346C] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-md">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-[#1A1330]">{title}</h3>

      <p className="text-gray-600 mt-3">{desc}</p>

      <button className="mt-5 bg-[#E8D3A1] text-[#47346C] px-6 py-2 rounded-full text-sm font-semibold hover:opacity-80 transition-all">
        Read More
      </button>
    </div>
  );
}
