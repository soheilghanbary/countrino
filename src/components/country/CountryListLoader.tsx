import { LoadingIcon } from '../common/icons';

export function CountryListLoader() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12">
      <LoadingIcon className="size-8 fill-primary" />
      <p className="font-medium text-muted-foreground text-sm">
        Loading Countries
      </p>
    </div>
  );
}
