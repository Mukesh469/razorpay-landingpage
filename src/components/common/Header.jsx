import { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-gradient-to-r from-[#f6efff] to-white z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">

        {/* LOGO */}
        <div className="flex items-center gap-2 px-4 py-2 border-2 border-[#574584] rounded-full cursor-pointer">
          <span className="w-3 h-3 bg-[#574584] rounded-full"></span>
          <h1 className="text-xl font-semibold text-[#574584]">Paymt</h1>
        </div>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Hamburger Toggle */}
        <div
          className="md:hidden flex flex-col gap-[6px] cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span className="w-7 h-[3px] bg-[#574584]" />
          <span className="w-7 h-[3px] bg-[#574584]" />
          <span className="w-7 h-[3px] bg-[#574584]" />
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav open={openMenu} />
    </nav>
  );
};

export default Header;
