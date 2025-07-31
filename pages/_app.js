import '../styles/globals.css';
import { useEffect, useState, createContext } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../firebase-config';
import Layout from '../components/Layout';
import { ThemeProvider } from '../context/ThemeContext'; // 👈 nuevo

export const AuthContext = createContext(null);

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <ThemeProvider> {/* 👈 nuevo contenedor para el tema */}
      <AuthContext.Provider value={user}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}
