import { useQuery } from '@tanstack/react-query';

import { getTopRepos } from '@app/api';
import useSortedRepos from './useSortedRepos';

import type { Repository } from '@app/types';

export default function useTopRepos(language?: string) {
  const {
    isLoading,
    isPending,
    error,
    data = [],
  } = useQuery<Repository[]>({
    enabled: !!language,
    queryKey: ['repoData', 'top', language],
    queryFn: () => getTopRepos(language),
  });

  const topRepos = useSortedRepos(data);

  return {
    pendingRepos: isPending,
    loadingRepos: isLoading,
    reposError: error,
    topRepos,
  };
}
