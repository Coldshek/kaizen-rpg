import { useEffect, useState, useContext } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase-config';
import Layout from '../components/Layout';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { AuthContext } from './_app';

export default function Home() {
  const [xp, setXp] = useState(0);
  const [racha, setRacha] = useState(0);
  const user = useContext(AuthContext); // obtenemos usuario actual

  useEffect(() => {
    const jugadorRef = doc(db, "jugadores", "daniel"); // en el futuro puedes poner user.uid
    const unsubscribe = onSnapshot(jugadorRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        setXp(data.xp || 0);
        setRacha(data.racha || 0);
      }
    });

    return () => unsubscribe();
  }, []);

  const nivel = Math.floor(xp / 500) + 1;
  const xpRelativo = xp % 500;
  const porcentaje = (xpRelativo / 500) * 100;

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Kaizen RPG 🌱</h1>

      <ThemeSwitcher />

      <p className="mt-4">
        Bienvenido{user?.email ? `, ${user.email}` : ""} 👋
      </p>

      <p><strong>Racha actual:</strong> {racha} días</p>

      <div className="mt-6">
        <p><strong>Nivel:</strong> {nivel}</p>
        <p><strong>XP:</strong> {xpRelativo} / 500</p>
        <div className="w-[300px] h-[20px] bg-gray-800 rounded-full mt-1 overflow-hidden">
          <div
            className="h-full bg-yellow-400"
            style={{ width: `${porcentaje}%` }}
          />
        </div>
      </div>
    </Layout>
  );
}
