import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";
import UserScore from "../components/UserScore";

type Doc = {
  id: string;
  username: string;
  score: number;
};

const Leaderboard = () => {
  const [users, setUsers] = useState<Doc[]>([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Doc)));
    };

    getUsers();
  }, []);

  return (
    <div className="w-screen flex items-center justify-center mt-40">
      <div className="container mx-auto w-full max-w-7xl flex flex-col gap-6 px-5 md:gap-8">
        {users.map((user) => (
          <UserScore
            key={user.id}
            username={user.username}
            score={user.score}
          />
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
