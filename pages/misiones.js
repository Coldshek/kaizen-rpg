// pages/misiones.js
import { useEffect, useState } from 'react'
import Mision from '../components/Mision'
import Head from 'next/head'
import ThemeSwitcher from '../components/ThemeSwitcher'

export default function Misiones() {
  const [misiones, setMisiones] = useState([])

  useEffect(() => {
    const lista = [
      { titulo: "Hidrátate correctamente 💧", xp: 10 },
      { titulo: "Haz una pausa consciente de 1 minuto 🧘", xp: 5 },
      { titulo: "Camina 15 minutos seguidos 🚶‍♂️", xp: 10 },
      { titulo: "Limpia tu escritorio 🧼", xp: 10 },
      { titulo: "Escribe una idea nueva ✍️", xp: 15 },
      { titulo: "No mirar el móvil durante una comida 📵", xp: 15 },
      { titulo: "Organiza tu día con 3 tareas clave 📋", xp: 20 },
      { titulo: "Haz 10 flexiones o sentadillas 🏋️", xp: 10 },
      { titulo: "Escucha una canción que te motive 🎶", xp: 5 },
      { titulo: "Lee 5 páginas de un libro 📖", xp: 10 },
      { titulo: "Prueba una comida diferente 🍣", xp: 10 },
      { titulo: "Envía un mensaje a alguien que quieres 💌", xp: 15 },
      { titulo: "Apaga notificaciones 1 hora 🔕", xp: 20 },
      { titulo: "Respira profundo 5 minutos 🌬️", xp: 10 },
      { titulo: "Anota algo que hayas aprendido 📚", xp: 15 },
      { titulo: "Haz algo creativo (escribe, dibuja...) 🎨", xp: 20 },
      { titulo: "Ordena una carpeta de tu PC 🗂️", xp: 10 },
      { titulo: "Saluda a alguien nuevo hoy 🙋", xp: 15 },
      { titulo: "Evita quejarte durante 1 hora 🤐", xp: 20 },
      { titulo: "Dúchate con agua fría 🚿", xp: 25 },
      { titulo: "Haz una buena acción anónima 🕊️", xp: 30 },
    ]
    setMisiones(lista)
  }, [])

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Head>
        <title>Misiones | Kaizen RPG</title>
      </Head>

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Misiones Diarias 🌟</h1>
        <ThemeSwitcher />
      </div>

      <div className="mt-6 space-y-4">
        {misiones.map((m, i) => (
          <Mision key={i} titulo={m.titulo} xp={m.xp} />
        ))}
      </div>
    </div>
  )
}
