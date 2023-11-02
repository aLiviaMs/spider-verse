import { IHeroDTO } from "@/interfaces/heroes";

export async function getHeroes(): Promise<{ data: IHeroDTO[] }> {
  const response = await fetch(`${process.env.DOMAIN_ORIGIN}/api/spiders`)
  
  if (!response.ok) {
    throw new Error('Failed to request heroes list')
  }

  return response.json();
}