import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function About() {
  return (
    <section id="about" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 ring-2 ring-primary shadow-lg">
            <Image
              src="/maazimage.png"
              alt="Maaz Kashif"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Maaz Kashif
            </h1>
            <p className="text-xl text-muted-foreground">
              Computer Science Student | Full Stack Developer | Data Analyst
            </p>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Passionate about developing innovative solutions and analyzing complex data.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link href="https://github.com/maaazkashif" target="_blank">
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/maazkashif" target="_blank">
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:maaz.kashif@torontomu.ca">
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

