import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Navigation } from "./navigation"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link className="mr-6 flex items-center space-x-2" href="/">
          <span className="font-bold">maazk</span>
        </Link>
        <Navigation />
        <Button variant="outline" className="ml-auto" asChild>
          <Link href="https://drive.google.com/drive/folders/13WvawmhCqXapSFmynj8ClDFTKpJ1_2cI" target="_blank">
            Resume
          </Link>
        </Button>
      </div>
    </header>
  )
}

