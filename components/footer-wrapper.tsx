"use client"
import { usePathname } from "next/navigation"
import { SiteFooter } from "@/components/site-footer"

const hideFooterRoutes = ["/admin", "/login", "/registro"]

export function FooterWrapper() {
  const pathname = usePathname()
  const hideFooter = hideFooterRoutes.some(route => pathname?.startsWith(route))
  if (hideFooter) return null
  return <SiteFooter />
}