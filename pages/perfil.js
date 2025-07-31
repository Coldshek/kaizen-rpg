import { useEffect, useState, useContext } from 'react'
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase-config'
import { AuthContext } from './_app'
import { useStats } from '../context/StatsContext'

export default function Perfil() {
  const user = useContext(AuthContext)              // ✅ Añadido aquí
  const [misiones, setMisiones] = useState([])
  const statsContext = useStats()

  if (!statsContext || !statsContext.stats) {
    return <p className="text-center mt-10 text-gray-400">Cargando perfil y stats...</p>
  }

  const { stats } = statsContext

  useEffect(() => {
    if (!user) return

    const q = query(
      collection(db, "jugadores", user.uid, "misiones"),
      orderBy("completado_en", "desc"),
      limit(10)
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const lista = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setMisiones(lista)
    })

    return () => unsubscribe()
  }, [user])

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-4">👤 Perfil del Jugador</h1>

      {user && (
        <p className="mb-2">
          <strong>Email:</strong> {user.email}
        </p>
      )}

      <div className="mt-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">📊 Stats actuales</h2>
        <ul className="grid grid-cols-2 gap-2 text-sm">
          {Object.entries(stats).map(([key, stat]) => (
            <li key={key}>
              {stat.label}: Nivel {stat.level} – {stat.xp}/{stat.xpToNext} XP
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">📜 Últimas misiones completadas</h2>
        <ul className="list-disc pl-5 text-sm space-y-1">
          {misiones.map((m) => (
            <li key={m.id}>
              {m.titulo} – +{m.xp} XP – {m.fecha || 'sin fecha'}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
