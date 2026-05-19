import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  id: string
  email: string
  name: string
  tier: 'circle' | 'gold' | 'black'
  verified: boolean
}

interface AuthStore {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, name: string) => Promise<void>
  logout: () => void
  setUser: (user: User | null) => void
  setToken: (token: string | null) => void
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      login: async (email: string, password: string) => {
        try {
          // TODO: Connect to API endpoint
          // const response = await api.post('/auth/login', { email, password })
          // set({ user: response.data.user, token: response.data.token, isAuthenticated: true })
          console.log('Login:', email)
        } catch (error) {
          console.error('Login failed:', error)
          throw error
        }
      },

      register: async (email: string, password: string, name: string) => {
        try {
          // TODO: Connect to API endpoint
          // const response = await api.post('/auth/register', { email, password, name })
          // set({ user: response.data.user, token: response.data.token, isAuthenticated: true })
          console.log('Register:', email, name)
        } catch (error) {
          console.error('Registration failed:', error)
          throw error
        }
      },

      logout: () => {
        set({ user: null, token: null, isAuthenticated: false })
      },

      setUser: (user: User | null) => {
        set({ user, isAuthenticated: !!user })
      },

      setToken: (token: string | null) => {
        set({ token })
      },
    }),
    {
      name: 'auth-store',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
)
