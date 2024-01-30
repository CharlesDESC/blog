import React from 'react'
import { Navigate } from 'react-router-dom'
import { useToken } from '../../context/tokenContext'
import { Header } from '../header/Header'
import { useArticles } from '../../hook/useArticles'
import { Link } from 'react-router-dom'
import './HomePage.css'
import AddArticle from '../addArticle/AddArticle'

export const HomePage = () => {
  const token = localStorage.getItem('token')
  const { articles } = useArticles()
  if (token === null) {
    return <Navigate to={'/login'} />
  }

  return (
    <div>
      <Header />
      <h1>Liste des articles :</h1>
      <div className="container">
        {articles.map((article, key) => (
          <ArticleCard index={key + 1} article={article} />
        ))}
      </div>
      {/* <AddArticle /> */}
    </div>
  )
}

const ArticleCard = ({ article, index }) => {
  const formattedDate = new Date(article.date).toLocaleDateString('en-US')
  const excerpt = article.content.substring(0, 100) + (article.content.length > 100 ? '...' : '')

  return (
    <div className="article-card">
      <div className="author-avatar">
        {article.authorAvatar ? (
          <img src={article.authorAvatar} alt={article.author} />
        ) : (
          <div className="avatar-placeholder">{article.author.charAt(0)}</div>
        )}
      </div>
      <div className="article-date">{formattedDate}</div>
      <div className="article-excerpt">{excerpt}</div>
      <Link to={`/articles/${index}`} className="read-more-link">
        Lire la suite
      </Link>
    </div>
  )
}
