import React from "react";
import logo1 from "../assets/logo1.png";
import iso1 from "../assets/iso1.png";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md border-b border-gray-200">
      
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 min-h-[60px] sm:min-h-[70px]">
        
        {/* Left - Logo */}
        <div className="flex items-center">
          <img
            src={logo1}
            alt="Logo"
            className="h-12 sm:h-16 md:h-20 w-auto object-contain"
          />
        </div>

        {/* Right - ISO */}
        <div className="flex items-center">
          <img
            src={iso1}
            alt="ISO Certified"
            className="h-10 sm:h-14 md:h-18 w-auto object-contain"
          />
        </div>

      </div>

    </header>
  );
}