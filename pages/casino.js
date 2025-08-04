import { useContext, useEffect, useState } from 'react'
import { db } from '../firebase-config'
import { AuthContext } from './_app'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import Head from 'next/head'
import ThemeSwitcher from '../components/ThemeSwitcher'

export default function Casino() {
  const user = useContext(AuthContext)
  const [oro, setOro] = useState(0)
  const [resultado, setResultado] = useState(null)
  const [tirando, setTirando] = useState(false)
  const [giro, setGiro] = useState(0)

  const premios = [
    { texto: '+5 💰', valor: 5 },
    { texto: '+10 💰', valor: 10 },
    { texto: '+20 💰', valor: 20 },
    { texto: 'Sin premio 😢', valor: 0 },
    { texto: '-5 💰', valor: -5 },
    { texto: '-10 💰', valor: -10 },
  ]

  useEffect(() => {
    if (!user?.uid) return
    const ref = doc(db, 'jugadores', user.uid)
    getDoc(ref).then(snap => {
      if (snap.exists()) {
        setOro(snap.data().oro || 0)
      }
    })
  }, [user])

  const tirarRuleta = async () => {
    if (!user || oro < 10 || tirando) return
    setTirando(true)

    const indice = Math.floor(Math.random() * premios.length)
    const premio = premios[indice]
    const nuevoOro = oro - 10 + premio.valor
    setResultado(null) // Limpia antes del nuevo resultado
    setGiro(prev => prev + 360 * 5 + indice * (360 / premios.length)) // anima

    setTimeout(async () => {
      setResultado(premio.texto)
      setOro(nuevoOro)

      const ref = doc(db, 'jugadores', user.uid)
      await setDoc(ref, { oro: nuevoOro }, { merge: true })

      setTirando(false)
    }, 4000)
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Head><title>🎰 Casino Kaizen</title></Head>

      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">🎰 Casino Kaizen</h1>
        <ThemeSwitcher />
      </div>

      <p className="mt-4 text-lg">Oro actual: <strong>{oro} 💰</strong></p>
      <p className="text-sm text-gray-500">Cada tirada cuesta 10 💰</p>

      {/* 🎡 Ruleta Visual */}
      <div className="relative w-64 h-64 mx-auto mt-8">
        <div
          className="absolute w-full h-full rounded-full border-[10px] border-purple-500"
          style={{
            transform: `rotate(${giro}deg)`,
            transition: 'transform 3.8s cubic-bezier(0.33, 1, 0.68, 1)',
          }}
        >
          {premios.map((p, i) => (
            <div
              key={i}
              className="absolute w-1/2 left-1/2 top-1/2 origin-left text-sm font-bold text-white"
              style={{
                transform: `rotate(${(360 / premios.length) * i}deg) translateX(-50%)`,
              }}
            >
              {p.texto}
            </div>
          ))}
        </div>
        <div className="absolute w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-red-500 top-[-30px] left-1/2 transform -translate-x-1/2" />
      </div>

      <button
        onClick={tirarRuleta}
        disabled={oro < 10 || tirando}
        className="mt-10 bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded disabled:opacity-50"
      >
        {tirando ? 'Girando...' : 'Tirar Ruleta 🎲'}
      </button>

      {resultado && (
        <p className="mt-6 text-2xl font-bold text-center">
          Resultado: <span className="text-yellow-500">{resultado}</span>
        </p>
      )}
    </div>
  )
}
