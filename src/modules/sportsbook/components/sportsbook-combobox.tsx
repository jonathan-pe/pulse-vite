'use client'

import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
// import { useStore } from '@/store'
import { useState } from 'react'
import { Sportsbook } from '@/types/sportsbook'
// import { fetcher } from '@/lib/fetcher'

export default function SportsbookComboBox() {
  const [open, setOpen] = useState(false)
  const [selectedSportsbook, setSportsbook] = useState(null)

  // const { data } = useSWR<{ sportsbooks: Sportsbook[] }>(
  //   `
  //     {
  //       sportsbooks {
  //         id
  //         name
  //       }
  //     }
  //   `,
  //   fetcher
  // )

  // const sportsbooks = data?.sportsbooks ?? []

  const sportsbooks = [
    {
      id: '1',
      name: 'DraftKings',
    },
    {
      id: '2',
      name: 'FanDuel',
    },
    {
      id: '3',
      name: 'BetMGM',
    },
  ]

  // const selectedSportsbook = useAppStore((state) => state.sportsbook)
  // const setSportsbook = useAppStore((state) => state.setSportsbook)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant='outline' role='combobox' aria-expanded={open} className='w-full justify-between'>
          <span>{selectedSportsbook?.name ?? 'Select Sportsbook...'}</span>
          <ChevronsUpDown className='opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-full p-0'>
        <Command>
          <CommandInput placeholder='Search...' />
          <CommandList>
            <CommandEmpty>No sportsbooks found.</CommandEmpty>
            <CommandGroup>
              {sportsbooks?.map((sportsbook) => (
                <CommandItem
                  key={sportsbook.id}
                  value={sportsbook.id}
                  onSelect={(currentValue) => {
                    if (currentValue !== selectedSportsbook?.id) {
                      setSportsbook(sportsbooks.find((sb: Sportsbook) => sb.id === currentValue) ?? null)
                    }
                    setOpen(false)
                  }}
                >
                  {sportsbook.name}
                  <Check
                    className={cn('ml-auto', selectedSportsbook?.id === sportsbook.id ? 'opacity-100' : 'opacity-0')}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
