// Libs
import { Quicksand } from 'next/font/google';
import Image from 'next/image';

// Models
import { IHeroDTO } from "@/interfaces/heroes";

// Styles
import styles from './HeroDetailsComponent.module.scss'
import { spidermanFont } from '@/fonts';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

interface IHeroDetailsProps {
  data: IHeroDTO;
}

export default function HeroDetails({ data }: Readonly<IHeroDetailsProps>) {
  return (
    <div className={quicksand.className}>
      <h1 className={`${spidermanFont.className} ${styles.title}`}>
        {data.name} (Universe-{data.universe})
      </h1>
      <div className={styles.details}>
        <h2 className={styles.subtitle}>Informations</h2>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.label}>Full Name:</td>
              <td>{data.details.fullName}</td>
            </tr>
            <tr>
              <td className={styles.label}>Birthday:</td>
              <td>{new Date(data.details.birthday).toLocaleDateString('en')}</td>
            </tr>
            <tr>
              <td className={styles.label}>Homeland:</td>
              <td>{data.details.homeland}</td>
            </tr>
            <tr>
              <td className={styles.label}>Height:</td>
              <td>{data.details.height.toFixed(2)}</td>
            </tr>
            <tr>
              <td className={styles.label}>Weight:</td>
              <td>{data.details.weight} kg</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.details}>
        <h2 className={styles.subtitle}>First appearance</h2>
        <Image 
          src={`/spiders/${data.universe}-comic-book.png`}
          alt={`First appearance of ${data.details.fullName} on comic books`}
          width={80}
          height={122}
        />
      </div>
    </div>
  )
}