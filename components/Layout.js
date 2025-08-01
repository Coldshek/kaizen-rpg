import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '../pages/_app';
import { getAuth, signOut } from 'firebase/auth';

export default function Layout({ children }) {
  const user = useContext(AuthContext);

  const cerrarSesion = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      window.location.href = "/login";
    });
  };

  return (
    <div className="min-h-screen px-8 py-6 font-sans transition-colors duration-300 
                    bg-white text-black 
                    dark:bg-gray-900 dark:text-white 
                    valesquita:bg-[#f8d0e7] valesquita:text-[#831843]">

      {/* ✅ Banner responsive visible para todos */}
      <div className="relative mb-6 rounded-xl overflow-hidden shadow-lg w-full" style={{ aspectRatio: '16/6' }}>
        <img
          src="/banner-rpg.jpg"
          alt="Banner Kaizen RPG"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Kaizen RPG
          </h1>
        </div>
      </div>

      <nav className="mb-6 space-x-4">
        <Link href="/">🏠 Inicio</Link>
        <Link href="/stats">📊 Stats</Link>
        <Link href="/misiones">🧭 Misiones</Link>
        <Link href="/misiones-personalizadas">🛠️ Crear Misión</Link>
        <Link href="/logros">🏅 Logros</Link>
        <Link href="/perfil">👤 Perfil</Link>
        <Link href="/tienda">🛒 Tienda</Link>
        <Link href="/login">🔐 Login</Link>

        {user && (
          <button
            onClick={cerrarSesion}
            className="ml-4 bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded"
          >
            Cerrar sesión
          </button>
        )}
      </nav>

      {user && (
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">
          Conectado como: <strong>{user.email}</strong>
        </p>
      )}

      {children}
    </div>
  );
}
