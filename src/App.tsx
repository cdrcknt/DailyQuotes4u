import { useState, useEffect } from 'react';
import { QuoteCard } from './components/QuoteCard';
import { ThemeToggle } from './components/ThemeToggle';
import { getRandomQuote, Quote } from './utils/quotes';

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const getNewQuote = () => {
    let newQuote = getRandomQuote();
    while (newQuote.text === quote.text) {
      newQuote = getRandomQuote();
    }
    setQuote(newQuote);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-screen">
        <QuoteCard quote={quote} onNewQuote={getNewQuote} />
      </div>
    </div>
  );
}

export default App;