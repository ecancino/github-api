import { useMemo } from 'react';
import type { Repository } from '@app/types';
import { sortOptions, toOption } from '@app/helpers';

export default function useSortedRepos(repos: Repository[]) {
  return useMemo(() => repos.map(toOption).sort(sortOptions), [repos]);
}
