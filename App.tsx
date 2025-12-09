import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Page } from './types';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home onNavigate={setActivePage} />;
      case 'services':
        return <Services />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F0F2F5]">
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer onNavigate={setActivePage} />
    </div>
  );
};

export default App;