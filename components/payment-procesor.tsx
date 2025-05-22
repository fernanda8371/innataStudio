"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

interface PaymentProcessorProps {
  reservationId: number
  userEmail: string
  amount: number
  onSuccess: () => void
  onCancel: () => void
}

export function PaymentProcessor({ reservationId, userEmail, amount, onSuccess, onCancel }: PaymentProcessorProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "online">("cash")
  const [cashAmount, setCashAmount] = useState(amount.toString())

  const handleCashPayment = () => {
    setIsProcessing(true)

    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false)
      toast({
        title: "Pago registrado",
        description: `Pago en efectivo de $${cashAmount} registrado correctamente.`,
      })
      onSuccess()
    }, 1000)
  }

  const handleOnlinePayment = async () => {
    setIsProcessing(true)

    try {
      const response = await fetch("/api/create-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount,
          email: userEmail,
          description: `Reserva #${reservationId}`,
          metadata: {
            reservationId: reservationId.toString(),
          },
        }),
      })

      const data = await response.json()

      if (data.url) {
        // Open payment link in new window
        window.open(data.url, "_blank")
        toast({
          title: "Enlace de pago enviado",
          description: "Se ha generado un enlace de pago con Stripe.",
        })
        onSuccess()
      } else {
        throw new Error("No payment URL returned")
      }
    } catch (error) {
      console.error("Payment error:", error)
      toast({
        title: "Error al procesar el pago",
        description: "Ha ocurrido un error al generar el enlace de pago.",
        variant: "destructive",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <Button
          type="button"
          variant={paymentMethod === "cash" ? "default" : "outline"}
          className={paymentMethod === "cash" ? "bg-[#4A102A] text-white" : "border-gray-200"}
          onClick={() => setPaymentMethod("cash")}
        >
          Efectivo
        </Button>
        <Button
          type="button"
          variant={paymentMethod === "online" ? "default" : "outline"}
          className={paymentMethod === "online" ? "bg-[#4A102A] text-white" : "border-gray-200"}
          onClick={() => setPaymentMethod("online")}
        >
          Pago en línea (Stripe)
        </Button>
      </div>

      {paymentMethod === "cash" ? (
        <div className="space-y-2">
          <Label htmlFor="cash-amount">Monto recibido</Label>
          <Input
            id="cash-amount"
            type="number"
            value={cashAmount}
            onChange={(e) => setCashAmount(e.target.value)}
            className="bg-white border-gray-200"
          />
        </div>
      ) : (
        <div className="space-y-2">
          <Label htmlFor="email">Email del cliente</Label>
          <Input id="email" type="email" value={userEmail} readOnly className="bg-white border-gray-200" />
          <p className="text-sm text-gray-500">Se enviará un enlace de pago a este correo electrónico.</p>
        </div>
      )}

      <div className="flex justify-end space-x-2 pt-4">
        <Button type="button" variant="outline" onClick={onCancel} disabled={isProcessing} className="border-gray-200">
          Cancelar
        </Button>
        <Button
          type="button"
          onClick={paymentMethod === "cash" ? handleCashPayment : handleOnlinePayment}
          disabled={isProcessing}
          className="bg-[#4A102A] hover:bg-[#85193C] text-white"
        >
          {isProcessing ? "Procesando..." : paymentMethod === "cash" ? "Registrar Pago" : "Enviar Enlace de Pago"}
        </Button>
      </div>
    </div>
  )
}
