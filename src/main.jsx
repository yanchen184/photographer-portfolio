import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Display app version in console
const appVersion = '0.0.18'
const consoleStyles = 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold; font-size: 14px;'
console.log(`%c🎥 Photographer Portfolio v${appVersion}`, consoleStyles)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
