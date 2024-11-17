'use client';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { CheckIcon, ListFilter } from 'lucide-react';
import { useQueryState } from 'nuqs';
import { useState } from 'react';
import { Button } from '../ui/button';

export function SortCountry() {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useQueryState('sort', { defaultValue: '' });

  const handleSort = (newSort: string) => {
    if (newSort === sort) {
      setSort(null);
    } else {
      setSort(newSort);
    }
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <ListFilter className="h-4 w-4" />
          <span>Sort By</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-fit flex-col p-2">
        <Button
          className="gap-4"
          variant="ghost"
          onClick={() => handleSort('asc')}
        >
          Lowest Population
          <CheckIcon
            className={sort === 'asc' ? 'text-primary' : 'text-transparent'}
          />
        </Button>
        <Button
          className="gap-4"
          variant="ghost"
          onClick={() => handleSort('desc')}
        >
          Highest Population
          <CheckIcon
            className={sort === 'desc' ? 'text-primary' : 'text-transparent'}
          />
        </Button>
      </PopoverContent>
    </Popover>
  );
}
