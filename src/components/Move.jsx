import { useState } from "react";

const navItems = [
  { label: "Home", dropdown: [] },
  {
    label: "About Us",
    dropdown: ["Our Story", "Our Team", "Mission & Vision"],
  },
  {
    label: "Education Products",
    dropdown: ["Smart Boards", "Lab Equipment", "E-Learning Kits"],
  },
  {
    label: "Digital Teaching Device",
    dropdown: ["Interactive Panels", "Document Cameras", "Projector Systems"],
  },
  {
    label: "Corporate Products",
    dropdown: ["Conference Solutions", "Video Walls", "PA Systems"],
  },
  {
    label: "Camera",
    dropdown: ["CCTV Systems", "IP Cameras", "PTZ Cameras"],
  },
  { label: "Contact Us", dropdown: [] },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  return (
    <nav className="bg-gradient-to-r from-red-950 via-red-800 to-red-700 shadow-lg">
      {/* Gold top line */}
      <div className="h-1 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600" />

<div className="flex items-center justify-between px-2 py-2 md:py-0 md:px-0">        
        {/* Logo / Brand */}
        

        {/* Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-stretch justify-center">
        {navItems.map((item) => (
          <div
            key={item.label}
            className="relative group"
            onMouseEnter={() => setOpenDropdown(item.label)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              onClick={() => setActive(item.label)}
              className={`flex items-center gap-2 px-6 py-4 text-base font-bold uppercase transition-all
              ${
                active === item.label
                  ? "text-yellow-400"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              {item.label}

              {item.dropdown.length > 0 && (
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openDropdown === item.label ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              )}
            </button>

            {item.dropdown.length > 0 && (
              <div
                className={`absolute top-full left-0 min-w-52 bg-white shadow-xl transition-all
                ${
                  openDropdown === item.label
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                {item.dropdown.map((sub) => (
                  <a
                    key={sub}
                    href="#"
                    className="block px-5 py-3 text-sm hover:bg-red-50"
                  >
                    {sub}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-red-900 text-white px-4 pb-4">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-red-700">
              
              {/* Main item */}
              <div className="flex justify-between items-center py-3">
                <button
                  onClick={() => setActive(item.label)}
                  className="font-semibold"
                >
                  {item.label}
                </button>

                {item.dropdown.length > 0 && (
                  <button
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === item.label ? null : item.label
                      )
                    }
                  >
                    ▼
                  </button>
                )}
              </div>

              {/* Mobile dropdown */}
              {item.dropdown.length > 0 &&
                mobileDropdown === item.label && (
                  <div className="pl-4 pb-3">
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub}
                        href="#"
                        className="block py-1 text-sm text-yellow-200"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}