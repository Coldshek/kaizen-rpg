import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../pages/_app'
import { getAuth, signOut } from 'firebase/auth'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase-config'

export default function Layout({ children }) {
  const user = useContext(AuthContext)
  const [oro, setOro] = useState(0)

  const cerrarSesion = () => {
    const auth = getAuth()
    signOut(auth).then(() => {
      window.location.href = "/login"
    })
  }

  useEffect(() => {
    if (!user?.uid) return

    const ref = doc(db, "jugadores", user.uid)
    const unsubscribe = onSnapshot(ref, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data()
        setOro(data.oro || 0)
      }
    })

    return () => unsubscribe()
  }, [user])

  return (
    <div
      className="min-h-[100dvh] h-full bg-cover bg-center text-black dark:text-white"
      style={{ backgroundImage: "url('/fondo-rpg.jpg')" }}
    >
      <div className="min-h-[100dvh] h-full px-4 sm:px-6 py-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md valesquita:bg-[#f8d0e7cc] valesquita:text-[#831843]">

        {/* 🌟 NAVBAR */}
        <nav className="mb-6 flex flex-wrap justify-between items-center gap-4 text-lg sm:text-xl font-semibold">
          <div className="flex flex-wrap gap-4">
            <Link href="/">🏠 Inicio</Link>
            <Link href="/stats">📊 Stats</Link>
            <Link href="/misiones">🧭 Misiones</Link>
            <Link href="/casino">🎰 Casino</Link>
            <Link href="/logros">🏅 Logros</Link>
            <Link href="/perfil">👤 Perfil</Link>
            <Link href="/tienda">🛒 Tienda</Link>
            <Link href="/login">🔐 Login</Link>
          </div>

          <div className="flex items-center gap-4">
            {user && (
              <div className="text-lg sm:text-xl font-bold text-yellow-700 dark:text-yellow-300">
                💰 {oro}
              </div>
            )}
            {user && (
              <button
                onClick={cerrarSesion}
                className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded"
              >
                Cerrar sesión
              </button>
            )}
          </div>
        </nav>

        {/* 👤 Usuario conectado */}
        {user && (
          <p className="mb-4 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            Conectado como: <strong>{user.email}</strong>
          </p>
        )}

        {/* 📦 Contenido */}
        {children}
      </div>
    </div>
  )
}
