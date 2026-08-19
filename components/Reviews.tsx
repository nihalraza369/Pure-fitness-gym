"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Muhammad Ahmad",
    tag: "Local Guide",
    body: "Clean, affordable, and there's a whole open floor upstairs if you'd rather run your own cardio or warm-up routine.",
  },
  {
    name: "Hamza Ali",
    tag: "Member, 1 month",
    body: "The equipment and ambiance are on point, and the trainers know what they're talking about. No regrets joining.",
  },
  {
    name: "Hameed Ullah",
    tag: "Member since day one",
    body: "The best value gym in Mustafabad — good atmosphere that works well for both male and female members.",
  },
  {
    name: "Shahrukh Alam",
    tag: "Local Guide",
    body: "Top-notch equipment and an interior that actually feels considered. One of the better gyms in the block.",
  },
  {
    name: "Salik Hassan",
    tag: "Local Guide",
    body: "Equipment is kept in good shape and the staff are well-mannered. Would send a friend here.",
  },
  {
    name: "Haseeb Memon",
    tag: "Member",
    body: "Solid gym for the price — you won't find better rates for this quality of setup nearby.",
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
            SAY.
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
