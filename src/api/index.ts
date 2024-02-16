import ky from 'ky';

import { GITHUB_API_URL, getSearchParams } from '@app/helpers';
import type { Repository, ReposOptions, ReposReponse } from '@app/types';

const api = ky.create({ prefixUrl: GITHUB_API_URL });

export async function getRepository(repoName: string) {
  return api.get(`repos/${repoName}`).json<Repository>();
}

export async function getTopRepos(
  language?: string,
  perPage: number = 50,
  sort: string = 'stars',
  order: string = 'desc',
) {
  const searchParams = getSearchParams<ReposOptions>({
    q: `language:${language}`,
    per_page: `${perPage}`,
    sort,
    order,
  });

  const { items } = await api.get(`search/repositories`, { searchParams }).json<ReposReponse>();

  return items;
}
