import { Eclipse } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href={'/'}>
      <span className="flex items-center gap-2 font-bold">
        <Eclipse className="size-5" strokeWidth={2.5} />
        Countrino
      </span>
    </Link>
  );
}
