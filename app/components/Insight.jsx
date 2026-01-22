"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  Users,
  FileSearch,
  Landmark,
} from "lucide-react";

export default function TrustSection() {
  return (
    <section className="bg-gray-50 sm:py-24 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm font-semibold text-[#4f2e80] uppercase tracking-wide mb-4">
              Why Choose Us
            </span>

            <h2 className="text-4xl font-extrabold text-gray-800 mb-6 leading-tight">
              Why Businesses Across UAE Trust
              <span className="block text-[#4f2e80] mt-2">
                Insight Integrators
              </span>
            </h2>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Organizations operating in highly regulated environments rely on us
              for clarity, confidence, and hands-on regulatory support — not just
              theoretical advice.
            </p>

            {/* Trust Points */}
            <div className="space-y-5">
              <TrustItem
                icon={<Landmark />}
                text="Deep knowledge of UAE, DIFC & ADGM regulations"
              />
              <TrustItem
                icon={<ShieldCheck />}
                text="Strong focus on financial crime prevention"
              />
              <TrustItem
                icon={<Users />}
                text="Senior professionals lead every engagement"
              />
              <TrustItem
                icon={<FileSearch />}
                text="Practical remediation, not just audit reports"
              />
              <TrustItem
                icon={<CheckCircle2 />}
                text="Trusted support during regulatory inspections"
              />
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/image/Untitled design.png" // replace with your image
                alt="Trusted Regulatory & Compliance Advisory in UAE"
                width={650}
                height={700}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Floating Trust Badge */}
            {/* <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-xl shadow-lg border border-gray-200 hidden md:block">
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                Regulatory Confidence
              </p>
              <p className="text-lg font-semibold text-gray-900">
                UAE • DIFC • ADGM
              </p>
            </div> */}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* Trust Item */
function TrustItem({ icon, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex items-start gap-4 bg-white border border-[#4f2e80] rounded-xl px-6 py-4 shadow-sm hover:shadow-md transition"
    >
      <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-blue-100 text-#4f2e80 flex-shrink-0">
        {icon}
      </div>
      <p className="text-lg text-gray-800 leading-relaxed">
        {text}
      </p>
    </motion.div>
  );
}
