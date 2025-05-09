"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, MessageSquare } from "lucide-react"
import AnimatedSection from "@/components/ui/animated-section"
import ScrollAnimation from "@/components/ui/scroll-animation"

interface FAQItemProps {
  number: string;
  question: string;
  answer: React.ReactNode;
}

function FAQItem({ number, question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: Number(number) * 0.1 }}
      viewport={{ once: true }}
      className="border-b border-gray-100 last:border-none"
    >
      <div className="px-6 py-5">
        <div 
          className="flex items-center justify-between cursor-pointer group"
          onClick={() => setIsOpen(!isOpen)}
          style={{color: "var(--text-dark)"}}
        >
          <div className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
            <motion.div 
              className="w-8 h-8 rounded-full bg-primary-light/20 flex items-center justify-center flex-shrink-0"
              animate={isOpen ? { scale: 1.1, backgroundColor: "rgba(var(--primary-light-rgb), 0.5)" } : { scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-sm font-bold text-primary">{number}</span>
            </motion.div>
            <span className="text-base font-medium">{question}</span>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="h-4 w-4 shrink-0" />
          </motion.div>
        </div>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="ml-11 pt-3 pb-2 text-base" style={{color: "var(--text-medium)"}}>
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

interface FAQSectionProps {
  id?: string;
}

export default function FAQSection({ id = "faq" }: FAQSectionProps) {
  // FAQ data
  const faqItems = [
    {
      number: "01",
      question: "Apakah saya harus kasih brief dulu?",
      answer: "Ya, brief singkat sangat membantu kami memahami kebutuhan Anda. Tapi jangan khawatir, kami akan membantu mengarahkan jika Anda masih bingung dengan detail teknis yang dibutuhkan."
    },
    {
      number: "02",
      question: "Bisa bantu project pakai stack tertentu?",
      answer: "Tentu! Tim kami berpengalaman dengan berbagai teknologi seperti React, Laravel, GO, Express, Flutter, dan banyak lagi. Jika ada stack spesifik yang diinginkan, silakan diskusikan dengan kami."
    },
    {
      number: "03",
      question: "Berapa lama pengerjaannya?",
      answer: "Durasi pengerjaan tergantung kompleksitas project. Project sederhana bisa selesai dalam 3-7 hari, sementara yang lebih kompleks mungkin membutuhkan 2-4 minggu. Kami selalu berusaha menyesuaikan dengan deadline Anda."
    },
    {
      number: "04",
      question: "Bisa minta revisi setelah selesai?",
      answer: "Tentu saja! Kami menyediakan 2-3 kali revisi gratis (tergantung kompleksitas project). Revisi tambahan juga tersedia dengan biaya yang sangat terjangkau."
    },
    {
      number: "05",
      question: "Gimana sistem pembayarannya?",
      answer: "Kami menerapkan sistem DP 50% di awal untuk memulai pengerjaan, dan 50% setelah project selesai. Pembayaran dapat dilakukan via transfer bank atau e-wallet populer di Indonesia."
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
            Pertanyaan Umum
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Beberapa pertanyaan yang sering ditanyakan oleh klien kami
          </motion.p>
        </AnimatedSection>
        
        <ScrollAnimation direction="up" duration={0.6}>
          <div className="max-w-3xl mx-auto">
            <div className="w-full divide-y divide-gray-100">
              {faqItems.map((item) => (
                <FAQItem 
                  key={item.number}
                  number={item.number}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>
        </ScrollAnimation>
        
        {/* <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="https://wa.me/6287763287548?text=Halo%20saya%20ingin%20konsultasi%20tentang%20project%20coding"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline inline-flex items-center justify-center gap-2 px-8 py-3 min-w-[220px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span>Ada pertanyaan lain?</span>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <MessageSquare className="h-4 w-4" />
            </motion.div>
          </motion.a>
        </motion.div> */}
      </div>
    </section>
  )
}
