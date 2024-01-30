import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material'

const AddArticle = () => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Ajouter un article
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ajouter un article</DialogTitle>
        <DialogContent>hello</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Annuler
          </Button>
          <Button onClick={handleClose} color="primary">
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddArticle
