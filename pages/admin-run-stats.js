import { useEffect } from 'react'
import { actualizarStatsTodosLosJugadores } from '../scripts/agregarStatsManualmente'


export default function RunStatsUpdater() {
  useEffect(() => {
    actualizarStatsTodosLosJugadores()
  }, [])

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold">🔧 Ejecutando actualización de stats...</h1>
      <p className="mt-4 text-gray-500">Revisa la consola del navegador para ver los resultados.</p>
    </div>
  )
}
