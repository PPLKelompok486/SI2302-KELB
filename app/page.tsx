"use client";

import { motion } from "framer-motion";
import { HeartHandshake, MapPin, Users, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 shadow-sm">
        <h1 className="text-2xl font-bold text-green-600">
          BagiPangan
        </h1>

        <div className="space-x-4">
          <button className="border px-4 py-2 rounded">
            Login
          </button>

          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Register
          </button>
        </div>
      </nav>


      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-6 px-8 py-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Salurkan Makanan Berlebih,
            <br />
            Bantu Sesama Lebih Mudah 🍱
          </h2>

          <p className="text-gray-600 mb-6">
            Platform BagiPangan membantu menyalurkan makanan berlebih
            kepada masyarakat yang membutuhkan secara cepat dan
            transparan.
          </p>

          <div className="space-x-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded">
              Mulai Donasi
            </button>

            <button className="border px-6 py-3 rounded">
              Lihat Donasi
            </button>
          </div>
        </motion.div>


        <motion.img
          src="/vercel.svg"
          alt="Food Sharing"
          className="rounded-xl"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
        />

      </section>


      {/* Features Section */}
      <section className="bg-gray-50 px-8 py-16">

        <h3 className="text-3xl font-semibold text-center mb-10">
          Fitur Utama BagiPangan
        </h3>

        <div className="grid md:grid-cols-4 gap-6 text-center">

          <div>
            <HeartHandshake className="mx-auto mb-4 text-green-600" />
            <h4 className="font-semibold">Posting Donasi</h4>
          </div>

          <div>
            <MapPin className="mx-auto mb-4 text-green-600" />
            <h4 className="font-semibold">Lokasi Donasi</h4>
          </div>

          <div>
            <Users className="mx-auto mb-4 text-green-600" />
            <h4 className="font-semibold">Sistem Klaim</h4>
          </div>

          <div>
            <Clock className="mx-auto mb-4 text-green-600" />
            <h4 className="font-semibold">Tracking Status</h4>
          </div>

        </div>

      </section>


      {/* Footer */}
      <footer className="bg-gray-100 text-center py-6 text-sm text-gray-500">
        © 2026 BagiPangan
      </footer>

    </div>
  );
}