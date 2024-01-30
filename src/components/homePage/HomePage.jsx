import React, { useState, useEffect } from 'react'

import { Navigate } from 'react-router-dom'
import { useToken } from '../../context/tokenContext'
import { Header } from '../header/Header'

import { useArticles } from '../../hook/useArticles'

export const HomePage = () => {
  const token = localStorage.getItem('token')
  const { articles } = useArticles()

  if (token === null) {
    return <Navigate to={'/login'} />
  }

  console.log(articles)
  return (
    <div>
      <Header />
      pouet
    </div>
  )
}
