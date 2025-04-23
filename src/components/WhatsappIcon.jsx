import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappIcon = () => {
  return (
    <a
      href="https://wa.me/+917736288404"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 p-3 bg-green-500 rounded-full shadow-lg z-[1000] hover:bg-green-600 transition-colors"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
};

export default WhatsappIcon;
