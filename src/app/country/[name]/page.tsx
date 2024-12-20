import { BackButton } from '@/components/common/back-button';
import { ScrollToTop } from '@/components/common/scroll-to-top';
import { Separator } from '@/components/ui/separator';
import { Banknote, LanguagesIcon, MapPinHouse, Users2 } from 'lucide-react';
import { unstable_cache as cache } from 'next/cache';

export const dynamic = 'force-static';

const handleLanguagesToArray = (languages: any) => {
  if (!languages || typeof languages !== 'object') {
    return [];
  }
  return Object.values(languages);
};

const handleCurrenciesToArray = (currencies: any) => {
  if (!currencies || typeof currencies !== 'object') {
    return [];
  }

  return Object.keys(currencies).map((key) => {
    const { name, symbol } = currencies[key];
    return { code: key, name, symbol }; // Return structured object for each currency
  });
};

const getCountry = cache(async (name: string) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`,
  );
  const data = await res.json();
  return data[0];
});

export default async function Page({ params }: { params: { name: string } }) {
  const { name } = await params;
  const country = await getCountry(name);
  const currencyArray = handleCurrenciesToArray(country.currencies);
  const languageArray = handleLanguagesToArray(country.languages);

  return (
    <div className="space-y-4">
      <ScrollToTop />
      <BackButton />
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 rounded-lg border bg-card p-4 md:flex-row">
        <img
          src={country.flags.png}
          alt={country.name.common}
          className="box-border/40 w-full rounded-lg border md:w-auto"
        />
        <div className="space-y-4 [&_p_span]:font-medium [&_p_span]:text-foreground">
          <h1 className="font-bold text-lg md:text-2xl">
            {country.name.common} ({country.name.official})
          </h1>
          <p className="flex items-center gap-2 text-muted-foreground text-sm">
            <MapPinHouse className="size-4" /> Capital:
            <span>{country.capital}</span>
          </p>
          <p className="flex items-center gap-2 text-muted-foreground text-sm">
            <LanguagesIcon className="size-4" /> Language:{' '}
            <span>{languageArray.map((l) => l).join(', ')}</span>
          </p>
          <p className="flex items-center gap-2 text-muted-foreground text-sm">
            <Banknote className="size-4" /> Currency:{' '}
            {currencyArray.map((currency, i) => (
              <span key={i}>
                {currency.name} ({currency.code}) - {currency.symbol}
              </span>
            ))}
          </p>
          <p className="flex items-center gap-2 text-muted-foreground text-sm">
            <Users2 className="size-4" /> Population:{' '}
            <span>{Number(country.population).toLocaleString('en-US')}</span>
          </p>
        </div>
      </div>
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-lg border bg-card p-4">
        <h2 className="font-semibold text-lg">
          Information of {country.name.common}
        </h2>
        <Separator />
        <div className="grid gap-4 text-muted-foreground sm:grid-cols-2 [&_p]:text-sm [&_p_span]:text-foreground">
          <p>
            Region: <span>{country.region}</span>
          </p>
          <p>
            Sub Region: <span>{country.subregion}</span>
          </p>
          <p>
            Top Level Domain: <span>{country.tld[0]}</span>
          </p>
          <p>
            TimeZone: <span>{country.timezones[0]}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
