import Image from "next/image";
import { Instagram, Facebook, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-iron bg-ink px-6 py-14 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <Image
            src="/purefitnesslogo.png"
            alt="Pure Fitness Gym"
            width={1423}
            height={1105}
            className="h-14 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm text-ash">
            Gulshan-e-Iqbal&rsquo;s home for weightlifting, CrossFit and
            class-based training. Branch 3.
          </p>
          <div className="mt-5 flex gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="text-ash transition-colors hover:text-blood"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-ash transition-colors hover:text-blood"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-bone">
              Explore
            </p>
            <ul className="space-y-2 text-sm text-ash">
              <li><a href="/trainers" className="hover:text-bone">Trainers</a></li>
              <li><a href="#services" className="hover:text-bone">Services</a></li>
              <li><a href="#products" className="hover:text-bone">Products</a></li>
              <li><a href="#why" className="hover:text-bone">Why Us</a></li>
              <li><a href="#hours" className="hover:text-bone">Timings</a></li>
              <li><a href="#location" className="hover:text-bone">Location</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-bone">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-ash">
              <li className="flex items-start gap-2">
                <Phone size={15} className="mt-0.5 shrink-0 text-blood" />
                0335 2846360
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0 text-blood" />
                Block 13-D/3, Gulshan-e-Iqbal, Karachi
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-iron pt-6 text-xs text-ash">
        © {new Date().getFullYear()} Pure Fitness Gym. All rights reserved.
      </div>
    </footer>
  );
}
