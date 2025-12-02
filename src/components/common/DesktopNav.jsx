import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { navLinks } from "./navData";

const DesktopNav = () => {
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setDropdown(dropdown === label ? null : label);
  };

  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-[#302c3f]">
      {navLinks.map((item, index) => (
        <li
          key={index}
          className="relative cursor-pointer hover:text-[#574584] flex items-center gap-1"
          onMouseEnter={() => item.dropdown && toggleDropdown(item.label)}
          onMouseLeave={() => item.dropdown && toggleDropdown(null)}
        >
          {item.label}
          {item.dropdown && <AiFillCaretDown size={14} />}

          {/* Dropdown */}
          {dropdown === item.label && item.dropdown && (
            <div className="absolute top-7 bg-white shadow-lg rounded-lg px-4 py-3 w-48 flex flex-col gap-2 animate-fadeIn">
              {item.dropdown.map((sub, idx) => (
                <span
                  key={idx}
                  className="hover:text-[#574584] cursor-pointer"
                >
                  {sub}
                </span>
              ))}
            </div>
          )}
        </li>
      ))}

      {/* Desktop Buttons */}
      <div className="flex items-center gap-4 ml-4">
        <button className="px-6 py-2 bg-[#e8d3a1] text-black rounded-full hover:opacity-90">
          Sign Up
        </button>

        <button className="px-6 py-2 bg-[#574584] text-white rounded-full hover:bg-[#47346c]">
          Sign In
        </button>
      </div>
    </ul>
  );
};

export default DesktopNav;
