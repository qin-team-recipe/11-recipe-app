import '@/app/globals.css';

import { FC, ReactNode } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>{children}</Container>
      </body>
    </html>
  );
}

const Container: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="bg-white mx-auto flex min-h-screen max-w-[390px] items-center justify-center border-x border-gray-12 px-4">
    {children}
  </div>
);