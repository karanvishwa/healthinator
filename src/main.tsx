import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Routing from './Routing'
import './styles/styles'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
  </StrictMode>,
)
