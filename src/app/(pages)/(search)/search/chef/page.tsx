'use client';

import { useSearchParams } from 'next/navigation';

const SearchChefPage = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get('q');

  return <div>Searching for: {search}</div>;
};

export default SearchChefPage;
