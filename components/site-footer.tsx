import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="font-extrabold text-2xl tracking-tight">
              CYCLE<span className="text-blue-500">STUDIO</span>
            </Link>
            <p className="text-zinc-400 max-w-xs">
              Transformando vidas a través del indoor cycling. Únete a nuestra comunidad y eleva tu experiencia fitness.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-zinc-400 hover:text-blue-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-blue-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-blue-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-blue-500">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/clases" className="text-zinc-400 hover:text-blue-500">
                  Clases
                </Link>
              </li>
              <li>
                <Link href="/paquetes" className="text-zinc-400 hover:text-blue-500">
                  Paquetes
                </Link>
              </li>
              <li>
                <Link href="/reservar" className="text-zinc-400 hover:text-blue-500">
                  Reservar
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-zinc-400 hover:text-blue-500">
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Horarios</h3>
            <ul className="space-y-2 text-zinc-400">
              <li>Lunes - Viernes: 6:00 AM - 10:00 PM</li>
              <li>Sábado: 8:00 AM - 8:00 PM</li>
              <li>Domingo: 9:00 AM - 2:00 PM</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <address className="not-italic text-zinc-400 space-y-2">
              <p>Av. Principal #123</p>
              <p>Ciudad, CP 12345</p>
              <p>Tel: (123) 456-7890</p>
              <p>
                <Link href="mailto:info@cyclestudio.com" className="hover:text-blue-500">
                  info@cyclestudio.com
                </Link>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-400 text-sm">
            &copy; {new Date().getFullYear()} CycleStudio. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/terminos" className="text-zinc-400 hover:text-blue-500 text-sm">
              Términos y Condiciones
            </Link>
            <Link href="/privacidad" className="text-zinc-400 hover:text-blue-500 text-sm">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
