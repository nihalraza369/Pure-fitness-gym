"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Activity,
  Bike,
  Music,
  Apple,
  UserCheck,
  KeyRound,
  Users,
  Music2,
  Dumbbell,
  HeartPulse,
  Flame,
} from "lucide-react";

const SERVICES = [
  {
    icon: Dumbbell,
    name: "Weightlifting",
    desc: "Full free-weight range and machine stations for every lift on your program.",
    img: "/images/weightlifting.jpg",
  },
  {
    icon: Flame,
    name: "CrossFit",
    desc: "High-intensity functional workouts, coached in small groups.",
    img: "/images/crossfit.jpg",
  },
  {
    icon: HeartPulse,
    name: "Cardio",
    desc: "Treadmills, bikes and rowers with an open floor for your own circuits.",
    img: "/images/cardio.png",
  },
  {
    icon: Activity,
    name: "Aerobics",
    desc: "Instructor-led sessions built around rhythm, stamina and form.",
    img: "/images/aerobics.jpg",
  },
  {
    icon: Bike,
    name: "Cycling",
    desc: "Studio cycling classes for a focused, high-output cardio session.",
    img: "/images/cycling.jpg",
  },
  {
    icon: Music2,
    name: "Zumba",
    desc: "Dance-based cardio classes that don't feel like a workout.",
    img: "/images/zumba.jpg",
  },
  {
    icon: Music,
    name: "Jazzercise",
    desc: "Dance, resistance and cardio blended into one class format.",
    img: "/images/jazzercise.jpg",
  },
  {
    icon: UserCheck,
    name: "Personal Training",
    desc: "One-on-one coaching built around your goals and schedule.",
    img: "/images/personal-training.jpg",
  },
  {
    icon: KeyRound,
    name: "Private Lessons",
    desc: "Focused, one-on-one sessions in a quieter part of the floor.",
    img: "/images/private-lessons.jpg",
  },
  {
    icon: Users,
    name: "Youth Classes",
    desc: "Age-appropriate training for younger members, under supervision.",
    img: "/images/youth-classes.jpg",
  },
  {
    icon: Apple,
    name: "Nutrition Consulting",
    desc: "Practical eating plans that actually fit your training load.",
    img: "/images/nutrition.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-ink px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl leading-[0.9] text-bone md:text-7xl"
          >
            EVERYTHING
            <br />
            ON ONE FLOOR.
          </motion.h2>
          <p className="max-w-sm text-ash">
            Eleven programs, one membership. Mix and match your week between
            strength, cardio and class-based training.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-sm border border-iron bg-ink transition-colors hover:bg-char"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover opacity-80 grayscale-[35%] transition-all duration-500 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center border border-white/15 bg-ink/70 backdrop-blur-sm">
                  <s.icon size={22} className="text-blood" />
                </div>
              </div>
              <div className="p-8 pt-6">
                <h3 className="mb-2 font-display text-xl tracking-wide text-bone">
                  {s.name.toUpperCase()}
                </h3>
                <p className="text-sm leading-relaxed text-ash">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
