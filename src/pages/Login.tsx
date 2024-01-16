import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: FormEvent) => event.preventDefault();

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="container mx-auto w-full max-w-lg px-5">
        <div className="mb-8">
          <h1 className="text-2xl font-medium">Account Login</h1>
          <p className="text-sm pt-2 text-gray-400">
            If you are already a member you can login with your email address
            and password.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            className="border rounded p-3"
            value={email}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value)
            }
            placeholder="Email:"
          />

          <input
            type="password"
            className="border rounded p-3"
            value={password}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setPassword(event.target.value)
            }
            placeholder="Password:"
          />

          <button className="rounded p-3  bg-blue-500 text-white font-medium">
            Login
          </button>

          <p className="text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-700 font-medium">
              Sign up here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
