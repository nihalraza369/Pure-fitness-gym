"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  MapPin,
  Clock,
  Dumbbell,
  ArrowRight,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/Products";

const WA_LINK =
  "https://wa.me/923008141533?text=Salam%20Fitness%20Demon!%20I%20want%20to%20ask%20about%20membership.";

const LINKS = [
  { label: "Services", href: "/#services", section: "services" },
  { label: "Trainers", href: "/trainers", section: null },
  { label: "Products", href: "/#products", section: "products" },
  { label: "Why Us", href: "/#why", section: "why" },
  { label: "Timings", href: "/#hours", section: "hours" },
  { label: "Location", href: "/#location", section: "location" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(window.scrollY / total, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setActive(null);
      return;
    }

    const sections = LINKS.filter((l) => l.section).map((l) => ({
      id: l.section as string,
      el: document.getElementById(l.section as string),
    }));

    const onScroll = () => {
      const offset = window.scrollY + 140;
      let current = null;
      for (const { id, el } of sections) {
        if (el && el.offsetTop <= offset) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isOnPage = (href: string) =>
    href.startsWith("/") && !href.includes("#")
      ? pathname === href
      : false;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Scroll progress bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-transparent">
        <div
          className="h-full bg-blood transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Top utility bar — desktop only */}
      <div className="hidden border-b border-iron/70 bg-ink lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-10 py-2 text-xs text-ash">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-blood" />
              13 Main bazar mustafa abad, Mustafabad, Lahore
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-blood" />
              Mon-Tue 24h · Wed-Sat 6 AM – 12 AM
            </span>
          </div>
          <span className="flex items-center gap-1.5 font-semibold text-bone">
            <Phone size={13} className="text-blood" />
            <a href="tel:03008141533" className="transition-colors hover:text-blood">
              0300 8141533
            </a>
          </span>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-iron bg-ink/90 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5 md:px-10">
          <a href="/" className="flex shrink-0 items-center" aria-label="Fitness Demon home">
            <Image
              src="/purefitnesslogo.png"
              alt="Fitness Demon"
              width={1423}
              height={1105}
              priority
              className="h-12 w-auto md:h-14"
            />
          </a>

          <nav className="hidden items-center gap-7 xl:flex">
            {LINKS.map((link) => {
              const isActive = link.section
                ? active === link.section
                : isOnPage(link.href);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 text-sm font-semibold uppercase tracking-wider transition-colors ${
                    isActive ? "text-bone" : "text-ash hover:text-bone"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 bg-blood transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-sm border border-emerald-500/40 bg-emerald-500/10 text-bone transition-colors hover:bg-emerald-500/20"
            >
              <WhatsAppIcon size={18} />
            </a>
            <a
              href="tel:03008141533"
              className="flex items-center gap-2 text-sm font-semibold text-bone transition-colors hover:text-blood"
            >
              <Phone size={16} className="text-blood" />
              0300 8141533
            </a>
            <a
              href="/#location"
              className="group flex items-center gap-2 rounded-sm bg-blood px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-bone transition-colors hover:bg-ember"
            >
              Join Now
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Tablet nav (xl and below) — hamburger */}
          <div className="flex items-center gap-3 xl:hidden">
            <a
              href="tel:03008141533"
              aria-label="Call Fitness Demon"
              className="flex h-10 w-10 items-center justify-center rounded-sm border border-iron text-bone md:hidden"
            >
              <Phone size={18} className="text-blood" />
            </a>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-sm border border-iron text-bone"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / tablet menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-iron bg-ink/95 backdrop-blur-md xl:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col px-6 py-5">
              <nav className="flex flex-col">
                {LINKS.map((link, i) => {
                  const isActive = link.section
                    ? active === link.section
                    : isOnPage(link.href);
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.04 }}
                      className={`flex items-center justify-between border-b border-iron/50 py-4 text-base font-semibold uppercase tracking-wider ${
                        isActive ? "text-blood" : "text-ash hover:text-bone"
                      }`}
                    >
                      {link.label}
                      <ArrowRight size={16} className="text-iron" />
                    </motion.a>
                  );
                })}
              </nav>

              <div className="mt-5 flex flex-col gap-3">
                <a
                  href="tel:03008141533"
                  className="flex items-center justify-center gap-2 rounded-sm border border-iron px-5 py-3.5 text-sm font-semibold text-bone"
                >
                  <Phone size={16} className="text-blood" />
                  0300 8141533
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-sm border border-emerald-500/40 bg-emerald-500/10 px-5 py-3.5 text-sm font-semibold text-bone transition-colors hover:bg-emerald-500/20"
                >
                  <WhatsAppIcon size={16} />
                  WhatsApp
                </a>
                <a
                  href="/#location"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-sm bg-blood px-5 py-3.5 text-sm font-bold uppercase tracking-wider text-bone"
                >
                  <Dumbbell size={16} />
                  Join Now
                </a>
                <p className="mt-2 flex items-center justify-center gap-1.5 text-xs text-ash">
                  <MapPin size={13} className="text-blood" />
                  13 Main bazar mustafa abad, Mustafabad, Lahore
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
