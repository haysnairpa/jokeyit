"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSection from "@/components/ui/animated-section"

interface TestimonialsSectionProps {
  id?: string;
}

export default function TestimonialsSection({ id = "testimonials" }: TestimonialsSectionProps) {
  // Testimonial data
  const testimonials = [
    {
      name: "Arif R.",
      avatar: "/avatars/avatar-1.png", // You'll need to add these images
      project: "Sistem Booking Motor",
      text: "Saya pesan sistem booking motor untuk tugas UTS, hasilnya melebihi ekspektasi. Cepat & bisa revisi sesuai dosen."
    },
    {
      name: "Dina K.",
      avatar: "/avatars/avatar-2.png",
      project: "Website Portfolio",
      text: "Dibuatkan website portfolio untuk tugas akhir, desainnya keren dan responsif. Dosen langsung approve tanpa revisi."
    },
    {
      name: "Budi S.",
      avatar: "/avatars/avatar-3.png",
      project: "Aplikasi Android",
      text: "Aplikasi android untuk skripsi selesai tepat waktu. Fitur lengkap sesuai permintaan dan dokumentasinya detail."
    },
    {
      name: "Putri A.",
      avatar: "/avatars/avatar-4.png",
      project: "Sistem Manajemen Inventaris",
      text: "Project manajemen inventaris untuk UAS berjalan lancar. Komunikasinya enak dan bisa disesuaikan dengan kebutuhan."
    }
  ];

  return (
    <section className="section" id={id}>
      <div className="container px-4 md:px-6">
        <AnimatedSection direction="up" className="text-center mb-16">
          <motion.div 
            className="section-tag"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Testimoni Klien
          </motion.div>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Apa Kata Mereka?
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Pengalaman nyata dari mahasiswa dan klien yang telah menggunakan layanan kami
          </motion.p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} direction="up" delay={0.1 * index} duration={0.6}>
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col"
                whileHover={{ y: -5, boxShadow: "var(--shadow-md)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center overflow-hidden">
                    {testimonial.avatar ? (
                      <Image 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        width={48} 
                        height={48} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-primary font-bold">{testimonial.name.charAt(0)}</span>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-text-dark">{testimonial.name}</h4>
                    <p className="text-sm text-text-medium">{testimonial.project}</p>
                  </div>
                </div>
                <p className="text-text-medium italic flex-grow">"{testimonial.text}"</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
