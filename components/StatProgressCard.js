export default function StatProgressCard({ stats }) {
  return (
    <div className="space-y-4">
      {Object.entries(stats).map(([key, stat]) => {
        const progress = Math.min(100, (stat.xp / stat.xpToNext) * 100)

        return (
          <div key={key} className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700 shadow-md">
            <div className="flex justify-between items-center mb-1">
              <span className="text-lg font-bold text-gray-800 dark:text-gray-200">{stat.label}</span>
              <span className="text-sm text-gray-500 dark:text-gray-300">Nivel {stat.level}</span>
            </div>
            <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-4">
              <div
                className="bg-green-500 h-4 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-right text-xs text-gray-600 dark:text-gray-300 mt-1">
              {stat.xp} / {stat.xpToNext} XP
            </p>
          </div>
        )
      })}
    </div>
  )
}
