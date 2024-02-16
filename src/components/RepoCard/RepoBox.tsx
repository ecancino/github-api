import type { AllHTMLAttributes } from 'react';
import CardProvider from './RepoProvider';

import type { Repository } from '@app/types';

export type RepoBoxProps = AllHTMLAttributes<HTMLDivElement> & {
  repository?: Repository;
  language?: string;
};

export default function RepoBox({ repository, language, children, ...rest }: RepoBoxProps) {
  if (!repository) {
    return null;
  }

  return (
    <CardProvider repository={repository} language={language}>
      <section id={`${repository.id}`} {...rest}>
        {children}
      </section>
    </CardProvider>
  );
}
