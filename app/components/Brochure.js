"use client";

import { useState } from "react";
import Modal from "./Modal";
import Image from "next/image";

const Brochure = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  return (
    <section className="px-4 py-12 md:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div
        className="flex flex-col lg:flex-row justify-between items-center space-x-0 lg:space-x-20 relative shadow-lg rounded-3xl"
        style={{ background: "#000000" }}
      >
        {/* Left Side - Brochure Info */}
        <div className="rounded-2xl w-full z-20 md:z-0">
          <div className="flex flex-col w-full h-auto px-4 py-3 md:py-6 md:px-8 text-white">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black pb-2 mb-4 w-full border-b-2 border-white playfair uppercase minerva_modern">
                Download Brochure
              </h2>
              <p className="text-lg lg:text-xl font-extralight mt-4 museo_sans">
                Descriptive brochure about all projects within Dubai Islands
              </p>
            </div>

            {/* Download Button */}
            <div className="flex flex-col justify-center items-start py-4">
              <button
                onClick={openModal}
                className="select-none flex justify-between items-center relative space-x-4 hover:cursor-pointer bg-white text-[#000000] hover:bg-white/80 transition delay-50 px-6 rounded-full py-3 text-xl uppercase minerva_modern font-black"
              >
                Download Now
                <svg
                  className="pl-2 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 515.283 515.283"
                >
                  <path
                    d="M400.775 515.283H114.507c-30.584 0-59.339-11.911-80.968-33.54C11.911 460.117 0 431.361 0 400.775v-28.628c0-15.811 12.816-28.628 28.627-28.628s28.627 12.817 28.627 28.628v28.628c0 15.293 5.956 29.67 16.768 40.483 10.815 10.814 25.192 16.771 40.485 16.771h286.268c15.292 0 29.669-5.957 40.483-16.771 10.814-10.815 16.771-25.192 16.771-40.483v-28.628c0-15.811 12.816-28.628 28.626-28.628s28.628 12.817 28.628 28.628v28.628c0 30.584-11.911 59.338-33.54 80.968-21.629 21.629-50.384 33.54-80.968 33.54zM257.641 400.774a28.538 28.538 0 0 1-19.998-8.142l-.002-.002-.057-.056-.016-.016c-.016-.014-.03-.029-.045-.044l-.029-.029a.892.892 0 0 0-.032-.031l-.062-.062-114.508-114.509c-11.179-11.179-11.179-29.305 0-40.485 11.179-11.179 29.306-11.18 40.485 0l65.638 65.638V28.627C229.014 12.816 241.83 0 257.641 0s28.628 12.816 28.628 28.627v274.408l65.637-65.637c11.178-11.179 29.307-11.179 40.485 0 11.179 11.179 11.179 29.306 0 40.485L277.883 392.39l-.062.062-.032.031-.029.029c-.014.016-.03.03-.044.044l-.017.016a1.479 1.479 0 0 1-.056.056l-.002.002c-.315.307-.634.605-.96.895a28.441 28.441 0 0 1-7.89 4.995l-.028.012c-.011.004-.02.01-.031.013a28.5 28.5 0 0 1-11.091 2.229z"
                    fill="#000000"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Brochure Image */}
        <div className="w-full max-w-2xl max-h-[7rem] lg:max-h-[15rem] flex justify-center items-center">
          <img
            className="w-full h-full max-w-lg lg:max-w-md lg:mr-20"
            src='./brochure.webp'
            alt="Download Brochure"
          />
        </div>
      </div>


      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title='Download Brochure for Dubai Islands' btnText='Download Brochure'>
        <h2 className="text-2xl font-bold mb-4">Download Brochure</h2>
        <button
          className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all cursor-pointer"
          onClick={closeModal}
        >
          Close Modal
        </button>
      </Modal>
    </section>


  );
};

export default Brochure;