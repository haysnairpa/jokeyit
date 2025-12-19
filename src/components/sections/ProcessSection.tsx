"use client"

import Link from "next/link"
import { MessageSquare, Layout, Code, Zap, CheckCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedSection from "../ui/animated-section"
import ScrollAnimation from "../ui/scroll-animation"

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  isRight?: boolean;
}

function ProcessStep({ number, title, description, icon, benefits, isRight = false }: ProcessStepProps) {
  return (
    <ScrollAnimation direction={isRight ? "right" : "left"} duration={0.6} distance={50}>
      <motion.div 
        className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col relative ${isRight ? 'md:mt-24' : ''}`}
        whileHover={{ y: -10, boxShadow: "var(--shadow-lg)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div 
          className="absolute -top-8 left-8 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-light text-primary text-2xl font-bold shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 10, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {number}
        </motion.div>
        <div className="ml-12 mb-6">
          <motion.h3 
            className="text-xl font-bold mb-1" 
            style={{color: "var(--text-dark)"}}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h3>
          <motion.div 
            className="w-16 h-1 bg-primary-light rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          ></motion.div>
        </div>
        <div className="flex gap-6">
          <div className="flex-shrink-0 flex items-start justify-center pt-1">
            <motion.div 
              className="w-12 h-12 rounded-full bg-primary-light/20 flex items-center justify-center"
              whileHover={{ scale: 1.2, backgroundColor: "var(--primary-light)" }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              {icon}
            </motion.div>
          </div>
          <div>
            <motion.p 
              className="text-base mb-4" 
              style={{color: "var(--text-medium)"}}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>
            <motion.ul 
              className="space-y-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </motion.div>
                  <span className="text-sm" style={{color: "var(--text-medium)"}}>{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </motion.div>
    </ScrollAnimation>
  );
}

export default function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: "Konsultasi",
      description: "Diskusikan kebutuhan dan ide Anda dengan tim kami melalui WhatsApp, email, atau meeting online. Kami akan mendengarkan dengan seksama untuk memahami visi Anda.",
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      benefits: ["Konsultasi gratis tanpa biaya", "Analisis kebutuhan mendetail"]
    },
    {
      number: 2,
      title: "Perencanaan",
      description: "Kami menyusun perencanaan dan timeline yang sesuai dengan kebutuhan Anda. Setiap detail direncanakan dengan matang untuk hasil optimal.",
      icon: <Layout className="h-6 w-6 text-primary" />,
      benefits: ["Proposal detail dan transparan", "Rincian tugas dan milestone proyek"]
    },
    {
      number: 3,
      title: "Pengembangan",
      description: "Tim kami mengerjakan proyek dengan standar kualitas tinggi dan update rutin. Anda akan mendapatkan laporan progres secara berkala.",
      icon: <Code className="h-6 w-6 text-primary" />,
      benefits: ["Teknologi terkini dan terbaik", "Testing menyeluruh"]
    },
    {
      number: 4,
      title: "Peluncuran",
      description: "Memastikan transisi yang mulus dan lancar dari tahap pengembangan ke tahap produksi.",
      icon: <Zap className="h-6 w-6 text-primary" />,
      benefits: ["Produksi tepat sesuai rencana", "Panduan atau dokumentasi operasional"]
    }
  ];

  return (
    <section id="process" className="section bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <motion.div 
        className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary-light opacity-10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-primary-light opacity-10 rounded-full blur-3xl translate-y-1/3 translate-x-1/4"
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
            How it Works
          </motion.div>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Proses Mudah, Hasil Maksimal
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Proses sederhana dan transparan untuk mewujudkan proyek digital Anda dengan hasil yang memuaskan
          </motion.p>
        </AnimatedSection>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <motion.div 
            className="absolute top-24 left-1/2 h-[calc(100%-120px)] w-1 bg-gradient-to-b from-primary to-primary-light transform -translate-x-1/2 hidden md:block"
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: "calc(100% - 120px)", opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.div>
          
          <div className="grid gap-12 md:gap-16 md:grid-cols-2 relative z-10">
            {steps.map((step, index) => (
              <ProcessStep 
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
                benefits={step.benefits}
                isRight={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
        
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Halo%20jokey.it%2C%20saya%20ingin%20memulai%20proyek`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary inline-flex items-center justify-center gap-2 px-8 py-3 min-w-[220px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span>Mulai Proyek Anda</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
