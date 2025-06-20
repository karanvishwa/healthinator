import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Page3 from './Page3.tsx'
import Page2 from './Page2.tsx'
import App from './App.tsx'
import Page4 from './Page4.tsx'
import Page5 from './Page5.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page5/>
  </StrictMode>,
)
