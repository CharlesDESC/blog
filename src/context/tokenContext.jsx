import React from 'react'

const TokenContext = React.createContext(null)

export const TokenProvider = ({ children, value }) => {
  return <TokenContext.Provider value={value}>{children}</TokenContext.Provider>
}

export const useToken = () => {
  const context = React.useContext(TokenContext)
  if (context === null) {
    throw new Error('useTypes must be used within a TypesProvider')
  }
  return context
}
