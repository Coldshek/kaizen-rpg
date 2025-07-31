export default function StatsCard({ stats }) {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md">
      {Object.entries(stats).map(([key, value]) => (
        <div key={key} className="flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-800 rounded-md">
          <span className="font-semibold text-gray-700 dark:text-gray-300 capitalize">{key}</span>
          <span className="font-bold text-indigo-600 dark:text-indigo-400">{value}</span>
        </div>
      ))}
    </div>
  )
}
