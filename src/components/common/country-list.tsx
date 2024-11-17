'use client';
import { useCountries } from '@/hooks/use-country';
import { UsersIcon } from 'lucide-react';
import Link from 'next/link';
import { useQueryState } from 'nuqs';
import { LoadingIcon } from './icons';

const CountryCard = (c: any) => {
  return (
    <Link
      href={`/country/${c.name.common}`}
      className="rounded-lg border border-border/65 bg-card"
    >
      <img
        src={c.flags.png}
        alt={c.name.common}
        draggable={false}
        className="aspect-auto h-36 w-full rounded-t-[inherit] border border-border/65"
      />
      <div className="p-4">
        <h2 className="font-semibold text-sm/relaxed">{c.name.common}</h2>
        <p className="line-clamp-1 font-medium text-muted-foreground text-xs/5">
          {c.capital}
        </p>
        <p className="line-clamp-1 flex items-center gap-2 font-medium text-muted-foreground text-xs/5">
          <UsersIcon className="size-3.5" />
          {Number(c.population).toLocaleString()}
        </p>
      </div>
    </Link>
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

  // sort data country
  const sortedData = [...data].sort((a, b) => {
    if (sort === 'desc') {
      return b.population - a.population;
    }
    if (sort === 'asc') {
      return a.population - b.population;
    }
    return a.name.common.localeCompare(b.name.common);
  });

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
      {sortedData.map((c, i) => (
        <CountryCard key={i} {...c} />
      ))}
    </div>
  );
}
