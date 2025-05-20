import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const packages = [
  {
    id: 1,
    name: "PASE INDIVIDUAL",
    price: "$25",
    description: "Perfecto para probar nuestras clases",
    features: [
      "1 clase de indoor cycling",
      "Acceso a vestidores y duchas",
      "Toalla de cortesía",
      "Zapatos de ciclismo incluidos",
    ],
    popular: false,
    buttonText: "COMPRAR PASE",
  },
  {
    id: 2,
    name: "PAQUETE 5 CLASES",
    price: "$110",
    description: "Ahorra $15 con este paquete",
    features: [
      "5 clases de indoor cycling",
      "Validez de 30 días",
      "Acceso a vestidores y duchas",
      "Toalla de cortesía",
      "Zapatos de ciclismo incluidos",
      "Reserva prioritaria",
    ],
    popular: true,
    buttonText: "COMPRAR PAQUETE",
  },
  {
    id: 3,
    name: "PAQUETE 10 CLASES",
    price: "$200",
    description: "Ahorra $50 con este paquete",
    features: [
      "10 clases de indoor cycling",
      "Validez de 60 días",
      "Acceso a vestidores y duchas",
      "Toalla de cortesía",
      "Zapatos de ciclismo incluidos",
      "Reserva prioritaria",
      "1 clase para un amigo",
    ],
    popular: false,
    buttonText: "COMPRAR PAQUETE",
  },
  {
    id: 4,
    name: "MEMBRESÍA MENSUAL",
    price: "$350",
    description: "Para los más comprometidos",
    features: [
      "Clases ilimitadas",
      "Acceso a vestidores y duchas",
      "Toalla de cortesía",
      "Zapatos de ciclismo incluidos",
      "Reserva prioritaria",
      "2 clases para invitados al mes",
      "Descuentos en productos",
    ],
    popular: false,
    buttonText: "SUSCRIBIRSE",
  },
]

export default function PackagesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            NUESTROS <span className="text-blue-500">PAQUETES</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300 mb-8">
            Flexibilidad para adaptarse a tu estilo de vida. Elige el paquete que mejor se ajuste a tus objetivos.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`bg-zinc-900 border-zinc-800 overflow-hidden ${pkg.popular ? "ring-2 ring-blue-500" : ""}`}
              >
                {pkg.popular && (
                  <div className="bg-blue-500 text-white text-xs font-bold py-1 text-center">MÁS POPULAR</div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold">{pkg.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-extrabold">{pkg.price}</span>
                    {pkg.id !== 1 && <span className="text-gray-400 ml-1">/ paquete</span>}
                  </div>
                  <CardDescription className="text-gray-400">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-blue-500 hover:bg-blue-600 font-bold">
                    <Link href="/reservar">{pkg.buttonText}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-zinc-900 border border-zinc-800 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">¿NECESITAS UN PLAN PERSONALIZADO?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              Ofrecemos planes corporativos y opciones personalizadas para grupos. Contáctanos para más información.
            </p>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/contacto">CONTACTAR</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            PREGUNTAS <span className="text-blue-500">FRECUENTES</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">¿Cuánto tiempo duran las clases?</h3>
              <p className="text-gray-400">
                Nuestras clases tienen duraciones de 30, 45, 60 y 75 minutos, dependiendo del formato.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">¿Necesito experiencia previa?</h3>
              <p className="text-gray-400">
                No, tenemos clases para todos los niveles. Nuestros instructores te guiarán durante toda la sesión.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">¿Qué debo llevar a clase?</h3>
              <p className="text-gray-400">
                Solo necesitas ropa cómoda y una botella de agua. Proporcionamos toallas y zapatos especiales para
                ciclismo.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">¿Puedo cancelar mi reserva?</h3>
              <p className="text-gray-400">
                Sí, puedes cancelar hasta 4 horas antes de la clase sin penalización. Cancelaciones tardías pueden
                generar cargos.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">¿Los paquetes tienen fecha de expiración?</h3>
              <p className="text-gray-400">
                Sí, el paquete de 5 clases tiene validez de 30 días y el de 10 clases de 60 días desde la compra.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">¿Ofrecen descuentos para estudiantes?</h3>
              <p className="text-gray-400">
                Sí, contamos con descuentos especiales para estudiantes con credencial vigente. Consulta en recepción.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
