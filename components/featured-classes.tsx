"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

const classes = [
  {
    id: 1,
    name: "RHYTHM RIDE",
    instructor: "Carlos Mendez",
    duration: "45 min",
    level: "Todos los niveles",
    description: "Pedalea al ritmo de la música con esta clase energética que combina intervalos y coreografía.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    name: "POWER CYCLE",
    instructor: "Ana Torres",
    duration: "60 min",
    level: "Intermedio/Avanzado",
    description:
      "Enfocado en potencia y resistencia. Prepárate para un desafío intenso con intervalos de alta intensidad.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    name: "ENDURANCE RIDE",
    instructor: "Miguel Ángel",
    duration: "75 min",
    level: "Intermedio",
    description: "Mejora tu resistencia cardiovascular con esta clase de ritmo constante y desafiante.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    name: "HIIT CYCLE",
    instructor: "Laura Gómez",
    duration: "30 min",
    level: "Todos los niveles",
    description: "Entrenamiento de intervalos de alta intensidad para maximizar la quema de calorías en poco tiempo.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function FeaturedClasses() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === classes.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? classes.length - 1 : prevIndex - 1))
  }

  return (
    <section className="py-20 bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            CLASES <span className="text-blue-500">DESTACADAS</span>
          </h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="border-zinc-700 text-white hover:bg-zinc-800"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="border-zinc-700 text-white hover:bg-zinc-800"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[0, 1, 2].map((offset) => {
            const index = (currentIndex + offset) % classes.length
            const classItem = classes[index]

            return (
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
                    <div>
                      <h3 className="text-xl font-bold">{classItem.name}</h3>
                      <p className="text-gray-400">{classItem.instructor}</p>
                    </div>
                    <div className="bg-blue-500 px-3 py-1 text-sm font-bold rounded-full">{classItem.duration}</div>
                  </div>
                  <p className="text-gray-300 mb-4">{classItem.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">{classItem.level}</span>
                    <Button asChild variant="link" className="text-blue-500 p-0">
                      <Link href="/reservar">Reservar</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
            <Link href="/clases">VER TODAS LAS CLASES</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
