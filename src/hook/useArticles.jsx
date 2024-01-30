import React, { useState } from 'react'

export const useArticles = () => {
  const [articles, setArticles] = useState([])

  React.useEffect(() => {
    const token = localStorage.getItem('token')
    fetch('http://127.0.0.1:8000/api/articles', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/ld+json',
        'Authorization': `Bearer ${token}`,
      },
    })
  }, [])

  return { articles, setArticles }
}
