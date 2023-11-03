"use client";

// Libs
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Models
import { IHeroDTO } from "@/interfaces/heroes";
import { TObject } from "@/interfaces/TObject";

// Styles
import styles from './CarouselComponent.module.scss'

// Components
import HeroDetails from "../HeroDetails/HeroDetailsComponent";
import HeroPictureComponent from "../HeroPicture/HeroPictureComponent";

interface ICarouselProps {
  heroes: IHeroDTO[];
  activeId: string;
}

enum EnumHeroPosition {
  FRONT = 0,
  MIDDLE = 1,
  BACK = 2,
}

export default function Carousel({heroes, activeId}: Readonly<ICarouselProps>) {
  const [visibleItems, setVisibleItems] = useState<IHeroDTO[] | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(heroes.findIndex((hero) => hero.id === activeId) - 1);

  const transitionAudio = useMemo(() => new Audio("/songs/transition.mp3"), []);
  const voicesAudio: Record<string, HTMLAudioElement> = useMemo(() => ({
    928: new Audio("/songs/928.mp3"),
    65: new Audio("/songs/65.mp3"),
    90214: new Audio("/songs/90214.mp3"),
    616: new Audio("/songs/616.mp3"),
    1610: new Audio("/songs/1610.mp3"),
    8311: new Audio("/songs/8311.mp3"),
    14512: new Audio("/songs/14512.mp3"),
  }), []);

  useEffect(() => {
    const indexInArrayScope = ((activeIndex % heroes.length) + heroes.length) % heroes.length;
    const visibleItems = [...heroes, ...heroes].slice(indexInArrayScope, indexInArrayScope + 3);

    setVisibleItems(visibleItems);
  }, [heroes, activeIndex]);

  useEffect(() => {
    const html: HTMLElement | null = document.querySelector("html");

    if(!html || !visibleItems) {
      return;
    }

    const currentHeroId = visibleItems[EnumHeroPosition.MIDDLE].universe;
    html.style.backgroundImage = `url("/spiders/${currentHeroId}-background.png")`;
    html.classList.add("hero-page");

    return () => {
      html.classList.remove("hero-page");
    }
  }, [visibleItems])

  useEffect(() => {
    if(!visibleItems) {
      return;
    }
    const voiceAudio = voicesAudio[visibleItems[EnumHeroPosition.MIDDLE].universe];

    transitionAudio.play();
    
    if(!voiceAudio) return;
    voiceAudio.volume = 0.3;
    voiceAudio.play();
  }, [visibleItems])
  
  /**
   * handleChangeActiveIndex
   * 
   * Change current active hero on carousel.
   * 
   * @param newDirection - the direction the carousel will rotate
   */
  const handleChangeActiveIndex = (newDirection: number): void => {
    setActiveIndex((prevActiveIndex) => prevActiveIndex + newDirection);
  };

  if(!visibleItems) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <div className={styles.wrapper} onClick={() => handleChangeActiveIndex(1)}>
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item, index) => (
              <motion.div 
                key={item.id} 
                className={styles.hero}
                transition={{ duration: 0.8 }}
                initial={{ x: -1500, scale: 0.75 }}
                animate={{ x: 0, ...getItemStyles(index) }}
                exit={{ x: 0, opacity: 0, scale: 1 }}
              >
                <HeroPictureComponent hero={item}/>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <motion.div 
        className={styles.details}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
      >
        <HeroDetails data={visibleItems[EnumHeroPosition.MIDDLE]}/>
      </motion.div>
    </div>
  );
}

const getItemStyles = (position: EnumHeroPosition): TObject => {
  switch(position) {
    case EnumHeroPosition.FRONT:
      return { 
        zIndex: 3,
        filter: "blur(10px)",
        scale: 1.2,
      };
    case EnumHeroPosition.MIDDLE:
      return { 
        zIndex: 2,
        left: 300,
        scale: 0.8,
        top: '-10%'
      };
    default: 
      return { 
        zIndex:1,
        filter: "blur(10px)",
        left: 160,
        scale: 0.6,
        opacity: 0.8
      };
  }
}