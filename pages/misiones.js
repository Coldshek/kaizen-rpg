import { useEffect, useState, useContext } from 'react'
import Mision from '../components/Mision'
import Head from 'next/head'
import ThemeSwitcher from '../components/ThemeSwitcher'
import { db } from '../firebase-config'
import { AuthContext } from './_app'
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment
} from 'firebase/firestore'

export default function Misiones() {
  const [misionesPredefinidas, setMisionesPredefinidas] = useState([])
  const [misionesPersonalizadas, setMisionesPersonalizadas] = useState([])
  const [titulo, setTitulo] = useState('')
  const [xp, setXp] = useState('')
  const [stat, setStat] = useState('voluntad')
  const [emoji, setEmoji] = useState('🎯')
  const user = useContext(AuthContext)

  useEffect(() => {
    const lista = [
      { titulo: "Hidrátate correctamente 💧", xp: 10, stat: 'energia' },
      { titulo: "Haz una pausa consciente de 1 minuto 🧘", xp: 5, stat: 'voluntad' },
      { titulo: "Camina 15 minutos seguidos 🫰‍♂️", xp: 10, stat: 'fuerza' },
      { titulo: "Limpia tu escritorio 🧼", xp: 10, stat: 'voluntad' },
      { titulo: "Escribe una idea nueva ✍️", xp: 15, stat: 'inteligencia' },
      { titulo: "No mirar el móvil durante una comida 📵", xp: 15, stat: 'voluntad' },
      { titulo: "Organiza tu día con 3 tareas clave 📋", xp: 20, stat: 'sabiduria' },
      { titulo: "Haz 10 flexiones o sentadillas 🏋️", xp: 10, stat: 'fuerza' },
      { titulo: "Escucha una canción que te motive 🎶", xp: 5, stat: 'energia' },
      { titulo: "Lee 5 páginas de un libro 📖", xp: 10, stat: 'sabiduria' },
      { titulo: "Prueba una comida diferente 🍣", xp: 10, stat: 'energia' },
      { titulo: "Envía un mensaje a alguien que quieres 💌", xp: 15, stat: 'carisma' },
      { titulo: "Apaga notificaciones 1 hora 🔕", xp: 20, stat: 'voluntad' },
      { titulo: "Respira profundo 5 minutos 🌬️", xp: 10, stat: 'voluntad' },
      { titulo: "Anota algo que hayas aprendido 📚", xp: 15, stat: 'sabiduria' },
      { titulo: "Haz algo creativo (escribe, dibuja...) 🎨", xp: 20, stat: 'inteligencia' },
      { titulo: "Ordena una carpeta de tu PC 🗂️", xp: 10, stat: 'voluntad' },
      { titulo: "Saluda a alguien nuevo hoy 👋", xp: 15, stat: 'carisma' },
      { titulo: "Evita quejarte durante 1 hora 🪐", xp: 20, stat: 'voluntad' },
      { titulo: "Dúchate con agua fría 🚿", xp: 25, stat: 'fuerza' },
      { titulo: "Haz una buena acción anónima 🗳️", xp: 30, stat: 'carisma' },
    ]
    setMisionesPredefinidas(lista)
  }, [])

  useEffect(() => {
    if (!user?.uid) return

    const q = query(
      collection(db, "jugadores", user.uid, "misiones"),
      orderBy("completado_en", "desc")
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const personalizadas = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(m => m.origen === "personalizada")
      setMisionesPersonalizadas(personalizadas)
    })

    return () => unsubscribe()
  }, [user])

  const crearMision = async (e) => {
    e.preventDefault()
    if (!user) return alert("Debes iniciar sesión")
    if (!titulo || !xp || !stat || !emoji) return alert("Rellena todos los campos")
    if (parseInt(xp) > 20) return alert("El máximo de XP permitido es 20")

    try {
      const oroGanado = parseInt(xp)
      const now = new Date()
      const fechaStr = now.toISOString().split('T')[0]

      const jugadorRef = doc(db, "jugadores", user.uid)
      const jugadorSnap = await getDoc(jugadorRef)

      if (!jugadorSnap.exists()) {
        await setDoc(jugadorRef, {
          nombre: user.email,
          oro: oroGanado,
          stats: {},
          logros: {}
        })
      } else {
        await updateDoc(jugadorRef, {
          oro: increment(oroGanado)
        })
      }

      await addDoc(collection(db, "jugadores", user.uid, "misiones"), {
        titulo: `${titulo} ${emoji}`,
        xp: oroGanado,
        stat,
        origen: "personalizada",
        fecha: fechaStr,
        completado_en: serverTimestamp()
      })

      alert(`✅ Misión creada: +${oroGanado} 💰 y +${xp} XP`)
      setTitulo('')
      setXp('')
      setStat('voluntad')
      setEmoji('🎯')
    } catch (err) {
      alert("Error al guardar la misión: " + err.message)
    }
  }

  const eliminarMision = async (id) => {
    if (!user?.uid || !id) return
    const confirmar = confirm("¿Eliminar esta misión personalizada?")
    if (!confirmar) return

    try {
      await deleteDoc(doc(db, "jugadores", user.uid, "misiones", id))
    } catch (err) {
      alert("Error al eliminar la misión: " + err.message)
    }
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Head>
        <title>Misiones | Kaizen RPG</title>
      </Head>

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Misiones Diarias 🌟</h1>
        <ThemeSwitcher />
      </div>

      <form onSubmit={crearMision} className="mt-6 space-y-4 bg-yellow-100 dark:bg-yellow-900 p-4 rounded-lg">
        <h2 className="text-lg font-semibold">🛠️ Crea tu propia misión</h2>
        <input type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} className="w-full p-2 rounded border" />
        <input type="number" placeholder="XP (máx 20)" value={xp} onChange={(e) => setXp(e.target.value)} max={20} className="w-full p-2 rounded border" />
        <select value={stat} onChange={(e) => setStat(e.target.value)} className="w-full p-2 rounded border">
          <option value="voluntad">Voluntad</option>
          <option value="sabiduria">Sabiduría</option>
          <option value="inteligencia">Inteligencia</option>
          <option value="fuerza">Fuerza</option>
          <option value="energia">Energía</option>
          <option value="carisma">Carisma</option>
        </select>
        <select value={emoji} onChange={(e) => setEmoji(e.target.value)} className="w-full p-2 rounded border">
          <option value="🌟">🌟 Genérica</option>
          <option value="💡">💡 Idea</option>
          <option value="🏋️">🏋️ Fuerza</option>
          <option value="📖">📖 Sabiduría</option>
          <option value="🌬️">🌬️ Respiración</option>
          <option value="🎨">🎨 Creativa</option>
          <option value="💌">💌 Social</option>
          <option value="🍀">🍀 Bienestar</option>
          <option value="🔥">🔥 Reto</option>
        </select>
        <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded font-bold">
          Crear misión
        </button>
      </form>

      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2">🌟 Misiones del sistema</h2>
        <div className="space-y-4">
          {misionesPredefinidas.map((m, i) => (
            <div
              key={`sys-${i}`}
              className="cursor-pointer"
              onClick={async () => {
                if (!user?.uid) return alert("Debes iniciar sesión")
                try {
                  const oroGanado = m.xp
                  const now = new Date()
                  const fechaStr = now.toISOString().split('T')[0]
                  const jugadorRef = doc(db, "jugadores", user.uid)
                  const jugadorSnap = await getDoc(jugadorRef)

                  if (!jugadorSnap.exists()) {
                    await setDoc(jugadorRef, {
                      nombre: user.email,
                      oro: oroGanado,
                      stats: {},
                      logros: {}
                    })
                  } else {
                    await updateDoc(jugadorRef, {
                      oro: increment(oroGanado)
                    })
                  }

                  await addDoc(collection(db, "jugadores", user.uid, "misiones"), {
                    titulo: m.titulo,
                    xp: oroGanado,
                    stat: m.stat,
                    origen: "sistema",
                    fecha: fechaStr,
                    completado_en: serverTimestamp()
                  })

                  alert(`✅ Misión completada: +${oroGanado} 💰 y +${m.xp} XP`)
                } catch (err) {
                  alert("Error al completar la misión: " + err.message)
                }
              }}
            >
              <Mision titulo={`${m.titulo} (+${m.xp} XP / +${m.xp} 💰)`} xp={m.xp} stat={m.stat} />
            </div>
          ))}
        </div>
      </div>

      {misionesPersonalizadas.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-2">🧠 Tus misiones personalizadas</h2>
          <div className="space-y-4">
            {misionesPersonalizadas.map((m) => (
              <div key={m.id} className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-3 rounded">
                <Mision titulo={`${m.titulo} (+${m.xp} XP / +${m.xp} 💰)`} xp={m.xp} stat={m.stat} />
                <button
                  onClick={() => eliminarMision(m.id)}
                  className="ml-4 text-sm text-red-600 hover:underline"
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}