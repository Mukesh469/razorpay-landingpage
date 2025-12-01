import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import activities from "../../../assets/Activities.png";
import Mockup from "../../../assets/Mockup.png";
import Mockup2 from "../../../assets/Mockup2.png";
import Mockup3 from "../../../assets/Mockup3.png";

import { FaStar, FaUserCircle } from "react-icons/fa";

const slides = [
  {
    id: 1,
    title: "The Future of Digital Payments!",
    subtitle: "Pay, Transfer & Manage Money Effortlessly & Securely",
    mockup: Mockup,
  },
  {
    id: 2,
    title: "Smart Banking For Everyone!",
    subtitle: "Manage your money and payments easily",
    mockup: Mockup2,
  },
  {
    id: 3,
    title: "Fast, Secure & Powerful",
    subtitle: "Trusted by millions of users worldwide",
    mockup: Mockup3,
  },
];

const Carousel = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#f5f0ff] to-white pt-20 pb-0 px-4">

      {/* CAROUSEL WRAPPER */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500 }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* --- TOP TEXT --- */}
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-[#574584] font-semibold tracking-[3px] text-xs sm:text-sm">
                E-WALLET & PAYMENT GATEWAY
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1330] leading-tight mt-2">
                {slide.title}
              </h1>
            </div>

            {/* --- MOBILE/TABLET VIEW --- */}
            <div className="flex flex-col md:hidden items-center gap-6">

              {/* MOCKUP */}
              <img src={slide.mockup} alt="mockup" className="w-[250px] sm:w-[300px]" />

              {/* ROW: activities left + CTA right */}
              <div className="w-full flex items-start justify-center gap-4 px-3 mt-2">

                {/* LEFT: ACTIVITIES */}
                <div className="w-1/2 flex justify-end">
                  <img
                    src={activities}
                    alt="Activities"
                    className="w-[95%] drop-shadow-xl rounded-lg"
                  />
                </div>

                {/* RIGHT: CTA TEXT */}
                <div className="w-1/2 text-left">
                  <h3 className="text-base sm:text-lg font-semibold text-[#1a1330] leading-snug">
                    {slide.subtitle}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm mt-1 mb-3 leading-relaxed">
                    Lorem ipsum dolor sit amet, conse ctetur adipiscing elit
                  </p>

                  <button className="px-4 py-2 bg-[#e8d3a1] rounded-full text-[#1a1330] font-medium text-sm shadow">
                    Get Started
                  </button>
                </div>

              </div>

            </div>


            {/* --- DESKTOP VIEW --- */}
<div className="hidden md:flex items-center justify-between gap-12 mt-10 max-w-6xl mx-auto">

  {/* LEFT — ACTIVITIES */}
  <div className="w-[280px] flex-shrink-0">
    <img
      src={activities}
      alt="Activities"
      className="w-full drop-shadow-xl rounded-lg"
    />
  </div>

  {/* CENTER — MOCKUP */}
  <div className="flex justify-center flex-shrink-0">
    <img
      src={slide.mockup}
      alt="mockup"
      className="w-[360px] lg:w-[430px] object-contain"
    />
  </div>

  {/* RIGHT — CTA */}
  <div className="max-w-sm flex-shrink-0">
    <h3 className="text-xl font-semibold text-[#1a1330]">
      {slide.subtitle}
    </h3>

    <p className="text-gray-600 text-sm mt-2 mb-5">
      Lorem ipsum dolor sit amet, conse ctetur adipiscing elit
    </p>

    <button className="px-6 py-3 bg-[#e8d3a1] rounded-full font-medium text-[#1a1330] shadow">
      Get Started
    </button>
  </div>

</div>

          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;

