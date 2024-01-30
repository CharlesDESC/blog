import { useState, useEffect } from 'react'

export const useAuth = () => {
  const [token, setToken] = useState()
  const [isLogged, setIsLogged] = useState(false)
  const [login, setLogin] = useState('')

  const getToken = async (email, password) => {
    try {
      const tokenResponse = await fetch('http://127.0.0.1:8000/auth', {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const tokenJson = await tokenResponse.json()
      localStorage.setItem('token', tokenJson.token || '')

      if (tokenJson) {
        setIsLogged(true)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return { getToken, login, isLogged, token }
}
