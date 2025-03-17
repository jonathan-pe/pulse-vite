import * as React from 'react'
import { ChevronDown } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'
import SportsbookComboBox from '@/modules/Sportsbook/components/sportsbook-combobox'
import { SUPPORTED_LEAGUES, SUPPORTED_SPORTS } from '@/constants'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SportsbookComboBox />
      </SidebarHeader>
      <SidebarContent className='px-4'>
        <SidebarMenu>
          {SUPPORTED_SPORTS.map((sport) => (
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
                    {SUPPORTED_LEAGUES.filter((l) => l.sport === sport).map((league) => (
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
      </SidebarContent>
    </Sidebar>
  )
}
