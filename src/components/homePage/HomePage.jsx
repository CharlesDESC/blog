import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useToken } from '../../context/tokenContext';
import { Header } from '../header/Header';
import { useArticles } from '../../hook/useArticles';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate(); 
  const { articles } = useArticles();

  if (token === null) {
    navigate('/login'); 
    return null;
  }

  return (
    <div>
      <Header />
      <h1>Liste des articles :</h1>
      <div className="article-list">
        {articles.map(article => (
          <ArticleCard key={article['@id']} article={article} />
        ))}
      </div>
    </div>
  );
};

const ArticleCard = ({ article }) => {
  const formattedDate = new Date(article.date).toLocaleDateString('en-US');
  const excerpt =
    article.content.substring(0, 100) +
    (article.content.length > 100 ? '...' : '');

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
        <Link to={`/articles/${article['@id']}`} className="read-more-link">
          Lire la suite
        </Link> {/* Utilisez Link pour créer le lien */}
      </div>
    );
};
