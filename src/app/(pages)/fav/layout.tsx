import { Footer } from '@/app/components/parts/Footer/Footer';
import { PageHead } from '@/app/components/parts/PageHead';

export default function FavLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHead>お気に入り</PageHead>
      {children}
      <Footer />
    </>
  );
}
