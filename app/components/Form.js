"use client";

import { useState, useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Form = ({ bgColor, inStyles, btnText }) => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    setPageUrl(window.location.href);
    console.log(pageUrl)
  }, []);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return phone && phone.length >= 8 && phone.length <= 15; // Ensures valid phone length
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setFormData({ ...formData, [name]: value });
  
    // Clear error when the user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };
  
  // Handle phone input separately
  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  
    // Only validate on form submission, but clear errors when typing
    if (errors.phone) {
      setErrors({ ...errors, phone: "" });
    }
  };
  
  // Validate phone on form submission
  const validateForm = () => {
    let newErrors = {};
  
    if (!formData.phone || !validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false; // Form is invalid
    }
  
    return true; // Form is valid
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccessMessage("");

    let newErrors = {};
    if (!formData.fname.trim()) newErrors.fname = "First name is required.";
    if (!formData.lname.trim()) newErrors.lname = "Last name is required.";
    if (!formData.email.trim() || !validateEmail(formData.email))
      newErrors.email = "Please enter a valid email.";
    if (!formData.phone || !validatePhone(formData.phone))
      newErrors.phone = "Please enter a valid phone number.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname: formData.fname,
          lname: formData.lname,
          email: formData.email,
          full_phone_number: formData.phone,
          pageUrl: pageUrl,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status} - ${errorText}`);
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);

      setFormData({ fname: "", lname: "", email: "", phone: "" });
      setSuccessMessage("Your request has been sent successfully!");
    } catch (error) {
      console.error("Error submitting form:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${bgColor} rounded-2xl p-3 museo_sans`}>
      <form className="myForm" onSubmit={handleSubmit}>
        <div className="grid gap-4 mb-6 grid-cols-2">
          {/* First Name */}
          <div className="col-span-1">
            <input
              type="text"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              className={`bg-transparent p-3 ${
                inStyles ? inStyles : "border-b-2 border-black placeholder:text-black focus:border-black"
              } text-sm focus:outline-none w-full p-2.5`}
              placeholder="First Name"
            />
            {errors.fname && <span className="text-red-500 text-xs">{errors.fname}</span>}
          </div>

          {/* Last Name */}
          <div className="col-span-1">
            <input
              type="text"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              className={`bg-transparent p-3 ${
                inStyles ? inStyles : "border-b-2 border-black placeholder:text-black focus:border-black"
              } text-sm focus:outline-none w-full p-2.5`}
              placeholder="Last Name"
            />
            {errors.lname && <span className="text-red-500 text-xs">{errors.lname}</span>}
          </div>

          {/* Email Address */}
          <div className="col-span-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`bg-transparent p-3 ${
                inStyles ? inStyles : "border-b-2 border-black placeholder:text-black focus:border-black"
              } text-sm focus:outline-none w-full p-2.5`}
              placeholder="Email Address"
            />
            {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
          </div>

          {/* Phone */}
          <div className="col-span-2">
            <PhoneInput
              international
              defaultCountry="AE"
              value={formData.phone}
              onChange={handlePhoneChange}
              countryCallingCodeEditable={false}
              className={`phone-number-input bg-transparent ${
                inStyles ? inStyles : "border-b-2 border-black placeholder:text-black focus:border-black"
              } text-sm focus:outline-none focus:ring-0 w-full p-2.5`}
            />
            {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="submitButton group w-full rounded-full bg-black font-bold text-lg text-white relative overflow-hidden px-5 py-3"
          disabled={loading}
        >
          {loading ? "Sending..." : btnText || "Send Request"}
          <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-full"></div>
        </button>

        {/* Success Message */}
        {successMessage && <p className="text-green-600 text-center mt-3">{successMessage}</p>}

        {/* Disclaimer */}
        <p className="w-full text-gray-500 text-xs font-light poppins text-center mt-3">
          By clicking Submit, you agree to
          <br />
          our{" "}
          <a className="text-blue-600 underline" href="https://psinv.net/en/terms">
            Terms & Conditions
          </a>
          ,{" "}
          <a className="text-blue-600 underline" href="https://psinv.net/en/privacy">
            Privacy Policy
          </a>
          , and{" "}
          <a className="text-blue-600 underline" href="https://enquiries.estate/outreach-guidelines/">
            Outreach Guidelines
          </a>
        </p>
      </form>
    </div>
  );
};

export default Form;