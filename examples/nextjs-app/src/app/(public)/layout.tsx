import '@/styles/globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { MainLayout } from '@/components/layout/main-layout';

export const metadata: Metadata = {};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={'en'}>
      <body className={`h-full`}>
        <MainLayout hideMainNav={false}>
          <div
            className={'flex w-full bg-black font-family-inter text-[#fefefe]'}
          >
            {children}
          </div>
        </MainLayout>
      </body>
    </html>
  );
}
