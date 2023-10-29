// Models
import { IHeroDTO } from '@/interfaces/heroes';

// Styles
import styles from './HeroesListComponent.module.scss';

interface IHeroesProps {
  heroes: IHeroDTO[];
}

export default function HeroesListComponent({ heroes }: IHeroesProps)
{
  return (
    <>
      <h1 className={styles.title}>Characters</h1>
    </>
  );
}
