import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, ChevronRight } from "lucide-react"

// Datos de ejemplo para los instructores
const instructors = [
  {
    id: 1,
    name: "Ghana Inés Miroslava Chávez García",
    role: "Instructor Principal",
    bio: "He hecho deporte toda mi vida. Me encanta el crossfit, los triatlones y amo con locura el indoor. También soy fotógrafa y mamá.",
    image: "/placeholder.svg?height=400&width=400",
    socials: ["@inessmiroslava"],
  },
  {
    id: 2,
    name: "Óscar Fernández Vargas",
    role: "Instructora Senior",
    bio: "Entrenador profesional certificado por IFBB PRO LIGUE y certificado en MASTER COACH en seminario. Cuento con más de 2 años de experiencia en entrenamiento físico de hipertrofia para crecimiento muscular y reducción de masa corporal. ",
    image: "/placeholder.svg?height=400&width=400",
    socials: ["@barbie_mamada_ "],
  },
  {
    id: 3,
    name: "César Estanislao González Vargas",
    role: "Instructor de Resistencia",
    bio: "Apasionado de los deportes, el basquetbol mi deporte favorito, me gusta correr, ir al gimnasio y el indoor! Adoro estar con mi familia, soy papá de Julián",
    image: "/placeholder.svg?height=400&width=400",
    socials: ["@tanisgonzalezv"],
  },

]

// Datos de ejemplo para los testimonios
const testimonials = [
  {
    id: 1,
    name: "Sofía Ramírez",
    text: "Desde que empecé en Innata Studio hace 6 meses, he notado un cambio increíble en mi condición física y mental. Las clases son adictivas y los instructores realmente te motivan a dar lo mejor de ti.",
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
    <div className="flex flex-col min-h-screen bg-white text-zinc-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Estudio de indoor cycling"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/70"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 space-y-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            SOBRE <span className="text-brand-burgundy">NOSOTROS</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-zinc-700">
            Más que un estudio de fitness, somos una comunidad apasionada por el bienestar y la salud.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                NUESTRA <span className="text-brand-burgundy">HISTORIA</span>
              </h2>
              <div className="space-y-4 text-zinc-700">
                <p>
                  Innata Studio nació en 2018 con una visión clara: crear un espacio donde el fitness se convirtiera en
                  una experiencia inmersiva, motivadora y accesible para todos.
                </p>
                <p>
                  Fundado por un grupo de apasionados del fitness, nuestro estudio comenzó con solo 10 bicicletas y un
                  puñado de miembros dedicados. Hoy, nos hemos convertido en el destino preferido para los entusiastas
                  del fitness en la ciudad.
                </p>
                <p>
                  Lo que nos distingue es nuestro enfoque en la experiencia completa: desde la calidad de nuestro
                  equipamiento y la experticia de nuestros instructores, hasta la atmósfera energética y la comunidad
                  que hemos construido.
                </p>
                <p>
                  Creemos que el ejercicio debe ser más que una rutina—debe ser una celebración del movimiento, la
                  música y la conexión humana.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Historia de Innata Studio"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">
            MISIÓN Y <span className="text-brand-burgundy">VALORES</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-none rounded-3xl shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-yellow/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-brand-burgundy">01</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-brand-burgundy-dark">COMUNIDAD</h3>
                <p className="text-zinc-600">
                  Creamos un espacio inclusivo donde todos son bienvenidos, sin importar su nivel de experiencia o
                  condición física.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none rounded-3xl shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-yellow/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-brand-burgundy">02</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-brand-burgundy-dark">EXCELENCIA</h3>
                <p className="text-zinc-600">
                  Nos comprometemos a ofrecer la mejor experiencia posible, desde nuestras instalaciones hasta la
                  calidad de nuestras clases.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none rounded-3xl shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-yellow/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-brand-burgundy">03</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-brand-burgundy-dark">INNOVACIÓN</h3>
                <p className="text-zinc-600">
                  Constantemente buscamos nuevas formas de mejorar y evolucionar, incorporando las últimas tendencias y
                  tecnologías en fitness.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-brand-burgundy-dark">NUESTRA MISIÓN</h3>
            <p className="text-xl text-zinc-700">
              Transformar vidas a través del movimiento, creando experiencias de fitness que inspiren, motiven y
              empoderen a nuestra comunidad para alcanzar su máximo potencial físico y mental.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            NUESTRO <span className="text-brand-burgundy">EQUIPO</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor) => (
              <Card key={instructor.id} className="bg-white border-gray-100 rounded-3xl shadow-sm overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src={instructor.image || "/placeholder.svg"}
                    alt={instructor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-brand-burgundy-dark">{instructor.name}</h3>
                  <p className="text-brand-burgundy mb-2">{instructor.role}</p>
                  <p className="text-zinc-600 text-sm mb-4">{instructor.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {instructor.socials.map((specialty, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-brand-burgundy text-brand-burgundy bg-brand-yellow/10"
                      >
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
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            NUESTRAS <span className="text-brand-burgundy">INSTALACIONES</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-80 rounded-3xl overflow-hidden group">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Sala principal"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                <h3 className="text-xl font-bold text-white">Sala Principal</h3>
              </div>
            </div>

            <div className="relative h-80 rounded-3xl overflow-hidden group">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Vestidores"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                <h3 className="text-xl font-bold text-white">Vestidores Premium</h3>
              </div>
            </div>

            <div className="relative h-80 rounded-3xl overflow-hidden group">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Área de hidratación"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                <h3 className="text-xl font-bold text-white">Área de Hidratación</h3>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-center text-brand-burgundy-dark">
              Equipamiento de Primera Clase
            </h3>
            <p className="text-zinc-700 text-center max-w-3xl mx-auto">
              Contamos con bicicletas de última generación, sistema de sonido inmersivo, iluminación LED sincronizada
              con la música, y todas las comodidades para que tu experiencia sea excepcional.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            LO QUE DICEN <span className="text-brand-burgundy">NUESTROS CLIENTES</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-brand-yellow/10 border-none rounded-3xl shadow-sm">
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
                      <h4 className="font-bold text-brand-burgundy-dark">{testimonial.name}</h4>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-brand-burgundy fill-brand-burgundy" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <Quote className="h-8 w-8 text-brand-burgundy/20 absolute top-0 left-0 -translate-x-2 -translate-y-2" />
                    <p className="text-zinc-700 relative z-10">{testimonial.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-burgundy">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">ÚNETE A NUESTRA COMUNIDAD</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-white/90">
            Experimenta por ti mismo lo que hace especial a Innata Studio. Tu primera clase es gratis.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white hover:bg-white/90 text-brand-burgundy font-bold px-8 py-6 text-lg rounded-full"
          >
            <Link href="/reservar" className="flex items-center gap-1">
              RESERVA TU CLASE GRATIS <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
