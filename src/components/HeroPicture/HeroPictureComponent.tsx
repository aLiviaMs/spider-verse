// next
import Image, { StaticImageData } from "next/image";

// Models
import { IHeroDTO } from "@/interfaces/heroes";

// Assets
import ImageSpiderMan928 from '@public/spiders/spider-man-928.png';
import ImageSpiderWoman65 from '@public/spiders/mulher-aranha-65.png';
import ImageSpiderMan90214 from '@public/spiders/spider-man-90214.png';
import ImageSpiderMan616 from '@public/spiders/spider-man-616.png';
import ImageSpiderMan1610 from '@public/spiders/spider-man-1610.png';
import ImageSpiderHam8311 from '@public/spiders/spider-ham-8311.png';
import ImageSpiderMan14512 from '@public/spiders/sp-dr-14512.png';

const heroesImage: Record<number, StaticImageData> = {
  928: ImageSpiderMan928,
  65: ImageSpiderWoman65,
  90214: ImageSpiderMan90214,
  616: ImageSpiderMan616,
  1610: ImageSpiderMan1610,
  8311: ImageSpiderHam8311,
  14512: ImageSpiderMan14512,
}

interface IHeroPicture {
  hero: IHeroDTO
}

export default function HeroPictureComponent({ hero }: IHeroPicture) {
  return (
    <Image
      src={heroesImage[hero.universe]}
      alt={hero.name}
      unoptimized
    />
  );
}
