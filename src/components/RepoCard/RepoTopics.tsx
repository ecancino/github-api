import TopicLink from './TopicLink';
import useCardContext from './useCardContext';
import { cardTopic, cardTopics } from './RepoCard.css';

export default function RepoTopics() {
  const { repository } = useCardContext();

  return (
    <ul className={cardTopics}>
      {repository.topics?.map((topic) => (
        <li key={topic} className={cardTopic}>
          <TopicLink topic={topic} />
        </li>
      ))}
    </ul>
  );
}
