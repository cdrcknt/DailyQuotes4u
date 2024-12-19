import { motion } from 'framer-motion';
import { Quote } from '../utils/quotes';
import { ShareIcon } from '@heroicons/react/24/outline';

interface QuoteCardProps {
  quote: Quote;
  onNewQuote: () => void;
}

export function QuoteCard({ quote, onNewQuote }: QuoteCardProps) {
  const shareQuote = async () => {
    try {
      await navigator.share({
        title: 'Daily Quote',
        text: `"${quote.text}" - ${quote.author}`,
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-2xl w-full"
    >
      <div className="flex flex-col space-y-4">
        <motion.blockquote
          key={quote.text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-serif text-gray-800 dark:text-gray-200"
        >
          "{quote.text}"
        </motion.blockquote>
        
        <motion.cite
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-right text-gray-600 dark:text-gray-400"
        >
          - {quote.author}
        </motion.cite>

        <div className="flex flex-wrap gap-2 mt-4">
          {quote.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={onNewQuote}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            New Quote
          </button>
          
          <button
            onClick={shareQuote}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <ShareIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}