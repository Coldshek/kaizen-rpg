import { useEffect, useState, useContext } from 'react';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase-config';
import { AuthContext } from './_app';

export default function Perfil() {
  const [misiones, setMisiones] = useState([]);
  const user = useContext(AuthContext);

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, "jugadores", user.uid, "misiones"),
      orderBy("completado_en", "desc"),
      limit(10)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const lista = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMisiones(lista);
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Perfil del Jugador</h1>
      {user && <p className="mb-2"><strong>Email:</strong> {user.email}</p>}
      <p className="mb-2">Últimas misiones completadas:</p>
      <ul className="list-disc pl-6">
        {misiones.map((m) => (
          <li key={m.id}>
            {m.titulo} – {m.xp} XP – {m.fecha || 'fecha desconocida'}
          </li>
        ))}
      </ul>
    </div>
  );
}
