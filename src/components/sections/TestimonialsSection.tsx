"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedSection from "../ui/animated-section"
import FloatingElement from "../ui/floating-element"
import ScrollAnimation from "../ui/scroll-animation"

interface TestimonialProps {
  content: string;
  name: string;
  title: string;
  avatar: string;
}

function Testimonial({ content, name, title }: TestimonialProps) {
  return (
    <FloatingElement 
      type="float" 
      duration={4} 
      distance={8} 
      delay={Math.random() * 2} // Random delay for more natural effect
    >
      <motion.div 
        className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col h-full relative"
        whileHover={{ scale: 1.03, boxShadow: "var(--shadow-lg)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div 
          className="absolute -top-3 -left-3 text-4xl text-primary"
          // style={{color: "var(--primary-light)"}}
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          "
        </motion.div>
        <div className="mb-6 flex-grow">
          <motion.p 
            className="text-base" 
            style={{color: "var(--text-medium)"}}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {content}
          </motion.p>
        </div>
        <motion.div 
          className="flex items-center gap-3 pt-4 border-t border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Image
              src={avatar}
              alt={`Avatar ${name}`}
              width={48}
              height={48}
              className="rounded-full border-2" 
              style={{borderColor: "var(--primary-light)"}}
            />
          </motion.div> */}
          <div>
            <motion.h4 
              className="font-bold text-base" 
              style={{color: "var(--text-dark)"}}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {name}
            </motion.h4>
            <motion.p 
              className="text-sm" 
              style={{color: "var(--text-medium)"}}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </FloatingElement>
  );
}

export default function TestimonialsSection() {
  const testimonials = [
    {
      content: "Berkat bantuan jokey.it, saya berhasil membuat website toko online yang menarik dan mudah diakses. Proses pembuatannya cepat dan komunikasinya lancar.",
      name: "Budi Santoso",
      title: "Pengusaha",
      avatar: "/placeholder.svg?height=60&width=60"
    },
    {
      content: "Komunitas yang saya dirikan menjadi lebih aktif dan bersemangat setelah saya menggunakan fitur-fitur yang disediakan oleh jokey.it. Recommended banget deh",
      name: "Dimas",
      title: "Pendiri Komunitas",
      avatar: "/placeholder.svg?height=60&width=60"
    },
    {
      content: "Website yg dibuat oleh jokey.it sangat menarik dan mudah diakses. Proses pembuatannya cepat dan komunikasinya lancar. Terimakasih jokey.it!",
      name: "Dian Permata",
      title: "Event Organizer",
      avatar: "/placeholder.svg?height=60&width=60"
    },
    {
      content: "Sebagai startup, kami sangat terbantu dengan layanan jokey.it yang terjangkau namun berkualitas. Website kami kini lebih profesional dan membantu menarik investor.",
      name: "Reza Mahendra",
      title: "Pendiri startup",
      avatar: "/placeholder.svg?height=60&width=60"
    }
  ];

  return (
    <section className="section bg-white relative overflow-hidden">
      <motion.div 
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-light opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary-light opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.25, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <AnimatedSection direction="up" delay={0.1} className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto mb-12">
          <motion.div 
            className="section-tag"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Testimonial
          </motion.div>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Apa Kata Klien Kami
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Dengarkan pengalaman mereka bekerja sama dengan jokey.it dan bagaimana solusi digital kami membantu bisnis mereka berkembang
          </motion.p>
        </AnimatedSection>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              content={testimonial.content}
              name={testimonial.name}
              title={testimonial.title}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
        
        {/* <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="#contact" 
            className="btn btn-outline inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span>Lihat Semua Testimonial</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </motion.a>
        </motion.div> */}
      </div>
    </section>
  )
}
