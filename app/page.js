import Image from "next/image";
import Hero from "./components/Hero";
import GallerySlider from "./components/Gallery";
import Brochure from "./components/Brochure";
import Footerinfo from "./components/Footerinfo";
import Form from "./components/Form";
import GalleryGrid from "./components/Gallery";
import Navbar from "./components/Navbar";
import Resicon from "./components/Resicon";
import Shopicon from "./components/Shopicon";

const images = [
  { src: "/image-01.webp", alt: "Dubai Islands" },
  { src: "/image-02.webp", alt: "Dubai Islands" },
  { src: "/image-03.webp", alt: "Dubai Islands" },
  { src: "/image-04.webp", alt: "Dubai Islands" },
  { src: "/image-05.webp", alt: "Dubai Islands" },
  { src: "/image-06.webp", alt: "Dubai Islands" },
  { src: "/image-07.webp", alt: "Dubai Islands" },
  { src: "/image-08.webp", alt: "Dubai Islands" },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section id="about">
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
              <p className="pl-2 museo_sans">Discover Dubai Islands</p>
            </div>
            <h2 className=" text-3xl md:text-5xl minerva_modern uppercase font-bold">Dubai Island Villas<br/> by Nakheel</h2>
          </div>

          <div className="w-full md:w-1/2 museo_sans">
          Dubai Islands is a luxurious waterfront community redefining coastal living in Dubai. Developed by Nakheel, this iconic destination features five man-made islands offering a seamless blend of pristine beaches, high-end resorts, waterfront residences, and world-class entertainment.
          </div>
        </div>
      </section>

      <Brochure />

      <section id="amenities">
        <div className="px-4 pt-28 pb-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-6">
        <div className=" ">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Image Cards */}
        <div className="relative rounded-2xl overflow-hidden min-h-[30rem]">
          <img src="./image-07.webp" alt="Customised Design" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-6 text-white">
            <h3 className="text-xl md:text-2xl font-bold">Private Beaches</h3>
            <p className="text-sm">Experience pristine sandy shores, crystal-clear waters, and breathtaking sunsets, perfect for relaxation and recreation.</p>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden min-h-[30rem] order-3 md:order-2">
          <img src="./hub.webp" alt="Gated Community" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-6 text-white">
            <h3 className="text-xl md:text-2xl font-bold">Entertainment Hubs</h3>
            <p className="text-sm">Enjoy world-class entertainment, including cinemas, concerts, theme parks, and vibrant nightlife, all within easy reach.</p>
          </div>
        </div>

        {/* Information Cards */}
        <div className="flex flex-col gap-4 h-full order-2 md:order-3">
          <div className="p-6 bg-white rounded-2xl shadow-md flex flex-col items-start gap-4 h-full">
            <div className="text-2xl">
                <svg className="w-14" id="fi_9129183" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" data-name="line"><path d="m47.9541 26.52881a1.00011 1.00011 0 0 0 -.38864 1.96192c5.0947 1.01073 11.0322 3.09228 10.38474 7.28466-.00684.0332-.74415 3.37158-11.03321 5.44385a3.72167 3.72167 0 0 0 -2.5332 1.7207 3.43634 3.43634 0 0 0 .6084 4.15137c.85856.79148 2.81752 2.908 2.32132 4.92873-.49906 1.87059-3.20706 3.354-7.81546 4.2866a61.22223 61.22223 0 0 1 -25.74605-1.80322 18.919 18.919 0 0 1 -3.58984-1.49951c-4.57649-2.51144-6.01855-5.443-.79088-8.66112.68736-.34425 3.46568-1.86232 3.41295-3.89748.11832-2.20509-3.58126-2.85677-5-4.29294-4.13447-3.54639.82875-6.4716 17.64838-8.38885.06406-.00711.13071-.01083.19443-.01767v1.88007c-8.16155.81629-7.05877 7.26857.96342 7.36907 8.59208.24576 10.073-6.77224 1.03651-7.40858l.00007-2.00322a77.28245 77.28245 0 0 1 16.04688.28009 1 1 0 0 0 .23228-1.98628l-1.2792-.15093a80.34442 80.34442 0 0 0 -15-.147v-8.2504c3.87853.27734 7.338-2.94363 7.32222-3.024a6.10557 6.10557 0 0 1 5.82329-1.61957.99778.99778 0 0 0 1.06641-.28955c1.08455-1.685-2.16037-3.48534-4.52528-4.26028a13.4835 13.4835 0 0 0 -5.05094-.55177 6.93186 6.93186 0 0 1 -4.6357-1.12983v-.38678a1.00012 1.00012 0 0 0 -2 .00007v19.67077c-12.4848 1.205-20.21333 3.72735-21.10439 7.1183-.97717 2.42453 2.08054 5.59151 5.03519 6.71324.95983.41071 1.22252.77643 1.22643.9278.02749.53512-1.33886 1.59244-2.43849 2.12791-6.25341 3.88061-5.55237 8.65058.85162 12.13087 9.04347 4.97736 37.06968 7.03868 40.05083-2.22832.87-3.28437-2.24619-6.29755-2.76376-6.77069-.82715-1.02246-.49512-1.59766-.37012-1.814a1.73291 1.73291 0 0 1 1.19336-.76221c11.85833-2.38863 12.58491-6.69674 12.62104-7.11763.71192-4.60841-3.31641-7.81642-11.97461-9.53419zm-22.3271 8.40076c-2.28161-.24939-3.64257-1.12867-3.64257-1.64539 0-.5163 1.361-1.39557 3.64257-1.645zm2-26.17371a9.61144 9.61144 0 0 0 4.75489.82373 11.26358 11.26358 0 0 1 5.73925 1.01174 8.35694 8.35694 0 0 0 -4.58114 2.2949 8.66408 8.66408 0 0 1 -5.91309 2.4411zm0 22.8443c2.58618.16412 4.15137 1.13067 4.15137 1.684 0 .55377-1.56519 1.52039-4.15137 1.68451z"></path><path d="m41.56348 51.626c-3.68694 1.06147-3.84337 1.09365-10.69237 1.30732a60.31312 60.31312 0 0 1 -6.1299-.30928.9999.9999 0 1 0 -.20508 1.98926 62.1776 62.1776 0 0 0 6.335.31983 52.46718 52.46718 0 0 0 8.21291-.58643 24.359 24.359 0 0 0 3.13768-.832 1 1 0 0 0 -.6582-1.88867z"></path></svg>
            </div>
            <div>
              <h3 className="text-lg font-bold">Golf Courses</h3>
              <p className="text-xs text-gray-600">Play on lush, championship-level golf courses designed for professionals and enthusiasts, offering scenic fairways and top-tier facilities.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white rounded-2xl shadow-md flex flex-col items-start h-full">
              <div>
                <Resicon />
              </div>
              <span className="text-xl font-bold">Restaurants & Cafés</span>
              <p className="text-xs mt-2 text-gray-600">Indulge in diverse culinary delights, from fine dining to cozy cafés.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md flex flex-col items-start">
              <div>
                <Shopicon />
              </div>
              <span className="text-xl font-bold">Shopping Centers</span>
              <p className="text-xs mt-2 text-gray-600">Explore luxury boutiques, flagship stores, and retail havens.</p>
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

      <section id="gallery">
        <GalleryGrid images={images} />
      </section>

      <section id="location" className="">
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
        <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
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
