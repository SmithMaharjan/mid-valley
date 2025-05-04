import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const apple = "/img/logo.png"; // Image path

  // Track scroll position
  const { scrollY } = useScroll();

  // Transform properties: Move image UP (-Y), LEFT (-X), and SHRINK it
  const yPosition = useTransform(scrollY, [0, 570], [0, -200]); // Moves up 100px
  const xPosition = useTransform(scrollY, [0, 550], [0, -550]); // Moves left 200px
  const scale = useTransform(scrollY, [0, 500], [1, 0.2]); // Shrinks to 40% size
  const bgOpacity = useTransform(scrollY, [500, 600], [0, 1]);

  return (
    <>
      {/* Navbar (Fixed at top) */}
      <nav className="fixed top-20 left-0 w-full  px-6 py-3 flex items-center z-50">
        {/* Image moves up and left, shrinking with scroll */}
        <motion.img
          src={apple}
          alt="Logo"
          style={{ y: yPosition, x: xPosition, scale }} // Moves left, up, and shrinks
          className="max-w-6xl mx-auto"
        />
      </nav>
      <motion.div
        style={{ opacity: bgOpacity }}
        className="fixed top-0 h-24 inset-0 bg-[#b6b6b6] z-[-1] transition-all duration-500"
      ></motion.div>

      {/* Hero Section */}
      <div className=" relative h-screen flex justify-center mt-[400px]">
        <div className="text-center">
          <p className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 font-bold">
            MID-VALLEY
          </p>
          <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-700 font-bold -mt-1">
            INTERNATIONAL COLLEGE
          </p>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  );
};

export default Hero;
