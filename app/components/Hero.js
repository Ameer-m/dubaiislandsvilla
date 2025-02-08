"use client";

import { useState } from "react";
import React from "react";
import Modal from "./Modal";
import Form from "./Form";
import Image from "next/image";

const Hero = ({ title, subtitle, buttonText, buttonAction }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  return (

    <>
    <section className="relative flex items-center justify-center w-full py-56 md:py-40">
        {/* Optimized Image */}
        <Image
        src="/image-08.webp"
        alt="Palm Armani"
        fill
        quality={50}
        priority
        placeholder="empty" // Removes blur effect, preventing the error
        className="absolute inset-0 z-0 object-cover object-center"
        />

        {/* Overlay (Reduce Render Blocking) */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col justify-center items-center lg:flex-row w-full px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 h-full">
            {/* Content Section */}
            <div className="mb-12 lg:pr-5 lg:mb-0 w-full flex justify-center items-center text-white">
                <div className="w-full text-center">
                    <h2 className="mb-6 font-sans text-4xl font-bold tracking-tight text-white lg:text-5xl sm:leading-none">
                        Armani Beach Jumeirah by Arada
                    </h2>
                    <p className="text-xl md:text-2xl mb-4 uppercase">Apartments, Penthouses, Townhouses, & Villas</p>
                    
                    {/* Price Info */}
                    <div>
                        <span className="text-lg md:text-xl">Starting From</span>
                        <p className="text-3xl lg:text-4xl font-bold">AED 21,500,000</p>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-6 flex justify-center">
                        <button
                            type="button"
                            className="trigger flex items-center space-x-4 px-3 py-2 pr-12 bg-white text-[#071D35] font-black text-lg md:text-2xl uppercase rounded-full hover:bg-gray-200 transition-all"
                            onClick={openModal}
                        >
                            <Image
                                src="/image-01.webp"
                                alt="Profile"
                                width={56} // Set explicit size
                                height={56}
                                className="rounded-full object-cover"
                            />
                            <span>Get a Call Back</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Modal */}
    <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        title="Please Fill in the Form Below" 
        desc="Our agents will provide you with all the latest information about the project, assisting in choosing the best unit for your needs."
    >
        <h2 className="text-2xl font-bold mb-4">This is a Modal</h2>
        <p className="text-gray-700 mb-6">Here you can display any content you'd like!</p>
        <button
            className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all"
            onClick={closeModal}
        >
            Close Modal
        </button>
    </Modal>
</>

  );
};

export default Hero;