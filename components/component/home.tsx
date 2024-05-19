import { Contact } from "./contact"
import { Hero } from "./hero"
import { Projects } from "./projects"
import { Skills } from "./skills"

export function Homepage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

