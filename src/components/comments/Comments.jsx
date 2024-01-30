import React, { useEffect, useState } from 'react'

import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'

export const Comments = ({ articleId }) => {
  const [comments, setComments] = useState([])
  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(`http://127.0.0.1:8000/api/articles/${articleId}/comments`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/ld+json',
          'Authorization': `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await response.json()
      const hydraMember = data?.['hydra:member'] || []
      setComments(hydraMember)
    }

    fetchComments()
  }, [articleId])

  if (!comments) {
    return <div>Loading...</div>
  }
  console.log(comments)

  return (
    <div className="container">
      {comments.map((comment) => (
        <Card>
          <CardContent>
            <div key={comment.id}>
              <h3>{comment.title}</h3>
              <p>{comment.content}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
