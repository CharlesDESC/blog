import './App.css'
import './reset.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Login } from '../components/login/Login'
import { Register } from '../components/register/Register'
import { HomePage } from '../components/homePage/HomePage'
import { ArticleDetailPage } from '../components/ArticleDetailsPage/ArticleDetailsPage';
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
          <Route path="/articles/:articleId" element={<ArticleDetailPage />} />
        </Routes>
      </BrowserRouter>
    </TokenProvider>
  )
}

export default App
