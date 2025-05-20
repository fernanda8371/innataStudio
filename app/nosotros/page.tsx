import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

// Datos de ejemplo para los instructores
const instructors = [
  {
    id: 1,
    name: "Carlos Mendez",
    role: "Instructor Principal",
    bio: "Con más de 10 años de experiencia en indoor cycling, Carlos es conocido por sus clases energéticas y motivadoras. Certificado en múltiples disciplinas de fitness.",
    image: "/placeholder.svg?height=400&width=400",
    specialties: ["Rhythm Ride", "Recovery Ride"],
  },
  {
    id: 2,
    name: "Ana Torres",
    role: "Instructora Senior",
    bio: "Ex-atleta profesional, Ana combina su conocimiento técnico con rutinas desafiantes. Su especialidad son las clases de alta intensidad y entrenamiento de fuerza.",
    image: "/placeholder.svg?height=400&width=400",
    specialties: ["Power Cycle", "Rhythm & Strength"],
  },
  {
    id: 3,
    name: "Miguel Ángel",
    role: "Instructor de Resistencia",
    bio: "Triatleta y entrenador personal, Miguel se especializa en clases de resistencia y preparación para eventos deportivos. Experto en biomecánica y técnica de pedaleo.",
    image: "/placeholder.svg?height=400&width=400",
    specialties: ["Endurance Ride", "Technical Training"],
  },
  {
    id: 4,
    name: "Laura Gómez",
    role: "Instructora HIIT",
    bio: "Especialista en entrenamiento de intervalos de alta intensidad. Laura diseña rutinas eficientes que maximizan la quema de calorías en sesiones cortas pero intensas.",
    image: "/placeholder.svg?height=400&width=400",
    specialties: ["HIIT Cycle", "Express Workouts"],
  },
]

// Datos de ejemplo para los testimonios
const testimonials = [
  {
    id: 1,
    name: "Sofía Ramírez",
    text: "Desde que empecé en CycleStudio hace 6 meses, he notado un cambio increíble en mi condición física y mental. Las clases son adictivas y los instructores realmente te motivan a dar lo mejor de ti.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Javier Morales",
    text: "Como principiante estaba nervioso, pero el equipo me hizo sentir bienvenido desde el primer día. La energía del estudio es incomparable y ahora no puedo imaginar mi semana sin al menos 3 clases.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Daniela Ortiz",
    text: "Las instalaciones son de primera clase y la variedad de clases mantiene el entrenamiento fresco e interesante. He probado otros estudios pero ninguno se compara con la experiencia aquí.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Estudio de indoor cycling"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 space-y-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            SOBRE <span className="text-blue-500">NOSOTROS</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Más que un estudio de indoor cycling, somos una comunidad apasionada por el fitness y el bienestar.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                NUESTRA <span className="text-blue-500">HISTORIA</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  CycleStudio nació en 2018 con una visión clara: crear un espacio donde el fitness se convirtiera en
                  una experiencia inmersiva, motivadora y accesible para todos.
                </p>
                <p>
                  Fundado por un grupo de apasionados del ciclismo y el fitness, nuestro estudio comenzó con solo 10
                  bicicletas y un puñado de miembros dedicados. Hoy, nos hemos convertido en el destino preferido para
                  los entusiastas del indoor cycling en la ciudad.
                </p>
                <p>
                  Lo que nos distingue es nuestro enfoque en la experiencia completa: desde la calidad de nuestras
                  bicicletas y la experticia de nuestros instructores, hasta la atmósfera energética y la comunidad que
                  hemos construido.
                </p>
                <p>
                  Creemos que el ejercicio debe ser más que una rutina—debe ser una celebración del movimiento, la
                  música y la conexión humana.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Historia de CycleStudio"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">
            MISIÓN Y <span className="text-blue-500">VALORES</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black border-zinc-800">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-500">01</span>
                </div>
                <h3 className="text-xl font-bold mb-2">COMUNIDAD</h3>
                <p className="text-gray-400">
                  Creamos un espacio inclusivo donde todos son bienvenidos, sin importar su nivel de experiencia o
                  condición física.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-500">02</span>
                </div>
                <h3 className="text-xl font-bold mb-2">EXCELENCIA</h3>
                <p className="text-gray-400">
                  Nos comprometemos a ofrecer la mejor experiencia posible, desde nuestras instalaciones hasta la
                  calidad de nuestras clases.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-zinc-800">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-500">03</span>
                </div>
                <h3 className="text-xl font-bold mb-2">INNOVACIÓN</h3>
                <p className="text-gray-400">
                  Constantemente buscamos nuevas formas de mejorar y evolucionar, incorporando las últimas tendencias y
                  tecnologías en fitness.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">NUESTRA MISIÓN</h3>
            <p className="text-xl text-gray-300">
              Transformar vidas a través del movimiento, creando experiencias de fitness que inspiren, motiven y
              empoderen a nuestra comunidad para alcanzar su máximo potencial físico y mental.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            NUESTRO <span className="text-blue-500">EQUIPO</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructors.map((instructor) => (
              <Card key={instructor.id} className="bg-zinc-900 border-zinc-800 overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src={instructor.image || "/placeholder.svg"}
                    alt={instructor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">{instructor.name}</h3>
                  <p className="text-blue-500 mb-2">{instructor.role}</p>
                  <p className="text-gray-400 text-sm mb-4">{instructor.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {instructor.specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline" className="border-zinc-700">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            NUESTRAS <span className="text-blue-500">INSTALACIONES</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-80 rounded-xl overflow-hidden group">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Sala principal"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end p-6">
                <h3 className="text-xl font-bold">Sala Principal</h3>
              </div>
            </div>

            <div className="relative h-80 rounded-xl overflow-hidden group">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Vestidores"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end p-6">
                <h3 className="text-xl font-bold">Vestidores Premium</h3>
              </div>
            </div>

            <div className="relative h-80 rounded-xl overflow-hidden group">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Área de hidratación"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end p-6">
                <h3 className="text-xl font-bold">Área de Hidratación</h3>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-black p-8 rounded-xl border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4 text-center">Equipamiento de Primera Clase</h3>
            <p className="text-gray-300 text-center max-w-3xl mx-auto">
              Contamos con bicicletas de última generación, sistema de sonido inmersivo, iluminación LED sincronizada
              con la música, y todas las comodidades para que tu experiencia sea excepcional.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            LO QUE DICEN <span className="text-blue-500">NUESTROS CLIENTES</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <Quote className="h-8 w-8 text-blue-500/20 absolute top-0 left-0 -translate-x-2 -translate-y-2" />
                    <p className="text-gray-300 relative z-10">{testimonial.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-500">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">ÚNETE A NUESTRA COMUNIDAD</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Experimenta por ti mismo lo que hace especial a CycleStudio. Tu primera clase es gratis.
          </p>
          <Button asChild size="lg" className="bg-black hover:bg-zinc-800 text-white font-bold px-8 py-6 text-lg">
            <Link href="/reservar">RESERVA TU CLASE GRATIS</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
