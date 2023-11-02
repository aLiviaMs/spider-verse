// API
import { getHeroes } from "@/app/services/get-heroes.api";

// Components
import Carousel from "@/components/Carousel/CarouselComponent";

interface IHeroProps {
  params: {
    id: string;
  }
}

export default async function Hero({ params }: Readonly<IHeroProps>) {
  const heroes = await getHeroes();

  return (
    <Carousel heroes={heroes.data} activeId={params.id}/>
  )
}