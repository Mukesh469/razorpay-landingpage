import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { navLinks } from "./navData";

const MobileNav = ({ open }) => {
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const toggleMobileDropdown = (label) => {
    setMobileDropdown(mobileDropdown === label ? null : label);
  };

  return (
    <div
      className={`md:hidden overflow-hidden transition-all duration-300 bg-gradient-to-r from-[#f6efff] to-white shadow-xl ${
        open ? "max-h-screen py-4" : "max-h-0 py-0"
      }`}
    >
      <ul className="flex flex-col gap-4 px-6 font-medium text-[#302c3f]">
        {navLinks.map((item, index) => (
          <li key={index} className="cursor-pointer">
            <div
              className="flex items-center justify-between hover:text-[#574584]"
              onClick={() => item.dropdown && toggleMobileDropdown(item.label)}
            >
              {item.label}
              {item.dropdown && (
                <AiFillCaretDown
                  size={14}
                  className={`transition-transform ${
                    mobileDropdown === item.label ? "rotate-180" : ""
                  }`}
                />
              )}
            </div>

            {/* Dropdown */}
            {item.dropdown && mobileDropdown === item.label && (
              <ul className="mt-2 ml-4 flex flex-col gap-2 text-sm text-[#555]">
                {item.dropdown.map((sub, idx) => (
                  <li key={idx} className="hover:text-[#574584]">
                    {sub}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}

        {/* Buttons */}
        <button className="w-full py-2 bg-[#e8d3a1] text-black rounded-full mt-4">
          Sign Up
        </button>
        <button className="w-full py-2 bg-[#574584] text-white rounded-full">
          Sign In
        </button>
      </ul>
    </div>
  );
};

export default MobileNav;
