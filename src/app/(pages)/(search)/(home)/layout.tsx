import { Footer } from '@/app/_components/parts/Footer/Footer';

export default function FooterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
