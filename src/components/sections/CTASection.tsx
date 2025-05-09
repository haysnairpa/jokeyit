"use client"

import Link from "next/link"
import { ChevronRight, Clock, Shield, Zap } from "lucide-react"

export default function CTASection() {
  return (
    <section className="bg-primary py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
              Masih Ragu? Konsultasikan Kebutuhan Digital Anda dengan Kami
            </h2>
            <p className="text-white/80 md:text-xl">
              Tim ahli kami siap membantu mewujudkan ide Anda menjadi solusi digital yang efektif. Konsultasi
              gratis, tanpa kewajiban.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="https://wa.me/6287763287548?text=Halo%20jokey.it%2C%20saya%20ingin%20konsultasi%20gratis"
                target="_blank"
                className="inline-flex items-center justify-center rounded-md bg-white px-4 py-4 text-sm font-medium text-primary shadow transition-colors hover:bg-white/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
              >
                Konsultasi Gratis
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4 rounded-lg bg-white/10 p-6">
            <div className="flex items-center space-x-4">
              <Clock className="h-6 w-6 text-white" />
              <div>
                <h3 className="font-bold text-white">Respon Cepat</h3>
                <p className="text-white/80">Kami merespon pesan Anda dalam 24 jam</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Shield className="h-6 w-6 text-white" />
              <div>
                <h3 className="font-bold text-white">Garansi Kepuasan</h3>
                <p className="text-white/80">Kami bekerja sampai Anda puas dengan hasilnya</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Zap className="h-6 w-6 text-white" />
              <div>
                <h3 className="font-bold text-white">Dukungan Jangka Panjang</h3>
                <p className="text-white/80">Kami siap membantu Anda bahkan setelah proyek selesai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
