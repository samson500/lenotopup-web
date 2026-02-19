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
              src="/logo.png"
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
            href="https://t.me/Lenotopupverifiedagent?text=Greetings%20to%20you%20LENOTOPUP%20AGENT%2C%20i%20was%20directed%20from%20LENOTOPUP%20app/website%20to%20make%20payment%20for%20registration,%20so%20that%20i%20can%20start%20making%20money%20on%20LENOTOPUP"
            className="
    bg-emerald-600 
    text-white 
    whitespace-nowrap
    px-4 sm:px-6
    py-2
    text-sm sm:text-base
    rounded-full 
    font-semibold 
    shadow-lg
    flex items-center justify-center
  "
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
        className="relative text-center py-28 px-4 pb-0"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-600 to-green-400 bg-clip-text text-transparent mb-6"
          >
            Welcome to LENOTOPUP, over here we make millions together.
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
              href="https://t.me/Lenotopupverifiedagent?text=Greetings%20to%20you%20LENOTOPUP%20AGENT%2C%20i%20was%20directed%20from%20LENOTOPUP%20app/website%20to%20make%20payment%20for%20registration,%20so%20that%20i%20can%20start%20making%20money%20on%20LENOTOPUP"
              className="bg-emerald-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl"
            >
              Join Now
            </motion.a>
          </motion.div>
        </div>

        {/* Floating Image */}
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
          <motion.div
            key={"image1"}
            variants={fadeUp}
            whileHover={{ y: -10 }}
            className="bg-white/70 backdrop-blur-lg border border-emerald-100 rounded-3xl shadow-xl"
          >
            <Image
              src="/images/image1.webp"
              alt="Earning illustration"
              width={600}
              height={350}
              className="rounded-t-3xl  border border-emerald-100"
            />
            <div className="p-3">
              {/* <h3 className="text-2xl font-bold text-emerald-600 mb-4">
                  10% Commission As An Agent
                  
              </h3> */}
              <p className="text-gray-600 font-bold text-center text-xl leading-relaxed">
                You earn up to 10 percent when others purchase Airtime data/ pay
                bills on LENOTOPUP once you register as an agent
              </p>
            </div>
          </motion.div>

          <motion.div
            key={"image2"}
            variants={fadeUp}
            whileHover={{ y: -10 }}
            className="bg-white/70 backdrop-blur-lg border border-emerald-100 rounded-3xl shadow-xl"
          >
            <Image
              src="/images/image2.webp"
              alt="Earning illustration"
              width={600}
              height={350}
              className="rounded-t-3xl border border-emerald-100"
            />
            <div className="p-3">
              {/* <h3 className="text-2xl font-bold text-emerald-600 mb-4">
                  10% Commission As An Agent
                  
              </h3> */}
              <p className="text-gray-600 font-bold text-center text-xl leading-relaxed">
                You can earn up to N18850 daily and withdraw to any of your
                local bank accounts, you can also earn up to N7880 daily by
                performing simple social media jobs/task
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="commission"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <motion.h2
          variants={fadeUp}
          className="text-4xl font-bold text-center mb-8"
        >
          How do I get commissions from LENOTOPUP?
        </motion.h2>

        <div className="flex align-middle justify-center gap-10">
          <motion.div
            key={"image3"}
            variants={fadeUp}
            whileHover={{ y: -10 }}

            className="bg-white/70 backdrop-blur-lg border max-w-120 border-emerald-100 rounded-3xl shadow-xl"
          >
            <div className="p-5">
              <h3 className="text-2xl text-center font-bold text-emerald-600 mb-4">
                10% Commission As An Agent
              </h3>
              <p className="text-gray-600  text-center leading-relaxed">
                Once you login to your LENOTOPUP account you will claim 10
                percent of any amount others use to pay bills,
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>


      <motion.section
        id="withdraw"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-20"
      >
        
   <motion.h1
            variants={fadeUp}
            className="text-2xl md:text-2xl text-center font-extrabold bg-gradient-to-r from-emerald-600 to-green-400 bg-clip-text text-transparent mb-5"
          >
                Withdrawal is twice a week Monday and Friday for the full day 
          </motion.h1>
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            key={"image1"}
            variants={fadeUp}
            whileHover={{ y: -10 }}
            className="bg-white/70 backdrop-blur-lg border border-emerald-100 rounded-3xl shadow-xl"
          >
            <Image
              src="/images/image3.webp"
              alt="withdraw illustration"
              width={600}
              height={350}
              className="rounded-3xl  border border-emerald-100"
            />
            
          </motion.div>

          
          <motion.div
            key={"image4"}
            variants={fadeUp}
            whileHover={{ y: -10 }}
            className="bg-white/70 backdrop-blur-lg border border-emerald-100 rounded-3xl shadow-xl"
          >
            <Image
              src="/images/image4.webp"
              alt="Earning illustration"
              width={600}
              height={350}
              className="rounded-3xl border border-emerald-100"
            />
            
          </motion.div>

          

          
        </div>
      </motion.section>

      <motion.h1
            variants={fadeUp}
            className="text-2xl md:text-2xl text-center font-extrabold bg-gradient-to-r from-emerald-600 to-green-400 bg-clip-text text-transparent mb-6"
          >
You can also get LENOTOPUP ATM card to withdraw money for free 

          </motion.h1>


      

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
          className="text-3xl md:text-5xl font-extrabold mb-6"
        >
          What are you waiting for ?
        </motion.h2>

        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="https://t.me/Lenotopupverifiedagent?text=Greetings%20to%20you%20LENOTOPUP%20AGENT%2C%20i%20was%20directed%20from%20LENOTOPUP%20app/website%20to%20make%20payment%20for%20registration,%20so%20that%20i%20can%20start%20making%20money%20on%20LENOTOPUP"
          className="bg-white text-emerald-600 px-12 py-5 rounded-full font-bold text-lg shadow-2xl"
        >
          REGISTER ON LENOTOPUP NOW 🚀
        </motion.a>
      </motion.section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-10 border-t text-sm text-gray-500 bg-emerald-50">
        © {new Date().getFullYear()} LENOTOPUP — All Rights Reserved
      </footer>
    </main>
  );
}
