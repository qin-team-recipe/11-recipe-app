import '@/app/globals.css';

import { Inter } from 'next/font/google';

import { SideNav } from '@/app/components/parts/SideNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto flex min-h-screen flex-col justify-center sm:max-w-[772px] sm:flex-row sm:gap-5 sm:px-4">
          <nav className="hidden w-60 shrink-0 sm:block">
            <SideNav />
          </nav>
          <main className="relative mx-auto w-full flex-1 pb-footer sm:max-w-[30rem] sm:border-x sm:border-mauve-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
