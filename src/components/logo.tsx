import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("transition-opacity hover:opacity-80", className)}>
      <Image
        // 1. Replace this placeholder with the path to your logo
        //    (e.g., "/logo.png") after adding it to the /public folder.
        src="https://placehold.co/328x64.png"
        alt="STGMA Logo"
        // 2. These dimensions define the aspect ratio.
        //    Update them if your logo has a different shape.
        width={164}
        height={32}
        // This ensures the logo is displayed at the correct size.
        className="h-8 w-auto"
        // This helps the logo load faster.
        priority
      />
    </Link>
  );
}
