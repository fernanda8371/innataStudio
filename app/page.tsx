import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-custom-cream text-zinc-900">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="container px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 py-12">
          {/* Left Column - Text */}
          <div className="flex flex-col justify-center space-y-8 max-w-xl">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900">
              GET SET
              <br />
              TO SWEAT
            </h1>
            <p className="text-xl md:text-2xl text-zinc-700">Where Your Fitness Goals Become Reality</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-zinc-900 hover:bg-zinc-800 text-white rounded-full px-8 py-6 text-lg w-fit"
              >
                <Link href="/reservar">Join Us</Link>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-8">
              <Link href="#" className="text-zinc-800 hover:text-custom-teal">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-zinc-800 hover:text-custom-teal">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-zinc-800 hover:text-custom-teal">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>

            <div className="pt-8">
              <Link
                href="/reservar"
                className="bg-custom-green/40 hover:bg-custom-green/50 text-zinc-900 rounded-full px-8 py-4 text-lg inline-flex items-center gap-2 w-full sm:w-auto justify-between"
              >
                <span>Book Now</span>
                <span className="bg-zinc-900 rounded-full p-2">
                  <ArrowRight className="h-5 w-5 text-white" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[500px] lg:h-auto rounded-3xl overflow-hidden">
            <Image src="/fitness-woman.png" alt="Woman exercising" fill className="object-cover" priority />
            <div className="absolute top-6 left-6">
              <div className="bg-custom-cream/80 backdrop-blur-sm rounded-full p-3">
                <div className="w-8 h-8 text-custom-teal">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
                      fill="currentColor"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            OUR <span className="text-custom-teal">CLASSES</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-custom-cream p-8 rounded-3xl flex flex-col items-center text-center">
              <div className="bg-white rounded-full p-4 mb-6">
                <svg
                  className="h-10 w-10 text-custom-teal"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 6V12L16 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">CYCLING</h3>
              <p className="text-zinc-600">
                Clases de alta intensidad con música motivadora para transformar tu cuerpo.
              </p>
            </div>

            <div className="bg-custom-cream p-8 rounded-3xl flex flex-col items-center text-center">
              <div className="bg-white rounded-full p-4 mb-6">
                <svg
                  className="h-10 w-10 text-custom-teal"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 20V10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 20V4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 20V14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">HIIT</h3>
              <p className="text-zinc-600">Entrenamiento de intervalos de alta intensidad para maximizar resultados.</p>
            </div>

            <div className="bg-custom-cream p-8 rounded-3xl flex flex-col items-center text-center">
              <div className="bg-white rounded-full p-4 mb-6">
                <svg
                  className="h-10 w-10 text-custom-teal"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">YOGA</h3>
              <p className="text-zinc-600">
                Conecta cuerpo y mente con nuestras clases de yoga para todos los niveles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-custom-pink/20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">COMIENZA TU VIAJE HOY</h2>
            <p className="text-xl mb-8 text-zinc-700">
              Primera clase de cortesía para nuevos miembros. Experimenta la diferencia.
            </p>
            <Link
              href="/reservar"
              className="bg-custom-green/40 hover:bg-custom-green/50 text-zinc-900 rounded-full px-8 py-4 text-lg inline-flex items-center gap-2"
            >
              <span>Achieve Your Goals</span>
              <span className="bg-zinc-900 rounded-full p-2">
                <ArrowRight className="h-5 w-5 text-white" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
