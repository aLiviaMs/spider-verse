// Models
import { IHeroDTO } from '@/interfaces/heroes';

// Components
import HeroesListComponent from '@/components/HeroesList/HeroesListComponent';

// Styles
import styles from './page.module.scss';

async function getHeroes(): Promise<{ data: IHeroDTO[] }> {
  const response = await fetch(`${process.env.DOMAIN_ORIGIN}/api/spiders`)
  
  if (!response.ok) {
    throw new Error('Failed to request heroes list')
  }

  return response.json();
}

export default async function Home() {
  const heroes = await getHeroes();

  return (
    <main className={styles.main}>
      <HeroesListComponent heroes={heroes.data} />
    </main>
  );
}
