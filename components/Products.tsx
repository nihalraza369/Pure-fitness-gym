"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";

const WHATSAPP_NUMBER = "923352846360";

export function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function waLink(name: string) {
  const msg = encodeURIComponent(
    `Salam Pure Fitness Gym! I want to order: ${name}`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

const PRODUCTS = [
  {
    name: "Whey Protein",
    desc: "Fast-absorbing protein for muscle recovery after every session.",
    price: "Rs 7,500",
    img: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/opn/opn02866/l/100.jpg",
  },
  {
    name: "Creatine Monohydrate",
    desc: "Backed by science — more strength, power and water in the muscle.",
    price: "Rs 3,200",
    img: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/msf/msf50221/y/40.jpg",
  },
  {
    name: "Pre-Workout",
    desc: "Energy, focus and a pump to start every training day on time.",
    price: "Rs 4,000",
    img: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/msf/msf50221/y/40.jpg",
  },
  {
    name: "Mass Gainer",
    desc: "Calorie-dense shakes for hard gainers chasing serious size.",
    price: "Rs 8,900",
    img: "https://www.gosupps.com/media/catalog/product/cache/25/small_image/375x450/9df78eab33525d08d6e5fb8d27136e95/7/1/716aiVGwDcL.jpg",
  },
  {
    name: "Amino Acids (BCAA)",
    desc: "Drink it during training to reduce fatigue and protect muscle.",
    price: "Rs 3,500",
    img: "https://muscleup.pk/wp-content/uploads/2025/11/rule-1-whey-protein-chocolate-fudge-flavor-5-lbs-in-pakistan.png",
  },
  {
    name: "Multivitamins",
    desc: "Daily micronutrient support for energy, immunity and recovery.",
    price: "Rs 2,500",
    img: "https://www.bravonutrition.pk/wp-content/uploads/2025/01/proscience-whey-protein-in-pakistan-karachi-lahore-islamabad-at-bravo-nutrition.webp",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-char px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl leading-[0.9] text-bone md:text-7xl"
          >
            FUEL YOUR
            <br />
            <span className="text-blood">PROGRESS.</span>
          </motion.h2>
          <p className="max-w-sm text-ash">
            Genuine supplements on sale at the gym. Order on WhatsApp and
            collect it from the front desk on your next visit.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-sm border border-iron bg-char transition-colors hover:bg-ink"
            >
              <div className="relative h-72 overflow-hidden md:h-80">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-4 opacity-80 grayscale-[35%] transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-char via-transparent to-transparent" />
                <span className="absolute right-4 top-4 bg-blood px-3 py-1 font-display text-sm tracking-wide text-bone">
                  {p.price}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-8 pt-6">
                <h3 className="mb-2 font-display text-xl tracking-wide text-bone">
                  {p.name.toUpperCase()}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-ash">
                  {p.desc}
                </p>
                <a
                  href={waLink(p.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 px-5 py-3 text-sm font-bold uppercase tracking-wider text-bone transition-colors"
                >
                  <WhatsAppIcon size={16} />
                  Order on WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex items-center gap-2 text-sm text-ash"
        >
          <Flame size={16} className="text-blood" />
          Free muscle-building guide with every first order.
        </motion.p>
      </div>
    </section>
  );
}
