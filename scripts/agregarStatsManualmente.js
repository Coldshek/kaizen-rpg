
// scripts/agregarStatsManualmente.js

import { db } from "../firebase-config"
import { getDocs, updateDoc, collection } from "firebase/firestore"

const statsIniciales = {
  fuerza: { label: "💪 Fuerza", level: 1, xp: 0, xpToNext: 100 },
  inteligencia: { label: "🧠 Inteligencia", level: 1, xp: 0, xpToNext: 100 },
  carisma: { label: "😎 Carisma", level: 1, xp: 0, xpToNext: 100 },
  voluntad: { label: "🔥 Voluntad", level: 1, xp: 0, xpToNext: 100 },
  energia: { label: "⚡ Energía", level: 1, xp: 0, xpToNext: 100 },
  sabiduria: { label: "📜 Sabiduría", level: 1, xp: 0, xpToNext: 100 }
}

export async function actualizarStatsTodosLosJugadores() {
  const jugadoresRef = collection(db, "jugadores")
  const snapshot = await getDocs(jugadoresRef)

  for (const docSnap of snapshot.docs) {
    const data = docSnap.data()
    if (!data.stats) {
      await updateDoc(docSnap.ref, { stats: statsIniciales })
      console.log(`🧙 Stats añadidos a ${data.nombre}`)
    } else {
      console.log(`✅ ${data.nombre} ya tiene stats`)
    }
  }

  console.log("🏁 Finalizado")
}
