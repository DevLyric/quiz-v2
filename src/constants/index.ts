import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase-config";
import { collection, doc, setDoc } from "firebase/firestore";

export type UserData = {
  username: string;
  score: number;
};

export const signup = async (
  email: string,
  password: string,
  userData: UserData
): Promise<boolean> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const userId = userCredential.user.uid;
    const initialUserData = { ...userData, score: 0 };
    const usersCollectionRef = collection(db, "users");
    const userDocRef = doc(usersCollectionRef, userId);
    await setDoc(userDocRef, initialUserData);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const login = async (
  email: string,
  password: string
): Promise<boolean> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const logout = async () => {
  await signOut(auth);
};
