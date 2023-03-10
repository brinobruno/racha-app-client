import { Navigate } from 'react-router-dom'
import { getCookie } from 'typescript-cookie'

import { USER_SESSION_STORAGE_KEY } from '../../constants'

export type ProtectedRouteProps = {
  authenticationPath: string
  // eslint-disable-next-line no-undef
  outlet: JSX.Element
}

export default function ProtectedRoute({
  authenticationPath,
  outlet,
}: ProtectedRouteProps) {
  const isAuthenticated = !!getCookie(USER_SESSION_STORAGE_KEY)

  if (isAuthenticated) {
    return outlet
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />
  }
}
