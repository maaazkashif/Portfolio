"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
}

export function ProjectCard({ title, description, image, link, tags }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const truncatedDescription = description.slice(0, 100) + (description.length > 100 ? "..." : "")

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <div className="relative">
          <p
            className={`text-sm text-muted-foreground mb-4 transition-all duration-300 ease-in-out ${isExpanded ? "h-auto" : "h-[4.5em] overflow-hidden"}`}
          >
            {isExpanded ? description : truncatedDescription}
          </p>
          {description.length > 100 && (
            <Button
              variant="link"
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-0 h-auto font-semibold text-primary hover:no-underline"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </Button>
          )}
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={link} target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
          <Github className="h-4 w-4" />
          View on GitHub
        </Link>
      </CardFooter>
    </Card>
  )
}

