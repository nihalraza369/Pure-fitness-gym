"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Location() {
  const address =
    "A-43 Own Ctr Rd, near Noman Complex, Block 13D-3, Gulshan-e-Iqbal, Karachi, 75300";
  const mapsQuery = encodeURIComponent("Pure Fitness Gym Branch 3 Gulshan-e-Iqbal Karachi");

  return (
    <section id="location" className="bg-ink px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 font-display text-5xl leading-[0.9] text-bone md:mb-20 md:text-6xl"
        >
          FIND US ON
          <br />
          <span className="text-blood">13-D/3.</span>
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between border border-iron p-8"
          >
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin size={22} className="mt-0.5 shrink-0 text-blood" />
                <div>
                  <p className="mb-1 font-display text-lg tracking-wide text-bone">
                    ADDRESS
                  </p>
                  <p className="text-sm leading-relaxed text-ash">{address}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone size={22} className="mt-0.5 shrink-0 text-blood" />
                <div>
                  <p className="mb-1 font-display text-lg tracking-wide text-bone">
                    PHONE
                  </p>
                  <a
                    href="tel:03352846360"
                    className="text-sm text-ash transition-colors hover:text-bone"
                  >
                    0335 2846360
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock size={22} className="mt-0.5 shrink-0 text-blood" />
                <div>
                  <p className="mb-1 font-display text-lg tracking-wide text-bone">
                    HOURS
                  </p>
                  <p className="text-sm text-ash">
                    Mon–Sat, 7 AM – 1 AM
                    <br />
                    Sunday, Closed
                  </p>
                </div>
              </div>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-sm bg-blood px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wider text-bone transition-colors hover:bg-ember"
            >
              Get Directions
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="min-h-[360px] overflow-hidden border border-iron"
          >
            <iframe
              title="Pure Fitness Gym location map"
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
              className="h-full min-h-[360px] w-full grayscale invert-[0.92] contrast-[1.1]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
