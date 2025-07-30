import { useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase-config'
import Layout from '../components/Layout'

export default function Home() {
  const [xp, setXp] = useState(0)
  const [racha, setRacha] = useState(0)

  useEffect(() => {
    const jugadorRef = doc(db, "jugadores", "daniel")
    const unsubscribe = onSnapshot(jugadorRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data()
        setXp(data.xp || 0)
        setRacha(data.racha || 0)
      }
    })

    return () => unsubscribe()
  }, [])

  const nivel = Math.floor(xp / 500) + 1
  const xpRelativo = xp % 500
  const porcentaje = (xpRelativo / 500) * 100

  return (
    <Layout>
      <h1>Kaizen RPG</h1>
      <p>Bienvenido, <strong>Daniel</strong></p>
      <p><strong>Racha actual:</strong> {racha} días</p>
      <div style={{ marginTop: '2rem' }}>
        <p><strong>Nivel:</strong> {nivel}</p>
        <p><strong>XP:</strong> {xpRelativo} / 500</p>
        <div style={{ background: '#333', height: '20px', width: '300px', borderRadius: '10px', marginTop: '5px' }}>
          <div style={{ background: '#fbbf24', height: '100%', width: `${porcentaje}%`, borderRadius: '10px' }}></div>
        </div>
      </div>
    </Layout>
  )
}
