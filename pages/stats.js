import { useStats } from '../context/StatsContext'
import StatProgressCard from '../components/StatProgressCard'

export default function Stats() {
  const { stats } = useStats()

  if (!stats) {
    return <p className="text-center mt-10 text-gray-500 dark:text-gray-300">Cargando estadísticas...</p>
  }

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl font-extrabold mb-4 text-center text-gray-800 dark:text-white">
          📈 Progreso del Héroe
        </h1>
        <p className="text-center mb-8 text-gray-600 dark:text-gray-400 italic">
          “Entrena tus atributos para alcanzar nuevas metas.”
        </p>
        <StatProgressCard stats={stats} />
      </div>
    </div>
  )
}
