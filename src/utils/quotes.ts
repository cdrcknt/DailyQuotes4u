export interface Quote {
  text: string;
  author: string;
  tags: string[];
}

export const quotes: Quote[] = [
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    tags: ["inspiration", "authenticity"]
  },
  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
    tags: ["humor", "wisdom"]
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    tags: ["inspiration", "work"]
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    tags: ["life", "wisdom"]
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    tags: ["inspiration", "dreams"]
  }
];

export const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};