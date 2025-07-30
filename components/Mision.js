import { useContext } from 'react'
import { AuthContext } from '../pages/_app'
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  getDoc,
  setDoc,
  updateDoc
} from 'firebase/firestore'
import { db } from '../firebase-config'

export default function Mision({ titulo, xp }) {
  const user = useContext(AuthContext)

  const completarMision = async () => {
    if (!user) {
      alert("Debes iniciar sesión para completar misiones.")
      return
    }

    try {
      const uid = user.uid
      const now = new Date()
      const fechaStr = now.toISOString().split('T')[0]

      // Guardar misión en subcolección del usuario
      await addDoc(collection(db, "jugadores", uid, "misiones"), {
        titulo,
        xp,
        completado_en: serverTimestamp(),
        fecha: fechaStr
      })

      const jugadorRef = doc(db, "jugadores", uid)
      const jugadorSnap = await getDoc(jugadorRef)

      let nuevoXp = xp
      let ultimaFecha = fechaStr
      let racha = 1
      let logros = {}

      if (jugadorSnap.exists()) {
        const data = jugadorSnap.data()
        nuevoXp = (data.xp || 0) + xp

        const ayer = new Date(now)
        ayer.setDate(ayer.getDate() - 1)
        const ayerStr = ayer.toISOString().split('T')[0]

        if (data.ultima_fecha === fechaStr) {
          racha = data.racha || 1
        } else if (data.ultima_fecha === ayerStr) {
          racha = (data.racha || 1) + 1
        }

        ultimaFecha = fechaStr
        logros = { ...data.logros }

        if (!logros.primera_mision) {
          logros.primera_mision = true
        }

        if (racha >= 3 && !logros.racha_3_dias) {
          logros.racha_3_dias = true
        }
      }

      await setDoc(jugadorRef, {
        nombre: user.email,
        xp: nuevoXp,
        ultima_fecha: ultimaFecha,
        racha,
        logros
      })

      alert(`¡Misión "${titulo}" completada! Ganaste ${xp} XP.`)
    } catch (e) {
      console.error("Error al guardar misión o XP: ", e)
      alert("Hubo un error al guardar la misión.")
    }
  }

  return (
    <div style={{
      background: '#1f1f1f',
      border: '1px solid #444',
      borderRadius: '10px',
      padding: '1rem',
      marginBottom: '1rem'
    }}>
      <h3>{titulo}</h3>
      <p>Recompensa: {xp} XP</p>
      <button
        onClick={completarMision}
        style={{
          backgroundColor: '#fbbf24',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
        Completar
      </button>
    </div>
  )
}
