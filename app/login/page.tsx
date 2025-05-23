import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Imagen lateral */}
      <div className="hidden md:block md:w-1/2 relative overflow-hidden rounded-3xl m-2">
        <Image src="/innataAsset1.png" alt="Innata Cycling Studio" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#4A102A]/80 to-transparent mix-blend-multiply" />
      </div>

      {/* Formulario */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12 bg-white">
        <div className="w-full max-w-md">
          {/* Logo */}
          
          <h1 className="text-3xl font-bold text-brand-gray mb-2">Bienvenido a Innata</h1>
          <p className="text-gray-500 mb-8">
            Innata es un espacio único para transformar tu cuerpo y mente a través del ciclismo indoor.
          </p>

          {/* Botones de redes sociales */}
          <div className="space-y-4 mb-6">

          </div>

          {/* Separador */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Continúar con email</span>
            </div>
          </div>

          {/* Formulario de email */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Input type="email" placeholder="tu@email.com" className="h-12 border-gray-300" />
            </div>
            <div className="space-y-2">
              <Input type="password" placeholder="Contraseña" className="h-12 border-gray-300" />
            </div>
            <div className="flex justify-between items-center text-sm">
              <Link href="/reset-password" className="text-brand-gray hover:underline">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            <Button className="w-full h-12 bg-gradient-to-r from-brand-sage to-brand-gray hover:from-brand-mint hover:to-brand-sage text-white">
              Iniciar Sesión
            </Button>
          </div>

          <div className="mt-6 text-center text-sm text-black">
            ¿No tienes una cuenta?{" "}
            <Link href="/registro" className="text-brand-gray font-medium hover:underline">
              Regístrate
            </Link>
          </div>

          <div className="mt-8 text-xs text-center text-gray-500">
            Al iniciar sesión, aceptas nuestros{" "}
            <Link href="/terminos" className="text-[#85193C] hover:underline">
              Términos y Condiciones
            </Link>{" "}
            y{" "}
            <Link href="/privacidad" className="text-[#85193C] hover:underline">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
