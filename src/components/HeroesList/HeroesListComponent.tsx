"use client";

// Libs
import { motion } from 'framer-motion';

// Models
import { IHeroDTO } from '@/interfaces/heroes';

// Styles
import styles from './HeroesListComponent.module.scss';
import HeroPictureComponent from '../HeroPicture/HeroPictureComponent';

interface IHeroesProps {
  heroes: IHeroDTO[];
}

export default function HeroesListComponent({ heroes }: Readonly<IHeroesProps>) {
  return (
    <>
      <motion.h1 
        className={styles.title} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
      >
        Characters
      </motion.h1>
      <motion.section 
        className={styles.heroes}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        {heroes.map(hero => (
          <motion.div 
            key={hero.id} 
            className={`${styles.imageContainer} ${styles['height-' + hero.universe]}`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.8 }}
          >
            <HeroPictureComponent hero={hero}/>
          </motion.div>
        ))}
      </motion.section>
    </>
  );
}
