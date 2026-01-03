"use client";

import { motion } from "framer-motion";
import { PhoneCall, SearchCheck, Settings } from "lucide-react";

export default function EngagementProcessSection() {
  return (
    <section className="bg-gray-200 sm:py-24 py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block text-sm font-semibold text-[#4f2e80] uppercase tracking-wide mb-4">
            Our Engagement Approach
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            A Clear, Structured Path to Compliance
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Our advisory process is designed to provide clarity at every stage —
            from initial discussion to long-term regulatory confidence.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <StepCard
            step="Step 1"
            title="Free Initial Consultation"
            icon={<PhoneCall />}
            description="We understand your business, regulatory exposure, and key compliance challenges."
          />

          <StepCard
            step="Step 2"
            title="Risk Assessment & Gap Analysis"
            icon={<SearchCheck />}
            description="We identify compliance gaps, control weaknesses, and priority risks requiring immediate attention."
          />

          <StepCard
            step="Step 3"
            title="Implementation & Ongoing Support"
            icon={<Settings />}
            description="We help remediate gaps and provide ongoing support to ensure sustained regulatory compliance."
          />

        </div>
      </div>
    </section>
  );
}

/* Step Card */
function StepCard({ step, title, description, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="relative bg-white border border-[#4f2e80] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all"
    >
      {/* Step Label */}
      <span className="absolute -top-4 left-6 bg-[#4f2e80] text-white text-sm font-semibold px-4 py-1 rounded-full shadow">
        {step}
      </span>

      {/* Icon */}
      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-100 text-[#4f2e80] mb-6">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
