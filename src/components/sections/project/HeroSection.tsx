"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import AnimatedSection from "@/components/ui/animated-section"

interface HeroSectionProps {
  whatsappLink: string;
}

export default function HeroSection({ whatsappLink }: HeroSectionProps) {
  return (
    <section className="hero-section" id="hero">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left" className="hero-content">
            <motion.span 
              className="section-tag"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Bantuan Project Coding
            </motion.span>
            <motion.h1 
              className="hero-title text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Butuh Bantuan Pengerjaan Project Coding?
            </motion.h1>
            <motion.p 
              className="text-lg mb-8 text-text-medium max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Kami bantu kamu selesaikan project apapun terkait coding atau software development. Dari tugas kuliah, ide pribadi, sampai eksperimen seru—tim kami siap bantu.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary inline-flex items-center gap-2"
              >
                <span>Konsultasi Sekarang via WhatsApp</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </a>
            </motion.div>
          </AnimatedSection>
          
          <AnimatedSection direction="right" className="hidden md:block relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative z-10"
            >
              <Image
                src="/herosec.png" // You'll need to add this image
                alt="Coding Project Illustration"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary-light rounded-full filter blur-3xl opacity-30 z-0"></div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
