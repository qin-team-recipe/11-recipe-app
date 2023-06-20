import { FC } from 'react';
import Link from 'next/link';

type Props = {
  query: string | null;
  type: string;
};

export const SearchToggle: FC<Props> = ({ query, type }) => {
  return (
    <div className="grid w-full grid-cols-2 font-bold">
      <Link
        href={`/search/recipe${query ? `?q=${query}` : ''}`}
        className={`${type === 'recipe' ? 'border-b-2 border-mauve-12' : ''} flex items-center justify-center h-10`}
      >
        レシピ
      </Link>
      <Link
        href={`/search/chef${query ? `?q=${query}` : ''}`}
        className={`${type === 'chef' ? 'border-b-2 border-mauve-12' : ''} flex items-center justify-center h-10`}
      >
        シェフ
      </Link>
    </div>
  );
};
