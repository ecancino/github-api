import { useCallback, useState } from 'react';

export default function useString(startValue: string) {
  const [value, setValue] = useState<string>(startValue);
  const onChange = useCallback(setValue, [setValue]);
  return [value, onChange, setValue] as const;
}
