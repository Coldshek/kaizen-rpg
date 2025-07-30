import Layout from '../components/Layout'
import Mision from '../components/Mision'

export default function Misiones() {
  const misiones = [
    { titulo: 'Beber 2L de agua', xp: 15 },
    { titulo: 'Ejercicio 30 minutos', xp: 15 },
    { titulo: 'Escribir en diario', xp: 10 }
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
