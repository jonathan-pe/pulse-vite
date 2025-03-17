import { League } from '@/types/league'

export const APP_NAME = 'Pulse'
export const SUPPORTED_LEAGUES: League[] = [
  { sport: 'Football', id: 1, name: 'NCAA Football' },
  { sport: 'Football', id: 2, name: 'NFL' },
  { sport: 'Baseball', id: 3, name: 'MLB' },
  { sport: 'Basketball', id: 4, name: 'NBA' },
  { sport: 'Basketball', id: 5, name: "NCAA Men's Basketball" },
  { sport: 'Hockey', id: 6, name: 'NHL' },
  { sport: 'MMA', id: 7, name: 'UFC/MMA' },
  { sport: 'Basketball', id: 8, name: 'WNBA' },
  { sport: 'Soccer', id: 10, name: 'MLS' },
  { sport: 'Soccer', id: 11, name: 'EPL' },
  { sport: 'Soccer', id: 12, name: 'FRA1' },
  { sport: 'Soccer', id: 13, name: 'GER1' },
  { sport: 'Soccer', id: 14, name: 'ESP1' },
  { sport: 'Soccer', id: 15, name: 'ITA1' },
  { sport: 'Soccer', id: 16, name: 'UEFACHAMP' },
  { sport: 'Soccer', id: 17, name: 'UEFAEURO' },
  { sport: 'Soccer', id: 18, name: 'FIFA' },
  { sport: 'Soccer', id: 19, name: 'JPN1' },
  { sport: 'Cricket', id: 20, name: 'IPL' },
  { sport: 'Cricket', id: 21, name: 'T20' },
  // { sport: 'Politics', id: 22, name: 'Politics' },
  { sport: 'Basketball', id: 23, name: 'NBA Preseason' },
  { sport: 'Basketball', id: 24, name: 'NBA Playoffs' },
  { sport: 'Football', id: 25, name: 'NFL Preseason' },
  { sport: 'Football', id: 26, name: 'NFL Playoffs' },
  { sport: 'Hockey', id: 27, name: 'NHL Preseason' },
  { sport: 'Hockey', id: 28, name: 'NHL Playoffs' },
  { sport: 'Baseball', id: 29, name: 'MLB Preseason' },
  { sport: 'Baseball', id: 30, name: 'MLB Spring Training' },
  { sport: 'Baseball', id: 31, name: 'MLB Playoffs' },
  { sport: 'Basketball', id: 32, name: 'NBA Summer League' },
]

export const SUPPORTED_SPORTS = SUPPORTED_LEAGUES.reduce<string[]>((acc, curr) => {
  if (!acc.includes(curr.sport)) {
    acc.push(curr.sport)
  }
  return acc
}, [])

export const MARKETS = {
  SPREADS: { name: 'Spreads', oddsBlazeString: 'Point Spread' },
  OVER_UNDERS: { name: 'Over/Unders', oddsBlazeString: 'Total Points' },
  MONEYLINES: { name: 'Moneylines', oddsBlazeString: 'Moneyline' },
  PLAYER_PROPS: { name: 'Player Props', oddsBlazeString: 'Player' },
}
