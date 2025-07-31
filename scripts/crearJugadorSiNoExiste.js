// ✅ Usa export default para evitar confusiones
export default async function crearJugadorSiNoExiste(user) {
  if (!user || !user.uid) return;

  const jugadorRef = doc(db, 'jugadores', user.uid);
  const snapshot = await getDoc(jugadorRef);

  const statsIniciales = {
    fuerza: { label: '💪 Fuerza', level: 1, xp: 0, xpToNext: 100 },
    inteligencia: { label: '🧠 Inteligencia', level: 1, xp: 0, xpToNext: 100 },
    carisma: { label: '😎 Carisma', level: 1, xp: 0, xpToNext: 100 },
    voluntad: { label: '🔥 Voluntad', level: 1, xp: 0, xpToNext: 100 },
    energia: { label: '⚡ Energía', level: 1, xp: 0, xpToNext: 100 },
    sabiduria: { label: '📜 Sabiduría', level: 1, xp: 0, xpToNext: 100 },
  }

  if (!snapshot.exists()) {
    await setDoc(jugadorRef, {
      nombre: user.email,
      stats: statsIniciales,
      primera_mision: true,
      racha: 0,
      xp: 0,
      ultima_fecha: new Date().toISOString().split('T')[0],
    })
    console.log('✅ Jugador creado en Firestore con stats por defecto')
  } else {
    console.log('ℹ️ Jugador ya existe')
  }
}
