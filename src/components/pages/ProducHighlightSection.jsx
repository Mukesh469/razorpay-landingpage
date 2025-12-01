import { useRef } from "react";
import useSmoothHorizontal from "../../hooks/useSmoothHorizontal";

import Mock1 from "../../assets/Activities.png";
import Mock2 from "../../assets/indianflag.png";
import Mock3 from "../../assets/LeftTiltMockup.png";
import Mock4 from "../../assets/Mockup.png";

import { FaMoneyCheckAlt, FaWallet, FaChartLine, FaLock } from "react-icons/fa";

const cards = [
  { title: "Quick Payments", desc: "Instant smooth payments.", img: Mock1, icon: <FaMoneyCheckAlt size={30} /> },
  { title: "Smart Wallet", desc: "Load & manage money easily.", img: Mock2, icon: <FaWallet size={30} /> },
  { title: "Real-time Analytics", desc: "Track all growth metrics.", img: Mock3, icon: <FaChartLine size={30} /> },
  { title: "Bank-Grade Security", desc: "Top security + encryption.", img: Mock4, icon: <FaLock size={30} /> },
];

export default function ProductHighlightSection() {

  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);

  useSmoothHorizontal(sectionRef, trackRef, cardRefs);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-gradient-to-br from-[#f5f0ff] to-white overflow-hidden flex flex-col justify-center"
    >

      {/* HEADING */}
      <div className="text-center mb-16">
        <p className="text-[#574584] tracking-[3px] text-sm font-semibold">PRODUCT HIGHLIGHTS</p>
        <h2 className="text-5xl font-bold text-[#1a1330] mt-3">Everything You Need to Grow Faster</h2>
        <p className="text-gray-600 mt-2 opacity-80">Smooth, centered & readable Razorpay-style scroll.</p>
      </div>

      {/* CARD TRACK */}
      <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">

        <div
          ref={trackRef}
          className="absolute top-1/2 -translate-y-1/2 flex gap-20 will-change-transform"
        >
          {cards.map((c, i) => (
            <div
              key={i}
              ref={el => cardRefs.current[i] = el}
              className="
        w-[480px] h-[400px] 
        bg-white rounded-3xl 
        shadow-lg 
        p-6 flex flex-col 
        transition-all duration-300 
        hover:scale-[1.03] hover:shadow-2xl
      "
            >
              <img
                src={c.img}
                className="w-full h-44 object-cover rounded-2xl mb-5"
              />

              <div className="w-14 h-14 bg-[#eee3ff] rounded-xl flex items-center justify-center text-[#574584] mb-4">
                {c.icon}
              </div>

              <h3 className="text-2xl font-semibold text-[#1a1330]">
                {c.title}
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                {c.desc}
              </p>
            </div>
          ))}
        </div>


      </div>

    </section>
  );
}
