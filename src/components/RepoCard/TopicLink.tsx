import Link from '@app/components/Link/Link';
import useCardContext from './useCardContext';
import { createTopicURL } from '@app/helpers';
import { cardTopicLink } from './RepoCard.css';

type TopicLinkProps = {
  topic: string;
};

export default function TopicLink({ topic }: TopicLinkProps) {
  const { language } = useCardContext();

  return (
    <Link className={cardTopicLink} href={createTopicURL(topic, language)}>
      {topic}
    </Link>
  );
}
