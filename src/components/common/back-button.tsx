'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

export function BackButton() {
  const router = useRouter();
  return (
    <Button variant={'secondary'} onClick={() => router.back()}>
      <ArrowLeft />
      Back
    </Button>
  );
}
