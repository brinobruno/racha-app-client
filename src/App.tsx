import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { Router } from './Routes'
import { GlobalStyle } from './styles/global'
import { UserContextProvider } from './contexts/UserContext'
import { ThemeContextProvider } from './contexts/ThemeContext'
import { CookieNotice } from './components/visualHelpers/CookieNotice'
import { ToastNotification } from './components/visualHelpers/ToastNotification'
import { TeamsContextProvider } from './contexts/TeamsContext'
import { ScrollWrapper } from './components/visualHelpers/ScrollWrapper'

import 'react-loading-skeleton/dist/skeleton.css'

const queryClient = new QueryClient()

export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <UserContextProvider>
            <TeamsContextProvider>
              <ThemeContextProvider>
                <ScrollWrapper>
                  <Router />
                </ScrollWrapper>

                <CookieNotice />

                <ToastNotification />

                <GlobalStyle />
              </ThemeContextProvider>
            </TeamsContextProvider>
          </UserContextProvider>
        </BrowserRouter>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}
