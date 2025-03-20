import { useGraphQLQuery } from '@/hooks/useGraphQLQuery'
import { UserStats } from '@/types/user'
import withAuth from '@/utils/withAuth'
import { useUser } from '@clerk/clerk-react'
import { gql } from 'graphql-request'
import { LoaderCircle } from 'lucide-react'

const UserStatsPage = withAuth(() => {
  const { user, isSignedIn, isLoaded } = useUser()
  const { data, isLoading, error } = useGraphQLQuery<{ userStatsByUserId: UserStats }>({
    query: gql`
      query UserStatsQuery($userId: String!) {
        userStatsByUserId(userId: $userId) {
          points
          longestStreak
          currentStreak
          totalPredictions
          correctPredictions
        }
      }
    `,
    variables: { userId: user?.id },
    shouldFetch: isLoaded && isSignedIn,
  })

  if (error) {
    return <span className='p-4'>Error loading user stats.</span>
  }

  if (isLoading) {
    return <LoaderCircle className='animate-spin p-4' />
  }

  if (!data) {
    return <span className='p-4'>No user stats found.</span>
  }

  const { points, longestStreak, currentStreak, totalPredictions, correctPredictions } = data.userStatsByUserId

  return (
    <div className='flex flex-col flex-1 gap-4 p-4'>
      <span>Points: {points}</span>
      <span>Longest Streak: {longestStreak}</span>
      <span>Current Streak: {currentStreak}</span>
      <span>Total Predictions: {totalPredictions}</span>
      <span>Correct Predictions: {correctPredictions}</span>
    </div>
  )
})

export default UserStatsPage
