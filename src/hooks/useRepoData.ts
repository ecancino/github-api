import { useQuery } from '@tanstack/react-query';
import { getRepository } from '@app/api';
import type { Repository } from '@app/types';

export default function useRepoData(repoName: string = '') {
  const { isLoading, error, data } = useQuery<Repository>({
    enabled: Boolean(repoName),
    queryKey: ['repoData', repoName],
    queryFn: () => getRepository(repoName),
  });

  return {
    loadingRepo: isLoading,
    repoError: error,
    repoData: data,
  };
}
