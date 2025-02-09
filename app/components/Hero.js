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

        <section className={`relative py-40`}>
        <Image
            src="/image-08.webp" // Default (Desktop Image)
            alt="Palm Armani"
            fill
            quality={10} // Balanced quality for performance
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="absolute inset-0 object-cover object-center"
            srcSet="
            /mob-hero.webp 768w,  /* Mobile Image */
            /image-08.webp 1200w   /* Desktop Image */
            "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="flex flex-col justify-between items-center lg:flex-row w-full px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 relative z-20 h-full">
            <div className="mb-12 lg:pr-5 lg:mb-0 w-full text-white ">
            <div className="w-full mb-6 text-center">
                <h2 className="mb-6 text-2xl font-bold lg:text-5xl">
                Armani Beach Jumeirah by Arada
                </h2>
                <p className="text-md md:text-2xl mb-4 uppercase">Apartments, Penthouses,<br /> Townhouses, & Villas</p>
                <div className="w-full">
                    <span className="inline text-lg md:text-xl">Starting From </span>
                    <br className="block lg:hidden" />
                    <p className="text-3xl lg:text-4xl font-bold"> AED 21,500,000</p>
                </div>
                <div className="flex justify-center items-center flex-col md:flex-row md:space-x-6 w-full">
                    <div className="w-full flex flex-col items-center justify-center">
                        <div className="btn-container mt-6">
                        <button
                            type="button"
                            className="trigger select-none btn-content flex justify-between items-center relative space-x-4 px-3 py-2 pr-12 hover:cursor-pointer"
                            onClick={openModal}
                        >
                            <img
                            src="/image-01.webp"
                            alt="Profile"
                            className="left-3 rounded-full object-cover aspect-square h-14"
                            />
                            <div className="uppercase py-px text-lg md:text-2xl font-black text-[#071D35] minerva_modern">
                            Get a Call Back
                            </div>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            {/* <div className="bg-black/40 rounded-3xl p-8 flex flex-col md:ml-auto mt-10 md:mt-0 border-4 border-gray-300">
            <div className="mb-5 border-b pb-2 border-white">
                <h2 className="text-gray-50 text-lg md:text-2xl font-medium title-font capitalize">
                Please fill in the form
                </h2>
                <p className="text-gray-50">
                Begin your journey to premium living by sharing your details with us.
                </p>
            </div>
            <React.Suspense fallback={<div>Loading...</div>}>
                <Form />
            </React.Suspense>
            </div> */}
        </div>
    </section>
    {/* Modal */}
    <Modal isOpen={isModalOpen} onClose={closeModal} title="Please Fill in the Form Below" desc="Our agents will provide you with all the latest information about the project. as well as assisting in choosing the best unit corresponding to your needs.">
            <h2 className="text-2xl font-bold mb-4">This is a Modal</h2>
            <p className="text-gray-700 mb-6">
            Here you can display any content you'd like!
            </p>
            <button
            className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all cursor-pointer"
            onClick={closeModal}
            >
            Close Modal
            </button>
        </Modal>
    </>
  );
};

export default Hero;