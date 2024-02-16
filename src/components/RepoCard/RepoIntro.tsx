import Link from './RepoLink';
import CreatedAt from './RepoCreatedAt';
import { cardIntro } from './RepoCard.css';

export default function RepoIntro() {
  return (
    <section className={cardIntro}>
      <Link />
      <CreatedAt />
    </section>
  );
}
