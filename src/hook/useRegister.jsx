import { useState, useEffect } from 'react'

export const useRegiter = () => {
  const [token, setToken] = useState(null)
  const [isLogged, setIsLogged] = useState(false)
  const [login, setLogin] = useState('')

  const getToken = async (email, password) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/users', {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          plainPassword: password,
        }),
        headers: {
          'Accept': 'application/ld+json',
          'Content-Type': 'application/ld+json',
        },
      })

      const json = await response.json()

      if (json) {
        setIsLogged(true)

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
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return { getToken, login, isLogged, token }
}
