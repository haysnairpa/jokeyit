"use client"

import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-12">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <Image src="/jokeyit.png" alt="jokey.it logo" width={30} height={30} className="h-7 w-auto" />
          <span className="font-bold">jokey.it</span>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} jokey.it. Semua hak dilindungi.
        </p>
        <div className="flex gap-4">
          <a 
            href="https://www.instagram.com/jokey.it" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
            @jokey.it
          </a>
          <a 
            href="mailto:jokeydigitalize@gmail.com" 
            className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            jokeydigitalize@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}
