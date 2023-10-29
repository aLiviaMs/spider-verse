// next
import './styles.scss';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <header>
          <Image 
            src='/icons/menu.svg' 
            alt='Menu Options' 
            width={36} 
            height={25}
          />
          <Image 
            src='/spider-logo.svg' 
            alt='Spiderman logo' 
            width={260} 
            height={70}
          />
          <Image 
            src='/icons/user.svg' 
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
