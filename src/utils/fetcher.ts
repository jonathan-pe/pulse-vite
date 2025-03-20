import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(`${import.meta.env.VITE_BACKEND_URL!}/graphql`, {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const fetcher = async <T>(query: string, variables?: Record<string, unknown>): Promise<T> => {
  try {
    const res = await client.request<T>(query, variables || {})
    return res
  } catch (err) {
    console.error('GraphQL Request Error:', err)
    throw err
  }
}
