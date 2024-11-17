import { RocketIcon } from 'lucide-react';
import { Button } from '../ui/button';

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-8 text-center lg:py-20">
      <h1 className="max-w-4xl font-black text-2xl/snug md:text-4xl/snug lg:text-6xl/snug">
        Explore Countries, Simplified
      </h1>
      <p className="mx-auto max-w-2xl text-balance text-muted-foreground text-sm lg:text-lg">
        Discover and explore global country information with simplicity, powered
        by Next.js & TailwindCSS.
      </p>
      <Button asChild className="mt-4 rounded-full" variant={'outline'}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/soheilghanbary/countrino"
        >
          <RocketIcon />
          Source Code
        </a>
      </Button>
    </div>
  );
}
