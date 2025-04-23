import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#FEC631] text-[#1E1E1E] px-6 md:px-[50px] py-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
      <div className="flex items-center gap-2 text-center md:text-left">
        <p className="text-sm">A Global Vision, Rooted in India</p>
        <img
          src="/assets/image/flag.png"
          alt="flag"
          className="w-[20px] h-[20px] object-contain"
        />
      </div>

      <div className="text-center md:text-right">
        <p className="text-sm">Fieldiva© 2025. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
