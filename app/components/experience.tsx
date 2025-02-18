import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const experiences = [
  {
    title: "Office Administration Assistant",
    company: "Canada's Wonderland",
    period: "May 2023 - Present",
    logo: "/CW.png",
    responsibilities: [
    ],
  },
  {
    title: "Retail Store Associate",
    company: "Winners – The TJX Companies",
    period: "Nov 2022 - Present",
    logo: "/TJX.png",
    responsibilities: [
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image src={exp.logo || "/placeholder.svg"} alt={exp.company} fill className="object-contain" />
                </div>
                <div>
                  <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {exp.company} | {exp.period}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-sm">
                      {resp}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

