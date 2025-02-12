"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Divide } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const menuItems = [
    { label: "About Dubai Island", path: "#about" },
    { label: "Amenities", path: "#amenities" },
    { label: "Gallery", path: "#gallery" },
    { label: "Location", path: "#location" },
  ];

  // Handle Scroll Effect (Change Background)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle Mobile Menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`museo_sans fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling ? "bg-gray-900/80 backdrop-blur-md shadow-lg" : " bg-gray-900/60"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <div className="text-2xl font-bold cursor-pointer text-white">
          <svg className="w-52 py-4" id="Layer_1" data-name="Layer 1" viewBox="0 0 1502.985 160.941">
            <path fill="#FFFFFF" d="M49.288,37.34c25.633,0,44.39,18.45,44.39,43.191s-18.756,43.125-44.39,43.125H14.553V37.34h34.735ZM49.081,111.571c18.392,0,30.602-13.54,30.602-31.04s-12.21-31.23-30.602-31.23h-21.17v62.269h21.17Z"/>
            <path fill="#FFFFFF" d="M152.59,92.424v-55.144h13.242v54.565c0,12.664,9.035,20.674,23.088,20.674s23.013-8.01,23.013-20.674v-54.565h13.242v55.144c0,19.781-14.119,32.511-36.256,32.511s-36.33-12.73-36.33-32.511"/>
            <path fill="#FFFFFF" d="M289.692,123.665V37.291h37.264c16.35,0,26.328,10.994,26.328,24.162,0,6.927-3.554,13.987-9.465,17.425,8.076,3.439,12.722,11.325,12.722,19.789,0,14.052-11.391,24.997-27.039,24.997h-39.81ZM326.956,74.043c7.96,0,12.854-5.786,12.854-12.275,0-6.233-4.53-12.59-12.854-12.59h-23.848v24.865h23.848ZM303.108,111.704h26.394c8.465,0,13.804-6.183,13.804-13.3,0-6.795-5.58-13.102-13.804-13.102h-26.394v26.402Z"/>
            <path fill="#FFFFFF" d="M405.078,123.662l35.677-86.382h14.507l35.669,86.382h-14.235l-6.869-18.004h-43.629l-6.869,18.004h-14.251ZM465.818,94.532l-17.797-42.307-17.813,42.307h35.611Z"/>
            <rect fill="#FFFFFF" x="545.854" y="37.291" width="13.35" height="86.374"/>
            <rect fill="#FFFFFF" x="697.572" y="37.291" width="13.35" height="86.374"/>
            <path fill="#FFFFFF" d="M781.01,98.408c4.133,8.465,12.085,14.507,23.782,14.507,9.994,0,17.747-4.778,17.747-12.35,0-7.249-6.853-10.432-19.574-14.507-16.433-5.274-29.337-10.738-29.196-26.006.116-15.772,14.995-24.046,29.37-24.046,15.962,0,26.146,8.589,30.974,17.814l-10.374,7.258c-3.67-6.679-10.672-12.92-20.599-12.92-8.2,0-15.946,4.208-15.946,11.829s7.059,9.672,19.269,13.796c16.078,5.48,29.494,9.928,29.494,26.659,0,16.408-16.077,24.485-30.907,24.485-16.913,0-29.064-8.647-34.024-19.583l9.986-6.935Z"/>
            <polygon fill="#FFFFFF" points="958.469 123.661 895.868 123.661 895.868 37.287 909.318 37.287 909.318 111.51 958.469 111.51 958.469 123.661"/>
            <path fill="#FFFFFF" d="M1004.27,123.662l35.694-86.382h14.507l35.669,86.382h-14.251l-6.853-18.004h-43.629l-6.869,18.004h-14.267ZM1065.027,94.532l-17.814-42.307-17.797,42.307h35.611Z"/>
            <polygon fill="#FFFFFF" points="1145.052 123.661 1145.052 37.287 1158.402 37.287 1211.009 103.111 1211.009 37.287 1224.358 37.287 1224.358 123.661 1210.876 123.661 1158.402 58.465 1158.402 123.661 1145.052 123.661"/>
            <path fill="#FFFFFF" d="M1324.583,37.34c25.626,0,44.407,18.45,44.407,43.191s-18.781,43.125-44.407,43.125h-34.743V37.34h34.743ZM1324.393,111.571c18.368,0,30.585-13.54,30.585-31.04s-12.217-31.23-30.585-31.23h-21.186v62.269h21.186Z"/>
            <path fill="#FFFFFF" d="M1433.487,98.408c4.133,8.465,12.086,14.507,23.782,14.507,9.995,0,17.748-4.778,17.748-12.35,0-7.249-6.854-10.432-19.575-14.507-16.434-5.274-29.336-10.738-29.188-26.006.107-15.772,14.987-24.046,29.362-24.046,15.962,0,26.146,8.589,30.973,17.814l-10.365,7.258c-3.679-6.679-10.68-12.92-20.608-12.92-8.2,0-15.945,4.208-15.945,11.829s7.059,9.672,19.268,13.796c16.078,5.48,29.494,9.928,29.494,26.659,0,16.408-16.077,24.485-30.908,24.485-16.912,0-29.064-8.647-34.024-19.583l9.986-6.935Z"/>
            </svg>
        </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.label} className="">
              <Link
                href={`/${item.path}`}
                className="text-white hover:text-gray-400 transition duration-300 hover:cursor-pointer"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl" onClick={toggleMenu}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-gray-900/90 backdrop-blur-lg flex flex-col items-center justify-center space-y-6 transition-all duration-300 ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"
        }`}
      > 
        <div className="absolute top-5 right-5">
            <button className="md:hidden text-white text-2xl" onClick={toggleMenu}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-8 h-8"
                >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={`/${item.path}`}
            className="text-white text-2xl hover:text-gray-400 transition duration-300"
            onClick={toggleMenu}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;