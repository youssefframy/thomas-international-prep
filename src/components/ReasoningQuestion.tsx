"use client";

import { ReasoningType } from "@/app/api/reasoning/route";
import { useState, useEffect } from "react";
import ScoreResult from "./ui/ScoreResult";

interface ReasoningQuestionProps {
  reasoningData: Array<ReasoningType>;
}

const difficulty = 20;

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
  //test production
  return (
    <div className="flex w-full flex-col items-center justify-center gap-24">
      {questionNumber < difficulty ? (
        <>
          <div className="w-[90%] rounded-md bg-white px-6 py-10 text-center text-xl font-semibold text-blue-900 md:w-[800px] md:py-16 md:text-3xl lg:w-[1000px]">
            {reasoningData[questionNumber].question}
          </div>
          <div className="flex w-full justify-center gap-24">
            <button
              className="w-1/3 bg-blue-950 py-10 text-2xl font-semibold text-white transition-all duration-300 ease-in-out hover:scale-105 md:w-56 md:py-20 md:text-3xl"
              onClick={() =>
                handleAnswer(reasoningData[questionNumber].character1)
              }
            >
              {reasoningData[questionNumber].character1}
            </button>
            <button
              className="w-1/3 bg-blue-950 py-10 text-2xl font-semibold text-white transition-all duration-300 ease-in-out hover:scale-105 md:w-56 md:py-20 md:text-3xl"
              onClick={() =>
                handleAnswer(reasoningData[questionNumber].character2)
              }
            >
              {reasoningData[questionNumber].character2}
            </button>
          </div>
        </>
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

export default ReasoningQuestion;
