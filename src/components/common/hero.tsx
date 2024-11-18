'use client';
import { siteConfig } from '@/config/site';
import { RocketIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { FadeText } from './fade-text';

export function Hero() {
  const { title, description, url } = siteConfig.hero;
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-8 text-center lg:py-20">
      <FadeText
        text={title}
        direction="up"
        framerProps={{
          show: { transition: { delay: 0.2 } },
        }}
        className="max-w-4xl font-black text-2xl/snug md:text-4xl/snug lg:text-6xl/snug"
      />
      <FadeText
        direction="up"
        framerProps={{
          show: { transition: { delay: 0.3 } },
        }}
        text={description}
        className="mx-auto max-w-2xl text-balance text-muted-foreground text-sm lg:text-lg"
      />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.5, type: 'spring' }}
      >
        <Button asChild className="mt-4 rounded-full" variant={'default'}>
          <a target="_blank" rel="noreferrer" href={url}>
            <RocketIcon />
            Source Code
          </a>
        </Button>
      </motion.div>
    </div>
  );
}
