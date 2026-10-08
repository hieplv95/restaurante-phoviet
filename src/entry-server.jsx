// Build-time renderer used by scripts/prerender.js to produce static HTML for every route.
import { StrictMode } from 'react'
import { prerenderToNodeStream } from 'react-dom/static'
import App from './App.jsx'
import { LanguageProvider } from './context/LanguageContext'
import { parsePath } from './seo/routes'
import { getHead } from './seo/head'
import { buildStructuredData } from './seo/schema'

export { LANGUAGES, PROMO_DISHES, homePath, SITE_URL } from './seo/routes'

async function streamToString(stream) {
  let html = ''
  for await (const chunk of stream) html += chunk
  return html
}

export async function render(path) {
  const { page, lang } = parsePath(path)
  // prerenderToNodeStream waits for every lazy() component, so the HTML contains the full page.
  const { prelude } = await prerenderToNodeStream(
    <StrictMode>
      <LanguageProvider initialLanguage={lang}>
        <App path={path} />
      </LanguageProvider>
    </StrictMode>
  )
  return {
    page,
    html: await streamToString(prelude),
    head: getHead(page, lang),
    structuredData: buildStructuredData(page, lang)
  }
}
