"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const TRAINERS = [
  {
    name: "Zubair Ahmed",
    role: "Head Trainer · Strength & Conditioning",
    exp: "12+ years coaching weightlifting and powerlifting. National-level competitor.",
    side: "Men's Floor",
    img: "/images/trainer-m1.jpg",
  },
  {
    name: "Salman Khan",
    role: "CrossFit & HIIT Coach",
    exp: "Certified CrossFit coach. Builds conditioning alongside strength for real-world fitness.",
    side: "Men's Floor",
    img: "/images/trainer-m2.jpg",
  },
  {
    name: "Faisal Raza",
    role: "Youth & Bodybuilding Coach",
    exp: "Trains younger members with a focus on technique, growth and discipline.",
    side: "Men's Floor",
    img: "/images/trainer-m3.jpg",
  },
  {
    name: "Ayesha Siddiqui",
    role: "Head Coach · Ladies Floor",
    exp: "8+ years coaching women's strength, weight loss and functional training.",
    side: "Ladies Floor",
    img: "/images/trainer-f1.jpg",
  },
  {
    name: "Mariam Iqbal",
    role: "Fitness & Cardio Coach",
    exp: "Specialist in fat-loss programming, treadmill intervals and bodyweight circuits.",
    side: "Ladies Floor",
    img: "/images/trainer-f2.jpg",
  },
  {
    name: "Hina Shah",
    role: "Zumba & Dance Fitness Coach",
    exp: "Certified Zumba instructor bringing energy, rhythm and fun to every class.",
    side: "Ladies Floor",
    img: "/images/trainer-f3.jpg",
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="bg-char px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-display text-5xl leading-[0.9] text-bone md:text-6xl"
        >
          THE FULL
          <br />
          <span className="text-blood">TEAM.</span>
        </motion.h2>
        <p className="mb-14 max-w-md text-ash md:mb-20">
          Six qualified coaches across two dedicated floors — men&rsquo;s and
          ladies&rsquo;. They coach, correct and push, not just supervise.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRAINERS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group border border-iron bg-ink transition-colors hover:bg-char"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={t.img}
                  alt={t.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover opacity-85 grayscale-[30%] transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                <span
                  className={`absolute left-4 top-4 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink ${
                    t.side === "Ladies Floor"
                      ? "bg-bone"
                      : "bg-blood text-bone"
                  }`}
                >
                  {t.side}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl tracking-wide text-bone">
                  {t.name.toUpperCase()}
                </h3>
                <p className="mt-1 text-sm font-semibold text-blood">
                  {t.role}
                </p>
                <p className="mt-2 text-sm text-ash">{t.exp}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
