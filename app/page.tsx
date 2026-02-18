"use client";

import { motion, easeOut } from "framer-motion";
import Image from "next/image"; 


const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-100 text-gray-800 overflow-hidden">
      
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-emerald-100">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-3">
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              src='/logo.png'
              alt="LENOTOPUP Logo"
              className=""
              width={40}
              height={40}
            />
            
            
            <span className="font-extrabold text-xl text-emerald-600 tracking-wide">
              LENOTOPUP
            </span>
          </div>

          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="#register"
            className="bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg"
          >
            Register Now
          </motion.a>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <motion.section
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative text-center py-28 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-600 to-green-400 bg-clip-text text-transparent mb-6"
          >
            Earn Daily From Airtime & Bill Payments
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            Become a LENOTOPUP agent and earn up to{" "}
            <span className="font-bold text-emerald-600">10% commission</span>{" "}
            when others buy airtime or pay bills.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex justify-center gap-6 flex-wrap"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#register"
              className="bg-emerald-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl"
            >
              Join Now
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#how"
              className="border border-emerald-600 text-emerald-600 px-10 py-4 rounded-full font-bold text-lg"
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>

        {/* Floating Image */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="mt-16 flex justify-center"
        >
          <img
            src="https://via.placeholder.com/600x350"
            alt="Earning illustration"
            className="rounded-3xl shadow-2xl border border-emerald-100"
          />
        </motion.div>
      </motion.section>

      {/* ================= HOW YOU EARN ================= */}
      <motion.section
        id="how"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <motion.h2
          variants={fadeUp}
          className="text-4xl font-bold text-center mb-16"
        >
          How You Earn On LENOTOPUP
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {[1, 2].map((item) => (
            <motion.div
              key={item}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="bg-white/70 backdrop-blur-lg border border-emerald-100 rounded-3xl p-8 shadow-xl"
            >
              <img
                src="https://via.placeholder.com/400x250"
                alt="Illustration"
                className="rounded-2xl mb-6"
              />
              <h3 className="text-2xl font-bold text-emerald-600 mb-4">
                {item === 1
                  ? "10% Commission As An Agent"
                  : "Daily Earnings Opportunity"}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Earn daily income and withdraw directly to your bank account
                twice weekly without restrictions.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        id="register"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center py-28 px-6 bg-gradient-to-r from-emerald-600 to-green-500 text-white"
      >
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Start Earning Today 🚀
        </motion.h2>

        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="#"
          className="bg-white text-emerald-600 px-12 py-5 rounded-full font-bold text-lg shadow-2xl"
        >
          REGISTER NOW
        </motion.a>
      </motion.section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-10 border-t text-sm text-gray-500 bg-emerald-50">
        © {new Date().getFullYear()} LENOTOPUP — All Rights Reserved
      </footer>
    </main>
  );
}
