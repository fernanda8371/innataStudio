"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { CalendarIcon, Clock } from "lucide-react"

const timeSlots = [
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "12:00",
  "13:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
]

const classes = [
  { id: 1, name: "RHYTHM RIDE", instructor: "Carlos Mendez", duration: "45 min" },
  { id: 2, name: "POWER CYCLE", instructor: "Ana Torres", duration: "60 min" },
  { id: 3, name: "ENDURANCE RIDE", instructor: "Miguel Ángel", duration: "75 min" },
  { id: 4, name: "HIIT CYCLE", instructor: "Laura Gómez", duration: "30 min" },
]

export default function BookingPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedClass, setSelectedClass] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-16 bg-zinc-900">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            RESERVA TU <span className="text-blue-500">CLASE</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Selecciona fecha, clase y horario para asegurar tu lugar
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-black">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="calendar" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="calendar" className="text-lg">
                Calendario
              </TabsTrigger>
              <TabsTrigger value="classes" className="text-lg">
                Clases
              </TabsTrigger>
            </TabsList>

            <TabsContent value="calendar" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-0">
                  <div className="p-6 border-b border-zinc-800 flex items-center">
                    <CalendarIcon className="mr-2 h-5 w-5 text-blue-500" />
                    <h3 className="text-xl font-bold">Selecciona Fecha</h3>
                  </div>
                  <div className="flex justify-center items-center py-6">
                    <div className="w-full max-w-[280px]">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        locale={es}
                        className="bg-zinc-900 text-white w-full"
                        classNames={{
                          day_selected: "bg-blue-500 text-white",
                          day_today: "bg-zinc-800 text-white",
                          day: "text-white hover:bg-zinc-800",
                        }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

                <Card className="bg-zinc-900 border-zinc-800">
                  <CardContent className="p-0">
                    <div className="p-6 border-b border-zinc-800 flex items-center">
                      <Clock className="mr-2 h-5 w-5 text-blue-500" />
                      <h3 className="text-xl font-bold">Selecciona Clase</h3>
                    </div>
                    <div className="p-4 space-y-2">
                      {classes.map((classItem) => (
                        <Button
                          key={classItem.id}
                          variant={selectedClass === classItem.id ? "default" : "outline"}
                          className={`w-full justify-between ${
                            selectedClass === classItem.id
                              ? "bg-blue-500 hover:bg-blue-600 text-white"
                              : "border-zinc-700 text-white hover:bg-zinc-800"
                          }`}
                          onClick={() => setSelectedClass(classItem.id)}
                        >
                          <span>{classItem.name}</span>
                          <span className="text-sm opacity-70">{classItem.duration}</span>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-900 border-zinc-800">
                  <CardContent className="p-0">
                    <div className="p-6 border-b border-zinc-800 flex items-center">
                      <Clock className="mr-2 h-5 w-5 text-blue-500" />
                      <h3 className="text-xl font-bold">Selecciona Horario</h3>
                    </div>
                    <div className="p-4 grid grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          className={`${
                            selectedTime === time
                              ? "bg-blue-500 hover:bg-blue-600 text-white"
                              : "border-zinc-700 text-white hover:bg-zinc-800"
                          }`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Resumen de Reserva</h3>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-zinc-800">
                      <span className="text-gray-400">Fecha:</span>
                      <span className="font-medium">
                        {date ? format(date, "EEEE, d 'de' MMMM 'de' yyyy", { locale: es }) : "No seleccionada"}
                      </span>
                    </div>

                    <div className="flex justify-between items-center pb-2 border-b border-zinc-800">
                      <span className="text-gray-400">Clase:</span>
                      <span className="font-medium">
                        {selectedClass ? classes.find((c) => c.id === selectedClass)?.name : "No seleccionada"}
                      </span>
                    </div>

                    <div className="flex justify-between items-center pb-2 border-b border-zinc-800">
                      <span className="text-gray-400">Instructor:</span>
                      <span className="font-medium">
                        {selectedClass ? classes.find((c) => c.id === selectedClass)?.instructor : "No seleccionado"}
                      </span>
                    </div>

                    <div className="flex justify-between items-center pb-2 border-b border-zinc-800">
                      <span className="text-gray-400">Horario:</span>
                      <span className="font-medium">{selectedTime ? `${selectedTime} hrs` : "No seleccionado"}</span>
                    </div>
                  </div>

                  <Button
                    className="w-full mt-6 bg-blue-500 hover:bg-blue-600 font-bold text-lg py-6"
                    disabled={!date || !selectedClass || !selectedTime}
                  >
                    CONFIRMAR RESERVA
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="classes" className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                {classes.map((classItem) => (
                  <Card key={classItem.id} className="bg-zinc-900 border-zinc-800">
                    <CardContent className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <h3 className="text-xl font-bold">{classItem.name}</h3>
                        <p className="text-gray-400">
                          {classItem.instructor} • {classItem.duration}
                        </p>
                      </div>
                      <Button
                        className="bg-blue-500 hover:bg-blue-600"
                        onClick={() => {
                          setSelectedClass(classItem.id)
                          document.querySelector('[data-value="calendar"]')?.click()
                        }}
                      >
                        RESERVAR
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Policy Section */}
      <section className="py-16 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-center mb-8">
            POLÍTICAS DE <span className="text-blue-500">RESERVA</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Cancelaciones</h3>
              <p className="text-gray-400">
                Puedes cancelar tu reserva hasta 4 horas antes de la clase sin penalización. Cancelaciones tardías
                resultarán en el cargo de la clase.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">Llegada</h3>
              <p className="text-gray-400">
                Te recomendamos llegar 15 minutos antes de tu clase. El acceso se cierra 5 minutos después del inicio de
                la sesión.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">Lista de espera</h3>
              <p className="text-gray-400">
                Si la clase está llena, puedes unirte a la lista de espera y serás notificado automáticamente si se
                libera un lugar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
