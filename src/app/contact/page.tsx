"use client"

import React from "react"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import ContactSection from "@/components/sections/ContactSection"
import PageTransition from "@/components/ui/page-transition"
import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <section className="py-20 md:py-28 bg-white relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary-light opacity-10 rounded-full blur-3xl -translate-y-1/3 -translate-x-1/4"
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div 
              className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary-light opacity-10 rounded-full blur-3xl translate-y-1/3 translate-x-1/4"
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            
            <div className="container px-4 md:px-6 relative z-10">
              <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto mb-16">
                <motion.div 
                  className="section-tag"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Contact Us
                </motion.div>
                <motion.h1 
                  className="section-title"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Hubungi Kami
                </motion.h1>
                <motion.p 
                  className="section-subtitle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Kami siap membantu mewujudkan ide digital Anda. Hubungi kami melalui form di bawah atau melalui kontak yang tersedia.
                </motion.p>
              </div>
              
              <ContactSection />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  )
}
