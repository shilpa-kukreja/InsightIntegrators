"use client";

import { useState } from "react";
import MasterclassPopup from "./MasterclassPopup";

import { CalendarDays, Globe, Video, Clock3, Check } from "lucide-react";

export default function HeroSection() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-14">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#d8d8d8 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        {/* Top Badge */}
        <div className="mb-8 flex justify-center">
          <div className="rounded-full bg-[#4f2e80] px-8 py-4 text-sm font-semibold text-white shadow-lg md:px-14 md:text-lg">
Live Compliance & Tax Risk Workshop          </div>
        </div>

        {/* Heading */}
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-2xl font-black leading-tight text-black md:text-4xl">
            Avoid Costly{" "}
            <span className="text-[#4f2e80]">
              VAT Penalties & Tax Mistakes
            </span>{" "}
            Roadmap
            <br />
            Before They Cost Your UAE Business 
          </h1>

          <p className="mt-4 text-lg font-medium text-[#333] md:text-xl">
Book Your Free 30-Minute Tax Consultation And Stay Protected From Costly FTA Penalties
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-18 grid items-center gap-12 lg:grid-cols-2">
          {/* Left Side */}
          <div className="flex flex-col items-center">
            {/* Image Circle */}
            <div className="relative">
              <div className="flex h-[330px] w-[330px] items-center justify-center rounded-full border-[12px] border-[#ece3f7] bg-[#4f2e80] shadow-2xl mt-[-90px]">
                <img
                  src="/image/man.png"
                  alt="Founder"
                  className=" object-contain grayscale pr-6"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-4 left-1/2 w-[145%] -translate-x-1/2 rounded-2xl border border-[#ddd] bg-white px-6 py-4 text-center shadow-xl">
                <h3 className="text-2xl font-bold text-black">
                  CEO of Insights Integrators
                </h3>

                {/* <p className="mt-2 text-sm font-medium leading-6 text-[#444] md:text-base">
                  Built a 10 Crore Course Business Empire & taught 5170+ people
                  to launch & scale their online course business
                </p> */}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div>
            {/* Info Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Time */}
              <div className="flex items-center gap-4 rounded-3xl border border-[#ddd] bg-white p-5 shadow-md">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4f2e80] text-white">
                  <Clock3 size={26} />
                </div>

                <div>
                  <p className="text-sm font-medium text-[#555]">Time</p>
                  <h4 className="text-2xl font-bold">11:00 AM</h4>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-4 rounded-3xl border border-[#ddd] bg-white p-5 shadow-md">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4f2e80] text-white">
                  <CalendarDays size={26} />
                </div>

                <div>
                  <p className="text-sm font-medium text-[#555]">Date</p>
                  <h4 className="text-2xl font-bold">18th May</h4>
                </div>
              </div>

              {/* Venue */}
              <div className="flex items-center gap-4 rounded-3xl border border-[#ddd] bg-white p-5 shadow-md">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4f2e80] text-white">
                  <Video size={26} />
                </div>

                <div>
                  <p className="text-sm font-medium text-[#555]">Venue</p>
                  <h4 className="text-2xl font-bold">Zoom</h4>
                </div>
              </div>

              {/* Language */}
              <div className="flex items-center gap-4 rounded-3xl border border-[#ddd] bg-white p-5 shadow-md">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4f2e80] text-white">
                  <Globe size={26} />
                </div>

                <div>
                  <p className="text-sm font-medium text-[#555]">Language</p>
                  <h4 className="text-2xl font-bold">English</h4>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setShowPopup(true)}
              className="mt-10 w-full rounded-3xl bg-[#4f2e80] px-8 py-4 text-2xl font-black text-white shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:bg-[#43256e]"
            >
              Book Free Consultation Now 
            </button>
            {/* Registration */}
            {/* <p className="mt-5 text-center text-xl font-semibold italic text-[#222]">
              Registrations End on{" "}
              <span className="font-black text-red-500">18 MAY</span>
            </p> */}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-10 grid gap-10 border-t border-[#ddd] pt-10 text-center md:grid-cols-3">
        </div>

        {/* Features */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-24">
          {[
            "500+ VAT Filings",
            "Zero Client Penalties",
            "Senior CPAs Only ",
            "48-Hour Response"
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-full bg-white px-5 py-2 shadow-md"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#4f2e80] text-white">
                <Check size={16} />
              </div>

              <span className="text-base font-semibold text-[#222]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>




      {showPopup && (
  <MasterclassPopup
    onClose={() => setShowPopup(false)}
    selectedDate="2026-05-18"
    selectedTime="11:00"
  />
)}
    </section>
  );
}
