import Layout from '../components/Layout'
import Mision from '../components/Mision'

export default function Misiones() {
const misiones = [
  { titulo: "Hidrátate correctamente", xp: 10 },
  { titulo: "Haz una pausa consciente de 1 min", xp: 5 },
  { titulo: "Camina 15 minutos seguidos", xp: 10 },
  { titulo: "Limpia tu escritorio o zona de trabajo", xp: 10 },
  { titulo: "Escribe una idea nueva en tu bloc de notas", xp: 15 },
  { titulo: "Evita mirar el móvil durante una comida", xp: 15 },
  { titulo: "Organiza tu día con 3 tareas clave", xp: 20 },
  { titulo: "Haz 10 flexiones o sentadillas", xp: 10 },
  { titulo: "Escucha una canción que te motive", xp: 5 },
  { titulo: "Lee 5 páginas de un libro", xp: 10 },
  { titulo: "Prueba una comida diferente o nueva", xp: 10 },
  { titulo: "Envía un mensaje a alguien que aprecias", xp: 15 },
  { titulo: "Apaga notificaciones durante 1 hora", xp: 20 },
  { titulo: "Dedica 5 minutos a respirar profundo", xp: 10 },
  { titulo: "Apunta algo que hayas aprendido hoy", xp: 15 },
  { titulo: "Haz algo creativo (escribir, dibujar...)", xp: 20 },
]

    
  ]

  return (
    <Layout>
      <h1>Misiones Diarias</h1>
      {misiones.map((mision, i) => (
        <Mision key={i} titulo={mision.titulo} xp={mision.xp} />
      ))}
    </Layout>
  )
}
