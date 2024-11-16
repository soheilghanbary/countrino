import Link from "next/link";

export function Logo() {
  return (
    <Link href={'/'}>
      <span className="font-bold">Countrino</span>
    </Link>
  );
}