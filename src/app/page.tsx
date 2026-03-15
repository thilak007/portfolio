import {
  Navigation,
  Hero,
  Experience,
  Projects,
  CodingProfiles,
  Skills,
  Contact,
  Footer,
} from "@/components";

/**
 * Minimal Portfolio — Designed for impact
 * 
 * Focused on what matters to hiring managers:
 * - Clear technical expertise
 * - Measurable impact
 * - Distributed systems depth
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Experience />
      <Projects />
      <CodingProfiles />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
