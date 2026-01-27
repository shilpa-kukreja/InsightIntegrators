"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  CheckCircle,
  ShieldCheck,
  Scale,
  Building2,
  FileText,
  Landmark,
  ChevronDown,
} from "lucide-react";

export default function CoreServicesSection() {
  const [open, setOpen] = useState("advisory");

  const toggle = (type) => {
    setOpen(open === type ? null : type);
  };

  return (
    <section className="bg-gray-200 sm:py-24 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/image/04.png"
                alt="Professional Services"
                width={600}
                height={700}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Our Key Services
            </h2>

            {/* <p className="text-lg text-gray-600 mb-10">
              Choose a category to explore our advisory and consulting expertise.
            </p> */}

            {/* Advisory */}
            <Dropdown
              title="Advisory Services"
              isOpen={open === "advisory"}
              onClick={() => toggle("advisory")}
            >
              <ServiceItem icon={<FileText />} text="Business Risk and Control Service" />
              <ServiceItem icon={<ShieldCheck />} text="Regulatory Compliance Service" />
              <ServiceItem icon={<Building2 />} text="AML and Financial Crime Service" />
              <ServiceItem icon={<Landmark />} text="Specialised Services for DIFC and ADGM entities" />
              <ServiceItem icon={<CheckCircle />} text="Forensic and Investigative Services" />
            </Dropdown>

            {/* Consulting */}
            <Dropdown
              title="Consulting Services"
              isOpen={open === "consulting"}
              onClick={() => toggle("consulting")}
            >
              <ServiceItem icon={<Scale />} text="Business Transformation" />
            </Dropdown>

            {/* Financial Advisory */}
            <Dropdown
              title="Financial Advisory Services"
              isOpen={open === "financial"}
              onClick={() => toggle("financial")}
            >
              <ServiceItem icon={<Scale />} text="Business Valuations" />
             
            </Dropdown>

            {/* Business Setup */}
            <Dropdown
              title="Business Set Up and Licensing "
              isOpen={open === "setup"}
              onClick={() => toggle("setup")}
            >
             
            </Dropdown>

            {/* Tax */}
            <Dropdown
              title="Tax Services"
              isOpen={open === "tax"}
              onClick={() => toggle("tax")}
            >
              <ServiceItem icon={<Scale />} text="Corporate Tax Advisory and Compliance service" />
              <ServiceItem icon={<CheckCircle />} text="Transfer Pricing Advisory service" />
              <ServiceItem icon={<CheckCircle />} text="International Tax and Structuring service" />
              <ServiceItem icon={<CheckCircle />} text="VAT and Indirect Tax service" />
              <ServiceItem icon={<CheckCircle />} text="ESR Compliance service" />
              <ServiceItem icon={<CheckCircle />} text="Excise Tax Advisory service" />
              <ServiceItem icon={<CheckCircle />} text="Customs and International Trade Compliance service" />
            </Dropdown>



          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* Dropdown Wrapper */
function Dropdown({ title, isOpen, onClick, children }) {
  return (
    <div className="mb-6">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between bg-[#4f2e80] text-white px-6 py-4 rounded-xl font-semibold text-lg"
      >
        {title}
        <ChevronDown
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden mt-4 space-y-4"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* Service Item */
function ServiceItem({ icon, text }) {
  return (
    <div className="flex items-center gap-4 bg-white border border-[#4f2e80]/30 rounded-xl px-6 py-4 hover:shadow-md transition">
      <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-blue-100 text-[#4f2e80]">
        {icon}
      </div>
      <p className="text-gray-800 font-medium">{text}</p>
    </div>
  );
}
