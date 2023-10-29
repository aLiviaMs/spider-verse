// next
import Image from 'next/image';

// Assets
import MenuIcon from '../../public/icons/menu.svg';
import SpiderLogo from '../../public/spider-logo.svg';
import ProfileLogo from '../../public/icons/user.svg';
import { spidermanFont } from '@/fonts';

// Styles
import './styles.scss';

export const metadata = {
  title: "Spider-Verse",
  description:
    "Creating a parallax Spider-Verse carousel with React, Next.js 13 and Framer Motion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spidermanFont.className}>
        <header>
          <Image
            src={MenuIcon}
            alt='Menu Options'
            width={36}
            height={25}
          />
          <Image
            src={SpiderLogo}
            alt='Spiderman logo'
            width={260}
            height={70}
          />
          <Image
            src={ProfileLogo}
            alt='Login'
            width={36}
            height={36}
          />
        </header>

        {children}
      </body>
    </html>
  )
}
