import useSWR from 'swr'
import { fetcher } from '@/utils/fetcher'

type GraphQLQueryOptions = {
  query: string
  variables?: Record<string, unknown>
  shouldFetch?: boolean
}

export const useGraphQLQuery = <T>(options: GraphQLQueryOptions) => {
  const { query, variables, shouldFetch = true } = options

  return useSWR<T>(shouldFetch ? [query, variables] : null, ([query, variables]: [string, Record<string, unknown>]) =>
    fetcher(query, variables)
  )
}
