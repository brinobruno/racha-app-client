import axios from 'axios'
import { BASE_URL } from '../Constants'

export const api = axios.create({
  baseURL: BASE_URL,
})