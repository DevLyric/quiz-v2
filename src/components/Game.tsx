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
          className="bg-black text-white font-medium rounded p-2"
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
