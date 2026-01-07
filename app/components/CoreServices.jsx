"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ShieldCheck,
  Scale,
  Building2,
  FileText,
  Landmark,
} from "lucide-react";

export default function CoreServicesSection() {
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
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/image/04.png" // replace with your image
                alt="Professional Compliance & Advisory Services"
                width={600}
                height={700}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Accent Card */}
            <div className="absolute -bottom-8 -right-8 bg-[#4f2e80] text-white px-6 py-4 rounded-xl shadow-xl hidden md:block">
              <p className="text-sm uppercase tracking-wide opacity-80">
                Trusted Advisory
              </p>
              <p className="text-xl font-semibold">
                Compliance • Risk • Governance
              </p>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm font-semibold text-[#4f2e80] uppercase tracking-wide mb-4">
              Core Services Snapshot
            </span>

            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Our Key Services
            </h2>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              We deliver structured, regulator-aligned advisory solutions designed
              for decision-makers who require clarity, confidence, and compliance
              assurance.
            </p>

            {/* Services List */}
            <div className="space-y-5">
              <ServiceItem
                icon={<FileText />}
                text="Internal Audit & Risk-Based Reviews"
              />
              <ServiceItem
                icon={<ShieldCheck />}
                text="AML & Compliance Advisory"
              />
              <ServiceItem
                icon={<Building2 />}
                text="Corporate Governance & Board Advisory"
              />
              <ServiceItem
                icon={<Scale />}
                text="VAT & Corporate Tax Compliance"
              />
              <ServiceItem
                icon={<CheckCircle />}
                text="ESR Advisory & Reporting"
              />
              <ServiceItem
                icon={<Landmark />}
                text="DIFC & ADGM Regulatory Support"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* Service Item */
function ServiceItem({ icon, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-4 bg-gray-50 border border-[#4f2e80] rounded-xl px-6 py-4 hover:bg-white hover:shadow-sm transition"
    >
      <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-blue-100 text-[#4f2e80]">
        {icon}
      </div>
      <p className="text-lg font-medium text-gray-800">
        {text}
      </p>
    </motion.div>
  );
}
