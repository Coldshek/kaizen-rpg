import StatsCard from '../components/StatsCard'

export default function Stats() {
  const stats = {
    '💪 Fuerza': 12,
    '🧠 Inteligencia': 16,
    '😎 Carisma': 10,
    '🔥 Voluntad': 14,
    '⚡ Energía': 13,
    '📜 Sabiduría': 11,
  }

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-800 dark:text-white text-center">
          📊 Estadísticas del Héroe
        </h1>
        <p className="text-center mb-8 text-gray-600 dark:text-gray-400 italic">
          “Un vistazo a tu alma aventurera... ¿serás digno del siguiente nivel?”
        </p>
        <StatsCard stats={stats} />
      </div>
    </div>
  )
}
