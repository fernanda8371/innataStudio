"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, ChevronRight } from "lucide-react"
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
		<header className="absolute top-0 z-50 w-full">
			<div className="container flex h-24 items-center justify-between">
				<div className="flex items-center gap-6 md:gap-10">
					<Link href="/" className="flex items-center" aria-label="Inicio">
						<img
							src="/innataBlack.png"
							alt="Logo Innata"
							className="h-20 w-auto max-w-[150px]"
						/>
					</Link>
				</div>

				<div className="flex items-center gap-4">
					<nav className="hidden md:flex gap-6">
						{mainNav.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									"text-sm font-medium transition-colors hover:text-custom-teal",
									pathname === item.href
										? "text-custom-teal"
										: "text-zinc-800",
								)}
							>
								{item.title}
							</Link>
						))}
					</nav>


					<Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="text-zinc-800"
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
							className="bg-custom-cream text-zinc-800 pt-10"
						>
							<nav className="flex flex-col gap-6">
								{mainNav.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										className={cn(
											"text-lg font-medium transition-colors hover:text-custom-teal",
											pathname === item.href
												? "text-custom-teal"
												: "text-zinc-800",
										)}
										onClick={() => setIsMenuOpen(false)}
									>
										{item.title}
									</Link>
								))}
								<Button
									asChild
									className="mt-4 bg-zinc-900 hover:bg-zinc-800 text-white rounded-full"
								>
									<Link
										href="/reservar"
										onClick={() => setIsMenuOpen(false)}
									>
										Reservar
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
