import React, { useState } from 'react'
import { CardContent, Card, TextField } from '@mui/material'
import './Login.css'
import { useAuth } from '../../hook/useToken'
import { Navigate } from 'react-router-dom'
import { Header } from '../header/Header'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { isLogged, getToken } = useAuth()
  if (localStorage.getItem('token')) {
    return <Navigate to={'/'} />
  }
  const sendForm = async () => {
    await getToken(email, password)
  }

  const changeEmail = (event) => {
    setEmail(event.target.value)
  }

  const changePassword = (event) => {
    setPassword(event.target.value)
  }

  return (
    <>
      <Header />
      <div className="cardContainer">
        <Card
          sx={{
            width: 400,
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            paddingBottom: '10px',
          }}
        >
          <CardContent sx={{ fontSize: 30 }}>Connexion</CardContent>
          <CardContent sx={{ width: '100%', padding: 0 }}>
            <TextField
              onChange={changeEmail}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
            />
          </CardContent>
          <CardContent sx={{ width: '100%', padding: 0 }}>
            <TextField
              onChange={changePassword}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              type="password"
              autoFocus
            />
          </CardContent>
          <button onClick={sendForm}>Se connecter</button>
        </Card>
      </div>
    </>
  )
}
