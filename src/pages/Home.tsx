import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center mt-20">
      <div className="container mx-auto w-full flex flex-col gap-5 items-center px-5 text-center font-medium">
        <h1 className="text-3xl font-semibold">Explore Your Knowledge</h1>
        <p>
          Unlock Score Saving:{" "}
          <Link to="/login" className="text-blue-500">
            Sign in Now
          </Link>{" "}
          for a Personalized Experience
        </p>

        <Link to="/quiz">
          <button className="rounded p-3 bg-black text-white font-medium">
            Start the Quiz
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
