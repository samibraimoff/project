import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from 'app/App'
import { ThemeProvider } from 'app/providers/theme'
import './shared/config/i18n/i18n'
import { Suspense } from 'react'
import { ErrorBoundary } from 'app/providers/ErrorBounadary'

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <Suspense fallback="loading.">
          <App />
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root')
)
