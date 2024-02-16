import useCardContext from './useCardContext';
import DateTime from '@app/components/DateTime/DateTime';
import { cardIntroContainer } from './RepoCard.css';

export default function RepoCreatedAt() {
  const { repository } = useCardContext();

  return (
    <p className={cardIntroContainer}>
      Created: <DateTime datetime={repository.created_at} />
    </p>
  );
}
