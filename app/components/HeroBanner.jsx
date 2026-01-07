"use client";

import { Phone, CheckCircle, Star, Users, Award, Clock, Shield, Calendar, MessageSquare, Building2, FileText, Calculator, CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import ContactPopup from "./ContactPopup";
import axios from "axios";




export default function HeroBanner() {
    const [formData, setFormData] = useState({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        serviceType: ""
    });
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const GOOGLE_SHEET_URL =
        "https://script.google.com/macros/s/AKfycbycC_dHrLGFYzldh9FBiIgcVWYkEkEH618Qh4yJn55pUUYoMY-fOA3aE_AHMoWYKhdw/exec";


    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    await fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    setIsSubmitted(true);

    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      serviceType: "",
    });

    setTimeout(() => setIsSubmitted(false), 3000);
  } catch (error) {
    console.error("Fetch Error:", error);
    alert("Something went wrong. Please try again later.");
  } finally {
    setIsLoading(false);
  }
};



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };


    const services = [
        { value: "tax", label: "Income Tax Filing", icon: <FileText className="w-4 h-4" /> },
        { value: "gst", label: "GST Registration & Filing", icon: <Building2 className="w-4 h-4" /> },
        { value: "company", label: "Company Registration", icon: <Building2 className="w-4 h-4" /> },
        { value: "audit", label: "Audit & Compliance", icon: <Calculator className="w-4 h-4" /> },
        { value: "advisory", label: "Business Advisory", icon: <MessageSquare className="w-4 h-4" /> },
        { value: "accounting", label: "Accounting Services", icon: <CreditCard className="w-4 h-4" /> }
    ];

    return (
        <section className="relative min-h-screen flex  items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover    bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/image/01.png')",
                    backgroundAttachment: 'sticky',
                    backgroundPosition: 'top'
                }}
            >
                {/* Dark Overlay for better text visibility */}
                <div className="absolute inset-0 " />

                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTAgMTBIMTB2NDBoNDBWMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-20" />
            </div>

            {/* Content */}
            <div className="relative w-full ">
                <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

                        {/* Left Content - 7 columns */}




                        {/* Right Side - Content */}
                        <div className="lg:col-span-7 space-y-8">

                            {/* Premium Badge */}
                            {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 bg-gray-900 border border-white/20 rounded-full"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black">
              <Award className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-sm font-semibold text-gray-200">ICAI REGISTERED FIRM</span>
              <span className="text-xs text-blue-200 ml-2">• Since 2010</span>
            </div>
          </motion.div> */}

                            {/* Primary Headline */}
                            {/* <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-4xl md:text-5xl  font-bold text-gray-900 leading-tight tracking-tight"
                            >
                                Protect Your Business from{" "}
                                <span className="text-white">Regulatory Risk, Penalties & Compliance Failures</span>
                            </motion.h1> */}

                            {/* Sub-Headline */}
                            {/* <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="mt-4 text-lg text-white max-w-3xl text-justify leading-relaxed"
                            >
                                Expert Internal Audit, AML, Tax & Corporate Governance Advisory for UAE, DIFC & ADGM Businesses.
                            </motion.p> */}

                            {/* Trust Line */}
                            {/* <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="mt-4 text-md text-white font-medium"
                            >
                                ✔ UAE Regulatory Expertise | ✔ Regulator-Ready Frameworks | ✔ Senior-Led Engagements
                            </motion.p> */}

                            {/* Features Grid */}
                            {/* <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
                            >
                                {[
                                    "Internal Audit & Risk Assurance",
                                    "AML & Regulatory Compliance Advisory",
                                    "Corporate Governance & Board Advisory",
                                    "UAE Corporate Tax & VAT Services",
                                    "ESR & Regulatory Reporting Support",
                                    "DIFC & ADGM Compliance Services"
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5  backdrop-blur-sm border border-[#4f2e80] flex items-center justify-center">
                                            <CheckCircle className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="text-md font-medium text-white">{feature}</span>
                                    </div>
                                ))}
                            </motion.div> */}

                            {/* Stats Grid */}
                            {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-400/20">
                  <Users className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-600">1,250+</div>
                  <div className="text-sm text-gray-900">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-green-400/20">
                  <Star className="w-6 h-6 text-green-300" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-600">4.9/5</div>
                  <div className="text-sm text-gray-900">Client Rating</div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-400/20">
                  <Clock className="w-6 h-6 text-purple-300" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-600">10+</div>
                  <div className="text-sm text-gray-900">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-400/20">
                  <Building2 className="w-6 h-6 text-amber-300" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-600">500+</div>
                  <div className="text-sm text-gray-900">Companies Registered</div>
                </div>
              </div>
            </div>
          </motion.div> */}

                            {/* CTA Buttons */}
                            {/* <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="mt-12 flex flex-col sm:flex-row gap-6"
                            >
                                <button
                                    onClick={() => setIsPopupOpen(true)}
                                    className="group relative overflow-hidden inline-flex items-center cursor-pointer justify-center gap-3 bg-white hover:bg-white transition-all duration-500 px-10 py-5 rounded-2xl font-semibold text-white shadow-2xl shadow-blue-900/50 hover:shadow-3xl hover:shadow-blue-900/60"
                                >
                                    <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                    <span className="relative z-10 text-md text-[#4f2e80]">Get a Free Compliance Risk Assessment</span>
                                </button>
                            </motion.div> */}

                            {/* Contact Popup */}
                            {isPopupOpen && <ContactPopup onClose={() => setIsPopupOpen(false)} />}

                        </div>


                        {/* Right Contact Form - 5 columns */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="lg:col-span-5"
                        >
                            <div className="relative">
                                {/* Form Container with Premium Glass Effect */}
                                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20">
                                    {/* Form Header */}
                                    <div className="relative p-8 bg-[#4f2e80]">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="flex items-center gap-3">
                                                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                                                    <MessageSquare className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-white">Free CA Consultation</h3>
                                                    <p className="text-blue-100 text-sm mt-1">Speak directly with our experts</p>
                                                </div>
                                            </div>
                                            {/* <div className="hidden sm:block">
                                                <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                                                    <span className="text-sm font-medium text-white">📞 24/7 Support</span>
                                                </div>
                                            </div> */}
                                        </div>

                                        {/* <div className="flex items-center gap-4 text-sm text-blue-100">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-green-400" />
                                                <span>Instant Response</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-green-400" />
                                                <span>No Hidden Fees</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-green-400" />
                                                <span>100% Confidential</span>
                                            </div>
                                        </div> */}
                                    </div>

                                    {/* Form Body */}
                                    <div className="p-8">
                                        {isSubmitted ? (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="text-center py-12"
                                            >
                                                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                                                    <CheckCircle className="w-10 h-10 text-green-600" />
                                                </div>
                                                <h4 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h4>
                                                <p className="text-gray-600">Our CA expert will contact you within 30 minutes.</p>
                                            </motion.div>
                                        ) : (
                                            <form onSubmit={handleSubmit} className="space-y-6">
                                                {/* Name Field */}
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                        Full Name <span className="text-red-500">*</span>
                                                    </label>
                                                    <div className="relative">
                                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                            </svg>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            name="fullName"
                                                            value={formData.fullName}
                                                            onChange={handleChange}
                                                            placeholder="Enter your full name"
                                                            required
                                                            className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white focus:bg-white text-gray-900 placeholder-gray-400"
                                                        />
                                                    </div>
                                                </div>


                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                        Company Name <span className="text-red-500">*</span>
                                                    </label>
                                                    <div className="relative">
                                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                            </svg>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            name="companyName"
                                                            value={formData.companyName}
                                                            onChange={handleChange}
                                                            placeholder="Enter your company name"
                                                            required
                                                            className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white focus:bg-white text-gray-900 placeholder-gray-400"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Contact Fields */}
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                            Mobile Number <span className="text-red-500">*</span>
                                                        </label>
                                                        <div className="relative">
                                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                                <Phone className="w-5 h-5 text-gray-400" />
                                                            </div>
                                                            <input
                                                                type="tel"
                                                                name="phone"
                                                                value={formData.phone}
                                                                onChange={handleChange}
                                                                placeholder="Enter your mobile number"
                                                                required
                                                                className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white focus:bg-white text-gray-900 placeholder-gray-400"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                            Email Address <span className="text-red-500">*</span>
                                                        </label>
                                                        <div className="relative">
                                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                                </svg>
                                                            </div>
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                value={formData.email}
                                                                onChange={handleChange}
                                                                placeholder="Enter your email address"
                                                                required
                                                                className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white focus:bg-white text-gray-900 placeholder-gray-400"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Service Selection */}
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                        Select Service Required <span className="text-red-500">*</span>
                                                    </label>
                                                    <select
                                                        name="serviceType"
                                                        value={formData.serviceType}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full border border-gray-200 px-4 py-3.5 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white focus:bg-white text-gray-900 placeholder-gray-400 appearance-none"
                                                    >
                                                        <option value="">Select a service</option>
                                                        <option value="Internal Audit">Internal Audit</option>
                                                        <option value="AML / Compliance">AML / Compliance</option>
                                                        <option value="Corporate Governance">Corporate Governance</option>
                                                        <option value="Tax / VAT">Tax / VAT</option>
                                                        <option value="DIFC / ADGM Support">DIFC / ADGM Support</option>
                                                    </select>
                                                </div>

                                                {/* Submit Button */}
                                                <button
                                                    type="submit"
                                                    className="group relative w-full bg-[#4f2e80] transition-all duration-300 text-white py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-600/40 transform hover:-translate-y-0.5"
                                                >
                                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                                        <Calendar className="w-5 h-5" />
                                                        Get Free Consultation
                                                    </span>
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                                </button>

                                                {/* Security Assurance */}
                                                {/* <div className="pt-6 border-t border-gray-100">
                                                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                                                        <div className="flex items-center gap-2">
                                                            <Shield className="w-4 h-4 text-green-600" />
                                                            <span>100% Secure & Confidential</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                            </svg>
                                                            <span>SSL Encrypted Connection</span>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </form>
                                        )}
                                    </div>
                                </div>

                                {/* Trust Badge */}
                                {/* <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-500/30 flex items-center justify-center">
                                            <CheckCircle className="w-4 h-4 text-green-400" />
                                        </div>
                                        <span>No Spam Guarantee</span>
                                    </div>
                                    <div className="h-4 w-px bg-white/30" />
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center">
                                            <Clock className="w-4 h-4 text-blue-400" />
                                        </div>
                                        <span>Response in 30 min</span>
                                    </div>
                                </div> */}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}