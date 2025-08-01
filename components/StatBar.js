export default function StatBar({ label, level, xp, xpToNext }) {
  const safeXP = parseFloat(xp) || 0
  const safeXPToNext = parseFloat(xpToNext) || 100
  const progreso = Math.min(100, (safeXP / safeXPToNext) * 100)

  return (
    <div style={{ marginBottom: '1.5rem', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
        <span>{label} – Nivel {level}</span>
        <span>{safeXP}/{safeXPToNext} XP</span>
      </div>

      <div
        style={{
          height: '16px',
          width: '100%',
          backgroundColor: '#ccc',
          borderRadius: '6px',
          border: '1px solid #666',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progreso}%`,
            backgroundColor: '#10b981', // verde fuerte
            transition: 'width 0.4s ease-in-out'
          }}
        />
      </div>
    </div>
  )
}
