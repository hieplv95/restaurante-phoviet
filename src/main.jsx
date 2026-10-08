import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './context/LanguageContext'
import { parsePath } from './seo/routes'

const path = window.location.pathname
const { lang } = parsePath(path)

const app = (
  <StrictMode>
    <LanguageProvider initialLanguage={lang}>
      <App path={path} />
    </LanguageProvider>
  </StrictMode>
)

const container = document.getElementById('root')
// Production pages are prerendered at build time (scripts/prerender.js): hydrate them instead of re-rendering.
if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
