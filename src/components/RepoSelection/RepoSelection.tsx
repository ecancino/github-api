import { memo } from 'react';
import { useTopRepos } from '@app/hooks';
import { Select } from '@app/components';

export type RepoSelectionProps = {
  repository?: string;
  language?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
};

export default memo(function RepoSelection({ repository, language, onChange }: RepoSelectionProps) {
  const { loadingRepos, reposError, topRepos } = useTopRepos(language);
  const placeholder = loadingRepos ? 'Loading...' : 'Select a Github repo';

  if (reposError) {
    return <>An error has occurred!</>;
  }

  return (
    <>
      <Select
        name="repos"
        defaultValue={repository}
        disabled={loadingRepos}
        placeholder={placeholder}
        onChange={(event) => onChange(event?.target?.value)}
        items={topRepos}
      />

      {repository ? <hr /> : null}
    </>
  );
});
