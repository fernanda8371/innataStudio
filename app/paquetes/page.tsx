import Link from "next/link"
import { Check, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const packages = [
  {
    id: 1,
    name: "PRIMERA VEZ",
    price: "$49.00",
    description: "Perfecto para probar nuestras clases",
    features: [
      "1 clase de indoor cycling de 45 minutos",
      "Válido solo para nuevos clientes",
      "Zapatos de ciclismo incluidos",
    ],
    popular: false,
    expiracion: "Válido por 7 días",
    buttonText: "COMPRAR PASE",
    type: "clase",
  },{
    id: 2,
    name: "PASE INDIVIDUAL",
    price: "$69.00",
    description: "Perfecto para probar nuestras clases",
    features: [
      "1 clase de indoor cycling",

      "Toalla de cortesía",
      "Zapatos de ciclismo incluidos",
    ],
    popular: false,
        expiracion: "Válido por 7 días",

    buttonText: "COMPRAR PASE",
        type: "clase",

  },
  
  
  {
    id: 3,
    name: "SEMANA ILIMITADA",
    price: "$299.00",
    description: "Tiempo limitado",
    features: [
      "Hasta 17 clases de indoor cycling",
      "Zapatos de ciclismo incluidos",
      "Reserva prioritaria*",
    ],
    popular: true,
    expiracion: "Válido por 7 días",

    buttonText: "COMPRAR PAQUETE",
        type: "paquete",

  },
  {
    id: 4,
    name: "PAQUETE 10 CLASES",
    price: "$599.00",
    description: "Ahorra $100 con este paquete",
    features: [
      "10 clases de indoor cycling",
      "Zapatos de ciclismo incluidos",
      "Reserva prioritaria",
      // "1 clase para un amigo",
    ],
    popular: false,
      expiracion: "Válido por 30 días",

    buttonText: "COMPRAR PAQUETE",
        type: "paquete",

  },
  // {
  //   id: 5,
  //   name: "MEMBRESÍA MENSUAL",
  //   price: "$350",
  //   description: "Para los más comprometidos",
  //   features: [
  //     "Clases ilimitadas",
  //     "Acceso a vestidores y duchas",
  //     "Toalla de cortesía",
  //     "Zapatos de ciclismo incluidos",
  //     "Reserva prioritaria",
  //     "2 clases para invitados al mes",
  //     "Descuentos en productos",
  //   ],
  //   popular: false,
  //       expiracion: "Válido por 35 días",
  //           type: "paquete",


  //   buttonText: "SUSCRIBIRSE",
  // },
]

export default function PackagesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-900">
      {/* Hero Section */}
      <section className="py-20 pt-32 bg-white">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            NUESTROS <span className="text-brand-burgundy">PAQUETES</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-zinc-700 mb-3">
            Flexibilidad para adaptarse a tu estilo de vida. Elige el paquete que mejor se ajuste a tus objetivos.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-10 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`bg-white border-gray-100 overflow-hidden rounded-3xl shadow-sm ${pkg.popular ? "ring-2 ring-brand-burgundy" : ""}`}
              >
                {pkg.popular && (
                  <div className="bg-brand-burgundy text-white text-xs font-bold py-1 text-center">MÁS POPULAR</div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-brand-burgundy-dark">{pkg.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-extrabold text-brand-burgundy">{pkg.price}</span>
                    {(pkg.id !== 1 && pkg.id !== 2) && <span className="text-zinc-600 ml-1">/ paquete</span>}
                  </div>
                  <CardDescription className="text-zinc-600">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-brand-burgundy mr-2 shrink-0" />
                        <span className="text-zinc-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 text-sm text-zinc-500">
                    <span className="font-semibold">Expiración:</span> {pkg.expiracion}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-brand-burgundy hover:bg-brand-burgundy/90 text-white font-bold rounded-full"
                  >
                    <Link href="/reservar" className="flex items-center justify-center gap-1">
                      {pkg.buttonText} <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  
                </CardFooter>
              </Card>
            ))}
          </div>


        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            PREGUNTAS <span className="text-brand-burgundy">FRECUENTES</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2 bg-white p-6 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold text-brand-burgundy-dark">¿Cuánto tiempo duran las clases?</h3>
              <p className="text-zinc-600">
                Nuestras clases tienen duraciones de 30, 45, 60 y 75 minutos, dependiendo del formato.
              </p>
            </div>

            <div className="space-y-2 bg-white p-6 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold text-brand-burgundy-dark">¿Necesito experiencia previa?</h3>
              <p className="text-zinc-600">
                No, tenemos clases para todos los niveles. Nuestros instructores te guiarán durante toda la sesión.
              </p>
            </div>

            <div className="space-y-2 bg-white p-6 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold text-brand-burgundy-dark">¿Qué debo llevar a clase?</h3>
              <p className="text-zinc-600">
                Solo necesitas ropa cómoda y una botella de agua. Proporcionamos toallas y zapatos especiales para
                ciclismo.
              </p>
            </div>

            <div className="space-y-2 bg-white p-6 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold text-brand-burgundy-dark">¿Puedo cancelar mi reserva?</h3>
              <p className="text-zinc-600">
                Sí, puedes cancelar hasta 4 horas antes de la clase sin penalización. Cancelaciones tardías pueden
                generar cargos.
              </p>
            </div>

            <div className="space-y-2 bg-white p-6 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold text-brand-burgundy-dark">¿Los paquetes tienen fecha de expiración?</h3>
              <p className="text-zinc-600">
                Sí, el paquete de 5 clases tiene validez de 30 días y el de 10 clases de 60 días desde la compra.
              </p>
            </div>

            <div className="space-y-2 bg-white p-6 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold text-brand-burgundy-dark">¿Ofrecen descuentos para estudiantes?</h3>
              <p className="text-zinc-600">
                Sí, contamos con descuentos especiales para estudiantes con credencial vigente. Consulta en recepción.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
