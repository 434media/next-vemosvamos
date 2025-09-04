import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for could not be found. Return to Vemos Vamos homepage.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eeebe3] px-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Página No Encontrada / Page Not Found</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Lo sentimos, la página que buscas no existe. / Sorry, the page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
        >
          Volver al Inicio / Return Home
        </Link>
      </div>
    </div>
  )
}
