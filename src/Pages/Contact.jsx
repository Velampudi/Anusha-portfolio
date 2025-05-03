import { Link } from "react-router-dom";
import React, { useState } from "react";
import emailjs from '@emailjs/browser';


import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [FormData, setFormData] = useState({
    form_name: "",
    email:"",
    message:"",
  });

  const  handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      e.target, 
      import.meta.env.VITE_PUBLIC_KEY)
    .then((result) => {
      alert("Message Sent!");
      setFormData({form_name:"", email:"", message:""});
    })
    .catch(() => alert("Oops! Something Went wrong. Please try again."));

  } 
  

  return (
    <section className="min-h-screen bg-gray-950 text-gray-300 p-6 flex flex-col md:flex-row justify-center items-center gap-10">

      <div className="bg-slate-200 p-6 rounded-xl w-full max-w-xl">
        <h2 className="text-2xl font-semibold text-black mb-2">
          Let's work together
        </h2>
        <p className="text-sm text-black mb-6">Are you looking for a reliable web developer to bring your next project to life? Whether you need a personal portfolio,
          a business website, an e-commerce platform, or a custom web application, I’m here to help. Please fill out the form with your details, and I’ll get back to
          you as soon as possible. Let’s create something amazing together!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              name="from_name"
              required
              value = {FormData.name}
              placeholder="Yourname"
              onChange={(e) => 
                setFormData({...FormData, name: e.target.value})}
              className="w-1/2 bg-[#1a1a1a] p-3 rounded-md border border-gray-900 focus:outline-none focus:ring-1 focus:ring-green-700"
            />
          </div>
          <div className="flex gap-4">
            <input
              type="email"
              name="email"
              required
              value = {FormData.email}
              placeholder=" Your Email "
              onChange={(e) => setFormData({...FormData, email: e.target.value})}
              className="w-1/2 bg-[#1a1a1a] p-3 item-center rounded-md border border-gray-700 focus:outline-none focus:ring-1 focus:ring-green-400"
            />
          </div>
          <textarea
            name="message"
            required
            placeholder="Your message here."
            value = {FormData.message}
            onChange={(e) => setFormData({...FormData, message: e.target.value})}
            className="w-full bg-[#1a1a1a] text-white p-3  rounded-md border border-gray-700 focus:outline-none focus:ring-1 focus:ring-green-400">
          </textarea>
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-md font-medium transition cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="text-sm space-y-8">
        <div className="flex items-center gap-4">
          <FaPhone className="text-yellow-400 text-xl" />
          <div>
            <p className="text-gray-400">Phone</p>
            <p>(+91) 8712288069</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-yellow-400 text-xl" />
          <div>
            <p className="text-gray-400">Email</p>
            <p>velampudianusha1727@email.com</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FaMapMarkerAlt className="text-yellow-400 text-xl" />
          <div>
            <p className="text-gray-400">Address</p>
            <p>Kakinada</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
