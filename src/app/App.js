import './App.css'
import './reset.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { Login } from '../components/login/Login'
import { Register } from '../components/register/Register'
import { Header } from '../components/header/Header'
import { HomePage } from '../components/homePage/HomePage'

import { TokenProvider } from '../context/tokenContext'

import { useAuth } from '../hook/useToken'

function App() {
  const { isLogged, token } = useAuth()

  return (
    <TokenProvider value={{ isLogged, token }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </TokenProvider>
  )
}

export default App
