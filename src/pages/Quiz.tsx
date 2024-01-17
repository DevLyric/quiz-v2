import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { getAuth } from "firebase/auth";
import { questions } from "../data/questions";
import Score from "../components/Score";
import Game from "../components/Game";

const Quiz = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];
  const isGameOver = currentQuestionIndex >= questions.length;

  const updateScoreInFirestore = async () => {
    if (user) {
      try {
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          const currentScore = userDocSnapshot.data().score || 0;
          const updatedScore = currentScore + score;

          await updateDoc(userDocRef, { score: updatedScore });

          console.log("Score updated on Firestore successfully!");
        } else {
          console.error("User document not found in Firestore.");
        }
      } catch (error) {
        console.error("Error updating score in Firestore:", error);
      }
    }
  };

  useEffect(() => {
    if (isGameOver && user) {
      updateScoreInFirestore();
    }
  }, [isGameOver, user, score]);

  return (
    <div className="w-full flex justify-center mt-20">
      <div className="container mx-auto w-full max-w-xl">
        {isGameOver ? (
          <Score
            score={score}
            questions={questions.length}
            onRestart={() => {
              setCurrentQuestionIndex(0);
              setScore(0);
            }}
          />
        ) : (
          <Game
            question={currentQuestion.prompt}
            currentQuestion={currentQuestion.options}
            onSelectAnswer={(item: string) => {
              setCurrentQuestionIndex(currentQuestionIndex + 1);
              if (item === currentQuestion.correctAnswer) {
                setScore(score + 1);
              }
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Quiz;
