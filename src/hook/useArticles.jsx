import React, { useState, useEffect } from 'react';

export const useArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
  
    fetch('http://127.0.0.1:8000/api/articles', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/ld+json',
        'Authorization': `Bearer ${token}`,
      },
    })
    .then(response => response.json())
    .then(data => {
      if (Array.isArray(data['hydra:member'])) {
        setArticles(data['hydra:member']);
      } else {
        console.error('Les données de l\'API ne sont pas un tableau valide.');
      }
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des articles:', error);
    });
  }, []);
  

  return { articles, setArticles };
};
