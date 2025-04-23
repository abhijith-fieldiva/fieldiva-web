import React, { useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const industries = [
  {
    title: "Electricity & Water",
    description:
      "Smart Meter Installations, DC & RC, Manual Meter Reading, SMOC Integrations, Debt Recovery Management, Inspections & Power Audits, Calibrations, Troubleshooting",
    image:
      "https://res.cloudinary.com/dvjqkwbzc/image/upload/v1745388232/elec_saslrq.jpg",
  },
  {
    title: "Manufacturing & After Sales Service",
    description:
      "Production Workflows, Stock Inventory, Installations, Scheduled & Unscheduled Maintenance Visits",
    image: "/assets/image/manufacturing.jpg",
  },
  {
    title: "Oil & Gas",
    description:
      "Device Inspections, Pipeline Works, Metering Projects, Daily Progress Reports",
    image: "/assets/image/oil.jpg",
  },
  {
    title: "Logistics",
    description:
      "Fleet Management, Warehouse Coordination, Vehicle Monitoring, IoT & Sensor Integrations, Fuel Monitoring, Driver Tracking",
    image: "/assets/image/logistics.jpg",
  },
  {
    title: "Construction and Infrastructure",
    description:
      "Workforce and equipment tracking at construction sites, daily reporting, site audits.",
    image: "/assets/image/after-sale.jpg",
  },
  {
    title: "Telecommunications",
    description:
      "Asset Management & Maintenance, Infrastructure Installations, Reactive Work Orders",
    image: "/assets/image/telecommunications.jpg",
  },
  {
    title: "FMCG",
    description:
      "Field Sales Management, Sales Team Performance, Stock Monitoring, Target Assurance ",
    image: "/assets/image/fmcg2.jpg",
  },
  {
    title: "Banking",
    description:
      "Stock Audits, Land & Property Evaluations, ATM Service & Money Dispense Management",
    image: "/assets/image/atm.jpg",
  },
  {
    title: "Facility Management",
    description:
      "Predictive Maintenance, Scheduled Visits, Emergency Services, Equipment Tracking",
    image: "/assets/image/buildings.jpg",
  },
];

const FeaturesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section
      className="py-22 px-4 md:px-12 mt-[50px] relative bg-[#1E1E1E]"
      id="industry"
    >
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: "#1E1E1E" },
          particles: {
            color: { value: "#FEC631" },
            links: { enable: true, color: "#FEC631", distance: 120 },
            move: { enable: true, speed: 0.5 },
            number: { value: 30 },
            size: { value: 2 },
          },
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Header */}
      <div
        className="mb-16 flex flex-col items-center md:items-start justify-center text-left md:text-left mx-auto max-w-fit z-10 relative"
        id="services"
      >
        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">
          Powering Industries with Scalable Solutions{" "}
          <br className="hidden md:block" />
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0.2 }}
            className="w-24 h-1 bg-[#FEC631] mx-auto mb-10 origin-left mt-4"
          ></motion.div>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {industries.map((industry, index) => {
          const dimOthers =
            hoveredIndex !== null && hoveredIndex !== index
              ? "opacity-40"
              : "opacity-100";

          return (
            <div
              key={index}
              className={`group relative rounded-lg overflow-hidden shadow-lg h-64 cursor-pointer border-2 border-transparent hover:scale-105 transition-transform duration-300 will-change-transform ${dimOthers}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center brightness-50"
                style={{ backgroundImage: `url(${industry.image})` }}
              />

              {/* Text Content */}
              <div className="relative z-10 flex flex-col justify-center items-center text-white text-center px-4 h-full">
                <h3 className="text-xl font-semibold mb-2 drop-shadow-md transition-opacity duration-300">
                  {industry.title}
                </h3>
                <p className="text-sm drop-shadow-md transition-opacity duration-300">
                  {industry.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* WhatsApp Icon */}
      {/* <a
        href="https://wa.me/+917736288404"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 p-3 bg-green-500 rounded-full shadow-lg z-50 hover:bg-green-600 transition-colors"
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </a> */}
    </section>
  );
};

export default FeaturesSection;
