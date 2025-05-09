"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Send, Loader2 } from "lucide-react"
import ScrollAnimation from "../ui/scroll-animation"
import emailjs from 'emailjs-com'

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)
  
  // Inisialisasi EmailJS
  useEffect(() => {
    emailjs.init("Caj9zYOO-7jK-sP0r") // Ganti dengan User ID EmailJS Anda
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Kirim email menggunakan EmailJS
      if (formRef.current) {
        const templateParams = {
          from_name: `${formData.name} (${formData.email})`,
          reply_to: formData.email,
          phone: formData.phone,
          subject: `Pesan dari ${formData.name}: ${formData.subject}`,
          message: `Email Pengirim: ${formData.email}\nTelepon: ${formData.phone}\n\nPesan:\n${formData.message}`,
          to_email: 'jokeydigitalize@gmail.com'
        }

        await emailjs.send(
          'service_jokey', // Ganti dengan Service ID EmailJS Anda
          'template_ppggeqd', // Ganti dengan Template ID EmailJS Anda
          templateParams
        )

        // Reset form setelah berhasil
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        })
        setSubmitStatus("success")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Form Kontak */}
      <ScrollAnimation direction="up">
        <motion.div 
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
          whileHover={{ boxShadow: "var(--shadow-lg)" }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <h3 className="text-xl font-bold mb-2" style={{color: "var(--text-dark)"}}>Kirim Pesan</h3>
          <p className="text-base mb-6" style={{color: "var(--text-medium)"}}>Form yang Anda kirim akan langsung masuk ke email jokeydigitalize@gmail.com dan akan direspon segera.</p>
          
          {submitStatus === "success" && (
            <motion.div 
              className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Pesan Anda berhasil dikirim! Kami akan menghubungi Anda segera.
            </motion.div>
          )}
          
          {submitStatus === "error" && (
            <motion.div 
              className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Terjadi kesalahan saat mengirim pesan. Silakan coba lagi atau hubungi kami melalui WhatsApp.
            </motion.div>
          )}
          
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium" style={{color: "var(--text-dark)"}}>
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium" style={{color: "var(--text-dark)"}}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="email@example.com"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium" style={{color: "var(--text-dark)"}}>
                  Nomor Telepon (Opsional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="08xxxxxxxxxx"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium" style={{color: "var(--text-dark)"}}>
                  Subjek
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                >
                  <option value="">Pilih subjek</option>
                  <option value="Website Baru">Website Baru</option>
                  <option value="Redesign Website">Redesign Website</option>
                  <option value="Aplikasi Mobile">Aplikasi Mobile</option>
                  <option value="Sistem Informasi">Sistem Informasi</option>
                  <option value="Konsultasi">Konsultasi</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2 mb-6">
              <label htmlFor="message" className="block text-sm font-medium" style={{color: "var(--text-dark)"}}>
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                placeholder="Ceritakan kebutuhan proyek Anda..."
              />
            </div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Mengirim...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Kirim Pesan</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </ScrollAnimation>
    </div>
  )
}
