import '../styles/globals.css';
import { useEffect, useState, createContext } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../firebase-config'; // 👈 usamos la instancia compartida

export const AuthContext = createContext(null);

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(app); // 👈 usamos la app importada
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={user}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
