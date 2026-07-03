import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/layout/Sidebar';
import TopNav from '@/components/layout/TopNav';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Founder OS — The Complete Startup Execution System',
  description:
    'The complete startup execution platform for ambitious Indian founders aged 16–20. Problem discovery, frameworks, tools, payments, scaling — all in one system.',
  openGraph: {
    title: 'Founder OS — The Complete Startup Execution System',
    description: 'The complete startup execution platform for ambitious Indian founders aged 16–20.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0A0A0F] text-[#F8F8FF]">
        <Sidebar />
        <TopNav />
        <main className="lg:ml-[280px] pt-14 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
