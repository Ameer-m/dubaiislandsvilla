"use client";

import { useEffect } from "react";
import Form from "./Form";

const Modal = ({ isOpen, onClose, title, desc, btnText }) => {
  // Close modal when "Escape" key is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Return null if modal is not open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        
      {/* Modal Content */}
      <div className="bg-white rounded-lg p-6 max-w-lg w-full shadow-lg relative">
        <div className="flex flex-col py-3 justify-center items-start">
            <p className="text-lg md:text-2xl font-bold headingMain playfair text-center w-full">{title}</p>
            {desc && (
                <p className="mt-2 md:mt-4 paragraph text-xs md:text-sm font-light poppins text-center">
                    {desc}.
                </p>
            )}
            
        </div>
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Modal Body */}
        <Form bgColor="bg-transparent" inStyles="bg-gray-100 border border-gray-200 rounded-md" btnText={btnText}/>
      </div>
    </div>
  );
};

export default Modal;