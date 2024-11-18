import { LoadingIcon } from '@/components/common/icons';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
      <LoadingIcon className="size-8 fill-primary" />
      <p>Loading Country</p>
    </div>
  );
}
