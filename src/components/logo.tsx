import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("transition-opacity hover:opacity-80", className)}>
      <Image
        src="/STGMA-logo.png"
        alt="STGMA Logo"
        width={164}
        height={32}
        className="h-8 w-auto"
        priority
      />
    </Link>
  );
}
