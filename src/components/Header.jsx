import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock scroll when menu is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-white/10 fixed w-full h-[8vh] z-[60] backdrop-blur-sm flex justify-between items-center px-4 sm:px-6 md:px-[50px]">
      {/* Logo Section */}
      <div className="left">
        <h1 className="w-[120px] md:w-[182px] h-[30px]">
          <img
            src="/assets/image/Vector.png"
            className="w-full block"
            alt="logo"
          />
        </h1>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-white z-[70]"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigation */}
      <nav
        className={`fixed md:static top-[8vh] right-0 h-screen md:h-auto bg-black/90 md:bg-transparent w-full md:w-auto flex flex-col md:flex-row items-center gap-6 md:gap-4 p-6 md:p-0 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
        }`}
      >
        <ul className="flex flex-col md:flex-row gap-6 md:gap-4 text-center">
          {[
            { to: "spotlight", label: "Home/" },
            { to: "industry", label: "Industry/" },
            { to: "service", label: "Features/" },
            { to: "contact", label: "Contact/" },
          ].map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                className="text-white cursor-pointer font-normal"
                onClick={handleLinkClick}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
