"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Jordan Josh",
    tag: "Local Guide · 34 reviews",
    body: "It is a good place to do some workout, and get your body in shape. Mr Asim Raza is the trainer here, he is Mr Pakistan Title holder and two times Mr Punjab. Gym has each and every basic machine that you need in a gym, and fee is also affordable.",
  },
  {
    name: "Asif Muhammad",
    tag: "Local Guide · 4 reviews",
    body: "New Machinery, well maintained, neat and clean, fit ac, trainer coach also available and very nicely guide you about any exercise plus nutrition.",
  },
  {
    name: "Nouman Mirza",
    tag: "Local Guide · 24 reviews",
    body: "Good equipment and good people also and the most important thing it is very affordable and the mission fitness is on. Stay motivated.",
  },
  {
    name: "Abdul Haseeb",
    tag: "Local Guide · 19 reviews",
    body: "V Good experience and also good environment. New Machinery and well maintained gym.",
  },
  {
    name: "Ahmad Bhatti",
    tag: "5 reviews",
    body: "Superb Gym and has a good staff and clean environment.",
  },
  {
    name: "Zohaib Ashraf",
    tag: "Local Guide · 13 reviews",
    body: "Nice environment and they give me the student discount also recommend.",
  },
  {
    name: "Zohaib Hassan",
    tag: "5 reviews",
    body: "Best gym in my town.",
  },
  {
    name: "TARIQ NIZAM GILLANI",
    tag: "Local Guide · 20 reviews",
    body: "It's a good place for exercise.",
  },
  {
    name: "Science Lectures",
    tag: "5 reviews",
    body: "Best gym in area.",
  },
  {
    name: "Shozi Hafeez",
    tag: "4 reviews",
    body: "Good looking gym.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-char px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl leading-[0.9] text-bone md:text-6xl"
          >
            WHAT MEMBERS
            <br />
            <span className="text-blood">SAY.</span>
          </motion.h2>

          <div className="flex items-center gap-4 border border-iron px-6 py-4">
            <span className="font-display text-4xl text-blood">4.666</span>
            <div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-blood text-blood" />
                ))}
              </div>
              <p className="mt-1 text-xs text-ash">From Google reviews</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="flex flex-col justify-between border border-iron bg-ink p-7"
            >
              <div>
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={13} className="fill-blood text-blood" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-bone">
                  &ldquo;{t.body}&rdquo;
                </p>
              </div>
              <div className="mt-6 border-t border-iron pt-4">
                <p className="text-sm font-semibold text-bone">{t.name}</p>
                <p className="text-xs text-ash">{t.tag}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
