import { useEffect, useState, useContext } from 'react'
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase-config'
import Layout from '../components/Layout'
import { AuthContext } from './_app'

export default function Perfil() {
  const [misiones, setMisiones] = useState([])
  const user = useContext(AuthContext)

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
    <Layout>
      <h1>Perfil del Jugador</h1>
      {user && <p><strong>Email:</strong> {user.email}</p>}
      <p>Últimas misiones completadas:</p>
      <ul>
        {misiones.map((m) => (
          <li key={m.id}>
            {m.titulo} – {m.xp} XP – {m.fecha || 'fecha desconocida'}
          </li>
        ))}
      </ul>
    </Layout>
  )
}
