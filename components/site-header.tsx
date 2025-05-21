"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const mainNav = [
	{ title: "Clases", href: "/clases" },
	{ title: "Paquetes", href: "/paquetes" },
	{ title: "Reservar", href: "/reservar" },
	{ title: "Nosotros", href: "/nosotros" },
]

export function SiteHeader() {
	const pathname = usePathname()
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	// No renderizar el header en las páginas de admin
	if (pathname?.startsWith("/admin")) {
		return null
	}

	return (
		<header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm">
			<div className="container mx-auto flex h-20 items-center justify-between px-4">
				<div className="flex items-center gap-6 md:gap-10">
					<div className="flex items-center gap-6 md:gap-10">
						<Link href="/" className="flex items-center" aria-label="Inicio">
							<img
								src="/innataBlack.png"
								alt="Logo Innata"
								className="h-20 w-auto max-w-[150px]"
							/>
						</Link>
					</div>
				</div>

				<div className="flex items-center gap-4">
					<nav className="hidden md:flex gap-6">
						{mainNav.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									"text-sm font-medium transition-colors hover:text-brand-burgundy",
									pathname === item.href
										? "text-brand-burgundy"
										: "text-zinc-800",
								)}
							>
								{item.title}
							</Link>
						))}
					</nav>

					<div className="hidden md:flex items-center gap-3">
						<Button asChild className="bg-brand-burgundy hover:bg-brand-burgundy/90 text-white rounded-full">
							<Link href="/login" className="flex items-center gap-1">
								Iniciar Sesión{" "}
								<ChevronRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>

					<Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="text-zinc-800 md:hidden"
							>
								{isMenuOpen ? (
									<X className="h-6 w-6" />
								) : (
									<Menu className="h-6 w-6" />
								)}
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent
							side="right"
							className="bg-white text-zinc-800 pt-10"
						>
							<nav className="flex flex-col gap-6">
								{mainNav.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										className={cn(
											"text-lg font-medium transition-colors hover:text-brand-burgundy",
											pathname === item.href
												? "text-brand-burgundy"
												: "text-zinc-800",
										)}
										onClick={() => setIsMenuOpen(false)}
									>
										{item.title}
									</Link>
								))}
								<Button asChild className="mt-4 bg-brand-burgundy hover:bg-brand-burgundy/90 text-white rounded-full">
									<Link href="/login" className="flex items-center gap-1" onClick={() => setIsMenuOpen(false)}>
										Iniciar Sesión{" "}
										<ChevronRight className="h-4 w-4" />
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
