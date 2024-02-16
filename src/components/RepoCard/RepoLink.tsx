import useCardContext from './useCardContext';
import Link from '@app/components/Link/Link';
import { cardLink, cardIntroContainer } from './RepoCard.css';

export default function RepoLink() {
  const { repository } = useCardContext();
  return (
    <p className={cardIntroContainer}>
      <Link className={cardLink} href={repository.owner?.html_url}>
        {repository.full_name}
      </Link>
    </p>
  );
}
