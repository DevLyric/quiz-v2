import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserData, signup } from "../constants";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const score = 0;
    const userData: UserData = { username, score };
    const loginSuccessful = await signup(email, password, userData);

    if (loginSuccessful) {
      navigate("/login");
    }
  };

  return (
    <div className="w-screen flex items-center justify-center mt-40">
      <div className="container mx-auto w-full max-w-lg px-5">
        <div className="mb-8">
          <h1 className="text-2xl font-medium">Account Signup</h1>
          <p className="text-sm pt-2 text-gray-400">
            Become a member and enjoy having fun.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            className="border rounded p-3 text-black outline-none"
            value={username}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setUsername(event.target.value)
            }
            placeholder="Username:"
            required
          />

          <input
            type="email"
            className="border rounded p-3 text-black outline-none"
            value={email}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value)
            }
            placeholder="Email:"
            required
          />

          <input
            type="password"
            className="border rounded p-3 text-black outline-none"
            value={password}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setPassword(event.target.value)
            }
            placeholder="Password:"
            required
          />

          <button
            type="submit"
            className="rounded p-3 bg-blue-500 text-white font-medium"
          >
            Continue
          </button>

          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-700 font-medium">
              Log in here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
