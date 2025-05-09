"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AlignJustify, X } from "lucide-react"

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
          <Link href="#portfolio" className="nav-link">
            Portfolio
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
            <button className="btn btn-primary">
              Hubungi Kami
            </button>
          </Link>
        </div>
        <button 
          className="flex items-center justify-center md:!hidden p-2 rounded-md" 
          style={{backgroundColor: "var(--primary-light)"}}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X style={{color: "var(--primary-color)"}} className="h-6 w-6" />
          ) : (
            <AlignJustify style={{color: "var(--primary-color)"}} className="h-6 w-6" />
          )}
          <span className="sr-only">Menu</span>
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50 border-t">
          <div className="container py-4 space-y-4">
            <Link 
              href="#services" 
              className="block px-4 py-2 text-base hover:bg-gray-50 rounded-md" 
              onClick={toggleMobileMenu}
            >
              Layanan
            </Link>
            <Link 
              href="#portfolio" 
              className="block px-4 py-2 text-base hover:bg-gray-50 rounded-md" 
              onClick={toggleMobileMenu}
            >
              Portfolio
            </Link>
            <Link 
              href="#process" 
              className="block px-4 py-2 text-base hover:bg-gray-50 rounded-md" 
              onClick={toggleMobileMenu}
            >
              Cara Kerja
            </Link>
            <Link 
              href="#faq" 
              className="block px-4 py-2 text-base hover:bg-gray-50 rounded-md" 
              onClick={toggleMobileMenu}
            >
              FAQ
            </Link>
            <div className="pt-2 border-t border-gray-200">
              <Link 
                href="/contact" 
                className="block" 
                onClick={toggleMobileMenu}
              >
                <button className="w-full btn btn-primary">
                  Hubungi Kami
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
