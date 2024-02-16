import useCardContext from './useCardContext';
import { cardDesc } from './RepoCard.css';

export default function RepoDesc() {
  const { repository } = useCardContext();
  return <p className={cardDesc}>{repository.description}</p>;
}
