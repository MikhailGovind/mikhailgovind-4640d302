
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from '@/components/theme/ThemeProvider';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="min-h-screen flex flex-col transition-colors duration-300 dark:bg-slate-900">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;
