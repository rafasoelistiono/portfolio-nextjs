"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-text text-transparent">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Rafa Soelistiono",
                1000,
                "Web Developer",
                1000,
                "Computer Science Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            I live in Jakarta, I am a computer science student and a tech enthusiast :)
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
            <Link
              href="/#contact"
              className="bg-gradient-to-br from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-medium py-3 px-6 rounded-lg"
            >
              Hit Me Up
            </Link>
            <Link
              href="https://drive.google.com/file/d/1b6gFVO-bWx_My2ddYdCVezfYhG4YQ5KY/view?usp=drive_link"
              className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg"
            >
              Download CV
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-72 lg:w-96 lg:h-96">
            <div className="absolute top-0 left-0 w-full h-full rounded-full blur-[100px] bg-gradient-to-r from-primary-400 to-secondary-600 opacity-50"></div>
            <div className="rounded-full bg-gray-800 w-full h-full relative">
              <Image
                src="/images/hero-image.png"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={400}
                height={400}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
