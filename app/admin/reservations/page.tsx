"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { CalendarDays, PlusCircle, Search, Download, CheckCircle, XCircle, Clock } from "lucide-react"
import AdminLayout from "@/components/admin-layout"

// Datos de ejemplo
const reservations = [
  {
    id: 1,
    user: "María García",
    email: "maria@example.com",
    phone: "123-456-7890",
    class: "RHYTHM RIDE",
    date: "2023-04-22",
    time: "18:00",
    status: "confirmed",
    package: "PAQUETE 10 CLASES",
    remainingClasses: 8,
  },
  {
    id: 2,
    user: "Juan Pérez",
    email: "juan@example.com",
    phone: "123-456-7891",
    class: "POWER CYCLE",
    date: "2023-04-22",
    time: "19:00",
    status: "confirmed",
    package: "MEMBRESÍA MENSUAL",
    remainingClasses: "Ilimitado",
  },
  {
    id: 3,
    user: "Ana Rodríguez",
    email: "ana@example.com",
    phone: "123-456-7892",
    class: "HIIT CYCLE",
    date: "2023-04-23",
    time: "07:00",
    status: "pending",
    package: "PASE INDIVIDUAL",
    remainingClasses: 0,
  },
  {
    id: 4,
    user: "Carlos López",
    email: "carlos@example.com",
    phone: "123-456-7893",
    class: "ENDURANCE RIDE",
    date: "2023-04-23",
    time: "08:00",
    status: "confirmed",
    package: "PAQUETE 5 CLASES",
    remainingClasses: 3,
  },
  {
    id: 5,
    user: "Laura Martínez",
    email: "laura@example.com",
    phone: "123-456-7894",
    class: "RHYTHM RIDE",
    date: "2023-04-24",
    time: "17:00",
    status: "cancelled",
    package: "PASE INDIVIDUAL",
    remainingClasses: 0,
  },
  {
    id: 6,
    user: "Roberto Sánchez",
    email: "roberto@example.com",
    phone: "123-456-7895",
    class: "POWER CYCLE",
    date: "2023-04-24",
    time: "18:00",
    status: "confirmed",
    package: "PAQUETE 10 CLASES",
    remainingClasses: 5,
  },
  {
    id: 7,
    user: "Patricia Gómez",
    email: "patricia@example.com",
    phone: "123-456-7896",
    class: "RHYTHM RIDE",
    date: "2023-04-25",
    time: "07:00",
    status: "confirmed",
    package: "MEMBRESÍA MENSUAL",
    remainingClasses: "Ilimitado",
  },
  {
    id: 8,
    user: "Miguel Torres",
    email: "miguel@example.com",
    phone: "123-456-7897",
    class: "HIIT CYCLE",
    date: "2023-04-25",
    time: "18:00",
    status: "pending",
    package: "PAQUETE 5 CLASES",
    remainingClasses: 2,
  },
]

const classes = [
  { id: 1, name: "RHYTHM RIDE", instructor: "Carlos Mendez", duration: "45 min" },
  { id: 2, name: "POWER CYCLE", instructor: "Ana Torres", duration: "60 min" },
  { id: 3, name: "ENDURANCE RIDE", instructor: "Miguel Ángel", duration: "75 min" },
  { id: 4, name: "HIIT CYCLE", instructor: "Laura Gómez", duration: "30 min" },
  { id: 5, name: "RECOVERY RIDE", instructor: "Carlos Mendez", duration: "45 min" },
  { id: 6, name: "RHYTHM & STRENGTH", instructor: "Ana Torres", duration: "60 min" },
]

const timeSlots = [
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
]

export default function ReservationsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [isNewReservationOpen, setIsNewReservationOpen] = useState(false)

  // Filtrar reservaciones
  const filteredReservations = reservations.filter((reservation) => {
    const matchesSearch =
      reservation.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.class.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || reservation.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold">Gestión de Reservaciones</h1>
            <p className="text-gray-400">Administra todas las reservaciones de clases</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Dialog open={isNewReservationOpen} onOpenChange={setIsNewReservationOpen}>
              <DialogTrigger asChild>
                <Button className="bg-blue-500 hover:bg-blue-600">
                  <PlusCircle className="h-4 w-4 mr-2" /> Nueva Reserva
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-zinc-900 border-zinc-800 text-white">
                <DialogHeader>
                  <DialogTitle>Crear Nueva Reservación</DialogTitle>
                  <DialogDescription className="text-gray-400">
                    Complete los detalles para crear una nueva reservación
                  </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="user">Cliente</Label>
                      <Select>
                        <SelectTrigger className="bg-zinc-950 border-zinc-800 text-white">
                          <SelectValue placeholder="Seleccionar cliente" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-950 border-zinc-800 text-white">
                          <SelectItem value="maria">María García</SelectItem>
                          <SelectItem value="juan">Juan Pérez</SelectItem>
                          <SelectItem value="ana">Ana Rodríguez</SelectItem>
                          <SelectItem value="carlos">Carlos López</SelectItem>
                          <SelectItem value="laura">Laura Martínez</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="class">Clase</Label>
                      <Select>
                        <SelectTrigger className="bg-zinc-950 border-zinc-800 text-white">
                          <SelectValue placeholder="Seleccionar clase" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-950 border-zinc-800 text-white">
                          {classes.map((classItem) => (
                            <SelectItem key={classItem.id} value={classItem.id.toString()}>
                              {classItem.name} - {classItem.instructor}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date">Fecha</Label>
                      <Input
                        type="date"
                        id="date"
                        className="bg-zinc-950 border-zinc-800 text-white"
                        value={date ? format(date, "yyyy-MM-dd") : ""}
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
                      <Label htmlFor="package">Paquete</Label>
                      <Select>
                        <SelectTrigger className="bg-zinc-950 border-zinc-800 text-white">
                          <SelectValue placeholder="Seleccionar paquete" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-950 border-zinc-800 text-white">
                          <SelectItem value="individual">PASE INDIVIDUAL</SelectItem>
                          <SelectItem value="5classes">PAQUETE 5 CLASES</SelectItem>
                          <SelectItem value="10classes">PAQUETE 10 CLASES</SelectItem>
                          <SelectItem value="monthly">MEMBRESÍA MENSUAL</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="status">Estado</Label>
                      <Select defaultValue="confirmed">
                        <SelectTrigger className="bg-zinc-950 border-zinc-800 text-white">
                          <SelectValue placeholder="Seleccionar estado" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-950 border-zinc-800 text-white">
                          <SelectItem value="confirmed">Confirmada</SelectItem>
                          <SelectItem value="pending">Pendiente</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <DialogFooter>
                  <Button
                    variant="outline"
                    onClick={() => setIsNewReservationOpen(false)}
                    className="border-zinc-700 text-white hover:bg-zinc-800"
                  >
                    Cancelar
                  </Button>
                  <Button className="bg-blue-500 hover:bg-blue-600" onClick={() => setIsNewReservationOpen(false)}>
                    Crear Reservación
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
              <Download className="h-4 w-4 mr-2" /> Exportar
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-zinc-900 border-zinc-800 lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Filtrar por Fecha</CardTitle>
            </CardHeader>
            <CardContent className="overflow-hidden flex justify-center px-0">
              <div className="w-full max-w-[280px]">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  locale={es}
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


          <Card className="bg-zinc-900 border-zinc-800 col-span-1 md:col-span-3">
            <CardHeader>
              <CardTitle className="text-lg">Reservaciones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Buscar por nombre, email o clase..."
                    className="pl-8 bg-zinc-950 border-zinc-800 text-white w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="bg-zinc-950 border-zinc-800 text-white w-full sm:w-[180px]">
                    <SelectValue placeholder="Filtrar por estado" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-950 border-zinc-800 text-white">
                    <SelectItem value="all">Todos los estados</SelectItem>
                    <SelectItem value="confirmed">Confirmadas</SelectItem>
                    <SelectItem value="pending">Pendientes</SelectItem>
                    <SelectItem value="cancelled">Canceladas</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="text-left p-4 font-medium text-gray-400">ID</th>
                      <th className="text-left p-4 font-medium text-gray-400">Cliente</th>
                      <th className="text-left p-4 font-medium text-gray-400">Clase</th>
                      <th className="text-left p-4 font-medium text-gray-400">Fecha</th>
                      <th className="text-left p-4 font-medium text-gray-400">Hora</th>
                      <th className="text-left p-4 font-medium text-gray-400">Paquete</th>
                      <th className="text-left p-4 font-medium text-gray-400">Estado</th>
                      <th className="text-left p-4 font-medium text-gray-400">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredReservations.length > 0 ? (
                      filteredReservations.map((reservation) => (
                        <tr key={reservation.id} className="border-b border-zinc-800">
                          <td className="p-4">#{reservation.id}</td>
                          <td className="p-4">
                            <div>
                              <div className="font-medium">{reservation.user}</div>
                              <div className="text-sm text-gray-400">{reservation.email}</div>
                            </div>
                          </td>
                          <td className="p-4">{reservation.class}</td>
                          <td className="p-4">{reservation.date}</td>
                          <td className="p-4">{reservation.time}</td>
                          <td className="p-4">
                            <div>
                              <div>{reservation.package}</div>
                              <div className="text-sm text-gray-400">Restantes: {reservation.remainingClasses}</div>
                            </div>
                          </td>
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
                              {reservation.status !== "cancelled" && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 border-zinc-700 text-white hover:bg-zinc-800"
                                >
                                  Cancelar
                                </Button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={8} className="p-4 text-center text-gray-400">
                          No se encontraron reservaciones con los filtros aplicados
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  )
}
