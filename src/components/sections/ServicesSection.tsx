"use client"

import Link from "next/link"
import { ChevronRight, Code, Smartphone, Database, Layout, Wrench, Zap, MessageSquare, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedSection from "../ui/animated-section"
import AnimatedList from "../ui/animated-list"

export default function ServicesSection() {
  return (
    <section className="section bg-background-light" id="services">
      <div className="container px-4 md:px-6">
        <AnimatedSection direction="up" delay={0.1} className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto mb-12">
          <motion.div 
            className="section-tag"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.div>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Solusi Digital yang Tepat untuk Kebutuhan Anda
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Kami menyediakan berbagai layanan digital berkualitas tinggi untuk membantu bisnis Anda tumbuh dan berkembang di era digital yang kompetitif.
          </motion.p>
        </AnimatedSection>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatedSection direction="up" delay={0.1} duration={0.6}>
            <motion.div 
              className="service-card group"
              whileHover={{ y: -10, boxShadow: "var(--shadow-lg)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div 
                className="service-icon-container"
                whileHover={{ scale: 1.2, backgroundColor: "var(--primary-color)", color: "white" }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Code className="h-6 w-6" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3" style={{color: "var(--text-dark)"}}>Pembuatan Website</h3>
              <p style={{color: "var(--text-medium)", lineHeight: "1.6"}}>
                Website profesional dengan desain menarik dan responsif untuk bisnis, portfolio, atau toko online Anda.
              </p>
              {/* <div className="mt-6 pt-4 border-t border-gray-100">
                <motion.a 
                  href="#contact" 
                  className="inline-flex items-center font-medium" 
                  style={{color: "var(--primary-color)"}}
                  whileHover={{ x: 5 }}
                >
                  <span>Pelajari Lebih Lanjut</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </motion.div>
                </motion.a>
              </div> */}
            </motion.div>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.2} duration={0.6}>
            <motion.div 
              className="service-card group"
              whileHover={{ y: -10, boxShadow: "var(--shadow-lg)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div 
                className="service-icon-container"
                whileHover={{ scale: 1.2, backgroundColor: "var(--primary-color)", color: "white" }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Smartphone className="h-6 w-6" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3" style={{color: "var(--text-dark)"}}>Aplikasi Mobile</h3>
              <p style={{color: "var(--text-medium)", lineHeight: "1.6"}}>
                Aplikasi mobile yang intuitif dan fungsional untuk Android dan iOS, sesuai dengan kebutuhan bisnis Anda.
              </p>
              {/* <div className="mt-6 pt-4 border-t border-gray-100">
                <motion.a 
                  href="#contact" 
                  className="inline-flex items-center font-medium" 
                  style={{color: "var(--primary-color)"}}
                  whileHover={{ x: 5 }}
                >
                  <span>Pelajari Lebih Lanjut</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </motion.div>
                </motion.a>
              </div> */}
            </motion.div>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.3} duration={0.6}>
            <motion.div 
              className="service-card group"
              whileHover={{ y: -10, boxShadow: "var(--shadow-lg)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div 
                className="service-icon-container"
                whileHover={{ scale: 1.2, backgroundColor: "var(--primary-color)", color: "white" }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Database className="h-6 w-6" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3" style={{color: "var(--text-dark)"}}>Sistem Internal</h3>
              <p style={{color: "var(--text-medium)", lineHeight: "1.6"}}>
                Sistem manajemen internal untuk meningkatkan efisiensi operasional dan produktivitas tim Anda.
              </p>
              {/* <div className="mt-6 pt-4 border-t border-gray-100">
                <motion.a 
                  href="#contact" 
                  className="inline-flex items-center font-medium" 
                  style={{color: "var(--primary-color)"}}
                  whileHover={{ x: 5 }}
                >
                  <span>Pelajari Lebih Lanjut</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </motion.div>
                </motion.a>
              </div> */}
            </motion.div>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.4} duration={0.6}>
            <motion.div 
              className="service-card group"
              whileHover={{ y: -10, boxShadow: "var(--shadow-lg)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div 
                className="service-icon-container"
                whileHover={{ scale: 1.2, backgroundColor: "var(--primary-color)", color: "white" }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Layout className="h-6 w-6" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3" style={{color: "var(--text-dark)"}}>Landing Page Event</h3>
              <p style={{color: "var(--text-medium)", lineHeight: "1.6"}}>
                Landing page menarik untuk event, promosi, atau produk baru yang dapat meningkatkan konversi.
              </p>
              {/* <div className="mt-6 pt-4 border-t border-gray-100">
                <motion.a 
                  href="#contact" 
                  className="inline-flex items-center font-medium" 
                  style={{color: "var(--primary-color)"}}
                  whileHover={{ x: 5 }}
                >
                  <span>Pelajari Lebih Lanjut</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </motion.div>
                </motion.a>
              </div> */}
            </motion.div>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.5} duration={0.6}>
            <motion.div 
              className="service-card group"
              whileHover={{ y: -10, boxShadow: "var(--shadow-lg)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div 
                className="service-icon-container"
                whileHover={{ scale: 1.2, backgroundColor: "var(--primary-color)", color: "white" }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Wrench className="h-6 w-6" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3" style={{color: "var(--text-dark)"}}>Maintenance & Update</h3>
              <p style={{color: "var(--text-medium)", lineHeight: "1.6"}}>
                Layanan pemeliharaan dan pembaruan untuk memastikan website atau aplikasi Anda selalu up-to-date.
              </p>
              {/* <div className="mt-6 pt-4 border-t border-gray-100">
                <motion.a 
                  href="#contact" 
                  className="inline-flex items-center font-medium" 
                  style={{color: "var(--primary-color)"}}
                  whileHover={{ x: 5 }}
                >
                  <span>Pelajari Lebih Lanjut</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </motion.div>
                </motion.a>
              </div> */}
            </motion.div>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.6} duration={0.6}>
            <motion.div 
              className="service-card group"
              whileHover={{ y: -10, boxShadow: "var(--shadow-lg)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div 
                className="service-icon-container"
                whileHover={{ scale: 1.2, backgroundColor: "var(--primary-color)", color: "white" }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Zap className="h-6 w-6" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3" style={{color: "var(--text-dark)"}}>Optimasi Performa</h3>
              <p style={{color: "var(--text-medium)", lineHeight: "1.6"}}>
                Peningkatan kecepatan dan performa website atau aplikasi untuk pengalaman pengguna yang lebih baik.
              </p>
              {/* <div className="mt-6 pt-4 border-t border-gray-100">
                <motion.a 
                  href="#contact" 
                  className="inline-flex items-center font-medium" 
                  style={{color: "var(--primary-color)"}}
                  whileHover={{ x: 5 }}
                >
                  <span>Pelajari Lebih Lanjut</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </motion.div>
                </motion.a>
              </div> */}
            </motion.div>
          </AnimatedSection>
        </div>
        
        <AnimatedSection direction="up" delay={0.3} duration={0.7} type="spring">
          <motion.div 
            className="mt-16 bg-white rounded-2xl p-8 shadow-md border border-gray-100"
            whileHover={{ boxShadow: "var(--shadow-lg)" }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="flex flex-col items-center text-center space-y-6">
              <motion.div 
                className="flex items-center justify-center w-16 h-16 rounded-full" 
                style={{backgroundColor: "var(--primary-light)"}}
                whileHover={{ scale: 1.1, backgroundColor: "var(--primary-color)" }}
                animate={{ scale: [1, 1.05, 1], backgroundColor: ["var(--primary-light)", "var(--primary-light)", "var(--primary-light)"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <MessageSquare className="h-6 w-6" style={{color: "var(--primary-color)"}} />
              </motion.div>
              <motion.h3 
                className="text-2xl font-bold" 
                style={{color: "var(--text-dark)"}}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Butuh Layanan Khusus?
              </motion.h3>
              <motion.p 
                className="max-w-[600px]" 
                style={{color: "var(--text-medium)", lineHeight: "1.6"}}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Kami siap membantu kebutuhan digital spesifik untuk Anda. Ceritakan ide dan kebutuhan Anda, dan kami akan mewujudkannya dengan solusi yang tepat.
              </motion.p>
              <motion.a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Halo%20jokey.it%2C%20saya%20punya%20kebutuhan%20khusus%20untuk%20proyek%20saya`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span>Diskusikan Proyek Anda</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </motion.a>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}
