import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../constants";

const Header = () => {
  const [currentUserEmail, setCurrentUserEmail] = useState<string | null>(null);
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userEmail = user.email;
      console.log(userEmail);
      setCurrentUserEmail(userEmail);
    } else {
      console.log("no user");
    }
  });

  return (
    <div className="flex items-center shadow-md h-20">
      <div className="container mx-auto w-full max-w-7xl flex items-center justify-between px-5">
        <Link to="/" className="text-3xl font-semibold">
          Quiz
        </Link>
        <div className="flex items-center gap-3 font-medium tracking-wider">
          <Link to="/leaderboard">SCORE</Link>
          {currentUserEmail ? (
            <button
              onClick={() => {
                logout();
                window.location.href = "/login";
              }}
            >
              LOG OUT
            </button>
          ) : (
            <Link to="/login">SIGNUP/LOGIN</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
