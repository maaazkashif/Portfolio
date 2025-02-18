import { About } from "./components/about"
import { Contact } from "./components/contact"
import { Experience } from "./components/experience"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { Projects } from "./components/projects"
import { TechStack } from "./components/tech-stack"
import { Background } from "@/components/Background"

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4">
          <About />
          <Projects />
          <Experience />
          <TechStack />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

