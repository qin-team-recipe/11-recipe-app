import {
  RecipeListHorizontal,
  RecipeListVertical,
} from '@/app/components/features/recipe/RecipeList';
import { SearchBar } from '@/app/components/features/search/SearchBar';
import { FC, ReactNode } from 'react';

const Container: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="mx-auto max-w-[390px] px-4 bg-white h-screen flex items-center justify-center border-x-2 border-gray-12">
    {children}
  </div>
);

const TestPage = () => {
  return (
    <Container>
      {/* <RecipeListVertical recipeList={[]} /> */}
      <SearchBar />
    </Container>
  );
};

export default TestPage;
