import * as React from 'react'
import { ChevronDown, LoaderCircle } from 'lucide-react'
import { fetcher } from '@/utils/fetcher'
import useSWR from 'swr'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar'
import SportsbookComboBox from '@/modules/Sportsbook/components/sportsbook-combobox'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { League } from '@/types/league'

export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { open } = useSidebar()

  const { data, isLoading } = useSWR<{ leagues: League[] }>(
    `query LeaguesQuery {
      leagues {
        id
        name
        sport
      }
    }`,
    fetcher
  )

  if (isLoading) {
    return
  }

  const leagues = data?.leagues || []

  const sports = leagues?.reduce<string[]>((acc, curr) => {
    if (!acc.includes(curr.sport)) {
      acc.push(curr.sport)
    }
    return acc
  }, [])

  return (
    <Sidebar {...props} collapsible='icon'>
      <SidebarHeader>{open && <SportsbookComboBox />}</SidebarHeader>
      <SidebarContent className='px-4'>
        {open &&
          (isLoading ? (
            <LoaderCircle className='animate-spin' />
          ) : (
            <SidebarMenu>
              {sports.map((sport) => (
                <Collapsible className='group/collapsible' key={sport}>
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        <span className='font-semibold'>{sport}</span>
                        <ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {leagues
                          .filter((l) => l.sport === sport)
                          .map((league) => (
                            <SidebarMenuSubItem
                              key={league.id}
                              onClick={() => {
                                // router.push(`/sportsbook/${league.id}`)
                                // setLeague(league)
                              }}
                            >
                              <SidebarMenuButton>{league.name}</SidebarMenuButton>
                            </SidebarMenuSubItem>
                          ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          ))}
      </SidebarContent>
      <SidebarFooter className='flex justify-center items-end'>
        <SidebarTrigger />
      </SidebarFooter>
    </Sidebar>
  )
}
