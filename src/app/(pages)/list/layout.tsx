import { Footer } from '@/app/components/parts/Footer/Footer';
import { PageHead } from '@/app/components/parts/PageHead';

export default function ListLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHead>買い物リスト</PageHead>
      {children}
      <Footer />
    </>
  );
}
