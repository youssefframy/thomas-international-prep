"use client";

import { useState, useEffect } from "react";
import { PerceptualType } from "@/app/api/perceptual-speed/route";
import ScoreResult from "./ui/ScoreResult";

interface PerceptualQuestionProps {
  perceptualData: Array<PerceptualType>;
}

const numbers = [0, 1, 2, 3, 4];
const difficulty = 15;

const PerceptualQuestion: React.FC<PerceptualQuestionProps> = ({
  perceptualData,
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

  function handleAnswer(answer: number) {
    if (!isTimerActive) {
      setIsTimerActive(true);
    }
    if (answer === perceptualData[questionNumber].answer) {
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
        <>
          <div className="flex gap-24">
            {perceptualData[questionNumber].array1.map((char, index) => (
              <button type="button" className="text-6xl font-bold" key={index}>
                {char}
              </button>
            ))}
          </div>
          <div className="flex gap-24">
            {perceptualData[questionNumber].array2.map((char, index) => (
              <button type="button" className="text-6xl font-bold" key={index}>
                {char}
              </button>
            ))}
          </div>
          <div className="flex gap-8">
            {numbers.map((char, index) => (
              <button
                type="button"
                onClick={() => handleAnswer(char)}
                className="bg-[#173873] px-8 py-4 text-5xl font-bold text-white"
                key={index}
              >
                {char}
              </button>
            ))}
          </div>
        </>
      ) : (
        <ScoreResult score={score} time={time} onClick={reset} difficulty={difficulty} />
      )}
    </div>
  );
};

export default PerceptualQuestion;
