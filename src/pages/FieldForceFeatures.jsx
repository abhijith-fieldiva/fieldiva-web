import { useState } from "react";
import { motion } from "framer-motion";

const FieldForceFeatures = () => {
  const features = [
    {
      title: "Custom Field Task Workflows",
      description:
        "Design dynamic forms for capturing field data, including multimedia, GPS, timestamps, and structured inputs",
      icons: "/assets/image/custom-field.svg",
    },
    {
      title: "Smart Task Management",
      description:
        "AI-powered task planning, scheduling, routing, and automated escalations for seamless workflow execution",
      icons: "/assets/image/smart-task.svg",
    },
    {
      title: "Live Tracking & Field Visibility",
      description:
        "Real-time monitoring of field users, assets, and task progress to enhance operational efficiency",
      icons: "/assets/image/live-track.svg",
    },
    {
      title: "Performance & Incentives",
      description:
        "Live incentive tracking, payroll automation, KPI monitoring, and leaderboard-driven motivation",
      icons: "/assets/image/perfomance.svg",
    },
    {
      title: "Attendance & Compliance",
      description:
        "Automated shift tracking, GPS validations, AI face recognition, and regulatory adherence",
      icons: "/assets/image/attendance.svg",
    },
    {
      title: "Stock & Asset Management",
      description:
        "Track inventory, field assets, consumables, and vehicle utilization in real time",
      icons: "/assets/image/stock-asset.svg",
    },
    {
      title: "Fleet, Route & Warehouse Coordination",
      description:
        "AI-driven route planning, live fleet monitoring, fuel efficiency management, and seamless warehouse coordination to optimize inventory movement and field resource deployment",
      icons: "/assets/image/fleet.svg",
    },
    {
      title: "SLA, Approvals & Documentation",
      description:
        "Automated SLA tracking, contract approvals, digital signatures, and regulatory documentation management",
      icons: "/assets/image/sla.svg",
    },
    {
      title: "Customer Engagement & Portals",
      description:
        "Self-service portals, appointment scheduling, feedback collection, and CRM integration",
      icons: "/assets/image/customer-engagement.svg",
    },
    {
      title: "AI, OCR & Data Processing",
      description:
        "AI-powered document validation, vision-based inspections, and automated data extraction",
      icons: "/assets/image/air-acr.svg",
    },
    {
      title: "Field Sales Management",
      description:
        "Sales punch systems, real-time cash collection tracking, target assurance, stock usage monitoring, and automated sales performance reporting",
      icons: "/assets/image/field-sale.svg",
    },
    {
      title: "Call Center Management",
      description:
        "Streamline call center operations with structured call projects, task assignments, and future action tracking. Enhance customer interactions through efficient call handling, follow-ups, and integrated insights for better engagement and service quality",
      icons: "/assets/image/call-center.svg",
    },
    {
      title: "Custom ERP & System Integrations",
      description:
        "Seamlessly integrate with your existing ERP, other databases and third-party applications to unify business operations",
      icons: "/assets/image/custom-erp.svg",
    },
    {
      title: "Advanced Analytics & Business Intelligence",
      description:
        "Custom dashboards, real-time insights, automated email reporting",
      icons: "/assets/image/advanced-analytics.svg",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Variants for each feature card
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 0.9,
      y: 0,
      transition: { type: "easeOutBack", stiffness: 100, damping: 30 },
    },
  };

  return (
    <div
      className="bg-[#1E1E1E] text-white px-4 md:px-10 min-h-screen py-10 mt-10 z-1"
      id="service"
    >
      <div
        className="mb-16 flex flex-col items-center md:items-start justify-center text-left md:text-left mx-auto max-w-fit"
        id="services"
      >
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Robust Features, Designed for Growth{" "}
          <br className="hidden md:block" />
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0.2 }}
            className="w-24 h-1 bg-[#FEC631] mx-auto mb-10 origin-left mt-4"
          ></motion.div>
          {/* <span>All Industries</span> */}
        </h2>
        {/* <p className="text-white mt-4 text-lg md:text-xl">
          Looking for a better way to manage your field force<span className="text-[#FEC631] ml-1">?</span>
        </p> */}
      </div>

      {/* Timeline Container */}
      <div className="relative w-full flex flex-col items-center">
        {/* Vertical Timeline Line */}
        <div className="absolute h-full w-1 bg-[#9e9886] left-1/2 transform -translate-x-1/2" />

        <div className="w-full max-w-6xl">
          {features.map((feature, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className="relative w-full mb-10"
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
              >
                {/* Dot Icon Centered */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-10 h-10 bg-[#FEC631] rounded-full flex items-center justify-center">
                  <img
                    src={feature?.icons}
                    alt="rocket icon"
                    className="w-6 h-6"
                  />
                </div>

                {/* Card Positioned Left or Right */}
                <motion.div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  animate={
                    hoveredIndex === index ? { x: isLeft ? -10 : 10 } : { x: 0 }
                  }
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className={`bg-[#2C2C2C] p-4 rounded-lg shadow-lg w-[45%] max-w-[85%] ${
                    isLeft ? "mr-auto" : "ml-auto"
                  }`}
                >
                  <h3 className="text-sm sm:text-base font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FieldForceFeatures;
