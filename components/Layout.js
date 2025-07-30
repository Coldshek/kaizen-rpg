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
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', color: 'white', background: '#121212', minHeight: '100vh' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link href="/" style={{ marginRight: '1rem' }}>🏠 Inicio</Link>
        <Link href="/misiones" style={{ marginRight: '1rem' }}>🧭 Misiones</Link>
        <Link href="/logros" style={{ marginRight: '1rem' }}>🏅 Logros</Link>
        <Link href="/perfil" style={{ marginRight: '1rem' }}>👤 Perfil</Link>
        <Link href="/tienda" style={{ marginRight: '1rem' }}>🛒 Tienda</Link>
        <Link href="/login" style={{ marginRight: '1rem' }}>🔐 Login</Link>
        {user && (
          <button onClick={cerrarSesion} style={{ marginLeft: '1rem', background: '#f87171', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer' }}>
            Cerrar sesión
          </button>
        )}
      </nav>
      {user && <p style={{ marginBottom: '1rem', color: '#ccc' }}>Conectado como: <strong>{user.email}</strong></p>}
      {children}
    </div>
  )
}
