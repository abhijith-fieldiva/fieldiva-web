import React from 'react';
import { motion } from 'framer-motion';

const HeroAnimation = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* White Circle */}
      <motion.div
        initial={{ y: '-100%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        className="absolute top-[-75vw] left-1/2 transform -translate-x-1/2 w-[150vw] h-[150vw] bg-gradient-to-b from-white to-gray-300 rounded-full"
      />

      {/* Black Circle */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-[-75vw] left-1/2 transform -translate-x-1/2 w-[150vw] h-[150vw] bg-black rounded-full shadow-2xl"
      />

      {/* Text Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-light mb-6">
          Let’s Build <br /> the Future Together
        </h1>
        <p className="max-w-xl text-lg md:text-xl mb-8">
          The future is here, and it's up to us to build it. Let's work together to create a world that is sustainable, equitable, and prosperous for all.
        </p>
        <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
          Let's Talk →
        </button>
      </motion.div>
    </div>
  );
};

export default HeroAnimation;
