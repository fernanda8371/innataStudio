"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Clock, Users } from "lucide-react"

// Datos de ejemplo para las clases
const classes = [
  {
    id: 1,
    name: "RHYTHM RIDE",
    description:
      "Pedalea al ritmo de la música con esta clase energética que combina intervalos y coreografía. Perfecta para todos los niveles, te sumergirás en una experiencia inmersiva donde la música guía cada movimiento.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "45 min",
    intensity: "Media",
    instructor: "Carlos Mendez",
    capacity: 25,
    category: "ritmo",
  },
  {
    id: 2,
    name: "POWER CYCLE",
    description:
      "Enfocado en potencia y resistencia. Prepárate para un desafío intenso con intervalos de alta intensidad que te llevarán al límite. Ideal para quienes buscan mejorar su rendimiento y quemar calorías.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "60 min",
    intensity: "Alta",
    instructor: "Ana Torres",
    capacity: 20,
    category: "potencia",
  },
  {
    id: 3,
    name: "ENDURANCE RIDE",
    description:
      "Mejora tu resistencia cardiovascular con esta clase de ritmo constante y desafiante. Trabajarás en mantener un esfuerzo sostenido durante toda la sesión, ideal para mejorar tu capacidad aeróbica.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "75 min",
    intensity: "Media-Alta",
    instructor: "Miguel Ángel",
    capacity: 22,
    category: "resistencia",
  },
  {
    id: 4,
    name: "HIIT CYCLE",
    description:
      "Entrenamiento de intervalos de alta intensidad para maximizar la quema de calorías en poco tiempo. Alternarás entre esfuerzos máximos y períodos de recuperación para un entrenamiento eficiente.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "30 min",
    intensity: "Muy Alta",
    instructor: "Laura Gómez",
    capacity: 18,
    category: "hiit",
  },
  {
    id: 5,
    name: "RECOVERY RIDE",
    description:
      "Sesión de recuperación activa con resistencia ligera y enfoque en técnica. Perfecta para días de descanso activo o principiantes que quieren familiarizarse con el indoor cycling.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "45 min",
    intensity: "Baja",
    instructor: "Carlos Mendez",
    capacity: 25,
    category: "recuperacion",
  },
  {
    id: 6,
    name: "RHYTHM & STRENGTH",
    description:
      "Combina el ciclismo rítmico con segmentos de entrenamiento de fuerza fuera de la bicicleta. Una clase completa que trabaja todo el cuerpo alternando cardio y tonificación muscular.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "60 min",
    intensity: "Media-Alta",
    instructor: "Ana Torres",
    capacity: 20,
    category: "ritmo",
  },
]

// Datos para el horario semanal
const weeklySchedule = [
  {
    day: "Lunes",
    classes: [
      { time: "07:00", name: "RHYTHM RIDE", instructor: "Carlos Mendez", duration: "45 min" },
      { time: "12:00", name: "HIIT CYCLE", instructor: "Laura Gómez", duration: "30 min" },
      { time: "18:00", name: "POWER CYCLE", instructor: "Ana Torres", duration: "60 min" },
      { time: "19:30", name: "RHYTHM RIDE", instructor: "Carlos Mendez", duration: "45 min" },
    ],
  },
  {
    day: "Martes",
    classes: [
      { time: "07:00", name: "HIIT CYCLE", instructor: "Laura Gómez", duration: "30 min" },
      { time: "12:00", name: "RECOVERY RIDE", instructor: "Carlos Mendez", duration: "45 min" },
      { time: "18:00", name: "ENDURANCE RIDE", instructor: "Miguel Ángel", duration: "75 min" },
      { time: "20:00", name: "RHYTHM & STRENGTH", instructor: "Ana Torres", duration: "60 min" },
    ],
  },
  {
    day: "Miércoles",
    classes: [
      { time: "07:00", name: "POWER CYCLE", instructor: "Ana Torres", duration: "60 min" },
      { time: "12:00", name: "RHYTHM RIDE", instructor: "Carlos Mendez", duration: "45 min" },
      { time: "18:00", name: "HIIT CYCLE", instructor: "Laura Gómez", duration: "30 min" },
      { time: "19:00", name: "ENDURANCE RIDE", instructor: "Miguel Ángel", duration: "75 min" },
    ],
  },
  {
    day: "Jueves",
    classes: [
      { time: "07:00", name: "RHYTHM & STRENGTH", instructor: "Ana Torres", duration: "60 min" },
      { time: "12:00", name: "HIIT CYCLE", instructor: "Laura Gómez", duration: "30 min" },
      { time: "18:00", name: "RECOVERY RIDE", instructor: "Carlos Mendez", duration: "45 min" },
      { time: "19:30", name: "POWER CYCLE", instructor: "Ana Torres", duration: "60 min" },
    ],
  },
  {
    day: "Viernes",
    classes: [
      { time: "07:00", name: "ENDURANCE RIDE", instructor: "Miguel Ángel", duration: "75 min" },
      { time: "12:00", name: "RHYTHM RIDE", instructor: "Carlos Mendez", duration: "45 min" },
      { time: "18:00", name: "HIIT CYCLE", instructor: "Laura Gómez", duration: "30 min" },
      { time: "19:00", name: "RHYTHM & STRENGTH", instructor: "Ana Torres", duration: "60 min" },
    ],
  },
  {
    day: "Sábado",
    classes: [
      { time: "09:00", name: "POWER CYCLE", instructor: "Ana Torres", duration: "60 min" },
      { time: "11:00", name: "RHYTHM RIDE", instructor: "Carlos Mendez", duration: "45 min" },
      { time: "16:00", name: "ENDURANCE RIDE", instructor: "Miguel Ángel", duration: "75 min" },
    ],
  },
  {
    day: "Domingo",
    classes: [
      { time: "10:00", name: "RHYTHM & STRENGTH", instructor: "Ana Torres", duration: "60 min" },
      { time: "12:00", name: "RECOVERY RIDE", instructor: "Carlos Mendez", duration: "45 min" },
    ],
  },
]

export default function ClassesPage() {
  const [filter, setFilter] = useState("all")

  const filteredClasses = filter === "all" ? classes : classes.filter((c) => c.category === filter)

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            NUESTRAS <span className="text-blue-500">CLASES</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300 mb-8">
            Descubre nuestra variedad de clases diseñadas para desafiarte y motivarte, sin importar tu nivel de
            experiencia.
          </p>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="classes" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="classes" className="text-lg">
                Clases
              </TabsTrigger>
              <TabsTrigger value="schedule" className="text-lg">
                Horario Semanal
              </TabsTrigger>
            </TabsList>

            <TabsContent value="classes" className="space-y-8">
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
                <Button
                  variant={filter === "all" ? "default" : "outline"}
                  className={`${
                    filter === "all" ? "bg-blue-500 hover:bg-blue-600" : "border-zinc-700 text-white hover:bg-zinc-800"
                  }`}
                  onClick={() => setFilter("all")}
                >
                  Todas
                </Button>
                <Button
                  variant={filter === "ritmo" ? "default" : "outline"}
                  className={`${
                    filter === "ritmo"
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "border-zinc-700 text-white hover:bg-zinc-800"
                  }`}
                  onClick={() => setFilter("ritmo")}
                >
                  Ritmo
                </Button>
                <Button
                  variant={filter === "potencia" ? "default" : "outline"}
                  className={`${
                    filter === "potencia"
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "border-zinc-700 text-white hover:bg-zinc-800"
                  }`}
                  onClick={() => setFilter("potencia")}
                >
                  Potencia
                </Button>
                <Button
                  variant={filter === "resistencia" ? "default" : "outline"}
                  className={`${
                    filter === "resistencia"
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "border-zinc-700 text-white hover:bg-zinc-800"
                  }`}
                  onClick={() => setFilter("resistencia")}
                >
                  Resistencia
                </Button>
                <Button
                  variant={filter === "hiit" ? "default" : "outline"}
                  className={`${
                    filter === "hiit" ? "bg-blue-500 hover:bg-blue-600" : "border-zinc-700 text-white hover:bg-zinc-800"
                  }`}
                  onClick={() => setFilter("hiit")}
                >
                  HIIT
                </Button>
                <Button
                  variant={filter === "recuperacion" ? "default" : "outline"}
                  className={`${
                    filter === "recuperacion"
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "border-zinc-700 text-white hover:bg-zinc-800"
                  }`}
                  onClick={() => setFilter("recuperacion")}
                >
                  Recuperación
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredClasses.map((classItem) => (
                  <Card key={classItem.id} className="bg-zinc-900 border-zinc-800 overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={classItem.image || "/placeholder.svg"}
                        alt={classItem.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold">{classItem.name}</h3>
                        <Badge className="bg-blue-500 hover:bg-blue-500">{classItem.duration}</Badge>
                      </div>
                      <p className="text-gray-400 text-sm mb-4">{classItem.description}</p>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="flex items-center text-gray-300 text-sm">
                          <Clock className="h-4 w-4 mr-2 text-blue-500" />
                          <span>Intensidad: {classItem.intensity}</span>
                        </div>
                        <div className="flex items-center text-gray-300 text-sm">
                          <Users className="h-4 w-4 mr-2 text-blue-500" />
                          <span>Capacidad: {classItem.capacity}</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Instructor: {classItem.instructor}</span>
                        <Button asChild className="bg-blue-500 hover:bg-blue-600">
                          <Link href="/reservar">Reservar</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="schedule">
              <div className="overflow-x-auto">
                <div className="min-w-[800px]">
                  <div className="grid grid-cols-8 gap-2 mb-4">
                    <div className="bg-zinc-900 p-4 font-bold text-center">Hora</div>
                    {weeklySchedule.map((day) => (
                      <div key={day.day} className="bg-zinc-900 p-4 font-bold text-center">
                        {day.day}
                      </div>
                    ))}
                  </div>

                  {["07:00", "09:00", "10:00", "11:00", "12:00", "16:00", "18:00", "19:00", "19:30", "20:00"].map(
                    (time) => (
                      <div key={time} className="grid grid-cols-8 gap-2 mb-2">
                        <div className="bg-zinc-900 p-4 flex items-center justify-center">{time}</div>
                        {weeklySchedule.map((day) => {
                          const classForTimeSlot = day.classes.find((c) => c.time === time)
                          return (
                            <div
                              key={`${day.day}-${time}`}
                              className={`p-2 ${
                                classForTimeSlot ? "bg-zinc-800 border border-zinc-700" : "bg-zinc-900"
                              }`}
                            >
                              {classForTimeSlot ? (
                                <div className="text-center">
                                  <p className="font-bold text-sm">{classForTimeSlot.name}</p>
                                  <p className="text-xs text-gray-400">{classForTimeSlot.instructor}</p>
                                  <p className="text-xs text-gray-400">{classForTimeSlot.duration}</p>
                                  <Button
                                    asChild
                                    variant="link"
                                    className="text-blue-500 p-0 h-auto text-xs mt-1"
                                    size="sm"
                                  >
                                    <Link href="/reservar">Reservar</Link>
                                  </Button>
                                </div>
                              ) : null}
                            </div>
                          )
                        })}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-zinc-900">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">¿LISTO PARA EMPEZAR?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-300">
            Reserva tu primera clase hoy y experimenta la diferencia de nuestro estudio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-6 text-lg">
              <Link href="/reservar">RESERVA AHORA</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 font-bold px-8 py-6 text-lg"
            >
              <Link href="/paquetes">VER PAQUETES</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
