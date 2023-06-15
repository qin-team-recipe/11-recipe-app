'use client';

import { useSearchParams } from 'next/navigation';

const SearchRecipePage = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get('q');

  return <div>Searching for: {search}</div>;
};

export default SearchRecipePage;
