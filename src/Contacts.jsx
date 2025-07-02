import { FaPhone, FaEnvelope, FaInstagram ,FaWhatsapp} from 'react-icons/fa'
import {CheckCircleIcon, XCircleIcon} from "lucide-react"
import React, { useState } from "react";
import Footer from "./Footer.jsx";
import Header from './Header.jsx';
import axiosPublic from './api/axios.jsx';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import GoogleMap from "./GoogleMap.jsx"

function Contacts() {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    sender: '',
    message: '',
    email: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // API function 
  const sendMessage = async (data) => {
    const response = await axiosPublic.post("/messages/send", data, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    return response.data;
  };

   const openWhatsApp = () => {
    const phoneNumber = '254742310701'; 
    const message = `Hello Macharia! Let's talk.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  }

  // Mutation
  const createMutation = useMutation({
    mutationFn: sendMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["messages"] });
      setFormData({ sender: '', message: '', email: '' });
      setErrors({});
      setIsSubmitting(false);
      // Success toast notification
      toast.success('Message sent successfully!', {
        position: "top-center",
        className: "bg-green-500 p-4 top-16 text-white" ,
        icon: <CheckCircleIcon className="w-6 h-6 text-white" />,
        progressClassName: "bg-green-50",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    },
    onError: (error) => {
      setIsSubmitting(false);
      console.error('Error sending message:', error);
      // Error toast notification
      toast.error('Failed to send message. Please try again.', {
        position: "top-center",
        className: "bg-red-500 p-4 top-16 text-white" ,
        icon: <XCircleIcon className="w-6 h-6 text-white" />,
        autoClose: 3000,
        progressClassName: "bg-red-50",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  });

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.sender.trim()) {
      newErrors.sender = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    createMutation.mutate(formData);
  };
  //bg-[url(./assets/conts.jpg)]

  return (
    <>
      <Header />
      <div
        id="Contacts"
        className="min-h-screen w-full flex flex-col bg-gradient-to-br from-blue-100 via-purple-100 to bg-slate-100 "
      >
        <div className="py-6 px-4">
          <div className="mb-8">
            <h1 className="text-center mb-2 text-2xl font-semibold text-gray-800 drop-shadow-lg">
              Contact Me
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-500 mx-auto rounded-full"></div>
           
          </div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
                        
            {/* Contact Information */}
            <div className=" rounded-xl   lg:px-10 transition-all duration-300 ">
              <h2 className="text-center text-xl font-semibold text-gray-800 mb-4">
                Get in Touch
              </h2>
              

              <div className="">
                <div className="flex items-center gap-4 px-4 rounded-lg  ">
                  <div className="flex-shrink-0">
                    <FaPhone className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Call</p>
                    <a href="tel:+254763416572" className="text-slate-900 ">
                      0763 416 572
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg  ">
                  <div className="flex-shrink-0">
                    <FaWhatsapp className="h-6 w-8 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">WhatsApp</p>
                    <button onClick={openWhatsApp} href="tel:+254742310701" className="text-slate-900 ">
                      0742 310 701
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4 px-4 rounded-lg ">
                  <div className="flex-shrink-0">
                    <FaEnvelope className="h-6 w-6 text-red-900" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Email</p>
                    <a href="mailto:devmacharia7@gmail.com" className="text-slate-900">
                     devmacharia7@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg ">
                  <div className="flex-shrink-0">
                    <FaInstagram className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Instagram</p>
                    <a href="https://www.instagram.com/__jow.nt3?igsh=Zm51YXV3cjExdDk1" target="_blank" rel="noopener noreferrer" className="text-slate-900 ">
                     _jow.nt3
                    </a>
                  </div>
                </div>

                <div className="mt-8 p-3  bg-gradient-to-br from-blue-100 via-green-50 to-teal-100  rounded-lg border border-blue-300">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    My Location
                  </h3>
                  <GoogleMap  />
                </div>
              </div>
               

            </div>

            <div className="backdrop-blur-xs rounded-xl h-[570px] shadow-2xl border border-white/30 p-8 transition-all duration-300 hover:shadow-3xl">
              <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">
                Send Me a Message
              </h2>
              
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.sender}
                    onChange={(e) => handleInputChange('sender', e.target.value)}
                    placeholder="Enter your full name"
                    className={`w-full border-2  rounded-lg py-3 px-4 transition-all duration-200  ${
                      errors.sender 
                        ? 'border-red-500 ' 
                        : 'border-none outline-none'
                    }`}
                  />
                  {errors.sender && (
                    <p className="text-red-500 text-sm ">{errors.sender}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="example@gmail.com"
                    className={`w-full border-2 rounded-lg py-3 px-4 transition-all duration-200  ${
                      errors.email 
                        ? 'border-red-500 ' 
                        : 'border-none outline-none'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm ">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Type your message here..."
                    rows="5"
                    className={`w-full border-2 rounded-lg py-3 px-4 resize-none  ${
                      errors.message 
                        ? 'border-red-500' 
                        : 'border-none outline-none'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm ">{errors.message}</p>
                  )}
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105  ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
     
    </>
  );
}

export default Contacts;