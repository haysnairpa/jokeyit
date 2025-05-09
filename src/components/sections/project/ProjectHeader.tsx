"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AlignJustify, X } from "lucide-react"
import { motion } from "framer-motion"

export default function ProjectHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Link ke halaman utama
  const homeLink = "/";
  
  // Link ke section di halaman another-project
  const projectSections = [
    { name: "Layanan", href: "#advantages" },
    { name: "Jenis Project", href: "#projects" },
    { name: "Harga", href: "#pricing" },
    // { name: "Testimoni", href: "#testimonials" },
    { name: "FAQ", href: "#faq" }
  ];
  
  return (
    <header className="relative z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href={homeLink} className="flex items-center space-x-3">
            <Image src="/jokeyit.png" alt="jokey.it logo" width={40} height={40} className="h-10 w-auto" />
            {/* <span className="font-bold text-xl" style={{color: "var(--primary-color)"}}>jokey.it</span> */}
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {projectSections.map((section) => (
            <Link key={section.name} href={section.href} className="nav-link">
              {section.name}
            </Link>
          ))}
        </nav>
        
        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a 
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Halo%20saya%20ingin%20konsultasi%20tentang%20project%20coding`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hubungi Kami
            </motion.button>
          </a>
        </div>
        
        <motion.button 
          className="flex items-center justify-center md:!hidden p-2 rounded-md" 
          style={{backgroundColor: "var(--primary-light)"}}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            initial={false}
            animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {mobileMenuOpen ? (
              <X style={{color: "var(--primary-color)"}} className="h-6 w-6" />
            ) : (
              <AlignJustify style={{color: "var(--primary-color)"}} className="h-6 w-6" />
            )}
          </motion.div>
          <span className="sr-only">Menu</span>
        </motion.button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <motion.div 
        className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50 border-t overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: mobileMenuOpen ? "auto" : 0,
          opacity: mobileMenuOpen ? 1 : 0
        }}
        transition={{ 
          duration: 0.3, 
          ease: "easeInOut"
        }}
      >
        <div className="container py-4 space-y-4">
          {projectSections.map((section, index) => (
            <motion.div
              key={section.name}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: mobileMenuOpen ? 0 : -20, opacity: mobileMenuOpen ? 1 : 0 }}
              transition={{ 
                duration: 0.3, 
                delay: mobileMenuOpen ? 0.1 + (index * 0.05) : 0,
                ease: "easeOut"
              }}
            >
              <Link 
                href={section.href} 
                className="block px-4 py-2 text-base hover:bg-gray-50 rounded-md" 
                onClick={toggleMobileMenu}
              >
                {section.name}
              </Link>
            </motion.div>
          ))}
          <motion.div 
            className="pt-2 border-t border-gray-200"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: mobileMenuOpen ? 0 : 20, opacity: mobileMenuOpen ? 1 : 0 }}
            transition={{ 
              duration: 0.3, 
              delay: mobileMenuOpen ? 0.3 : 0,
              ease: "easeOut"
            }}
          >
            <a 
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Halo%20saya%20ingin%20konsultasi%20tentang%20project%20coding`}
              target="_blank"
              rel="noopener noreferrer"
              className="block" 
              onClick={toggleMobileMenu}
            >
              <motion.button 
                className="w-full btn btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Hubungi Kami
              </motion.button>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </header>
  )
}
