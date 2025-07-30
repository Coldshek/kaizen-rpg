import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../firebase-config'

initializeApp(firebaseConfig)
const auth = getAuth()

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegister, setIsRegister] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password)
        alert("Registro exitoso. ¡Bienvenido!")
      } else {
        await signInWithEmailAndPassword(auth, email, password)
        alert("Inicio de sesión exitoso")
      }
    } catch (error) {
      alert("Error: " + error.message)
    }
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
      <h1>{isRegister ? "Registrarse" : "Iniciar Sesión"}</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} />
        <button type="submit" style={{ width: '100%', padding: '0.5rem', backgroundColor: '#fbbf24', border: 'none' }}>
          {isRegister ? "Registrarse" : "Entrar"}
        </button>
      </form>
      <button onClick={() => setIsRegister(!isRegister)} style={{ marginTop: '1rem', border: 'none', background: 'none', color: '#ccc' }}>
        {isRegister ? "¿Ya tienes cuenta? Inicia sesión" : "¿No tienes cuenta? Regístrate"}
      </button>
    </div>
  )
}
