"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StripeCheckout } from "@/components/stripe-checkout"
import { CreditCard, Banknote } from "lucide-react"

export default function CheckoutPage() {
  const router = useRouter()
  const [paymentMethod, setPaymentMethod] = useState<"card" | "transfer">("card")

  // Datos de ejemplo de la reserva
  const reservationData = {
    class: "RHYTHM RIDE",
    date: "Lunes, 22 de Mayo, 2023",
    time: "18:00",
    instructor: "Carlos Mendez",
    price: 250,
  }

  const handlePaymentSuccess = (paymentId: string) => {
    console.log("Pago exitoso:", paymentId)
    router.push("/reserva-confirmada")
  }

  const handlePaymentCancel = () => {
    console.log("Pago cancelado")
  }

  return (
    <div className="container mx-auto py-10">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-[#4A102A]">Detalles de la Reserva</CardTitle>
              <CardDescription>Revisa los detalles de tu clase</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Clase</p>
                    <p className="font-medium">{reservationData.class}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Instructor</p>
                    <p className="font-medium">{reservationData.instructor}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Fecha</p>
                    <p className="font-medium">{reservationData.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Hora</p>
                    <p className="font-medium">{reservationData.time}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Precio</p>
                  <p className="text-xl font-bold">${reservationData.price.toFixed(2)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-[#4A102A]">Método de Pago</CardTitle>
              <CardDescription>Elige cómo quieres pagar</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={paymentMethod} onValueChange={(v) => setPaymentMethod(v as "card" | "transfer")}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="card" className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4" /> Tarjeta
                  </TabsTrigger>
                  <TabsTrigger value="transfer" className="flex items-center gap-2">
                    <Banknote className="h-4 w-4" /> Transferencia
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="card" className="mt-4">
                  <StripeCheckout
                    amount={reservationData.price}
                    description={`Reserva: ${reservationData.class} - ${reservationData.date} ${reservationData.time}`}
                    onSuccess={handlePaymentSuccess}
                    onCancel={handlePaymentCancel}
                  />
                </TabsContent>
                <TabsContent value="transfer" className="mt-4">
                  <div className="space-y-4">
                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                      <p className="font-medium">Datos para Transferencia</p>
                      <div className="mt-2 space-y-2">
                        <div className="grid grid-cols-2">
                          <p className="text-sm text-gray-500">Banco:</p>
                          <p className="text-sm">BBVA</p>
                        </div>
                        <div className="grid grid-cols-2">
                          <p className="text-sm text-gray-500">Titular:</p>
                          <p className="text-sm">Innata Studio S.A. de C.V.</p>
                        </div>
                        <div className="grid grid-cols-2">
                          <p className="text-sm text-gray-500">CLABE:</p>
                          <p className="text-sm">012345678901234567</p>
                        </div>
                        <div className="grid grid-cols-2">
                          <p className="text-sm text-gray-500">Referencia:</p>
                          <p className="text-sm">INS-2023-05-22</p>
                        </div>
                        <div className="grid grid-cols-2">
                          <p className="text-sm text-gray-500">Monto:</p>
                          <p className="text-sm font-bold">${(reservationData.price * 1.16).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">
                      Una vez realizada la transferencia, envía el comprobante a{" "}
                      <a href="mailto:pagos@innatastudio.com" className="text-[#85193C] hover:underline">
                        pagos@innatastudio.com
                      </a>{" "}
                      o preséntalo en recepción.
                    </p>
                    <Button
                      className="w-full bg-[#4A102A] hover:bg-[#85193C] text-white"
                      onClick={() => router.push("/reserva-confirmada")}
                    >
                      Confirmar Reserva
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
