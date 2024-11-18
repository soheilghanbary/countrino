import '@/assets/app.css';
import { Header } from '@/components/common/header';
import Providers from '@/components/providers';
import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { PropsWithChildren } from 'react';

const font = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '900'],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.hero.title,
    template: `%s - ${siteConfig.hero.title}`,
  },
  description: siteConfig.hero.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={font.className} suppressHydrationWarning>
      <head>
        <link rel="theme-color" href="#14B8A6" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </head>
      <body>
        <Providers>
          <main className="container mx-auto min-h-screen space-y-4 px-4 py-2">
            <Header />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
