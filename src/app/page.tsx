// Components
import HeroesListComponent from '@/components/HeroesList/HeroesListComponent';

// Styles
import styles from './page.module.scss';

// API
import { getHeroes } from './services/get-heroes.api';

export default async function Home() {
  const heroes = await getHeroes();

  return (
    <main className={styles.main}>
      <HeroesListComponent heroes={heroes.data} />
    </main>
  );
}
