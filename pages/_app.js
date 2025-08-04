import '../styles/globals.css'
import { useEffect, useState, createContext } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { app } from '../firebase-config'
import Layout from '../components/Layout'
import { ThemeProvider } from '../context/ThemeContext'
import { StatsProvider } from '../context/StatsContext'

import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../firebase-config'

export const AuthContext = createContext(null)

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const auth = getAuth(app)

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser)

      if (firebaseUser) {
        const refJugador = doc(db, "jugadores", firebaseUser.uid)
        const snap = await getDoc(refJugador)

        if (!snap.exists()) {
          await setDoc(refJugador, {
            nombre: firebaseUser.email,
            oro: 0,
            stats: {
              carisma: { label: "😎 Carisma", level: 1, xp: 0, xpToNext: 100 },
              energia: { label: "⚡ Energía", level: 1, xp: 0, xpToNext: 100 },
              fuerza: { label: "💪 Fuerza", level: 1, xp: 0, xpToNext: 100 },
              inteligencia: { label: "🧠 Inteligencia", level: 1, xp: 0, xpToNext: 100 },
              sabiduria: { label: "📜 Sabiduría", level: 1, xp: 0, xpToNext: 100 },
              voluntad: { label: "🔥 Voluntad", level: 1, xp: 0, xpToNext: 100 },
            },
            logros: {},
            racha: 0,
          })
          console.log("👤 Jugador inicializado en Firestore.")
        }
      }
    })

    return () => unsubscribe()
  }, [])

  return (
    <ThemeProvider>
      <AuthContext.Provider value={user}>
        <StatsProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </StatsProvider>
      </AuthContext.Provider>
    </ThemeProvider>
  )
}
