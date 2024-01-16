import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

export const signup = async (
  email: string,
  password: string
): Promise<boolean> => {
  try {
    createUserWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
