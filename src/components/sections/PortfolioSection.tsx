"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import AnimatedSection from "../ui/animated-section"
import AnimatedList from "../ui/animated-list"
import ScrollAnimation from "../ui/scroll-animation"

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="section bg-background-light">
      <div className="container px-4 md:px-6">
        <AnimatedSection direction="up" delay={0.1} className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto mb-12">
          <motion.div 
            className="section-tag"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Works
          </motion.div>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Karya Terbaik Kami
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Lihat beberapa proyek yang telah kami kerjakan untuk klien dari berbagai industri dan bagaimana kami membantu mereka mencapai tujuan digital mereka.
          </motion.p>
        </AnimatedSection>
        
        <div className="mb-10">
          <Tabs defaultValue="all" className="w-full">
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <TabsList className="bg-white shadow-sm border border-gray-100 p-1 rounded-full">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <TabsTrigger value="all" className="rounded-full px-6 py-2 text-sm font-medium transition-all">Semua</TabsTrigger>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <TabsTrigger value="website" className="rounded-full px-6 py-2 text-sm font-medium transition-all">Website</TabsTrigger>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <TabsTrigger value="mobile" className="rounded-full px-6 py-2 text-sm font-medium transition-all">Aplikasi Mobile</TabsTrigger>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <TabsTrigger value="system" className="rounded-full px-6 py-2 text-sm font-medium transition-all">Sistem Internal</TabsTrigger>
                  </motion.div>
                </TabsList>
              </motion.div>
            </motion.div>
            
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {/* Portfolio Items */}
                <PortfolioItem 
                  image="/placeholder.svg?height=400&width=600"
                  title="Toko Online Batik Nusantara"
                  category="E-commerce"
                  description="Website e-commerce modern dengan fitur lengkap untuk UMKM batik tradisional"
                />
                
                <PortfolioItem 
                  image="/placeholder.svg?height=400&width=600"
                  title="Aplikasi Manajemen Klinik"
                  category="Sistem Internal"
                  description="Sistem manajemen klinik terintegrasi dengan fitur pendaftaran, rekam medis, dan inventaris"
                />
                
                <PortfolioItem 
                  image="/placeholder.svg?height=400&width=600"
                  title="Aplikasi Delivery Makanan Lokal"
                  category="Mobile App"
                  description="Aplikasi mobile untuk layanan pengantaran makanan lokal dengan fitur tracking real-time"
                />
                
                <PortfolioItem 
                  image="/placeholder.svg?height=400&width=600"
                  title="Website Komunitas Fotografi"
                  category="Community"
                  description="Platform komunitas untuk berbagi karya fotografi dengan fitur galeri dan forum diskusi"
                />
                
                <PortfolioItem 
                  image="/placeholder.svg?height=400&width=600"
                  title="Landing Page Festival Musik"
                  category="Event"
                  description="Landing page interaktif untuk festival musik dengan fitur pembelian tiket online"
                />
                
                <PortfolioItem 
                  image="/placeholder.svg?height=400&width=600"
                  title="Sistem Manajemen Inventaris"
                  category="System"
                  description="Sistem inventaris berbasis cloud untuk manajemen stok dan aset perusahaan"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="website" className="mt-6">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <PortfolioItem 
                  image="/placeholder.svg?height=400&width=600"
                  title="Toko Online Batik Nusantara"
                  category="E-commerce"
                  description="Website e-commerce modern dengan fitur lengkap untuk UMKM batik tradisional"
                />
                
                <PortfolioItem 
                  image="/placeholder.svg?height=400&width=600"
                  title="Website Komunitas Fotografi"
                  category="Community"
                  description="Platform komunitas untuk berbagi karya fotografi dengan fitur galeri dan forum diskusi"
                />
              </div>
            </TabsContent>
            
            {/* Other tabs content would be similar */}
            <TabsContent value="mobile" className="mt-6">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <PortfolioItem 
                  image="/placeholder.svg?height=400&width=600"
                  title="Aplikasi Delivery Makanan Lokal"
                  category="Mobile App"
                  description="Aplikasi mobile untuk layanan pengantaran makanan lokal dengan fitur tracking real-time"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="system" className="mt-6">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <PortfolioItem 
                  image="/placeholder.svg?height=400&width=600"
                  title="Aplikasi Manajemen Klinik"
                  category="Sistem Internal"
                  description="Sistem manajemen klinik terintegrasi dengan fitur pendaftaran, rekam medis, dan inventaris"
                />
                
                <PortfolioItem 
                  image="/placeholder.svg?height=400&width=600"
                  title="Sistem Manajemen Inventaris"
                  category="System"
                  description="Sistem inventaris berbasis cloud untuk manajemen stok dan aset perusahaan"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <motion.div 
          className="flex justify-center mt-12"
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
            <span>Lihat Semua Proyek</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

interface PortfolioItemProps {
  image: string;
  title: string;
  category: string;
  description: string;
}

function PortfolioItem({ image, title, category, description }: PortfolioItemProps) {
  return (
    <ScrollAnimation direction="up" duration={0.6}>
      <motion.div 
        className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-lg"
        whileHover={{ y: -10, boxShadow: "var(--shadow-lg)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 z-10"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
          <Image
            src={image}
            alt={title}
            width={600}
            height={450}
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <motion.div 
            className="absolute bottom-0 left-0 right-0 p-4 z-20"
            initial={{ y: 100 }}
            whileHover={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.a 
              href="#" 
              className="inline-flex items-center text-white font-medium"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>Lihat Detail</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="ml-1 h-4 w-4" />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
        <div className="p-5">
          <motion.div 
            className="flex items-center gap-2 mb-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="inline-block px-2 py-1 text-xs font-medium rounded-full" 
              style={{backgroundColor: "var(--primary-light)", color: "var(--primary-color)"}}
              whileHover={{ scale: 1.1, backgroundColor: "var(--primary-color)", color: "white" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {category}
            </motion.span>
          </motion.div>
          <motion.h3 
            className="font-bold text-lg mb-1" 
            style={{color: "var(--text-dark)"}}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h3>
          <motion.p 
            className="text-sm" 
            style={{color: "var(--text-medium)"}}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        </div>
      </motion.div>
    </ScrollAnimation>
  )
}
