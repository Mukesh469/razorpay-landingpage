import { motion } from "framer-motion";
import LeftTiltMockup from "../../assets/LeftTiltMockup.png";
import GuyImage from "../../assets/GuyImage.png";
import Growth from "../../assets/Growth.png";

const FeaturesSection = () => {
  return (
    <section className="w-full py-20 px-6">

      {/* HEADING */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <p className="text-[#574584] font-semibold tracking-[3px] text-xs sm:text-sm">
          WHY CHOOSE US
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1330] mt-2">
          Why Millions Trust Us for Their Payments
        </h2>

        <p className="text-gray-600 mt-3 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* FLEX CARDS */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-end justify-center">

        {/* CARD 1 – PERFECT HEIGHT */}
        <div className="bg-[#EAD7AA] rounded-3xl p-6 pb-4 relative shadow-md w-full md:w-auto">
          <h3 className="text-xl font-bold text-[#1a1330]">
            The Best Payment <br /> Experience
          </h3>

          <div className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center">
            <span className="text-[#574584] text-lg font-bold">›</span>
          </div>

          {/* Only image scales — card does NOT grow */}
          <motion.img
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.3 }}
            src={LeftTiltMockup}
            alt="mockup"
            className="w-auto h-[360px] object-contain mx-auto mt-6 cursor-pointer drop-shadow-xl"
          />
        </div>

        {/* CARD 2 – MEDIUM */}
        <div className="bg-[#574584] h-100 text-white rounded-3xl p-8 shadow-md w-full md:w-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">

          <h1 className="text-5xl font-bold">275+</h1>
          <h3 className="text-xl font-semibold mt-4 leading-snug">
            Fintech & Merchants <br /> Worldwide
          </h3>
          <p className="text-sm mt-4 opacity-90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut vitae facere numquam. Laudantium deleniti quos voluptatem quia nesciunt dolore dolorum, similique sed illum nemo possimus 
          </p>
          <img src={Growth} alt="growth image" className="-mt-10"/>
        </div>

        {/* CARD 3 – AUTO HEIGHT */}
        <div className="bg-white rounded-3xl shadow-md border border-gray-200 w-full md:w-[400px] overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-bold text-[#1a1330]">
              Future of Payments <br /> Together
            </h3>
          </div>

          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src={GuyImage}
            alt="user"
            className=" h-[360px] object-cover mx-auto mt-6 rounded-b-3xl cursor-pointer"
          />
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
