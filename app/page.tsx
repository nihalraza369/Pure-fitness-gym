import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Trainers from "@/components/Trainers";
import Timings from "@/components/Timings";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Trainers />
      <Timings />
      <Products />
      <WhyUs />
      <Reviews />
      <Location />
      <Footer />
    </main>
  );
}
