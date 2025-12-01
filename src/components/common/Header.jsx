import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-[#f6efff] to-white  fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">

        {/* LOGO */}
        <div className="flex items-center gap-2 px-4 py-2 border-2 border-[#574584] rounded-full cursor-pointer">
          <span className="w-3 h-3 bg-[#574584] rounded-full"></span>
          <h1 className="text-xl font-semibold text-[#574584]">Paymt</h1>
        </div>

        {/* NAV LINKS — DESKTOP */}
        <ul className="hidden md:flex items-center gap-10 text-[16px] text-[#302c3f] font-medium">

          <li className="cursor-pointer hover:text-[#574584]">Home</li>

          <li className="cursor-pointer hover:text-[#574584]">About Us</li>

          <li className="cursor-pointer hover:text-[#574584] flex items-center gap-1">
            Features <AiFillCaretDown size={14} />
          </li>

          <li className="cursor-pointer hover:text-[#574584] flex items-center gap-1">
            Page <AiFillCaretDown size={14} />
          </li>

          <li className="cursor-pointer hover:text-[#574584] flex items-center gap-1">
            Blog <AiFillCaretDown size={14} />
          </li>

          <li className="cursor-pointer hover:text-[#574584]">Contact</li>
        </ul>

        {/* BUTTONS — DESKTOP */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-6 py-2 bg-[#e8d3a1] text-black rounded-full font-medium hover:opacity-90 transition">
            Sign Up
          </button>

          <button className="px-6 py-2 bg-[#574584] text-white rounded-full font-medium hover:bg-[#47346c] transition">
            Sign In
          </button>
        </div>

        {/* HAMBURGER — MOBILE */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span className="w-7 h-[3px] bg-[#574584]"></span>
          <span className="w-7 h-[3px] bg-[#574584]"></span>
          <span className="w-7 h-[3px] bg-[#574584]"></span>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white transition-all duration-300 overflow-hidden shadow ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 py-4 text-[#302c3f] text-[16px] font-medium">
          <li className="hover:text-[#574584]">Home</li>
          <li className="hover:text-[#574584]">About Us</li>
          <li className="hover:text-[#574584]">Features</li>
          <li className="hover:text-[#574584]">Page</li>
          <li className="hover:text-[#574584]">Blog</li>
          <li className="hover:text-[#574584]">Contact</li>

          <button className="w-full py-2 bg-[#e8d3a1] text-black rounded-full mt-3">
            Sign Up
          </button>

          <button className="w-full py-2 bg-[#574584] text-white rounded-full">
            Sign In
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
