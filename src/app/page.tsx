import { CountryList } from '@/components/common/country-list';
import { Hero } from '@/components/common/hero';
import { SearchCountry } from '@/components/common/search-country';
import { SortCountry } from '@/components/common/sort-country';

export default function Page() {
  return (
    <div className="space-y-4">
      <Hero />
      <div className="flex items-center justify-between gap-4">
        <SearchCountry />
        <SortCountry />
      </div>
      <CountryList />
    </div>
  );
}
