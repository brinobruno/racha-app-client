import { useMutation, UseMutationResult } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { Cookies } from 'typescript-cookie'

import { api } from 'src/services/api'
import {
  USER_ID_STORAGE_KEY,
  USER_SESSION_STORAGE_KEY,
  headers,
} from 'src/constants'

type LogoutData = {
  message: string
}

interface LogoutResponse {
  data: LogoutData
}

async function LogoutUser(): Promise<LogoutResponse> {
  const [userId, sessionIdValue] = await Promise.all([
    Cookies.get(USER_ID_STORAGE_KEY),
    Cookies.get(USER_SESSION_STORAGE_KEY),
  ])

  const response = await api.post(`/users/logout/${userId}`, {
    headers: {
      ...headers,
      Cookies: `${sessionIdValue}`,
    },
  })

  const data = response.data

  Cookies.remove(USER_ID_STORAGE_KEY)
  Cookies.remove(USER_SESSION_STORAGE_KEY)

  return { data }
}

export function useLogout(): UseMutationResult<LogoutResponse, Error> {
  const navigate = useNavigate()

  return useMutation(LogoutUser, {
    onSuccess: async () => {
      return navigate('/signin')
    },
  })
}