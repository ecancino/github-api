import { RepoCard, RepoSelection, LanguageSelection } from './components';
import { useString } from './hooks';

export default function App() {
  const [language, onChangeLanguage] = useString('javascript');
  const [repository, onChangeRepository] = useString('atom/atom');

  return (
    <main>
      <LanguageSelection
        language={language}
        onChange={(value) => {
          onChangeLanguage(value);
          onChangeRepository('');
        }}
      />

      <hr />

      {language ? <RepoSelection repository={repository} language={language} onChange={onChangeRepository} /> : null}

      {repository && language ? <RepoCard repository={repository} language={language} /> : null}
    </main>
  );
}
