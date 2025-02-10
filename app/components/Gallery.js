"use client";

import { useState } from "react";
import Modal from "./Modal";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const GalleryGrid = ({ images }) => {
  const [index, setIndex] = useState(-1);


    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="md:px-5 md:py-10 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 lg:py-8">
        {/* Heading */}
        <div className="flex justify-center items-center flex-col md:flex-row py-4 md:py-10">
          <h1 className="text-3xl md:text-5xl text-black font-black text-center py-4 minerva_modern">
            Gallery
          </h1>
        </div>

        {/* Grid Layout */}
        <div className="grid gap-5">

        </div>
        <div className="grid grid-cols-2">
          {/* Left Column (50%) */}
          <div className="flex flex-wrap w-full">
            {images.slice(0, 3).map((img, i) => (
              <div key={i} className={`md:p-2 p-1 w-full ${i === 2 ? "hidden lg:flex" : "lg:w-1/2"}`}>
                <button onClick={() => setIndex(i)}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full object-cover aspect-video h-full object-center block rounded-lg lg:rounded-3xl"
                  />
                </button>
              </div>
            ))}
          </div>

          {/* Right Column (50%) */}
          <div className="flex flex-col w-full h-full flex-1">
            <div className="md:p-2 p-1 w-full h-full flex-1 flex items-center justify-center ">
              <button onClick={() => setIndex(3)} className="h-full w-full">
                <img
                  src={images[3].src}
                  alt={images[3].alt}
                  className="w-full h-full aspect-video object-cover object-center block rounded-lg lg:rounded-3xl"
                />
              </button>
            </div>

            <div className="flex justify-center items-center">

              <div className="md:p-2 p-1 w-1/2 hidden lg:flex h-full">
                <button className="p-0 md:p-7 w-full text-center border-2 border-black text-black rounded-lg lg:rounded-3xl" onClick={openModal}>
                  Available Units and Prices
                </button>
              </div>

              <div className="md:p-2 p-1 mb-2 md:mb-0 w-full lg:w-1/2 h-full">
                <button
                  onClick={() => setIndex(0)}
                  className="p-2 h-full w-full text-center bg-black text-white rounded-lg lg:rounded-3xl"
                >
                  Show All Images
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox Popup */}
        <Lightbox
          slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          animation={{ zoom: 300 }}
          controller={{ closeOnPullDown: true }}
          zoom={true}
          thumbnails={true}
        />
      </div>



      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Please Fill in the Form Below" desc="Our agents will provide you with all the latest information about the project. as well as assisting in choosing the best unit corresponding to your needs.">
        <h2 className="text-2xl font-bold mb-4">Get All the Images</h2>
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

export default GalleryGrid;