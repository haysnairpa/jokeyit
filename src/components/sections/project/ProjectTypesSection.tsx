"use client"

import { motion } from "framer-motion"
import { 
  Code, 
  Smartphone, 
  Laptop, 
  Database, 
  Zap, 
  MessageSquare, 
  FileCode,
  Users
} from "lucide-react"
import AnimatedSection from "@/components/ui/animated-section"

interface ProjectTypesSectionProps {
  id?: string;
}

export default function ProjectTypesSection({ id = "projects" }: ProjectTypesSectionProps) {
  // Project types data
  const projectTypes = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Website Tugas Kuliah",
      description: "Dari landing page sederhana hingga web app kompleks untuk tugas atau skripsi."
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: "Fullstack App",
      description: "Aplikasi lengkap dengan MERN, Laravel, atau stack pilihan Anda."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App",
      description: "Aplikasi mobile dengan Flutter, React Native untuk berbagai kebutuhan."
    },
    {
      icon: <FileCode className="h-8 w-8" />,
      title: "Desktop App",
      description: "Aplikasi desktop dengan Electron, Python, C# sesuai kebutuhan."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "API & Backend",
      description: "Layanan backend dengan Node.js, Express, Laravel, Firebase, dll."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Project Coding Pribadi",
      description: "Bikin app buat pacar? Proyek iseng? Bisa!"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Otomasi",
      description: "Script Python, bot, tool bantu, dan solusi otomasi lainnya."
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Lainnya",
      description: "Ga ada di list ini? Lanjut ke WA aja, obrolin bareng-bareng!"
    }
  ];

  return (
    <section className="section" id={id}>
      <div className="container px-4 md:px-6">
        <AnimatedSection direction="up" className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Jenis Project yang Bisa Kami Bantu
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Dari tugas kuliah sederhana hingga aplikasi kompleks, kami siap membantu
          </motion.p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectTypes.map((project, index) => (
            <AnimatedSection key={index} direction="up" delay={0.05 * index} duration={0.5}>
              <motion.div 
                className="service-card h-full flex flex-col"
                whileHover={{ y: -10, boxShadow: "var(--shadow-lg)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="service-icon-container mb-4"
                  whileHover={{ scale: 1.2, backgroundColor: "var(--primary-color)", color: "white" }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {project.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-text-dark">{project.title}</h3>
                <p className="text-text-medium flex-grow">{project.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
