import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingWhatsapp } from "@/components/floating-whatsapp";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Frames } from "@/components/sections/frames";
import { Lenses } from "@/components/sections/lenses";
import { Features } from "@/components/sections/features";
import { Testimonials } from "@/components/sections/testimonials";
import { WhatsappCta } from "@/components/sections/whatsapp-cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Frames />
        <Lenses />
        <Features />
        <Testimonials />
        <WhatsappCta />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
