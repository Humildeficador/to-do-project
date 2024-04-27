import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { DarkModeButton } from './components/Task/DarkModeButton/DarkModeButton.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DarkModeButton />
    <App />
  </React.StrictMode>,
)