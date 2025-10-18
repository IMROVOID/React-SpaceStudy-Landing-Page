import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Overlay from './components/Overlay.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Overlay />
  </React.StrictMode>,
)