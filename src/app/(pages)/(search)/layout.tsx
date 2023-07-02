import { SearchBar } from '@/app/_components/features/search/SearchBar';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col">
      <SearchBar />
      {children}
    </div>
  );
}
