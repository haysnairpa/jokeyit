"use client"

import * as React from "react"
import { MessageSquare, ChevronDown, CheckCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import AnimatedSection from "../ui/animated-section"
import ScrollAnimation from "../ui/scroll-animation"

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

export default function FAQSection() {
  const faqItems = [
    {
      number: "01",
      question: "Berapa biaya untuk membuat website atau aplikasi?",
      answer: (
        <>
          <p>
          Biaya pembuatan website atau aplikasi sangat bergantung pada tingkat kompleksitas, fitur yang diinginkan, serta kebutuhan spesifik setiap proyek. Untuk mendapatkan penawaran yang paling sesuai dengan kebutuhan dan anggaran Anda, silakan hubungi kami langsung—kami siap membantu Anda menemukan solusi terbaik.
          </p>
          {/* <ul className="mt-3 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-primary mt-1" />
              <span><strong>Website Sederhana:</strong> Rp 3-8 juta</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-primary mt-1" />
              <span><strong>Website Kompleks:</strong> Rp 8-15 juta</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-primary mt-1" />
              <span><strong>Aplikasi & Sistem:</strong> Rp 15-50 juta</span>
            </li>
          </ul> */}
        </>
      )
    },
    {
      number: "02",
      question: "Berapa lama waktu yang dibutuhkan untuk menyelesaikan proyek?",
      answer: (
        <>
          <p>
            Durasi proyek sangat bergantung pada kompleksitas dan cakupan pekerjaan. Kami akan memberikan estimasi waktu yang lebih akurat setelah berdiskusi tentang kebutuhan spesifik proyek Anda.
          </p>
          {/* <ul className="mt-3 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-primary mt-1" />
              <span><strong>Website Landing Page:</strong> 1-2 minggu</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-primary mt-1" />
              <span><strong>Website Bisnis Lengkap:</strong> 3-4 minggu</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-primary mt-1" />
              <span><strong>Aplikasi & Sistem Kompleks:</strong> 1-3 bulan</span>
            </li>
          </ul> */}
        </>
      )
    },
    {
      number: "03",
      question: "Apakah ada biaya maintenance bulanan?",
      answer: "Kami menawarkan paket maintenance bulanan mulai dari Rp 300 ribu per bulan yang mencakup pembaruan keamanan, backup rutin, dan dukungan teknis. Namun, ini bersifat opsional dan Anda dapat memilih untuk mengelola website atau aplikasi secara mandiri setelah proyek selesai."
    },
    {
      number: "04",
      question: "Berapa kali revisi yang diperbolehkan?",
      answer: "Kami menyediakan hingga 3 kali revisi mayor dalam paket standar kami untuk memastikan hasil akhir sesuai dengan harapan Anda. Revisi minor seperti perubahan teks atau gambar tidak dibatasi selama proses pengembangan. Untuk revisi tambahan, kami menerapkan biaya berdasarkan kompleksitas perubahan."
    },
    {
      number: "05",
      question: "Apakah saya akan mendapatkan source code?",
      answer: "Ya, Anda akan mendapatkan akses penuh ke source code website atau aplikasi setelah pembayaran lunas. Ini termasuk semua file desain, kode, dan aset yang digunakan dalam proyek. Kami juga menyediakan dokumentasi dasar untuk membantu Anda memahami struktur proyek."
    },
    {
      number: "06",
      question: "Bagaimana proses pembayaran?",
      answer: "Kami menerapkan sistem pembayaran bertahap: 50% di awal sebagai uang muka untuk memulai proyek, dan 50% setelah proyek selesai dan Anda puas dengan hasilnya. Untuk proyek besar, kami dapat menyusun jadwal pembayaran yang lebih fleksibel dengan milestone yang jelas."
    }
  ];

  return (
    <section id="faq" className="section bg-white relative overflow-hidden">
      <motion.div 
        className="absolute top-0 left-0 w-1/4 h-1/4 bg-primary-light opacity-10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary-light opacity-10 rounded-full blur-3xl translate-y-1/3 translate-x-1/4"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <AnimatedSection direction="up" delay={0.1} className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            className="section-tag"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            FAQ
          </motion.div>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Pertanyaan yang Sering Diajukan
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Jawaban untuk pertanyaan umum tentang layanan kami untuk membantu Anda memahami proses kerja kami
          </motion.p>
        </AnimatedSection>
        
        <ScrollAnimation direction="up" duration={0.6}>
          <motion.div 
            className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            whileHover={{ boxShadow: "var(--shadow-lg)" }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
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
          </motion.div>
        </ScrollAnimation>
        
        {/* <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >1
          <motion.a 
            href="#contact" 
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
  );
}