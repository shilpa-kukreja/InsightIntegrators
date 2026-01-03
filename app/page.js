"use client";

import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Footer from "./components/Footer";
import AboutUs from "./components/About-us";
import ReviewsSection from "./components/ReviewsSection";
import FAQSection from "./components/FAQSection";
import ProblemAwarenessSection from "./components/Problemawarenesssection";
import CoreServicesSection from "./components/CoreServices";
import TrustSection from "./components/Insight";
import EngagementProcessSection from "./components/EngagementProcess";
import LeadMagnetSection from "./components/LeadMagnet";
import ContactPopup from "./components/ContactPopup";
import { useState } from "react";



export default function HomePage() {
   const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <>
      <Header />
      <HeroBanner />
      <AboutUs />
      <ProblemAwarenessSection/>
      <CoreServicesSection/>
      <TrustSection/>
      <EngagementProcessSection/>
     <LeadMagnetSection onOpenPopup={() => setIsPopupOpen(true)} />

       {isPopupOpen && <ContactPopup onClose={() => setIsPopupOpen(false)} />}
      {/* <WhyChooseUs />
      <Services />
      <Stats /> */}
      <ReviewsSection />
      <FAQSection />
      <Footer onOpenPopup={() => setIsPopupOpen(true)}/>
    </>
  );
}
