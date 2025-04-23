import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa"; // Make sure this import is present

const AnimationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  const [isMobile, setIsMobile] = useState(false);
  const [showTexts, setShowTexts] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    let timer;
    if (isInView) {
      timer = setTimeout(() => setShowTexts(true), 500); // Reduced delay
    } else {
      setShowTexts(false);
    }
    return () => clearTimeout(timer);
  }, [isInView]);

  const textLines = [
    { text: "Beyond Limits. Built for You.", type: "headline" },
    { text: "" },
    {
      text: "Whatever you’ve seen so far—put it aside. Your challenges are unique, and so is the solution we’ll build. No off-the-shelf systems, no limitations. If you can imagine it, we can make it happen.",
      type: "subheadline",
    },
    { text: "" },
    { text: "No forms. No fluff.", type: "highlight" },
    { text: "" },
    { text: "EMAIL_LINE" },
  ];

  return (
    <>
      <div ref={ref} className="relative bg-[#1E1E1E]" id="contact">
        {isMobile && (
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background: "radial-gradient(circle at center, #FEC63133, #1E1E1E)",
            }}
          />
        )}

        {isInView && (
          <div
            className={`relative z-40 text-white px-6 w-full ${isMobile ? "pt-20 flex justify-center" : "py-32 flex items-center justify-center"}`}
          >
            <div className="max-w-3xl space-y-4 text-center">
              {textLines.map((lineObj, index) => {
                const { text, type } = lineObj;

                if (text === "") return <br key={index} />;

                if (text === "EMAIL_LINE") {
                  if (isMobile) {
                    return (
                      <div key={index} className="text-sm text-white">
                        Drop a line at{" "}
                        <a
                          href="mailto:hello@fieldiva.com"
                          className="text-[#FEC631] font-semibold underline hover:opacity-80"
                        >
                          hello@fieldiva.com
                        </a>
                        , and let’s make it happen.
                      </div>
                    );
                  }

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
                      className="text-lg md:text-xl"
                    >
                      Drop a line at{" "}
                      <a
                        href="mailto:hello@fieldiva.com"
                        className="text-[#FEC631] font-semibold underline hover:opacity-80"
                      >
                        hello@fieldiva.com
                      </a>
                      , and let’s make it happen.
                    </motion.div>
                  );
                }

                let classNames = isMobile ? "text-sm" : "text-base";
                if (type === "headline")
                  classNames = isMobile
                    ? "text-2xl font-extrabold text-[#FEC631]"
                    : "text-3xl font-extrabold text-[#FEC631]";
                else if (type === "subheadline")
                  classNames = isMobile
                    ? "text-lg font-thin text-white"
                    : "text-2xl font-bold text-white";
                else if (type === "question")
                  classNames = isMobile
                    ? "text-sm text-white"
                    : "text-lg md:text-xl text-white";
                else if (type === "highlight")
                  classNames = isMobile
                    ? "text-sm font-semibold text-[#FEC631]"
                    : "text-lg md:text-xl font-semibold text-[#FEC631]";
                else if (type === "paragraph")
                  classNames = isMobile
                    ? "text-sm text-white/80 italic"
                    : "text-base text-white/80 italic";

                if (text === "Beyond Limits. Built for You.") {
                  return (
                    <div key={index} className={classNames}>
                      {text}
                    </div>
                  );
                }

                return showTexts ? (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.2,
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    className={classNames}
                  >
                    {text}
                  </motion.div>
                ) : null;
              })}
            </div>
          </div>
        )}

      </div>
    </>
  );
};

export default AnimationSection;
