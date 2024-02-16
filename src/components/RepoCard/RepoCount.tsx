import { formatNumber } from '@app/helpers';
import { cardCount } from './RepoCard.css';

export type RepoCountProps = {
  count: number;
  icon: string;
};

export default function RepoCount({ count, icon }: RepoCountProps) {
  return (
    <strong className={cardCount}>
      {icon} {formatNumber(count)}
    </strong>
  );
}
