'use client';
import { SearchIcon } from 'lucide-react';
import { useQueryState } from 'nuqs';
import { useDebouncedCallback } from 'use-debounce';
import { Input } from '../ui/input';

export function SearchCountry() {
  const [query, setQuery] = useQueryState('search', { defaultValue: '' });
  const debounced = useDebouncedCallback((value: string) => {
    setQuery(value);
  }, 500);

  return (
    <div className="relative flex max-w-md items-center justify-between">
      <Input
        type="text"
        className="w-full bg-card pl-9"
        defaultValue={query}
        onChange={(e) => debounced(e.target.value)}
        placeholder="Search country"
      />
      <SearchIcon className="-translate-y-1/2 absolute top-1/2 left-3 size-4 text-muted-foreground" />
    </div>
  );
}
