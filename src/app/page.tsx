"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <div className="divider" />
        <About />
        <div className="divider" />
        <Works />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
