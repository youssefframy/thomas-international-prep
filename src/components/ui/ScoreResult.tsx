"use client";
import { useRouter } from "next/navigation";

interface ScrolResultProps {
  score: number;
  time: number;
  difficulty: number;
  onClick: () => void;
}

const ScoreResult: React.FC<ScrolResultProps> = ({
  score,
  time,
  difficulty,
  onClick,
}) => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8">
        <h2 className="text-3xl font-medium text-black">
          Your Score is:{" "}
          <span className="underline">
            {score} / {difficulty}
          </span>
        </h2>
        <h3 className="text-2xl font-medium text-black">
          Your Time is: <span className="underline">{time} seconds</span>
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 ">
        <button
          type="button"
          onClick={onClick}
          className="text-xl text-gray-800 no-underline transition-all duration-300 ease-in hover:text-white hover:underline"
        >
          Would you like to try again?
        </button>
        <button
          type="button"
          onClick={() => router.push("/")}
          className="text-xl text-gray-800 no-underline transition-all duration-300 ease-in hover:text-white hover:underline"
        >
          <span>&larr; </span>
          Back to Home
        </button>
      </div>
    </>
  );
};

export default ScoreResult;
