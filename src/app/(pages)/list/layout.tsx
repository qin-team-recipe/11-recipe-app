import { Footer } from '@/app/components/parts/Footer/Footer';
import { Header } from '@/app/components/parts/Header';

export default function ListLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header>買い物リスト</Header>
      {children}
      <Footer />
    </>
  );
}
