import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

const root = document.querySelector<HTMLElement>('#root')

if(!root) {
  throw new Error('Root not found')
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
