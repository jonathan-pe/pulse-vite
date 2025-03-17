import { GraphQLClient, RequestDocument } from 'graphql-request'

const client = new GraphQLClient(`${import.meta.env.VITE_BACKEND_URL!}/graphql`, {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const fetcher = async (query: RequestDocument, variables = {}) => {
  try {
    const res = await client.request(query, variables)
    return res
  } catch (err) {
    console.error(err)
    throw err
  }
}
