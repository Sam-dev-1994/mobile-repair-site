import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "vazirmatn/misc/UI/Vazirmatn-UI-font-face.css";
import './index.css';
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
