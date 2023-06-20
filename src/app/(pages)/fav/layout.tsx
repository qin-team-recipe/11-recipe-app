import { Footer } from '@/app/_components/parts/Footer/Footer';
import { PageHead } from '@/app/_components/parts/PageHead';

export default function FavLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHead>お気に入り</PageHead>
      {children}
      <Footer />
    </>
  );
}
