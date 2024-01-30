
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../header/Header';

export const ArticleDetailPage = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/articles/${articleId}`)
      .then((response) => response.json())
      .then((data) => setArticle(data))
      .catch((error) => console.error(error));
  }, [articleId]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="article-detail">
        <h1>{article.title}</h1>
        <div className="author-info">
          {article.author}
        </div>
        <div className="article-content">
          <p>{article.content}</p>
        </div>
      </div>
    </div>
  );
};


