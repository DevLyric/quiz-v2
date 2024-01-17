interface Question {
  prompt: string;
  correctAnswer: string;
  options: string[];
}

export const questions: Question[] = [
  {
    prompt: "What is the color of the sky?",
    correctAnswer: "blue",
    options: ["blue", "red", "pink", "gray"],
  },
  {
    prompt: "Which animal goes woof woof?",
    correctAnswer: "dog",
    options: ["dolphin", "parrot", "dog", "whale"],
  },
  {
    prompt: "How many continents are there on Earth?",
    correctAnswer: "seven",
    options: ["five", "seven", "nine", "three"],
  },
  {
    prompt: "Which planet is known as the Red Planet?",
    correctAnswer: "Mars",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
  },
  {
    prompt: "What is the capital of France?",
    correctAnswer: "Paris",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
  },
  {
    prompt: "What is the largest mammal in the world?",
    correctAnswer: "blue whale",
    options: ["elephant", "giraffe", "blue whale", "lion"],
  },
  {
    prompt: "Who wrote 'Romeo and Juliet'?",
    correctAnswer: "William Shakespeare",
    options: [
      "Jane Austen",
      "Charles Dickens",
      "William Shakespeare",
      "Mark Twain",
    ],
  },
  {
    prompt: "What is the chemical symbol for water?",
    correctAnswer: "H2O",
    options: ["CO2", "O2", "H2O", "N2"],
  },
  {
    prompt: "What is the capital of Japan?",
    correctAnswer: "Tokyo",
    options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
  },
  {
    prompt: "Which year did the Titanic sink?",
    correctAnswer: "1912",
    options: ["1905", "1912", "1923", "1930"],
  },
  {
    prompt: "What is the currency of Brazil?",
    correctAnswer: "Brazilian Real",
    options: ["Peso", "Dollar", "Euro", "Brazilian Real"],
  },
  {
    prompt: "Who painted the Mona Lisa?",
    correctAnswer: "Leonardo da Vinci",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
  },
  {
    prompt: "What is the square root of 64?",
    correctAnswer: "8",
    options: ["4", "6", "8", "10"],
  },
  {
    prompt: "In which galaxy is our solar system located?",
    correctAnswer: "Milky Way",
    options: ["Andromeda", "Milky Way", "Triangulum", "Centaurus A"],
  },
  {
    prompt: "Who is the current President of the United States?",
    correctAnswer: "Joe Biden",
    options: ["Donald Trump", "Barack Obama", "Joe Biden", "George W. Bush"],
  },
  {
    prompt: "What is the largest ocean on Earth?",
    correctAnswer: "Pacific Ocean",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
  },
  {
    prompt: "Which country is known as the Land of the Rising Sun?",
    correctAnswer: "Japan",
    options: ["China", "Korea", "Japan", "Vietnam"],
  },
  {
    prompt: "What is the main ingredient in guacamole?",
    correctAnswer: "avocado",
    options: ["tomato", "onion", "avocado", "cilantro"],
  },
  {
    prompt: "Who wrote 'To Kill a Mockingbird'?",
    correctAnswer: "Harper Lee",
    options: [
      "J.K. Rowling",
      "George Orwell",
      "Harper Lee",
      "Ernest Hemingway",
    ],
  },
  {
    prompt: "What is the capital of Australia?",
    correctAnswer: "Canberra",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
  },
];
