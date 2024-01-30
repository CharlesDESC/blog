import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../header/Header'
import { Comments } from '../comments/Comments'

export const ArticleDetailPage = () => {
  const { articleId } = useParams()
  const [article, setArticle] = useState(null)
  const token = localStorage.getItem('token')

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/articles/${articleId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/ld+json',
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setArticle(data))
      .catch((error) => console.error(error))
  }, [articleId])

  if (!article) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Header />
      <div className="article-detail">
        <h1>{article.title}</h1>
        <div className="author-info">{article.author}</div>
        <div className="article-content">
          <p>{article.content}</p>
        </div>
        <Comments articleId={articleId} />
      </div>
    </div>
  )
}
