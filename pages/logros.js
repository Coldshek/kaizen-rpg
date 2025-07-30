import { useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase-config'
import Layout from '../components/Layout'

export default function Logros() {
  const [logros, setLogros] = useState({})

  useEffect(() => {
    const jugadorRef = doc(db, "jugadores", "daniel")
    const unsubscribe = onSnapshot(jugadorRef, (doc) => {
      if (doc.exists()) {
        setLogros(doc.data().logros || {})
      }
    })

    return () => unsubscribe()
  }, [])

  return (
    <Layout>
      <h1>Logros desbloqueados</h1>
      <ul>
        {logros.primera_mision && <li>🏅 Primera misión completada</li>}
        {logros.racha_3_dias && <li>🔥 Racha de 3 días lograda</li>}
        {Object.keys(logros).length === 0 && <li>No has desbloqueado logros aún.</li>}
      </ul>
    </Layout>
  )
}
