"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BarChart3, CalendarDays, CreditCard, LayoutDashboard, Menu, Search, Settings, Users, X } from "lucide-react"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-black border-r border-zinc-800 p-4 transition-transform duration-300 md:relative md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`} 
      >
        <div className="flex justify-between items-center mb-8">
          <div className="font-extrabold text-2xl tracking-tight">
            CYCLE<span className="text-blue-500">ADMIN</span>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsSidebarOpen(false)}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        <nav className="space-y-2">
          <Link
            href="/admin"
            className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-zinc-900 rounded-md"
          >
            <LayoutDashboard className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/admin/reservations"
            className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-zinc-900 rounded-md"
          >
            <CalendarDays className="h-5 w-5" />
            <span>Reservaciones</span>
          </Link>
          <Link
            href="/admin/payments"
            className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-zinc-900 rounded-md"
          >
            <CreditCard className="h-5 w-5" />
            <span>Pagos</span>
          </Link>
          <Link
            href="/admin/classes"
            className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-zinc-900 rounded-md"
          >
            <BarChart3 className="h-5 w-5" />
            <span>Clases</span>
          </Link>
          <Link
            href="/admin/users"
            className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-zinc-900 rounded-md"
          >
            <Users className="h-5 w-5" />
            <span>Usuarios</span>
          </Link>
          <Link
            href="/admin/settings"
            className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-zinc-900 rounded-md"
          >
            <Settings className="h-5 w-5" />
            <span>Configuración</span>
          </Link>
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <Button
            variant="outline"
            className="w-full border-zinc-700 text-white hover:bg-zinc-800"
            onClick={() => (window.location.href = "/")}
          >
            Volver al Sitio
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 bg-zinc-950 border-b border-zinc-800 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white"
                onClick={() => setIsSidebarOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </Button>
              <h1 className="text-xl font-bold md:hidden">CycleAdmin</h1>
            </div>
            <div className="flex items-center gap-4">
            </div>
          </div>
        </header>

        <main>{children}</main>
      </div>
    </div>
  )
}
