import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-custom-cream text-zinc-800 py-12">
      <div className="container px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link href="/" className="font-extrabold text-2xl tracking-tight">
            INNATA <span className="text-custom-teal">STUDIO</span>
          </Link>
          <p className="text-zinc-600 max-w-xs">
            Transformando vidas a través del fitness. Únete a nuestra comunidad y eleva tu experiencia.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-zinc-800 hover:text-custom-teal">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-zinc-800 hover:text-custom-teal">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-zinc-800 hover:text-custom-teal">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4">ENLACES</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-zinc-600 hover:text-custom-teal">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/clases" className="text-zinc-600 hover:text-custom-teal">
                Clases
              </Link>
            </li>
            <li>
              <Link href="/paquetes" className="text-zinc-600 hover:text-custom-teal">
                Paquetes
              </Link>
            </li>
            <li>
              <Link href="/reservar" className="text-zinc-600 hover:text-custom-teal">
                Reservar
              </Link>
            </li>
            <li>
              <Link href="/nosotros" className="text-zinc-600 hover:text-custom-teal">
                Nosotros
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">HORARIOS</h4>
          <ul className="space-y-2 text-zinc-600">
            <li>Lunes - Viernes: 6:00 - 21:00</li>
            <li>Sábado: 8:00 - 18:00</li>
            <li>Domingo: 9:00 - 14:00</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">CONTACTO</h4>
          <address className="not-italic text-zinc-600 space-y-2">
            <p>Av. Principal #123</p>
            <p>Ciudad, CP 12345</p>
            <p>Tel: (123) 456-7890</p>
            <p>Email: info@innatastudio.com</p>
          </address>
        </div>
      </div>

      <div className="container px-4 mt-12 pt-6 border-t border-zinc-200">
        <p className="text-center text-zinc-600 text-sm">
          &copy; {new Date().getFullYear()} Innata Studio. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
