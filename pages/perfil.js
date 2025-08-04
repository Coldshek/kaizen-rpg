import { useEffect, useState, useContext } from 'react'
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
  doc,
  getDoc
} from 'firebase/firestore'
import { db } from '../firebase-config'
import { AuthContext } from './_app'
import { useStats } from '../context/StatsContext'
import StatBar from '../components/StatBar'
import StatProgressCard from '../components/StatProgressCard'

export default function Perfil() {
  const user = useContext(AuthContext)
  const [misiones, setMisiones] = useState([])
  const [jugadorData, setJugadorData] = useState(null)
  const statsContext = useStats()

  if (!user) {
    return <p className="text-center mt-10 text-gray-400">Cargando datos de usuario...</p>
  }

  if (!statsContext || !statsContext.stats) {
    return <p className="text-center mt-10 text-gray-400">Cargando perfil y stats...</p>
  }

  const { stats } = statsContext

  useEffect(() => {
    if (!user?.uid) return

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

  useEffect(() => {
    const cargarDatosJugador = async () => {
      if (!user?.uid) return
      const ref = doc(db, "jugadores", user.uid)
      const snap = await getDoc(ref)
      if (snap.exists()) {
        setJugadorData(snap.data())
      }
    }
    cargarDatosJugador()
  }, [user])

  const renderNombreLogro = (key) => {
    const mapa = {
      primera_mision: "Primera misión completada",
      racha_3_dias: "3 días seguidos de misiones",
    }
    return mapa[key] || key
  }

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-4">👤 Perfil del Jugador</h1>

      <p className="mb-2"><strong>Email:</strong> {user.email}</p>

      {jugadorData?.oro !== undefined && (
        <p className="mb-4 text-lg font-semibold text-yellow-600 dark:text-yellow-400">
          💰 Oro: {jugadorData.oro}
        </p>
      )}

      <div className="mt-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">📊 Stats actuales</h2>

        {Object.entries(stats).map(([key, stat]) => (
          <StatBar
            key={key}
            label={stat.label}
            level={stat.level}
            xp={stat.xp}
            xpToNext={stat.xpToNext}
          />
        ))}

        {/* También puedes usar esta si prefieres la versión visual */}
        {/* <StatProgressCard stats={stats} /> */}
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">📜 Últimas misiones completadas</h2>
        <ul className="list-disc pl-5 text-sm space-y-1">
          {misiones.map((m) => (
            <li key={m.id}>
              {m.titulo} – +{m.xp} XP – {m.fecha || 'sin fecha'}
            </li>
          ))}
        </ul>
      </div>

      {jugadorData?.logros && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">🏅 Logros desbloqueados</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            {Object.entries(jugadorData.logros).map(([key, valor]) => (
              <li key={key}>
                {valor ? "✅" : "🔒"} {renderNombreLogro(key)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
