"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import {
  Clock,
  Dumbbell,
  Users,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

function Counter({
  to,
  suffix = "",
  decimals = 0,
}: {
  to: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        setDisplay(value.toFixed(decimals));
      },
    });
    return () => controls.stop();
  }, [inView, to, decimals]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const POINTS = [
  {
    icon: Clock,
    title: "Open floor, all day",
    body: "7 AM to 1 AM, six days a week — 18 hours every single day. An open first floor for your own cardio or warm-up and a full weights area, so you can train before work, after work or late at night without ever rushing.",
  },
  {
    icon: Dumbbell,
    title: "Coached, not just supervised",
    body: "Our trainers don't just watch — they coach. You get form checks, technique correction, program design and real instruction in every class, whether it's your first session or you're chasing your first competition.",
  },
  {
    icon: Users,
    title: "Built for the whole family",
    body: "Two dedicated floors — men's and ladies' — each with its own coaches and timings (ladies 12 PM–6 PM, men the rest of the day). Plus a youth program for younger lifters, so the entire family trains under one roof.",
  },
  {
    icon: ShieldCheck,
    title: "Clean, safe & well-kept",
    body: "Equipment is regularly maintained, the floor is cleaned between sessions and the space stays ventilated. Training hard is easier when the basics — hygiene, safety and working machines — are simply taken care of.",
  },
  {
    icon: BadgeCheck,
    title: "Genuine supplements on sale",
    body: "Whey, creatine, pre-workout and more at the front desk. Authentic products at honest prices — no fakes, no overpricing. Order on WhatsApp and collect on your next visit.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-char px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:gap-10">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-10 font-display text-5xl leading-[0.9] text-bone md:text-6xl"
          >
            WHY MEMBERS
            <br />
            <span className="text-blood">STAY.</span>
          </motion.h2>

          <div className="space-y-8">
            {POINTS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-l-2 border-iron pl-6"
              >
                <div className="mb-1.5 flex items-center gap-2">
                  <p.icon size={18} className="shrink-0 text-blood" />
                  <h3 className="font-display text-lg tracking-wide text-bone">
                    {p.title.toUpperCase()}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-ash">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-iron">
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1400&q=80"
              alt="Members training on the gym floor"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-8 left-1/2 flex w-[92%] -translate-x-1/2 items-stretch divide-x divide-iron border border-iron bg-ink/95 backdrop-blur sm:w-[85%]">
            <div className="flex-1 px-3 py-5 text-center sm:px-5 sm:py-6">
              <p className="font-display text-2xl text-blood sm:text-3xl md:text-4xl">
                <Counter to={4.7} decimals={1} />
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-ash sm:text-xs">
                Google Rating
              </p>
            </div>
            <div className="flex-1 px-3 py-5 text-center sm:px-5 sm:py-6">
              <p className="font-display text-2xl text-blood sm:text-3xl md:text-4xl">
                <Counter to={18} suffix="h" />
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-ash sm:text-xs">
                Open Daily
              </p>
            </div>
            <div className="flex-1 px-3 py-5 text-center sm:px-5 sm:py-6">
              <p className="font-display text-2xl text-blood sm:text-3xl md:text-4xl">
                <Counter to={11} />
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-ash sm:text-xs">
                Programs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
