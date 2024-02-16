import { ReactNode, createContext } from 'react';

import type { Repository } from '@app/types';

export type CardProviderProps = {
  repository: Repository;
  language?: string;
  children: ReactNode;
};

export type CardContextType = {
  repository: Partial<Repository>;
  language?: string;
};

export const CardContext = createContext<CardContextType>({
  repository: {},
  language: 'javascript',
});

export default function CardProvider({ language, repository, children }: CardProviderProps) {
  return <CardContext.Provider value={{ language, repository }}>{children}</CardContext.Provider>;
}
