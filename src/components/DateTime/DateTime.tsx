import { format } from '@formkit/tempo';

export default function DateTime({ datetime }: { datetime: string | undefined }) {
  if (!datetime) {
    return null;
  }

  const date = new Date(datetime);

  return <time dateTime={format(date, 'short')}>{format(date, 'medium')}</time>;
}
