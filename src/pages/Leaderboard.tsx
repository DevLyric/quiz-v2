import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";

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

  console.log(users);

  return (
    <div className="w-screen flex items-center justify-center mt-40">
      <div className="container mx-auto w-full max-w-7xl flex flex-col gap-8">
        {users.map((user) => (
          <div key={user.id} className="flex items-center justify-between">
            <h1 className="text-2xl font-medium">Username: {user.username}</h1>
            <h1 className="text-2xl font-medium">Score: {user.score}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
