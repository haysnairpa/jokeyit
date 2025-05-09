"use client"

import Header from "@/components/sections/Header"
import HeroSection from "@/components/sections/HeroSection"
import ServicesSection from "@/components/sections/ServicesSection"
import PortfolioSection from "@/components/sections/PortfolioSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import ProcessSection from "@/components/sections/ProcessSection"
import FAQSection from "@/components/sections/FAQSection"
import CTASection from "@/components/sections/CTASection"
import Footer from "@/components/sections/Footer"
import PageTransition from "@/components/ui/page-transition"

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <ServicesSection />
          {/* <PortfolioSection /> */}
          <TestimonialsSection />
          <ProcessSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </PageTransition>
  )
}