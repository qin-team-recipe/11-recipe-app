import { createElement, FC, HTMLAttributes, ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
  headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const SectionTitle: FC<Props> = ({ title, children, headingLevel }) => {
  const Heading = ({ children: HeadingChildren, ...props }: HTMLAttributes<HTMLHeadingElement>) =>
    createElement(headingLevel, props, HeadingChildren);
  return (
    <div className="flex items-center justify-between">
      <Heading className="mb-4 text-xl font-bold">{title}</Heading>
      <div className="flex-shrink-0">{children}</div>
    </div>
  );
};
