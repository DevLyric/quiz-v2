type Props = {
  score: number;
  questions: number;
  onRestart: () => void;
};

const Score = ({ score, questions, onRestart }: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-medium text-center">Score: {score}</h1>
      <p className="font-medium">
        Correct answers {score}/{questions}
      </p>
      <button
        onClick={onRestart}
        className="bg-black text-white font-medium rounded p-2"
      >
        Tentar novamente
      </button>
    </div>
  );
};

export default Score;
