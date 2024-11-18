'use client';
import { siteConfig } from '@/config/site';
import { RocketIcon } from 'lucide-react';
import { Button } from '../ui/button';

export function Hero() {
  const { title, description, url } = siteConfig.hero;
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-8 text-center lg:py-20">
      <h1 className="max-w-4xl font-black text-2xl/snug md:text-4xl/snug lg:text-6xl/snug">
        {title}
      </h1>
      <p className="mx-auto max-w-2xl text-balance text-muted-foreground text-sm lg:text-lg">
        {description}
      </p>
      <Button asChild className="mt-4 rounded-full" variant={'default'}>
        <a target="_blank" rel="noreferrer" href={url}>
          <RocketIcon />
          Source Code
        </a>
      </Button>
    </div>
  );
}
