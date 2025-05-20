"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart3,
  CalendarDays,
  CreditCard,
  DollarSign,
  LayoutDashboard,
  Settings,
  Users,
  PlusCircle,
  Search,
  CheckCircle,
  XCircle,
  Menu,
  X,
} from "lucide-react"

// Datos de ejemplo
const reservations = [
  { id: 1, user: "María Garc��a", class: "RHYTHM RIDE", date: "2023-04-22", time: "18:00", status: "confirmed" },
  { id: 2, user: "Juan Pérez", class: "POWER CYCLE", date: "2023-04-22", time: "19:00", status: "confirmed" },
  { id: 3, user: "Ana Rodríguez", class: "HIIT CYCLE", date: "2023-04-23", time: "07:00", status: "pending" },
  { id: 4, user: "Carlos López", class: "ENDURANCE RIDE", date: "2023-04-23", time: "08:00", status: "confirmed" },
  { id: 5, user: "Laura Martínez", class: "RHYTHM RIDE", date: "2023-04-24", time: "17:00", status: "cancelled" },
]

const payments = [
  {
    id: 1,
    user: "María García",
    package: "PAQUETE 10 CLASES",
    amount: "$200",
    date: "2023-04-15",
    status: "completed",
  },
  { id: 2, user: "Juan Pérez", package: "MEMBRESÍA MENSUAL", amount: "$350", date: "2023-04-10", status: "completed" },
  { id: 3, user: "Ana Rodríguez", package: "PASE INDIVIDUAL", amount: "$25", date: "2023-04-20", status: "pending" },
  { id: 4, user: "Carlos López", package: "PAQUETE 5 CLASES", amount: "$110", date: "2023-04-18", status: "completed" },
  { id: 5, user: "Laura Martínez", package: "PASE INDIVIDUAL", amount: "$25", date: "2023-04-22", status: "completed" },
]

const timeSlots = [
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
]

export default function AdminDashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date())
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
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2 text-blue-500 bg-zinc-900 rounded-md">
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
              <h1 className="text-xl font-bold">Dashboard</h1>
            </div>
          </div>
        </header>

        <main className="p-6">
          {/* Main Content Tabs */}
          <Tabs defaultValue="reservations" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="reservations">Reservaciones</TabsTrigger>
              <TabsTrigger value="payments">Pagos</TabsTrigger>
              <TabsTrigger value="calendar">Calendario</TabsTrigger>
            </TabsList>

            <TabsContent value="reservations">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Reservaciones Recientes</h2>
                <Button className="bg-blue-500 hover:bg-blue-600">
                  <PlusCircle className="h-4 w-4 mr-2" /> Nueva Reserva
                </Button>
              </div>

              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-zinc-800">
                          <th className="text-left p-4 font-medium text-gray-400">ID</th>
                          <th className="text-left p-4 font-medium text-gray-400">Usuario</th>
                          <th className="text-left p-4 font-medium text-gray-400">Clase</th>
                          <th className="text-left p-4 font-medium text-gray-400">Fecha</th>
                          <th className="text-left p-4 font-medium text-gray-400">Hora</th>
                          <th className="text-left p-4 font-medium text-gray-400">Estado</th>
                          <th className="text-left p-4 font-medium text-gray-400">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {reservations.map((reservation) => (
                          <tr key={reservation.id} className="border-b border-zinc-800">
                            <td className="p-4">#{reservation.id}</td>
                            <td className="p-4">{reservation.user}</td>
                            <td className="p-4">{reservation.class}</td>
                            <td className="p-4">{reservation.date}</td>
                            <td className="p-4">{reservation.time}</td>
                            <td className="p-4">
                              <span
                                className={`px-2 py-1 rounded-full text-xs ${
                                  reservation.status === "confirmed"
                                    ? "bg-green-500/20 text-green-500"
                                    : reservation.status === "pending"
                                      ? "bg-yellow-500/20 text-yellow-500"
                                      : "bg-red-500/20 text-red-500"
                                }`}
                              >
                                {reservation.status === "confirmed"
                                  ? "Confirmada"
                                  : reservation.status === "pending"
                                    ? "Pendiente"
                                    : "Cancelada"}
                              </span>
                            </td>
                            <td className="p-4">
                              <div className="flex gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 border-zinc-700 text-white hover:bg-zinc-800"
                                >
                                  Editar
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 border-zinc-700 text-white hover:bg-zinc-800"
                                >
                                  Cancelar
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="payments">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Pagos Recientes</h2>
                <Button className="bg-blue-500 hover:bg-blue-600">
                  <PlusCircle className="h-4 w-4 mr-2" /> Registrar Pago
                </Button>
              </div>

              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-zinc-800">
                          <th className="text-left p-4 font-medium text-gray-400">ID</th>
                          <th className="text-left p-4 font-medium text-gray-400">Usuario</th>
                          <th className="text-left p-4 font-medium text-gray-400">Paquete</th>
                          <th className="text-left p-4 font-medium text-gray-400">Monto</th>
                          <th className="text-left p-4 font-medium text-gray-400">Fecha</th>
                          <th className="text-left p-4 font-medium text-gray-400">Estado</th>
                          <th className="text-left p-4 font-medium text-gray-400">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {payments.map((payment) => (
                          <tr key={payment.id} className="border-b border-zinc-800">
                            <td className="p-4">#{payment.id}</td>
                            <td className="p-4">{payment.user}</td>
                            <td className="p-4">{payment.package}</td>
                            <td className="p-4">{payment.amount}</td>
                            <td className="p-4">{payment.date}</td>
                            <td className="p-4">
                              <span
                                className={`px-2 py-1 rounded-full text-xs ${
                                  payment.status === "completed"
                                    ? "bg-green-500/20 text-green-500"
                                    : "bg-yellow-500/20 text-yellow-500"
                                }`}
                              >
                                {payment.status === "completed" ? "Completado" : "Pendiente"}
                              </span>
                            </td>
                            <td className="p-4">
                              <div className="flex gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 border-zinc-700 text-white hover:bg-zinc-800"
                                >
                                  Ver
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 border-zinc-700 text-white hover:bg-zinc-800"
                                >
                                  Factura
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="calendar">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-zinc-900 border-zinc-800 md:col-span-1">
                  <CardHeader>
                    <CardTitle>Calendario</CardTitle>
                    <CardDescription className="text-gray-400">
                      Selecciona una fecha para ver o agregar clases
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="overflow-hidden flex justify-center px-0">
                    <div className="w-full max-w-[280px]">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="bg-zinc-900 text-white"
                      classNames={{
                        day_selected: "bg-blue-500 text-white",
                        day_today: "bg-zinc-800 text-white",
                        day: "text-white hover:bg-zinc-800",
                      }}
                    />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-900 border-zinc-800 md:col-span-2">
                  <CardHeader>
                    <CardTitle>Agregar Clase</CardTitle>
                    <CardDescription className="text-gray-400">
                      Programa una nueva clase en el calendario
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="class-type">Tipo de Clase</Label>
                          <Select>
                            <SelectTrigger className="bg-zinc-950 border-zinc-800 text-white">
                              <SelectValue placeholder="Seleccionar clase" />
                            </SelectTrigger>
                            <SelectContent className="bg-zinc-950 border-zinc-800 text-white">
                              <SelectItem value="rhythm">RHYTHM RIDE</SelectItem>
                              <SelectItem value="power">POWER CYCLE</SelectItem>
                              <SelectItem value="endurance">ENDURANCE RIDE</SelectItem>
                              <SelectItem value="hiit">HIIT CYCLE</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="instructor">Instructor</Label>
                          <Select>
                            <SelectTrigger className="bg-zinc-950 border-zinc-800 text-white">
                              <SelectValue placeholder="Seleccionar instructor" />
                            </SelectTrigger>
                            <SelectContent className="bg-zinc-950 border-zinc-800 text-white">
                              <SelectItem value="carlos">Carlos Mendez</SelectItem>
                              <SelectItem value="ana">Ana Torres</SelectItem>
                              <SelectItem value="miguel">Miguel Ángel</SelectItem>
                              <SelectItem value="laura">Laura Gómez</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="date">Fecha</Label>
                          <Input
                            type="date"
                            id="date"
                            className="bg-zinc-950 border-zinc-800 text-white"
                            value={date ? date.toISOString().split("T")[0] : ""}
                            readOnly
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="time">Hora</Label>
                          <Select>
                            <SelectTrigger className="bg-zinc-950 border-zinc-800 text-white">
                              <SelectValue placeholder="Seleccionar hora" />
                            </SelectTrigger>
                            <SelectContent className="bg-zinc-950 border-zinc-800 text-white">
                              {timeSlots.map((time) => (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="capacity">Capacidad</Label>
                          <Input
                            type="number"
                            id="capacity"
                            placeholder="20"
                            className="bg-zinc-950 border-zinc-800 text-white"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="duration">Duración (minutos)</Label>
                          <Select>
                            <SelectTrigger className="bg-zinc-950 border-zinc-800 text-white">
                              <SelectValue placeholder="Seleccionar duración" />
                            </SelectTrigger>
                            <SelectContent className="bg-zinc-950 border-zinc-800 text-white">
                              <SelectItem value="30">30 minutos</SelectItem>
                              <SelectItem value="45">45 minutos</SelectItem>
                              <SelectItem value="60">60 minutos</SelectItem>
                              <SelectItem value="75">75 minutos</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Button className="w-full bg-blue-500 hover:bg-blue-600">Programar Clase</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
