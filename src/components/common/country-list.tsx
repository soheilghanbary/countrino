'use client';
import { useCountries } from '@/hooks/use-country';
import { UsersIcon } from 'lucide-react';
import { useQueryState } from 'nuqs';
import { Button } from '../ui/button';
import { LoadingIcon } from './icons';

const CountryCard = (c: any) => {
  return (
    <div className="space-y-2 rounded-lg border border-border/65 bg-card p-4">
      <img
        src={c.flags.png}
        alt={c.name.common}
        draggable={false}
        className="aspect-auto h-36 w-full rounded-md border border-border/40"
      />
      <div>
        <h2 className="font-semibold text-sm/loose">{c.name.common}</h2>
        <p className="line-clamp-1 font-medium text-muted-foreground text-xs/5">
          {c.capital}
        </p>
        <p className="line-clamp-1 flex items-center gap-2 font-medium text-muted-foreground text-xs/5">
          <UsersIcon className="size-3.5" />
          {Number(c.population).toLocaleString()}
        </p>
        {/* <Button size={'sm'} className="mt-4 w-full">
          Full Details
        </Button> */}
      </div>
    </div>
  );
};

export function CountryList() {
  const [query, _] = useQueryState('search', { defaultValue: '' });
  const [sort, setSort] = useQueryState('sort', { defaultValue: '' });
  const { data, isPending } = useCountries(query, sort);

  if (isPending) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12">
        <LoadingIcon className="size-8 fill-blue-500" />
        <p className="font-medium text-muted-foreground text-sm">
          Loading Countries
        </p>
      </div>
    );
  }

  if (!data?.length) {
    return <p className="py-12 text-center">Country not found 😐</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
      {data.map((c, i) => (
        <CountryCard key={i} {...c} />
      ))}
    </div>
  );
}
