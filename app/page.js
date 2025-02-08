import Image from "next/image";
import Hero from "./components/Hero";
import GallerySlider from "./components/Gallery";
import Brochure from "./components/Brochure";
import Footerinfo from "./components/Footerinfo";
import Form from "./components/Form";

export default function Home() {
  return (
    <>
      <Hero />

      <section>
        <div className="relative px-4 pt-28 pb-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24 flex flex-col lg:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10">

          {/* <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-black p-6 rounded-full">
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
          </div> */}

          <div className="w-full md:w-1/2">
            <div className="flex justify-start items-center mb-3">
              <div className="w-6  md:w-14 rounded-full h-[2px] bg-black"/>
              <p className="pl-2 museo_sans">Discover Dubai Islands by Nakheel</p>
            </div>
            <h2 className=" text-3xl md:text-5xl minerva_modern uppercase font-bold">Dubai Islands Apartments - Ultimate Waterfront Living</h2>
          </div>

          <div className="w-full md:w-1/2 museo_sans">
          Dubai Islands by Nakheel is the next iconic waterfront destination, offering luxurious 1-4 bedroom apartments surrounded by breathtaking ocean views and world-class amenities.
          </div>
        </div>
      </section>

      <Brochure />

      <section>
        <div className="px-4 pt-28 pb-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
        <div className=" ">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Image Cards */}
        <div className="relative rounded-2xl overflow-hidden min-h-[30rem]">
          <img src="./image-07.webp" alt="Customised Design" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
            <h3 className="text-lg font-bold">Customised design</h3>
            <p className="text-sm">You can create your very own interior design concept.</p>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden min-h-[30rem] order-3 md:order-2">
          <img src="./image-11.webp" alt="Gated Community" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white">
            <h3 className="text-lg font-bold">Gated community</h3>
            <p className="text-sm">Join the exclusive club while taking advantage of the spa, gym.</p>
          </div>
        </div>

        {/* Information Cards */}
        <div className="flex flex-col gap-4 h-full order-2 md:order-3">
          <div className="p-6 bg-white rounded-2xl shadow-md flex items-start gap-4 h-full">
            <span className="text-2xl">🚁</span>
            <div>
              <h3 className="text-lg font-bold">Helipad</h3>
              <p className="text-sm text-gray-600">Available exclusively to residents of the community.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white rounded-2xl shadow-md flex flex-col items-start h-full">
              <span className="text-2xl">🏙️</span>
              <p className="text-sm font-semibold mt-2">360° view of the Dubai Skyline and Palm Jumeirah</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md flex flex-col items-start">
              <span className="text-2xl">🏖️</span>
              <p className="text-sm font-semibold mt-2">Private beach</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row - Scrollable on Mobile */}
      {/* <div className="mt-10 flex gap-6 overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-6 text-center">
        <div className="flex flex-col items-center min-w-[100px]">
          <span className="text-2xl">🏊</span>
          <p className="text-sm font-medium mt-1">Indoor pool</p>
        </div>
        <div className="flex flex-col items-center min-w-[100px]">
          <span className="text-2xl">⛵</span>
          <p className="text-sm font-medium mt-1">Yacht marinas</p>
        </div>
        <div className="flex flex-col items-center min-w-[100px]">
          <span className="text-2xl">🍽️</span>
          <p className="text-sm font-medium mt-1">Restaurants</p>
        </div>
        <div className="flex flex-col items-center min-w-[100px]">
          <span className="text-2xl">🚶</span>
          <p className="text-sm font-medium mt-1">Walking paths</p>
        </div>
        <div className="flex flex-col items-center min-w-[100px]">
          <span className="text-2xl">🔑</span>
          <p className="text-sm font-medium mt-1">Concierge services</p>
        </div>
        <div className="flex flex-col items-center min-w-[100px]">
          <span className="text-2xl">🏡</span>
          <p className="text-sm font-medium mt-1">Clubhouse</p>
        </div>
      </div> */}
    </div>

        </div>
      </section>

      <section className="px-4 pt-28 pb-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
        <GallerySlider />
      </section>

      <section className="">
      <div className="px-4 py-12 md:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 flex flex-col justify-center items-center">
        <p className="text-3xl lg:text-4xl font-bold text-black uppercase minerva_modern mb-10">Location</p>
        <div className="relative w-full aspect-video">
          <Image
            src="/map.webp"
            alt="Dubai Islands Location"
            fill
            className=" rounded-sm md:rounded-2xl"
          />
        </div>
      </div>
    </section>

    <section>
        <div className="px-4 py-12 md:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div>
              <p className="text-4xl md:text-5xl  text-center lg:text-6xl font-bold px-3 py-10 lg:pb-10 uppercase minerva_modern">Get consultation <br /> from our experts</p>
            </div>
          <div className="flex flex-col md:flex-row justify-start items-center">
            <Footerinfo />
            <div className="w-full md:w-1/2 ">

              <Form />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div className="text-center text-sm w-full">
                © 2025 All rights reserved.
            </div>
        </div>
      </footer>
    </>
  );
}
