import Link from 'next/link'
import { useContext } from 'react'
import { AuthContext } from '../pages/_app'
import { getAuth, signOut } from 'firebase/auth'

export default function Layout({ children }) {
  const user = useContext(AuthContext)

  const cerrarSesion = () => {
    const auth = getAuth()
    signOut(auth).then(() => {
      window.location.href = "/login"
    })
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center text-black dark:text-white"
      style={{ backgroundImage: "url('/fondo-rpg.jpg')" }}
    >
      {/* ✅ Overlay que deja ver el fondo */}
      <div className="min-h-screen px-4 sm:px-6 py-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md valesquita:bg-[#f8d0e7cc] valesquita:text-[#831843]">

        <nav className="mb-6 flex flex-wrap items-center justify-between gap-2">
          <div className="space-x-3 flex flex-wrap">
            <Link href="/">🏠 Inicio</Link>
            <Link href="/stats">📊 Stats</Link>
            <Link href="/misiones">🧭 Misiones</Link>
            <Link href="/misiones-personalizadas">🛠️ Crear Misión</Link>
            <Link href="/logros">🏅 Logros</Link>
            <Link href="/perfil">👤 Perfil</Link>
            <Link href="/tienda">🛒 Tienda</Link>
            <Link href="/login">🔐 Login</Link>
          </div>

          {user && (
            <button
              onClick={cerrarSesion}
              className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded"
            >
              Cerrar sesión
            </button>
          )}
        </nav>

        {user && (
          <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
            Conectado como: <strong>{user.email}</strong>
          </p>
        )}

        {children}
      </div>
    </div>
  )
}
