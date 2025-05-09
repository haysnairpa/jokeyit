"use client"

import Link from "next/link"
import Footer from "@/components/sections/Footer"
import PageTransition from "@/components/ui/page-transition"

// Import custom header for project page
import ProjectHeader from "@/components/sections/project/ProjectHeader"

// Import section components
import HeroSection from "@/components/sections/project/HeroSection"
import AdvantagesSection from "@/components/sections/project/AdvantagesSection"
import ProjectTypesSection from "@/components/sections/project/ProjectTypesSection"
import PricingSection from "@/components/sections/project/PricingSection"
import TestimonialsSection from "@/components/sections/project/TestimonialsSection"
import FAQSection from "@/components/sections/project/FAQSection"
import CTASection from "@/components/sections/project/CTASection"

export default function AnotherProject() {
  // WhatsApp link with pre-filled message
  const whatsappLink = "https://wa.me/6287763287548?text=Halo%20saya%20ingin%20konsultasi%20tentang%20project%20coding";
  
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <ProjectHeader />
        <main className="flex-1">
          <HeroSection whatsappLink={whatsappLink} />
          <AdvantagesSection id="advantages" />
          <ProjectTypesSection id="projects" />
          <PricingSection id="pricing" />
          {/* <TestimonialsSection id="testimonials" /> */}
          <FAQSection id="faq" />
          <CTASection whatsappLink={whatsappLink} />
        </main>
        <Footer />
      </div>
    </PageTransition>
  )
}
