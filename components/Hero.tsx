"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Star, Clock, Dumbbell } from "lucide-react";
import { WhatsAppIcon } from "@/components/Products";

// Gym hours: Mon-Tue 24h, Wed-Sat 6am-12am, Sunday closed
function getOpenStatus() {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 1 = Monday, 2 = Tuesday, etc.
  const hour = now.getHours();
  const minute = now.getMinutes();
  const minutesNow = hour * 60 + minute;

  if (day === 0) {
    return { open: false, label: "Closed today" };
  }

  // Monday (1) and Tuesday (2) — open 24 hours
  if (day === 1 || day === 2) {
    return { open: true, label: "Open 24 hours" };
  }

  // Wednesday (3) to Saturday (6) — 6am to 12am (midnight)
  const openTime = 6 * 60; // 6:00 AM
  const closeTime = 24 * 60; // 12:00 AM (midnight = end of day)

  if (minutesNow >= openTime && minutesNow < closeTime) {
    return { open: true, label: "Open now · Closes 12 AM" };
  }
  return { open: false, label: "Opens 6 AM" };
}

const STATS = [
  { value: "24h", label: "Open Mon-Tue" },
  { value: "6", label: "Coaches" },
  { value: "11", label: "Programs" },
  { value: "4.7★", label: "Google Rating" },
];

export default function Hero() {
  const [status, setStatus] = useState<{ open: boolean; label: string } | null>(
    null
  );

  useEffect(() => {
    setStatus(getOpenStatus());
    const id = setInterval(() => setStatus(getOpenStatus()), 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=2000&q=80"
          alt="Weight rack inside Fitness Demon"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-ink/70" />
        <div className="absolute inset-0 bg-grain" />
      </div>

      {/* Live status badge */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute right-6 top-28 z-10 flex items-center gap-2 rounded-sm border border-iron bg-char/80 px-4 py-2 backdrop-blur md:right-10 md:top-36"
      >
        <span
          className={`h-2 w-2 rounded-full ${
            status?.open ? "bg-ember animate-pulse" : "bg-ash"
          }`}
        />
        <span className="text-xs font-semibold uppercase tracking-wider text-bone">
          {status ? status.label : "Checking hours…"}
        </span>
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-40 md:px-10 md:pb-24">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-6 inline-flex items-center gap-2 border border-white/15 bg-char/60 px-4 py-2 backdrop-blur"
        >
          <Dumbbell size={15} className="text-blood" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-bone">
            Fitness Demon
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-5 flex flex-wrap items-center gap-2 text-sm text-ash"
        >
          <MapPin size={16} className="text-blood" />
          13 Main bazar mustafa abad, Mustafabad, Lahore
          <span className="mx-1 text-iron">·</span>
          <span className="flex items-center gap-1 text-bone">
            <Star size={14} className="fill-blood text-blood" />
            4.666
          </span>
          <span className="text-ash">(Google reviews)</span>
          <span className="mx-1 hidden text-iron sm:inline">·</span>
          <span className="hidden items-center gap-1 sm:flex">
            <Clock size={14} className="text-blood" />
            Mon-Tue 24h · Wed-Sat 6 AM – 12 AM
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-display text-[13vw] leading-[1.1] tracking-tight text-bone sm:text-[11vw] md:text-[8vw] md:leading-[1.05]"
        >
          TRAIN
          <br />
          <span className="text-outline">WITHOUT</span>
          <br />
          <span className="text-blood">LIMITS</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md text-base text-ash md:text-lg">
            Weightlifting, CrossFit, Zumba, and personal training under one
            roof — open 24 hours Mon-Tue, 6 AM to 12 AM Wed-Sat. Two dedicated
            floors with real coaches who push you forward.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#location"
              className="rounded-sm bg-blood px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-bone transition-colors hover:bg-ember"
            >
              Visit The Gym
            </a>
            <a
              href="#services"
              className="rounded-sm border border-iron px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-bone transition-colors hover:border-bone"
            >
              See Programs
            </a>
            <a
              href="https://wa.me/923008141533?text=Salam%20Fitness%20Demon!%20I%20want%20to%20know%20about%20membership."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-emerald-500/40 bg-emerald-500/10 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-bone backdrop-blur transition-colors hover:bg-emerald-500/20"
            >
              <WhatsAppIcon size={16} />
              WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden border border-iron bg-iron sm:grid-cols-4"
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="flex flex-col gap-1 bg-ink/80 px-6 py-6 backdrop-blur"
            >
              <span className="font-display text-3xl text-blood md:text-4xl">
                {s.value}
              </span>
              <span className="text-xs uppercase tracking-wider text-ash">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
