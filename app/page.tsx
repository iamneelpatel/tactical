import Hero from "@/components/hero"
import Features from "@/components/features"
import Services from "@/components/services"
import About from "@/components/about"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Features />
      <Services />
      <About />
      <Contact />
    </main>
  )
}

