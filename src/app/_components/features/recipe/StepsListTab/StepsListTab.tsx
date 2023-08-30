import { FC } from 'react';

import { CopyButton } from '@/app/_components/parts/ActionButtons/CopyButton';
import { RecipeStep } from '@/app/_types/Recipe';

type Props = {
  steps: RecipeStep[];
};

export const StepsListTab: FC<Props> = ({ steps }) => {
  if (!steps) return <div>作り方が見つかりませんでした</div>;

  return (
    <div>
      <ul>
        {steps.map((step) => (
          <li key={step.id} className="flex items-center justify-center gap-x-2 border-b border-mauve-7 px-4 py-2">
            <span className="flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full bg-tomato-11 text-xs leading-none text-mauve-1">
              {step.step}
            </span>
            <p className="flex-1 text-sm">{step.description}</p>
          </li>
        ))}
      </ul>
      <CopyButton text="TODO" />
    </div>
  );
};
