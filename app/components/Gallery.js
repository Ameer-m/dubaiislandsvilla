"use client"

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GallerySlider() {
  const [activeTab, setActiveTab] = useState("exteriors");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // Controls left/right slide animation

  // Image data for Exteriors and Interiors
  const imagesData = {
    exteriors: [
      "./image-01.webp",
      "./image-02.webp",
      "./image-03.webp",
    ],
    interiors: [
      "./image-04.webp",
      "./image-05.webp",
      "./image-06.webp",
    ],
  };

  const images = imagesData[activeTab];

  // Navigation functions
  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Handle tab switch
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentIndex(0); // Reset slider index when switching
  };

  return (
    <div className="">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-6">Gallery</h2>

      {/* Toggle Buttons with Animation */}
      <div className="flex space-x-4 mb-4">
        {["exteriors", "interiors"].map((tab) => (
          <motion.button
            key={tab}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`px-4 py-2 rounded-full font-medium transition ${
              activeTab === tab ? "bg-black text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleTabChange(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </motion.button>
        ))}
      </div>

      {/* Slider */}
      <div className="relative w-full mx-auto">
        <div className="relative overflow-hidden rounded-2xl h-[30rem] md:h-[40rem]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              key={images[currentIndex]}
              src={images[currentIndex]}
              alt="Gallery Image"
              className="absolute w-full h-full object-cover"
              initial={{ x: direction === 1 ? "100%" : "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction === 1 ? "-100%" : "100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
          onClick={prevSlide}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
          onClick={nextSlide}
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full transition ${
                currentIndex === index ? "bg-black" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}