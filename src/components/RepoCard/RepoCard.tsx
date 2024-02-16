import Box from './RepoBox';
import Intro from './RepoIntro';
import Desc from './RepoDesc';
import Title from './RepoTitle';
import Counts from './RepoCounts';
import Topics from './RepoTopics';

import { useRepoData } from '@app/hooks';

export type RepoCardProps = {
  repository?: string;
  language?: string;
};

export default function RepoCard({ repository, language }: RepoCardProps) {
  const { loadingRepo, repoError, repoData } = useRepoData(repository);

  if (loadingRepo && !repoData) {
    return <>Loading...</>;
  }

  if (repoError) {
    return <>An error has occurred!</>;
  }

  return (
    <>
      <Box repository={repoData} language={language}>
        <Title />
        <Intro />
        <Desc />
        <Counts />
        <Topics />
        <hr />
      </Box>
    </>
  );
}
