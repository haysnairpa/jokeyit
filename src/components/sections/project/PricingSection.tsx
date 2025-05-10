"use client"

import { motion } from "framer-motion"
import { Calendar, CheckCircle, FileCode } from "lucide-react"
import AnimatedSection from "@/components/ui/animated-section"

interface PricingSectionProps {
  id?: string;
}

export default function PricingSection({ id = "pricing" }: PricingSectionProps) {
  return (
    <section className="section bg-background-light" id={id}>
      <div className="container px-4 md:px-6">
        <AnimatedSection direction="up" className="text-center mb-12">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Harga Terjangkau
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Solusi coding berkualitas untuk semua budget mahasiswa
          </motion.p>
        </AnimatedSection>
        
        <AnimatedSection direction="up" delay={0.2}>
          <motion.div 
            className="bg-white rounded-2xl p-6 md:p-12 shadow-md border border-gray-100 max-w-3xl mx-auto text-center"
            whileHover={{ boxShadow: "var(--shadow-lg)" }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-2"
            >
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-baseline">
                  <span className="text-lg font-medium text-text-medium">Mulai dari</span>
                  <span className="text-5xl md:text-6xl font-bold text-primary ml-2">Rp. 99rb</span>
                </div>
              </div>
            </motion.div>
            
            {/* <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <p className="text-lg text-text-medium mb-2">
                Harga menyesuaikan budget & kebutuhan kamu. Bayar sesuai kompleksitas!
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mt-4">
                <div className="px-3 py-1 bg-primary/10 rounded-full">
                  <span className="text-sm font-medium text-primary">Tugas Kuliah: 99rb - 299rb</span>
                </div>
                <div className="px-3 py-1 bg-primary/10 rounded-full">
                  <span className="text-sm font-medium text-primary">Project Sedang: 300rb - 999rb</span>
                </div>
                <div className="px-3 py-1 bg-primary/10 rounded-full">
                  <span className="text-sm font-medium text-primary">Project Besar: 1jt+</span>
                </div>
              </div>
              <p className="text-sm text-text-light mt-4 italic">
                Konsultasi awal selalu GRATIS! Dapatkan penawaran terbaik untuk projectmu.
              </p>
            </motion.div> */}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col gap-4 pt-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center justify-center gap-2 p-3 bg-primary-light rounded-lg">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Deadline Fleksibel</span>
                </div>
                
                <div className="flex items-center justify-center gap-2 p-3 bg-primary-light rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Revisi Gratis</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-2 p-3 bg-primary-light rounded-lg max-w-[200px] mx-auto">
                <FileCode className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Bantuan 24/7</span>
              </div>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}
