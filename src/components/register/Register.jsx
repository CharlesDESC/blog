import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { CardContent, Card, TextField } from '@mui/material'
import { Header } from '../header/Header'
import { useRegiter } from '../../hook/useRegister'

export const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const { getToken } = useRegiter()

  const token = localStorage.getItem('token')

  if (token) {
    return <Navigate to={'/'} />
  }
  const sendForm = async () => {
    if (password !== confirmPassword) {
      alert('password not match')
      return
    }
    if (password === confirmPassword) {
      await getToken(email, password)
      window.location.reload()
    }
  }

  const changeEmail = (event) => {
    setEmail(event.target.value)
  }

  const changePassword = (event) => {
    setPassword(event.target.value)
  }

  const changeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value)
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
          <CardContent sx={{ fontSize: 30 }}>Inscription</CardContent>
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
              label="password"
              name="password"
              type="password"
              autoFocus
            />
          </CardContent>
          <CardContent sx={{ width: '100%', padding: 0 }}>
            <TextField
              onChange={changeConfirmPassword}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="confirmPassword"
              label="confirmPassword"
              name="confirmPassword"
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
