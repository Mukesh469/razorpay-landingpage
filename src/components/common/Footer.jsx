// src/components/Footer/Footer.jsx

import React from "react";
import {
  companyInfo,
  footerLinks,
  addressSection,
  copyright,
} from "./footerData";

export default function Footer() {
  return (
    <footer className="bg-[#F8F5FF] pt-20 pb-12 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-14">

          {/* COMPANY INFO */}
          <div className="pr-6">
            {/* LOGO */}
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#47346C] text-white px-5 py-2 rounded-full shadow-md text-sm font-semibold tracking-wide">
                ● {companyInfo.logoText}
              </div>
            </div>

            {/* TITLE */}
            <p className="text-[#47346C] font-semibold text-sm mb-2 tracking-wide">
              E-WALLET & PAYMENT GATEWAY
            </p>

            {/* DESC */}
            <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
              {companyInfo.description}
            </p>
          </div>

          {/* CENTER COLUMNS */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
            {footerLinks.map((section, idx) => (
              <div key={idx} className="min-w-[120px]">
                <h4 className="text-[#47346C] font-bold mb-3 text-[15px] tracking-wide uppercase">
                  {section.title}
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  {section.links.map((link, i) => (
                    <li
                      key={i}
                      className="cursor-pointer hover:text-[#47346C] transition font-medium"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ADDRESS */}
          <div className="lg:pr-4">
            <h4 className="text-[#47346C] font-bold mb-3 text-[15px] tracking-wide uppercase">
              {addressSection.title}
            </h4>
            <p className="text-gray-600 whitespace-pre-line text-sm leading-relaxed">
              {addressSection.address}
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-300 mt-12 mb-6"></div>

        {/* COPYRIGHT */}
        <div className="text-center text-gray-700 text-sm font-medium tracking-wide">
          {copyright.text}
        </div>
      </div>
    </footer>
  );
}
