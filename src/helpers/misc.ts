import { Option } from '@app/components/Select/Select';
import type { Repository, SearchParams } from '@app/types';
import { GITHUB_MAIN_URL } from './constants';

export function sortOptions(repoA: Option, repoB: Option) {
  return repoA.label.localeCompare(repoB.label);
}

export function toOption(repo: Repository): Option {
  return {
    id: repo.id,
    label: repo.name,
    value: repo.full_name,
  };
}

export function getSearchParams<P extends SearchParams>(searchParams: P) {
  return new URLSearchParams(searchParams);
}

export function createTopicURL(topic: string, language?: string) {
  return `${GITHUB_MAIN_URL}/topics/${topic}?l=${language}`;
}

const decimalFormatter = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  currency: 'USD',
});

export function formatNumber(value: number) {
  return decimalFormatter.format(value);
}
