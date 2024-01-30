import React, { useState } from 'react'

const AddArticle = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleContentChange = (e) => {
    setContent(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ajouter ici la logique pour envoyer les données de l'article au serveur
    // par exemple, en utilisant une requête HTTP POST
    console.log('Titre:', title)
    console.log('Contenu:', content)
    // Réinitialiser les champs du formulaire
    setTitle('')
    setContent('')
  }

  return (
    <div>
      <h2>Ajouter un article</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Titre :</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label htmlFor="content">Contenu :</label>
          <textarea id="content" value={content} onChange={handleContentChange}></textarea>
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  )
}

export default AddArticle
