import useCardContext from './useCardContext';
import RepoCount from './RepoCount';
import { cardCounts } from './RepoCard.css';

export default function RepoCounts() {
  const { repository } = useCardContext();

  return (
    <footer className={cardCounts}>
      <RepoCount icon="👀" count={repository.subscribers_count ?? 0} />
      <RepoCount icon="✨" count={repository.stargazers_count ?? 0} />
      <RepoCount icon="🍴" count={repository.forks_count ?? 0} />
    </footer>
  );
}
