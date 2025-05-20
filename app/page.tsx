import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Instagram, Facebook, Twitter } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-900">
      {/* Hero Section - Container Style */}
      <section className="w-full py-8 mt-16">
        <div className="container mx-auto px-4">
          {/* Hero Banner */}
          <div className="relative w-full h-[600px] rounded-3xl overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-burgundy-dark/70 via-brand-burgundy/30 to-transparent z-10"></div>

            {/* Background Image */}
            <Image
              src="/innataAsset2.jpg"
              alt="cycling studio bike"
              fill
              className="object-cover object-center rounded-3xl"
              priority
            />

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-center p-8 md:p-16 max-w-2xl">
              <h2 className="text-xl md:text-2xl font-medium text-white/90 mb-2">Innata Studio</h2>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
                RIDE TO
                <br />
                SHINE
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
Bienvenido a nuestra comunidad.              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/reservar"
                  className="bg-white hover:bg-gray-100 text-brand-burgundy-dark rounded-full px-8 py-4 text-lg inline-flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  <span>Reserva tu clase</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  href="/clases"
                  className="bg-brand-yellow hover:bg-brand-yellow/90 text-brand-burgundy-dark rounded-full px-8 py-4 text-lg inline-flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  <span>Ver clases</span>
                </Link>
              </div>

              <div className="flex items-center gap-6 mt-8">
                <Link href="https://www.instagram.com/studio.innata/" className="text-white hover:text-brand-yellow">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-white hover:text-brand-yellow">
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-brand-burgundy-dark">
            Discover Our Classes
          </h2>
          <p className="text-lg text-center mb-12 text-zinc-600 max-w-3xl mx-auto">
            Find the perfect workout that fits your goals and schedule
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl flex flex-col items-center text-center shadow-md border border-gray-100 group hover:shadow-lg transition-all">
              <div className="bg-brand-yellow/20 rounded-full p-4 mb-6 group-hover:bg-brand-yellow/30 transition-all">
                <svg
                  className="h-10 w-10 text-brand-burgundy"
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
              <h3 className="text-xl font-bold mb-2 text-brand-burgundy-dark">CYCLING</h3>
              <p className="text-zinc-600 mb-4">High-intensity classes with motivating music to transform your body.</p>
              <Link href="/clases" className="text-brand-burgundy font-medium hover:text-brand-red">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-3xl flex flex-col items-center text-center shadow-md border border-gray-100 group hover:shadow-lg transition-all">
              <div className="bg-brand-yellow/20 rounded-full p-4 mb-6 group-hover:bg-brand-yellow/30 transition-all">
                <svg
                  className="h-10 w-10 text-brand-burgundy"
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
              <h3 className="text-xl font-bold mb-2 text-brand-burgundy-dark">HIIT</h3>
              <p className="text-zinc-600 mb-4">High-intensity interval training to maximize results in less time.</p>
              <Link href="/clases" className="text-brand-burgundy font-medium hover:text-brand-red">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-3xl flex flex-col items-center text-center shadow-md border border-gray-100 group hover:shadow-lg transition-all">
              <div className="bg-brand-yellow/20 rounded-full p-4 mb-6 group-hover:bg-brand-yellow/30 transition-all">
                <svg
                  className="h-10 w-10 text-brand-burgundy"
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
              <h3 className="text-xl font-bold mb-2 text-brand-burgundy-dark">YOGA</h3>
              <p className="text-zinc-600 mb-4">Connect body and mind with our yoga classes for all levels.</p>
              <Link href="/clases" className="text-brand-burgundy font-medium hover:text-brand-red">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-yellow/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-burgundy-dark">START YOUR JOURNEY TODAY</h2>
            <p className="text-xl mb-8 text-brand-burgundy">
              First class free for new members. Experience the difference.
            </p>
            <Link
              href="/reservar"
              className="bg-brand-burgundy hover:bg-brand-burgundy/90 text-white rounded-full px-8 py-4 text-lg inline-flex items-center gap-2"
            >
              <span>Achieve Your Goals</span>
              <span className="bg-brand-red rounded-full p-2">
                <ArrowRight className="h-5 w-5 text-white" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
