import Link from 'next/link';
import { Logo } from './logo';

const footerLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/resources', label: 'Resources' },
];

export function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-start">
            <Logo />
            <p className="mt-2 text-sm text-foreground/70">
              Wear the change. End the stigma.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
            <div className="flex flex-col gap-3">
              <h4 className="font-headline text-lg font-semibold">Explore</h4>
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-foreground/80 hover:text-foreground">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-headline text-lg font-semibold">Support</h4>
              <Link href="#" className="text-sm text-foreground/80 hover:text-foreground">FAQ</Link>
              <Link href="#" className="text-sm text-foreground/80 hover:text-foreground">Shipping</Link>
              <Link href="#" className="text-sm text-foreground/80 hover:text-foreground">Returns</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-foreground/60">
          <p>&copy; 2022 - {new Date().getFullYear()} STGMA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
