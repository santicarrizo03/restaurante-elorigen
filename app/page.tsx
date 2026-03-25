import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { About } from "@/components/landing/about";
import { Experience } from "@/components/landing/experience";
import { Gallery } from "@/components/landing/gallery";
import { Menu } from "@/components/landing/menu";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Menu />
      <Gallery />
      <CTA />
      <Footer />
    </main>
  );
}
