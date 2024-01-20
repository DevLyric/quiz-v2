type Props = {
  score: number;
  username: string;
};

const UserScore = ({ score, username }: Props) => {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white p-4 rounded cursor-pointer hover:scale-105 transition-all">
      <div>{username}</div>
      <div>{score}</div>
    </div>
  );
};

export default UserScore;
