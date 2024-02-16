import useCardContext from './useCardContext';
import { cardHeader, cardTitle, cardTitleLink } from './RepoCard.css';
import Link from '../Link/Link';

export default function RepoTitle() {
  const { repository } = useCardContext();
  return (
    <header className={cardHeader}>
      <h1 className={cardTitle}>{repository?.name}</h1>
      <Link className={cardTitleLink} href={repository?.owner?.html_url}>
        {repository?.owner?.login}
      </Link>
    </header>
  );
}
