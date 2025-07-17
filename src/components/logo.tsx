import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center transition-opacity hover:opacity-80",
        className
      )}
    >
      <div className="w-[133px] aspect-[2.53]">
        <img
          src="/STGMA-logo.svg"
          alt="STGMA Logo"
          className="w-full h-full object-contain"
        />
      </div>
    </Link>
  );
}
