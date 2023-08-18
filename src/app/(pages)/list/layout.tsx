import { Footer } from '@/app/_components/parts/Footer/Footer';
import { PageHead } from '@/app/_components/parts/PageHead';

export default function ListLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-mauve-2 min-h-screen'>
      <PageHead>買い物リスト</PageHead>
      {children}
      <Footer />
    </div>
  );
}
