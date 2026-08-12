"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  Dumbbell,
  Sun,
  Moon,
  Sunrise,
  MoonStar,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Trainers from "@/components/Trainers";
import Timings from "@/components/Timings";
import { WhatsAppIcon } from "@/components/Products";

const PHONE = "0335 2846360";

const BEST_TIMES = [
  {
    icon: Sun,
    title: "Morning · Subah",
    window: "7 AM – 12 PM",
    points: [
      "Fresh and full of energy — best for heavy lifting",
      "Gym is quiet, machines and weights are free",
      "Boosts your metabolism for the whole day",
      "Start your day consistent, beat the crowd",
    ],
  },
  {
    icon: Moon,
    title: "Night · Raat",
    window: "6 PM – 1 AM",
    points: [
      "Perfect after work or college — no rush",
      "Releases the stress of the day",
      "Strength gains recover overnight while you sleep",
      "Unwind and sleep better after a hard session",
    ],
  },
];

export default function TrainersPage() {
  return (
    <main className="bg-ink">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-ink pt-32">
        <div className="absolute inset-0">
          <Image
            src="/images/boys-hero.jpg"
            alt="Trainers and coaching at Pure Fitness Gym"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/30 to-ink/70" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 md:px-10 md:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 flex items-center gap-2 text-sm uppercase tracking-widest text-ash"
          >
            <Dumbbell size={16} className="text-blood" />
            One gym · Two dedicated floors
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-display text-5xl leading-[0.9] tracking-tight text-bone sm:text-6xl md:text-8xl"
          >
            MEET YOUR
            <br />
            <span className="text-blood">COACHES.</span>
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-ink px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-16"
          >
            <p className="text-xl leading-relaxed text-ash md:text-2xl">
              Six qualified coaches across two dedicated floors — men&rsquo;s
              and ladies&rsquo;. Whatever your goal, there&rsquo;s a trainer
              here who will coach, correct and push you, not just supervise.
            </p>
            <div className="space-y-4 text-sm text-ash">
              <p className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-blood" />
                Girls&rsquo; floor 12 PM – 6 PM. Boys&rsquo; floor the rest of
                the day, 7 AM – 1 AM.
              </p>
              <p className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-blood" />
                <a href="tel:03352846360" className="hover:text-bone">
                  {PHONE}
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Trainers />
      <Timings />

      {/* Best time to train */}
      <section className="bg-char px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="mb-4 font-display text-5xl leading-[0.9] text-bone md:text-6xl"
          >
            BEST TIME
            <br />
            <span className="text-blood">TO TRAIN.</span>
          </motion.h2>
          <p className="mb-14 max-w-md text-ash md:mb-20">
            Subah ho ya raat — dono timings ka apna fayda hai. Bas aap
            consistent aao, hum baaki dekhenge.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {BEST_TIMES.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-iron bg-ink p-8 md:p-10"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center border border-white/15 bg-char">
                    <t.icon size={22} className="text-blood" />
                  </span>
                  <span className="rounded-sm border border-iron px-3 py-1 text-xs font-bold uppercase tracking-wider text-ash">
                    {t.window}
                  </span>
                </div>
                <h3 className="mb-5 font-display text-2xl tracking-wide text-bone">
                  {t.title.toUpperCase()}
                </h3>
                <ul className="space-y-3">
                  {t.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 text-sm leading-relaxed text-ash"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blood" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 border border-iron bg-char p-8"
          >
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="flex items-start gap-4">
                <Sunrise size={22} className="mt-0.5 shrink-0 text-blood" />
                <div>
                  <h3 className="mb-1 font-display text-xl tracking-wide text-bone">
                    NOT SURE WHEN TO COME?
                  </h3>
                  <p className="max-w-xl text-sm leading-relaxed text-ash">
                    The best time to train is the one you can stick to. Message
                    us on WhatsApp — tell us your schedule and goal, and
                    we&rsquo;ll point you to the right slot and coach.
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/923352846360?text=Salam%20Pure%20Fitness%20Gym!%20I%20want%20to%20ask%20about%20training%20timings."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 bg-blood px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-bone transition-colors hover:bg-ember"
              >
                <WhatsAppIcon size={16} />
                Chat On WhatsApp
              </a>
            </div>
          </motion.div>

          <p className="mt-6 flex items-start gap-2 text-xs text-ash">
            <MoonStar size={14} className="mt-0.5 shrink-0 text-blood" />
            Pro tip: consistent timing beats the "perfect" timing — your body
            adapts to a fixed routine within a couple of weeks.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
