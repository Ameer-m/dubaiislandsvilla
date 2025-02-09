"use client";

import { useState } from "react";
import React from "react";
import Image from "next/image";
import dynamic from 'next/dynamic';

// Dynamically import MyForm to prevent hydration issues
const MyForm = dynamic(() => import('../components/Form'), { ssr: false });

const Hero = ({ title, subtitle, buttonText, buttonAction }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  return (

    <>

    <section className={`heroImg flex items-center justify-center w-full relative`}>
      <Image
        src="/image-07.webp"
        alt="Palm Armani"
        fill // Replaces `layout="fill"`
        quality={20}
        priority
        className="absolute z-0"
        style={{ objectFit: 'cover', objectPosition: 'center' }} // Use `style` for these properties
      />


      <div className="overlay absolute inset-0 z-10 bg-black/40"></div>
      <div className="flex flex-col justify-between items-center lg:flex-row w-full px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 relative z-20">
        <div className="mb-12 lg:max-w-lg lg:pr-5 lg:mb-0 w-full">
          <div className="max-w-xl mb-6 text-white">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight lg:text-5xl sm:leading-none">
              Armani Beach{' '}
              <br className="hidden md:block" />
              Residences at Palm <span className="inline-block text-deep-purple-accent-400">
                Jumeirah by Arada
              </span>
            </h2>
            <div>
              <span className="inline text-lg md:text-xl">Starting From</span>
              <p className="text-3xl lg:text-4xl font-bold">AED 21,500,000</p>
            </div>
          </div>
        </div>
        <div className="bg-black/40 rounded-3xl p-8 flex flex-col md:ml-auto mt-10 md:mt-0 border-4 border-gray-300">
          <div className="mb-5 border-b pb-2 border-white">
            <h2 className="text-gray-50 text-lg md:text-2xl font-medium title-font capitalize">
              Please fill in the form
            </h2>
            <p className="text-gray-50">
              Begin your journey to premium living by sharing your details with us.
            </p>
          </div>
          <React.Suspense fallback={<div>Loading...</div>}>
            {/* Lazy load the form component */}
            <MyForm inStyles="border-b-2 border-white text-white placeholder:text-white focus:border-white"/>
          </React.Suspense>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;