type Props = {
  question: string;
  currentQuestion: string[];
  onSelectAnswer: (item: string) => void;
};

const Game = ({ question, currentQuestion, onSelectAnswer }: Props) => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-semibold text-3xl text-center">{question}</h1>

      {currentQuestion.map((item) => (
        <button
          className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% font-medium rounded p-3 hover:scale-105 transition-all"
          onClick={() => onSelectAnswer(item)}
          key={item}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Game;
