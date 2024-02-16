import { useContext } from 'react';
import { CardContext } from './RepoProvider';

export default function useCardContext() {
  return useContext(CardContext);
}
