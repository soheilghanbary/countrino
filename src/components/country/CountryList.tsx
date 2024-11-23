'use client';
import { useCountries } from '@/hooks/use-country';
import { useQueryState } from 'nuqs';
import { CountryCard } from './CountryCard';
import { CountryListLoader } from './CountryListLoader';

export function CountryList() {
  const [query, _] = useQueryState('search', { defaultValue: '' });
  const [sort] = useQueryState('sort', { defaultValue: '' });
  const { data, isPending } = useCountries(query, sort);

  if (isPending) {
    return <CountryListLoader />;
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
