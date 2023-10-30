// Models
import { IHeroDTO } from '@/interfaces/heroes';

// Styles
import styles from './HeroesListComponent.module.scss';
import HeroPictureComponent from '../HeroPicture/HeroPictureComponent';

interface IHeroesProps {
  heroes: IHeroDTO[];
}

export default function HeroesListComponent({ heroes }: IHeroesProps)
{
  return (
    <>
      <h1 className={styles.title}>Characters</h1>
      <section className={styles.heroes}>
        {heroes.map(hero => (
          <div key={hero.id} className={`${styles.imageContainer} ${styles['height-' + hero.universe]}`}>
            <HeroPictureComponent hero={hero}/>
          </div>
        ))}
      </section>
    </>
  );
}
