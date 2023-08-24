"use client";

import { ReasoningType } from "@/app/api/reasoning/route";
import { useState, useEffect } from "react";

interface ReasoningQuestionProps {
  reasoningData: Array<ReasoningType>;
}

const ReasoningQuestion: React.FC<ReasoningQuestionProps> = ({
  reasoningData,
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

  function handleAnswer(answer: string) {
    if (!isTimerActive) {
      setIsTimerActive(true);
    }
    if (answer === reasoningData[questionNumber].answer) {
      setScore(score + 1);
    }
    if (questionNumber + 1 >= 25) {
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
    <div className="flex w-full flex-col items-center justify-center gap-24">
      {questionNumber < 25 ? (
        <>
          <div className="w-5/6 rounded-md bg-white py-16 text-center text-3xl font-semibold text-blue-900 md:w-[800px] lg:w-[1000px]">
            {reasoningData[questionNumber].question}
          </div>
          <div className="flex w-full justify-center gap-24">
            <button
              className="w-1/3 bg-blue-950 py-12 text-3xl font-semibold text-white transition-all duration-300 ease-in-out hover:scale-105 md:w-56 md:py-20"
              onClick={() =>
                handleAnswer(reasoningData[questionNumber].character1)
              }
            >
              {reasoningData[questionNumber].character1}
            </button>
            <button
              className="w-1/3 bg-blue-950 py-12 text-3xl font-semibold text-white transition-all duration-300 ease-in-out hover:scale-105 md:w-56 md:py-20"
              onClick={() =>
                handleAnswer(reasoningData[questionNumber].character2)
              }
            >
              {reasoningData[questionNumber].character2}
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col items-center justify-center gap-8">
            <h2 className="text-3xl font-medium text-black">
              Your Score is: <span className="underline">{score}</span>
            </h2>
            <h3 className="text-2xl font-medium text-black">
              Your Time is: <span className="underline">{time} seconds</span>
            </h3>
          </div>
          <button
            type="button"
            onClick={() => reset()}
            className="text-xl text-gray-800 underline"
          >
            Would you like to try again?
          </button>
        </>
      )}
    </div>
  );
};

export default ReasoningQuestion;
