"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, User } from "lucide-react"
import { cn } from "@/lib/utils"

const mainNav = [
  { title: "Inicio", href: "/" },
  { title: "Clases", href: "/clases" },
  { title: "Paquetes", href: "/paquetes" },
  { title: "Reservar", href: "/reservar" },
  { title: "Nosotros", href: "/nosotros" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-sm border-b border-zinc-800">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="font-extrabold text-2xl tracking-tight">
            CYCLE<span className="text-blue-500">STUDIO</span>
          </Link>

          <nav className="hidden md:flex gap-6">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-500",
                  pathname === item.href ? "text-blue-500" : "text-zinc-200",
                )}
              >
                {item.title.toUpperCase()}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="icon" className="text-white hover:text-blue-500 hover:bg-transparent">
            <Link href="/perfil">
              <User className="h-5 w-5" />
              <span className="sr-only">Perfil</span>
            </Link>
          </Button>

          <Button asChild className="hidden md:flex bg-blue-500 hover:bg-blue-600">
            <Link href="/reservar">RESERVAR AHORA</Link>
          </Button>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black text-white border-zinc-800 pt-10">
              <nav className="flex flex-col gap-6">
                {mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-blue-500",
                      pathname === item.href ? "text-blue-500" : "text-zinc-200",
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title.toUpperCase()}
                  </Link>
                ))}
                <Button asChild className="mt-4 bg-blue-500 hover:bg-blue-600">
                  <Link href="/reservar" onClick={() => setIsMenuOpen(false)}>
                    RESERVAR AHORA
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
