import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("transition-opacity hover:opacity-80", className)}>
      <div className="relative h-8 w-[164px]"> {/* Added a wrapper div with relative positioning and dimensions */}
        <Image
          src="/STGMA-logo.png"
          alt="STGMA Logo"
          fill // Use fill to make the image take up the size of the parent
          priority
        />
      </div>
    </Link>
  );
}
