import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/contexts/ThemeContext';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'DigiKaz - Location de logements étudiants',
  description: 'La plateforme de location de logements étudiants la plus moderne et élégante. Trouvez votre logement idéal en quelques clics.',
  keywords: 'location, logement, étudiant, appartement, chambre, DigiKaz',
  authors: [{ name: 'DigiKaz Team' }],
  openGraph: {
    title: 'DigiKaz - Location de logements étudiants',
    description: 'Trouvez votre logement idéal en quelques clics',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DigiKaz - Location de logements étudiants',
    description: 'Trouvez votre logement idéal en quelques clics',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo-placeholder.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ff6b35" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-primary`}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col bg-theme-primary">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
