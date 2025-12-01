import { FaWallet, FaGlobe, FaShieldAlt, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import FeatureCard from "../../../utility/FeatureCard";
import Stat from "./Stat";

import Mockup from "../../../assets/Mockup.png";

export default function WhyTrustUs() {
  return (
    <section className="py-24 bg-[#F6F3FF] relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-[#47346C] font-semibold">
            PRODUCT
          </p>

          <h2 className="text-4xl font-bold text-[#1A1330] leading-snug mt-3">
            Why Millions Trust Us for <br /> Their Payments
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">

          {/* LEFT CARDS */}
          <div className="flex flex-col gap-8">
            <FeatureCard
              title="Digital Wallet"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              icon={<FaWallet size={20} />}
            />

            <FeatureCard
              title="Data Protection"
              desc="Your payment data stays 100% encrypted & secure."
              icon={<FaShieldAlt size={20} />}
            />
          </div>

          {/* PHONE MOCKUP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={Mockup}
              alt="mockup"
              className="w-[320px] lg:w-[380px] drop-shadow-2xl"
            />
          </motion.div>

          {/* RIGHT CARDS */}
          <div className="flex flex-col gap-8">
            <FeatureCard
              title="Global Support"
              desc="24/7 support for all international payments."
              icon={<FaGlobe size={20} />}
            />

            <FeatureCard
              title="Secure & Reliable"
              desc="High success rate & industry-leading safety."
              icon={<FaMobileAlt size={20} />}
            />
          </div>

        </div>

        {/* STATS */}
        <div className="mt-20 bg-white rounded-3xl shadow-lg p-10 flex flex-wrap justify-around text-center">
          <Stat number="72K+" label="Active Users" />
          <Stat number="45K+" label="Daily Transactions" />
          <Stat number="99%" label="Security Guaranteed" />
          <Stat number="500+" label="Integrated Merchants" />
        </div>

      </div>
    </section>
  );
}
