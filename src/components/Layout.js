import React from 'react'

export default ({ children }) => {
  return (
    <main
      style={{
        width: '100%',
        maxWidth: '1200px',
      }}
    >
      {children}
    </main>
  )
}