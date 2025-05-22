import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function ReservaConfirmadaPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8">
      <div className="mx-auto w-full max-w-md space-y-6 text-center">
        <div className="flex justify-center">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-[#4A102A]">¡Reserva Confirmada!</h1>
          <p className="text-gray-500">Tu pago ha sido procesado correctamente y tu reserva ha sido confirmada.</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="space-y-4">
            <div className="space-y-1">
              <p className="text-sm text-gray-500">Clase</p>
              <p className="font-medium">RHYTHM RIDE</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500">Fecha y Hora</p>
              <p className="font-medium">Lunes, 22 de Mayo, 2023 - 18:00</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500">Instructor</p>
              <p className="font-medium">Carlos Mendez</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500">Número de Confirmación</p>
              <p className="font-medium">INS-2023-05-22-001</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-sm text-gray-500">Hemos enviado un correo electrónico con los detalles de tu reserva.</p>
          <div className="flex flex-col space-y-2">
            <Button asChild className="bg-[#4A102A] hover:bg-[#85193C] text-white">
              <Link href="/mis-reservas">Ver Mis Reservas</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Volver al Inicio</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
