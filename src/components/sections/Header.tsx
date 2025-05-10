"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AlignJustify, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header className="relative z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/jokeyit.png" alt="jokey.it logo" width={40} height={40} className="h-10 w-auto" />
            {/* <span className="font-bold text-xl" style={{color: "var(--primary-color)"}}>jokey.it</span> */}
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#services" className="nav-link">
            Layanan
          </Link>
          <Link href="#process" className="nav-link">
            Cara Kerja
          </Link>
          <Link href="#faq" className="nav-link">
            FAQ
          </Link>
        </nav>
        
        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <motion.button 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hubungi Kami
            </motion.button>
          </Link>
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
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: mobileMenuOpen ? 0 : -20, opacity: mobileMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.3, delay: mobileMenuOpen ? 0.1 : 0, ease: "easeOut" }}
          >
            <Link 
              href="#services" 
              className="block px-4 py-2 text-base hover:bg-gray-50 rounded-md" 
              onClick={toggleMobileMenu}
            >
              Layanan
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: mobileMenuOpen ? 0 : -20, opacity: mobileMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.3, delay: mobileMenuOpen ? 0.15 : 0, ease: "easeOut" }}
          >
            <Link 
              href="#portfolio" 
              className="block px-4 py-2 text-base hover:bg-gray-50 rounded-md" 
              onClick={toggleMobileMenu}
            >
              Portfolio
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: mobileMenuOpen ? 0 : -20, opacity: mobileMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.3, delay: mobileMenuOpen ? 0.2 : 0, ease: "easeOut" }}
          >
            <Link 
              href="#process" 
              className="block px-4 py-2 text-base hover:bg-gray-50 rounded-md" 
              onClick={toggleMobileMenu}
            >
              Cara Kerja
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: mobileMenuOpen ? 0 : -20, opacity: mobileMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.3, delay: mobileMenuOpen ? 0.25 : 0, ease: "easeOut" }}
          >
            <Link 
              href="#faq" 
              className="block px-4 py-2 text-base hover:bg-gray-50 rounded-md" 
              onClick={toggleMobileMenu}
            >
              FAQ
            </Link>
          </motion.div>
          
          <motion.div 
            className="pt-2 border-t border-gray-200"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: mobileMenuOpen ? 0 : 20, opacity: mobileMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.3, delay: mobileMenuOpen ? 0.3 : 0, ease: "easeOut" }}
          >
            <Link 
              href="/contact" 
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
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </header>
  )
}
