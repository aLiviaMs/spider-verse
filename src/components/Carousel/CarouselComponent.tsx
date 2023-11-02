// Models
import { IHeroDTO } from "@/interfaces/heroes";

// Styles
import styles from './CarouselComponent.module.scss'

// Components
import HeroDetails from "../HeroDetails/HeroDetailsComponent";

interface ICarouselProps {
  heroes: IHeroDTO[];
  activeId: string;
}

export default function Carousel(CarouselProps: Readonly<ICarouselProps>) {
  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <div className={styles.wrapper}>
          List with heroes
        </div>
      </div>
      <div className={styles.details}>
        <HeroDetails data={CarouselProps.heroes[0]}/>
      </div>
    </div>
  );
}