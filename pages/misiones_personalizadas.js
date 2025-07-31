import { useState, useContext } from 'react'
import { db } from '../firebase-config'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { AuthContext } from './_app'

export default function MisionesPersonalizadas() {
  const user = useContext(AuthContext)
  const [titulo, setTitulo] = useState('')
  const [xp, setXp] = useState('')

  const crearMision = async (e) => {
    e.preventDefault()
    if (!user) return alert("Debes iniciar sesión")
    if (!titulo || !xp) return alert("Rellena todos los campos")

    try {
      const now = new Date()
      const fechaStr = now.toISOString().split('T')[0]

      await addDoc(collection(db, "jugadores", user.uid, "misiones"), {
        titulo,
        xp: parseInt(xp),
        fecha: fechaStr,
        completado_en: serverTimestamp()
      })

      alert("Misión añadida correctamente")
      setTitulo('')
      setXp('')
    } catch (err) {
      alert("Error al guardar la misión: " + err.message)
    }
  }

  return (
    <div>
      <h1>Crear Misión Personalizada</h1>
      <form onSubmit={crearMision} style={{ maxWidth: '400px' }}>
        <input
          type="text"
          placeholder="Título de la misión"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
        />
        <input
          type="number"
          placeholder="XP"
          value={xp}
          onChange={(e) => setXp(e.target.value)}
          style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#fbbf24',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Guardar misión
        </button>
      </form>
    </div>
  )
}
