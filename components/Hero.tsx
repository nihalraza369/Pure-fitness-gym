"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";

// Gym hours: Mon–Sat 7am–1am (next day), Sunday closed
function getOpenStatus() {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday
  const hour = now.getHours();
  const minute = now.getMinutes();
  const minutesNow = hour * 60 + minute;

  const openTime = 7 * 60; // 7:00 AM
  const closeTime = 60; // 1:00 AM (past midnight)

  if (day === 0) {
    return { open: false, label: "Closed today" };
  }

  // Open if it's past 7 AM, or it's still before 1 AM (i.e. yesterday's session)
  const withinWindow = minutesNow >= openTime || minutesNow < closeTime;
  return {
    open: withinWindow,
    label: withinWindow ? "Open now · Closes 1 AM" : "Opens 7 AM",
  };
}

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
          alt="Weight rack inside Pure Fitness Gym"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/30 to-ink/70" />
        <div className="absolute inset-0 bg-grain" />
      </div>

      {/* Live status badge */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute right-6 top-28 z-10 flex items-center gap-2 rounded-sm border border-iron bg-char/80 px-4 py-2 backdrop-blur md:right-10 md:top-32"
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-5 flex items-center gap-2 text-sm text-ash"
        >
          <MapPin size={16} className="text-blood" />
          Gulshan-e-Iqbal, Block 13-D/3, Karachi
          <span className="mx-1 text-iron">·</span>
          <span className="flex items-center gap-1 text-bone">
            <Star size={14} className="fill-blood text-blood" />
            4.7
          </span>
          <span className="text-ash">(35 reviews)</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-display text-[15vw] leading-[0.85] tracking-tight text-bone md:text-[8.5vw]"
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
            roof — open 7 AM to 1 AM, every day but Sunday.
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
