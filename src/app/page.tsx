import { BackToTop } from '@/components/common/back-to-top';
import { CountryList } from '@/components/country/CountryList';
import { Hero } from '@/components/common/hero';
import { SearchCountry } from '@/components/common/search-country';
import { SortCountry } from '@/components/common/sort-country';
import { Suspense } from 'react';

export default function Page() {
  return (
    <div className="space-y-4">
      <Hero />
      <Suspense>
        <div className="flex items-center justify-between gap-4">
          <SearchCountry />
          <SortCountry />
        </div>
        <CountryList />
      </Suspense>
      <BackToTop />
    </div>
  );
}
