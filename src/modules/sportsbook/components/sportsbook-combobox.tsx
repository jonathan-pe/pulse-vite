'use client'

import { Check, ChevronsUpDown, LoaderCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useState } from 'react'
import { Sportsbook } from '@/types/sportsbook'
import { useGraphQLQuery } from '@/hooks/useGraphQLQuery'
import { gql } from 'graphql-request'

export default function SportsbookComboBox() {
  const [open, setOpen] = useState(false)
  const [selectedSportsbook, setSportsbook] = useState<Sportsbook | null>(null)

  const { data, isLoading } = useGraphQLQuery<{ sportsbooks: Sportsbook[] }>({
    query: gql`
      query SportsbookQuery {
        sportsbooks {
          id
          name
        }
      }
    `,
  })

  if (isLoading) {
    return <LoaderCircle className='animate-spin' />
  }

  if (!data || !data.sportsbooks) {
    return <span>No sportsbooks found.</span>
  }

  const { sportsbooks } = data

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
              {sportsbooks.map((sportsbook) => (
                <CommandItem
                  key={sportsbook.id}
                  value={sportsbook.id}
                  onSelect={(currentValue) => {
                    if (currentValue !== selectedSportsbook?.id) {
                      setSportsbook(sportsbooks.find((sb) => sb.id === currentValue) ?? null)
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
