import { createContext, useContext, useEffect, useState } from 'react'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase-config'
import { useContext as useReactContext } from 'react'
import { AuthContext } from '../pages/_app'

const StatsContext = createContext()
export const useStats = () => useContext(StatsContext)

export function StatsProvider({ children }) {
  const user = useReactContext(AuthContext)
  const [stats, setStats] = useState(null)

  const defaultStats = {
    fuerza: { label: '💪 Fuerza', level: 1, xp: 0, xpToNext: 100 },
    inteligencia: { label: '🧠 Inteligencia', level: 1, xp: 0, xpToNext: 100 },
    carisma: { label: '😎 Carisma', level: 1, xp: 0, xpToNext: 100 },
    voluntad: { label: '🔥 Voluntad', level: 1, xp: 0, xpToNext: 100 },
    energia: { label: '⚡ Energía', level: 1, xp: 0, xpToNext: 100 },
    sabiduria: { label: '📜 Sabiduría', level: 1, xp: 0, xpToNext: 100 },
  }

  // Cargar stats desde Firestore
  useEffect(() => {
    const fetchStats = async () => {
      if (!user) return

      const docRef = doc(db, 'jugadores', user.uid)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists() && docSnap.data().stats) {
        setStats(docSnap.data().stats)
      } else {
        setStats(defaultStats)
        await setDoc(docRef, { stats: defaultStats }, { merge: true })
      }
    }

    fetchStats()
  }, [user])

  // Función para ganar XP y guardar en Firebase
  const ganarXP = async (statKey, xpGanado) => {
    if (!user || !stats) return

    const stat = stats[statKey]
    let nuevoXP = stat.xp + xpGanado
    let level = stat.level
    let xpToNext = stat.xpToNext

    if (nuevoXP >= xpToNext) {
      level += 1
      nuevoXP = nuevoXP - xpToNext
      xpToNext = Math.round(xpToNext * 1.2)
    }

    const nuevosStats = {
      ...stats,
      [statKey]: {
        ...stat,
        xp: nuevoXP,
        level,
        xpToNext,
      }
    }

    setStats(nuevosStats)

    const docRef = doc(db, 'jugadores', user.uid)
    await updateDoc(docRef, { stats: nuevosStats })
  }

  return (
    <StatsContext.Provider value={{ stats, ganarXP }}>
      {children}
    </StatsContext.Provider>
  )
}
