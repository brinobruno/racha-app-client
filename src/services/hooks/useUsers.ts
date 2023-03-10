import { useQuery } from 'react-query'

import { headers } from '../../constants'
import { api } from '../api'

interface UsersDataResponse {
  id: string
  username: string
  email: string
  created_at: string
}

async function getUsers(): Promise<UsersDataResponse[]> {
  const response = await api.get(`/users/`, {
    headers,
  })

  const data = response.data

  const users = data.users.map((user: UsersDataResponse) => {
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      created_at: new Date(user.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    }
  })

  return users
}

export function useUsers() {
  return useQuery('users', getUsers, {
    staleTime: 1000 * 5, // WIll be fresh for 5 seconds (!obsolete)
  })
}
