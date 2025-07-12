import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'STGMA Apparel: Mental Wellness Hub',
  description: 'Apparel with a mission to destigmatize mental health.',
  openGraph: {
    title: 'STGMA Apparel: Mental Wellness Hub',
    description: 'A resource hub and community dedicated to mental wellness.',
    url: 'https://stgma.online', // Replace with your actual domain
    siteName: 'STGMA',
    images: [
      {
        url: '/og-image.png', // Recommended: 1200x630px
        width: 1200,
        height: 630,
        alt: 'STGMA Mental Wellness Hub',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STGMA Apparel: Mental Wellness Hub',
    description: 'A resource hub and community dedicated to mental wellness.',
    images: ['/og-image.png'], // Recommended: 1200x630px
  },
  icons: {
    icon: '/icon.png', // Recommended: 192x192px
    shortcut: '/favicon.ico', // Recommended: 32x32px
    apple: '/apple-touch-icon.png', // Recommended: 180x180px
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&family=Oswald:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
        <div className="relative flex min-h-dvh flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
