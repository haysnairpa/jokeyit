"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import AnimatedSection from "@/components/ui/animated-section"

interface AdvantagesSectionProps {
  id?: string;
}

export default function AdvantagesSection({ id = "advantages" }: AdvantagesSectionProps) {
  // Advantages data
  const advantages = [
    {
      title: "Tim Berpengalaman",
      description: "Developer dengan pengalaman di berbagai stack teknologi populer."
    },
    {
      title: "Mulai dari Nol atau Revisi",
      description: "Bisa bantu dari awal atau melanjutkan/memperbaiki project yang sudah ada."
    },
    {
      title: "Konsultasi Gratis",
      description: "Diskusi kebutuhan dan estimasi tanpa biaya dan tanpa kewajiban."
    },
    {
      title: "Deadline Fleksibel",
      description: "Pengerjaan cepat dan bisa menyesuaikan dengan tenggat waktu Anda."
    },
    {
      title: "Revisi & Dokumentasi",
      description: "Termasuk beberapa kali revisi dan dokumentasi jika diperlukan."
    }
  ];

  return (
    <section className="section bg-background-light" id={id}>
      <div className="container px-4 md:px-6">
        <AnimatedSection direction="up" className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Kenapa Pilih Kami
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Kami fokus pada kualitas, komunikasi, dan hasil yang memuaskan untuk setiap project
          </motion.p>
        </AnimatedSection>
        
        <div className="relative">
          {/* Center image */}
          <div className="flex justify-center mb-12 lg:mb-0">
            <div className="relative z-20 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
              <AnimatedSection direction="up">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative"
                >
                  <Image
                    src="/whyus.png"
                    alt="Why Choose Us Illustration"
                    width={600}
                    height={600}
                    className="h-auto w-full max-w-[350px] md:max-w-[400px] lg:max-w-[450px] mx-auto"
                    priority
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-light rounded-full filter blur-3xl opacity-20 z-0"></div>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
          
          {/* Advantages list in a circular layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative z-10">
            {advantages.map((advantage, index) => {
              // Calculate different animation delays based on index
              const delay = 0.1 + (index * 0.1);
              
              return (
                <AnimatedSection key={index} direction={index % 2 === 0 ? "left" : "right"} delay={delay}>
                  <motion.div 
                    className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100"
                    whileHover={{ y: -5, boxShadow: "var(--shadow-md)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-text-dark">{advantage.title}</h3>
                      <p className="text-text-medium">{advantage.description}</p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
