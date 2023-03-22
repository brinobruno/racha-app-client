import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { Signin } from './'
import { QueryClient, QueryClientProvider } from 'react-query'

describe('Signin component', () => {
  let queryClient: QueryClient

  beforeEach(() => {
    // const sessionHook = vi.mock('src/hooks/useSession') as any

    // sessionHook.mockImplementation(() => ({
    //   isLoggedIn: false,
    //   user: null,
    // }))

    queryClient = new QueryClient()

    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Signin />
        </QueryClientProvider>
      </MemoryRouter>,
    )
  })

  afterEach(() => {
    cleanup()
  })

  it('should render the title', () => {
    expect(screen.getByText('Que bom te ver por aqui 👋')).toBeTruthy()
  })
})