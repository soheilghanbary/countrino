import { UsersIcon } from 'lucide-react';
import Link from 'next/link';

export const CountryCard = (c: any) => {
  return (
    <Link
      href={`/country/${c.name.common}`}
      className="rounded-lg border border-border/65 bg-card"
    >
      <img
        src={c.flags.png}
        alt={c.name.common}
        draggable={false}
        className="aspect-auto h-28 w-full rounded-t-[inherit] border border-border/65 md:h-36"
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
