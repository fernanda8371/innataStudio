import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Package, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import FeaturedClasses from "@/components/featured-classes"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Indoor cycling studio"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 space-y-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            ELEVA TU <span className="text-blue-500">RITMO</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Transforma tu cuerpo y mente con nuestras clases de indoor cycling de alta intensidad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
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

      {/* Features Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            EXPERIENCIA <span className="text-blue-500">PREMIUM</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-lg border border-zinc-800 flex flex-col items-center text-center">
              <Calendar className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">CLASES DIARIAS</h3>
              <p className="text-gray-400">
                Múltiples horarios para adaptarse a tu agenda. Instructores certificados y música motivadora.
              </p>
            </div>

            <div className="bg-black p-8 rounded-lg border border-zinc-800 flex flex-col items-center text-center">
              <Package className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">PAQUETES FLEXIBLES</h3>
              <p className="text-gray-400">
                Desde pases individuales hasta membresías mensuales. Encuentra el plan perfecto para ti.
              </p>
            </div>

            <div className="bg-black p-8 rounded-lg border border-zinc-800 flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">COMUNIDAD</h3>
              <p className="text-gray-400">
                Únete a una comunidad apasionada que te motivará a alcanzar tus objetivos fitness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Classes */}
      <FeaturedClasses />

      {/* CTA Section */}
      <section className="py-20 bg--500">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">COMIENZA TU VIAJE HOY</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Primera clase de cortesía para nuevos miembros. Experimenta la diferencia.
          </p>
          <Button asChild size="lg" className="bg-black hover:bg-zinc-800 text-white font-bold px-8 py-6 text-lg">
            <Link href="/reservar" className="flex items-center gap-2">
              RESERVA TU CLASE GRATIS <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
