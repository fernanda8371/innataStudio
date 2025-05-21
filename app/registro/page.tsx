import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"

export default function RegistroPage() {
  return (
    <div className="flex min-h-screen">
      {/* Imagen lateral */}
      <div className="hidden md:block md:w-1/2 relative overflow-hidden rounded-3xl m-5">
        <Image src="/innataAsset1.png" alt="Innata Cycling Studio" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#4A102A]/80 to-transparent mix-blend-multiply" />
      </div>

      {/* Formulario */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12 bg-white">
        <div className="w-full max-w-md">
         

          <h1 className="text-3xl font-bold text-[#4A102A] mb-2">Únete a Innata</h1>
          <p className="text-gray-500 mb-8">
            Crea tu cuenta y comienza tu transformación con nuestras clases de ciclismo indoor.
          </p>

          {/* Botones de redes sociales */}
          <div className="space-y-4 mb-6">
            <Button variant="outline" className="w-full flex items-center justify-center gap-2 h-12 border-gray-300">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.1711 8.36788H17.4998V8.33329H9.99984V11.6666H14.7094C14.0223 13.607 12.1761 15 9.99984 15C7.23859 15 4.99984 12.7612 4.99984 10C4.99984 7.23871 7.23859 5 9.99984 5C11.2744 5 12.4344 5.48683 13.3177 6.28537L15.6744 3.92871C14.1887 2.56204 12.1932 1.66663 9.99984 1.66663C5.39775 1.66663 1.6665 5.39788 1.6665 10C1.6665 14.6021 5.39775 18.3333 9.99984 18.3333C14.6019 18.3333 18.3332 14.6021 18.3332 10C18.3332 9.44121 18.2757 8.89583 18.1711 8.36788Z"
                  fill="#FFC107"
                />
                <path
                  d="M2.62744 6.12121L5.36536 8.12913C6.10619 6.29496 7.90036 5 9.99994 5C11.2745 5 12.4345 5.48683 13.3178 6.28537L15.6745 3.92871C14.1887 2.56204 12.1932 1.66663 9.99994 1.66663C6.79911 1.66663 4.02327 3.47371 2.62744 6.12121Z"
                  fill="#FF3D00"
                />
                <path
                  d="M10 18.3334C12.1525 18.3334 14.1084 17.4755 15.5871 16.1542L13.008 13.9875C12.1432 14.6452 11.0865 15.0009 10 15.0001C7.83255 15.0001 5.99213 13.618 5.2988 11.6875L2.5813 13.7813C3.96047 16.4926 6.76163 18.3334 10 18.3334Z"
                  fill="#4CAF50"
                />
                <path
                  d="M18.1711 8.36796H17.5V8.33337H10V11.6667H14.7096C14.3809 12.5902 13.7889 13.3972 13.0067 13.9879L13.0079 13.9871L15.5871 16.1538C15.4046 16.3171 18.3333 14.1667 18.3333 10.0001C18.3333 9.44129 18.2758 8.89591 18.1711 8.36796Z"
                  fill="#1976D2"
                />
              </svg>
              Registrarse con Google
            </Button>
            <Button variant="outline" className="w-full flex items-center justify-center gap-2 h-12 border-gray-300">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 1.66663C5.39797 1.66663 1.66663 5.39797 1.66663 10C1.66663 14.602 5.39797 18.3333 10 18.3333C14.602 18.3333 18.3333 14.602 18.3333 10C18.3333 5.39797 14.602 1.66663 10 1.66663ZM14.6833 7.08329C14.6917 7.16663 14.6917 7.25829 14.6917 7.34996C14.6917 10.6833 12.2333 14.5 7.65831 14.5C6.35831 14.5 5.14997 14.1 4.16663 13.4167C4.34997 13.4417 4.52497 13.45 4.71663 13.45C5.79163 13.45 6.77497 13.0667 7.55831 12.4167C6.55831 12.3917 5.72497 11.7417 5.44997 10.8417C5.78331 10.9 6.08331 10.9 6.42497 10.8167C5.38331 10.6 4.60831 9.69163 4.60831 8.58329V8.54996C4.89997 8.71663 5.24163 8.81663 5.59997 8.83329C5.28331 8.61663 5.02497 8.32496 4.84997 7.98329C4.67497 7.64163 4.58331 7.26246 4.58331 6.87496C4.58331 6.44996 4.69163 6.05829 4.88331 5.71663C6.00831 7.09996 7.69163 7.99996 9.58331 8.10829C9.24997 6.74163 10.2833 5.64163 11.5333 5.64163C12.1167 5.64163 12.6417 5.88329 13.0167 6.28329C13.4833 6.19163 13.925 6.01663 14.3167 5.77496C14.15 6.26663 13.8167 6.67496 13.3833 6.93329C13.8 6.87496 14.2 6.74996 14.575 6.58329C14.3167 6.99996 13.9833 7.37496 13.6 7.68329C14.6833 7.08329 14.6833 7.08329 14.6833 7.08329Z"
                  fill="#1DA1F2"
                />
              </svg>
              Registrarse con Twitter
            </Button>
          </div>

          {/* Separador */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">O regístrate con email</span>
            </div>
          </div>

          {/* Formulario de registro */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input placeholder="Nombre" className="h-12 border-gray-300" />
              </div>
              <div>
                <Input placeholder="Apellido" className="h-12 border-gray-300" />
              </div>
            </div>
            <div>
              <Input type="email" placeholder="Email" className="h-12 border-gray-300" />
            </div>
            <div>
              <Input type="tel" placeholder="Teléfono" className="h-12 border-gray-300" />
            </div>
            <div>
              <Input type="password" placeholder="Contraseña" className="h-12 border-gray-300" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm text-gray-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Acepto los{" "}
                <Link href="/terminos" className="text-[#85193C] hover:underline">
                  Términos y Condiciones
                </Link>{" "}
                y la{" "}
                <Link href="/privacidad" className="text-[#85193C] hover:underline">
                  Política de Privacidad
                </Link>
              </label>
            </div>
            <Button className="w-full h-12 bg-gradient-to-r from-[#4A102A] to-[#C5172E] hover:from-[#85193C] hover:to-[#C5172E] text-white">
              Crear Cuenta
            </Button>
          </div>

          <div className="mt-6 text-center text-sm">
            ¿Ya tienes una cuenta?{" "}
            <Link href="/login" className="text-[#85193C] font-medium hover:underline">
              Inicia Sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
