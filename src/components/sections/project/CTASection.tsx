"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import AnimatedSection from "@/components/ui/animated-section"

interface CTASectionProps {
  whatsappLink: string;
}

export default function CTASection({ whatsappLink }: CTASectionProps) {
  return (
    <section className="section" id="cta">
      <div className="container px-4 md:px-6">
        <AnimatedSection direction="up" delay={0.2} duration={0.7} type="spring">
          <div 
            // className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100"
            // whileHover={{ boxShadow: "var(--shadow-lg)" }}
            // transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              {/* Image Side */}
              <div className="relative order-2 lg:order-1 h-full">
                <div className="relative z-10 p-6 lg:p-0 flex justify-center lg:justify-start items-center h-full">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <Image
                      src="/consult.png"
                      alt="Konsultasi Project"
                      width={500}
                      height={500}
                      className="h-auto w-full max-w-md lg:max-w-full"
                      priority
                    />
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary-light rounded-full filter blur-3xl opacity-20"></div>
                  </motion.div>
                </div>
              </div>
              
              {/* Text Side */}
              <div className="order-1 lg:order-2 p-8 md:p-12 text-left lg:pr-16">
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold mb-4" 
                  style={{color: "var(--text-dark)"}}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Masih Bingung? Konsultasi Aja Dulu Gratis.
                </motion.h3>
                
                <motion.p 
                  className="text-lg mb-8" 
                  style={{color: "var(--text-medium)", lineHeight: "1.6"}}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Ceritakan kebutuhan project Anda dan dapatkan estimasi harga tanpa biaya dan tanpa kewajiban. Kami siap membantu mewujudkan ide Anda menjadi kenyataan.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary inline-flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span>Konsultasi Sekarang via WhatsApp</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
