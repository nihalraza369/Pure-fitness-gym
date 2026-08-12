"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TIMING_TABS = [
  {
    id: "girls",
    label: "Girls",
    tagline: "Ladies floor · 12 PM – 6 PM",
    desc: "A dedicated ladies-only floor every afternoon. Train in comfort with female coaches who understand your goals.",
    hours: [
      { day: "Monday", time: "12 PM – 6 PM" },
      { day: "Tuesday", time: "12 PM – 6 PM" },
      { day: "Wednesday", time: "12 PM – 6 PM" },
      { day: "Thursday", time: "12 PM – 6 PM" },
      { day: "Friday", time: "12 PM – 6 PM" },
      { day: "Saturday", time: "12 PM – 6 PM" },
      { day: "Sunday", time: "Closed" },
    ],
  },
  {
    id: "boys",
    label: "Boys",
    tagline: "Men's floor · 7 AM – 12 PM & 6 PM – 1 AM",
    desc: "The full gym is yours before the ladies' session and again after it — early morning or late night, whichever fits your routine.",
    hours: [
      { day: "Monday", time: "7 AM – 12 PM · 6 PM – 1 AM" },
      { day: "Tuesday", time: "7 AM – 12 PM · 6 PM – 1 AM" },
      { day: "Wednesday", time: "7 AM – 12 PM · 6 PM – 1 AM" },
      { day: "Thursday", time: "7 AM – 12 PM · 6 PM – 1 AM" },
      { day: "Friday", time: "7 AM – 12 PM · 6 PM – 1 AM" },
      { day: "Saturday", time: "7 AM – 12 PM · 6 PM – 1 AM" },
      { day: "Sunday", time: "Closed" },
    ],
  },
];

const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function Timings() {
  const [tab, setTab] = useState("girls");
  const active = TIMING_TABS.find((t) => t.id === tab) ?? TIMING_TABS[0];
  const todayIndex = DAY_NAMES.indexOf(
    new Date().toLocaleDateString("en-US", { weekday: "long" })
  );

  return (
    <section id="hours" className="bg-ink px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-display text-5xl leading-[0.9] text-bone md:text-6xl"
        >
          FLOOR
          <br />
          <span className="text-blood">TIMINGS.</span>
        </motion.h2>
        <p className="mb-10 max-w-md text-ash">
          Two floors, one gym. Pick your session and train when it suits you.
        </p>

        {/* Tab navbar */}
        <div
          role="tablist"
          aria-label="Floor timings"
          className="mb-8 inline-flex w-full max-w-md border border-iron bg-char p-1 sm:w-auto"
        >
          {TIMING_TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className={`relative flex-1 px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors sm:flex-none sm:px-10 ${
                tab === t.id ? "text-bone" : "text-ash hover:text-bone"
              }`}
            >
              {tab === t.id && (
                <motion.span
                  layoutId="timing-tab"
                  className="absolute inset-0 bg-blood"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{t.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16"
          >
            <div>
              <h3 className="mb-2 font-display text-2xl tracking-wide text-bone">
                {active.label.toUpperCase()} SESSION
              </h3>
              <p className="mb-4 text-sm font-semibold text-blood">
                {active.tagline}
              </p>
              <p className="text-sm leading-relaxed text-ash">{active.desc}</p>
            </div>

            <div className="divide-y divide-iron border-y border-iron">
              {active.hours.map((row, i) => {
                const isToday = todayIndex === DAY_NAMES.indexOf(row.day);
                const isClosed = row.time === "Closed";
                return (
                  <motion.div
                    key={row.day}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    className={`flex items-center justify-between gap-4 px-4 py-4 ${
                      isToday ? "bg-blood/10" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blood" />
                      )}
                      <span
                        className={`font-display text-base tracking-wide sm:text-lg ${
                          isToday ? "text-blood" : "text-bone"
                        }`}
                      >
                        {row.day.toUpperCase()}
                      </span>
                    </div>
                    <span
                      className={`text-sm font-semibold ${
                        isClosed ? "text-ash" : "text-bone"
                      }`}
                    >
                      {row.time}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
