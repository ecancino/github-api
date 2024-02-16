import { memo } from 'react';
// import { useTopRepos } from '@app/hooks';
import { Select } from '@app/components';
import type { Option } from '@app/components/Select/Select';

export type LanguageSelectionProps = {
  language?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
};

const items: Option[] = [
  { id: 1, label: 'JavaScript', value: 'javascript' },
  { id: 2, label: 'TypeScript', value: 'typescript' },
  { id: 3, label: 'Python', value: 'python' },
  { id: 4, label: 'Java', value: 'java' },
  { id: 5, label: 'Ruby', value: 'ruby' },
  { id: 6, label: 'Go', value: 'go' },
  { id: 7, label: 'C++', value: 'c++' },
  { id: 8, label: 'C#', value: 'c#' },
  { id: 9, label: 'PHP', value: 'php' },
  { id: 10, label: 'Swift', value: 'swift' },
  { id: 11, label: 'Kotlin', value: 'kotlin' },
  { id: 12, label: 'Rust', value: 'rust' },
  { id: 13, label: 'Shell', value: 'shell' },
  { id: 14, label: 'PowerShell', value: 'powershell' },
  { id: 15, label: 'Objective-C', value: 'objective-c' },
  { id: 16, label: 'R', value: 'r' },
  { id: 17, label: 'Vim script', value: 'vim script' },
  { id: 18, label: 'Dart', value: 'dart' },
  { id: 19, label: 'Assembly', value: 'assembly' },
  { id: 20, label: 'Perl', value: 'perl' },
  { id: 21, label: 'Elixir', value: 'elixir' },
  { id: 22, label: 'Clojure', value: 'clojure' },
  { id: 23, label: 'Groovy', value: 'groovy' },
  { id: 24, label: 'Scala', value: 'scala' },
  { id: 25, label: 'Haskell', value: 'haskell' },
  { id: 26, label: 'Lua', value: 'lua' },
  { id: 27, label: 'Julia', value: 'julia' },
  { id: 28, label: 'Erlang', value: 'erlang' },
  { id: 29, label: 'Crystal', value: 'crystal' },
  { id: 30, label: 'Nim', value: 'nim' },
  { id: 31, label: 'COBOL', value: 'cobol' },
  { id: 32, label: 'F#', value: 'f#' },
  { id: 33, label: 'D', value: 'd' },
  { id: 34, label: 'Visual Basic', value: 'visual basic' },
  { id: 35, label: 'Objective-C++', value: 'objective-c++' },
];

export default memo(function LanguageSelection({ language, onChange }: LanguageSelectionProps) {
  // const { loadingRepos, reposError, topRepos } = useTopRepos();
  // const placeholder = loadingRepos ? 'Loading...' : 'Select a Github repo';

  // if (reposError) {
  //   return <>An error has occurred!</>;
  // }

  return (
    <>
      <Select
        name="languages"
        defaultValue={language}
        // disabled={loadingRepos}
        // placeholder={placeholder}
        onChange={(event) => onChange(event?.target?.value)}
        items={items}
      />
    </>
  );
});
