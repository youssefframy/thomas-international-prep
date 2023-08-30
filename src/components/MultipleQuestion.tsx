"use client";

import { useState, useEffect } from "react";
import { QuestionType } from "@/app/api/number-speed-accuracy/route";
import ScoreResult from "./ui/ScoreResult";

interface MultipleQuestionProps {
  multipleQuestions: Array<QuestionType>;
}

const difficulty = 5;

const MultipleQuestion: React.FC<MultipleQuestionProps> = ({
  multipleQuestions,
}) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTimerActive) {
      timer = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTimerActive, time]);

  function handleAnswer(answer: number | string) {
    if (!isTimerActive) {
      setIsTimerActive(true);
    }
    if (answer === multipleQuestions[questionNumber].answer) {
      setScore(score + 1);
    }
    if (questionNumber + 1 >= difficulty) {
      setIsTimerActive(false);
    }
    setQuestionNumber(questionNumber + 1);
  }

  function reset() {
    setQuestionNumber(0);
    setScore(0);
    setTime(0);
    setIsTimerActive(false);
  }

  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center gap-12">
      {questionNumber < difficulty ? (
        <div className="flex gap-24">
          {multipleQuestions[questionNumber].choices.map((choice, index) => (
            <button
              type="button"
              className="bg-[#173873] px-20 py-6 text-6xl font-bold text-white"
              onClick={() => handleAnswer(choice)}
              key={index}
            >
              {choice}
            </button>
          ))}
        </div>
      ) : (
        <ScoreResult
          score={score}
          time={time}
          onClick={reset}
          difficulty={difficulty}
        />
      )}
    </div>
  );
};

export default MultipleQuestion;
