import { GithubIcon } from 'lucide-react';
import { buttonVariants } from '../ui/button';
import { Logo } from './logo';
import { ModeToggle } from './mode-toggle';

export function Header() {
  return (
    <header className="flex items-center justify-between gap-4">
      <Logo />
      <div className="space-x-2">
        <a
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: 'ghost', size: 'icon' })}
          href="https://github.com/soheilghanbary/todonext"
        >
          <GithubIcon />
        </a>
        <ModeToggle />
      </div>
    </header>
  );
}
