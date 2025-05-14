"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ChevronDown, CheckCircle, Clock, Shield } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedSection from "../ui/animated-section"
import AnimatedList from "../ui/animated-list"

export default function HeroSection() {
  return (
    <section className="hero-section py-20 md:py-32 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center">
          <div className="flex flex-col items-center space-y-8 hero-content w-full">
            <AnimatedSection direction="down" delay={0.1}>
              <div className="inline-flex items-center rounded-full border border-primary-light bg-white px-4 py-2 text-sm font-medium" style={{color: "var(--primary-color)", boxShadow: "var(--shadow-sm)"}}>                
                <span className="flex h-2 w-2 rounded-full mr-2" style={{backgroundColor: "var(--primary-color)"}}></span>
                Solusi Digital Terbaik 2025
              </div>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.3}>
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none" style={{color: "var(--text-dark)", letterSpacing: "-0.02em"}}>
                  Transformasi Digital untuk <span style={{color: "var(--primary-color)", position: "relative"}}>
                    Kebutuhan Anda
                    <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                      <path d="M0 3C50 0.5 150 0.5 200 3C150 5.5 50 5.5 0 3Z" fill="var(--primary-light)"></path>
                    </svg>
                  </span>
                </h1>
                <p className="text-lg md:text-xl mx-auto max-w-[700px]" style={{color: "var(--text-medium)", lineHeight: "1.6"}}>
                Solusi digital terbaik untuk UMKM, mahasiswa, organisasi, komunitas, sampai startup. Kami membantu Anda membangun kehadiran online yang profesional dan efektif.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.5}>
              <div className="flex flex-col gap-4 sm:flex-row justify-center mt-4 w-full max-w-5xl mx-auto px-6">
                <motion.a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Halo%20jokey.it%2C%20saya%20tertarik%20dengan%20layanan%20Anda`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary inline-flex items-center justify-center gap-2 px-16 py-3 w-full sm:min-w-[350px] md:min-w-[600px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Mulai Sekarang</span>
                  <ChevronRight className="h-4 w-4" />
                </motion.a>
                <motion.a 
                  href="#services" 
                  className="btn btn-outline inline-flex items-center justify-center gap-2 px-16 py-3 w-full sm:min-w-[350px] md:min-w-[600px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Lihat Layanan</span>
                  <ChevronDown className="h-4 w-4" />
                </motion.a>
              </div>
            </AnimatedSection>
            <AnimatedList staggerDelay={0.1} direction="up" className="flex flex-wrap justify-center gap-6 pt-8 max-w-xl mx-auto">
              {[
                <div key="1" className="flex items-center space-x-2">
                  <motion.div 
                    className="flex items-center justify-center w-8 h-8 rounded-full" 
                    style={{backgroundColor: "var(--primary-light)"}}
                    whileHover={{ scale: 1.2, backgroundColor: "var(--primary-color)" }}
                  >
                    <CheckCircle className="h-4 w-4" style={{color: "var(--primary-color)"}} />
                  </motion.div>
                  <span style={{color: "var(--text-medium)", fontWeight: "500"}}>Gratis Konsultasi</span>
                </div>,
                <div key="2" className="flex items-center space-x-2">
                  <motion.div 
                    className="flex items-center justify-center w-8 h-8 rounded-full" 
                    style={{backgroundColor: "var(--primary-light)"}}
                    whileHover={{ scale: 1.2, backgroundColor: "var(--primary-color)" }}
                  >
                    <Clock className="h-4 w-4" style={{color: "var(--primary-color)"}} />
                  </motion.div>
                  <span style={{color: "var(--text-medium)", fontWeight: "500"}}>Support 24/7</span>
                </div>,
                <div key="3" className="flex items-center space-x-2">
                  <motion.div 
                    className="flex items-center justify-center w-8 h-8 rounded-full" 
                    style={{backgroundColor: "var(--primary-light)"}}
                    whileHover={{ scale: 1.2, backgroundColor: "var(--primary-color)" }}
                  >
                    <Shield className="h-4 w-4" style={{color: "var(--primary-color)"}} />
                  </motion.div>
                  <span style={{color: "var(--text-medium)", fontWeight: "500"}}>Garansi 100%</span>
                </div>
              ]}
            </AnimatedList>
          </div>
          
          {/* Background decoration elements */}
          <motion.div 
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" 
            style={{background: "radial-gradient(circle, var(--primary-light) 0%, rgba(255,255,255,0) 70%)", zIndex: -1}}
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10" 
            style={{background: "radial-gradient(circle, var(--primary-light) 0%, rgba(255,255,255,0) 70%)", zIndex: -1}}
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.12, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] rounded-full opacity-5" 
            style={{background: "radial-gradient(circle, var(--primary-light) 0%, rgba(255,255,255,0) 70%)", zIndex: -1}}
            animate={{ scale: [1, 1.05, 1], opacity: [0.05, 0.08, 0.05] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </div>
      </div>
    </section>
  )
}
