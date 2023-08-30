"use client";

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
      <button
        type="button"
        onClick={onClick}
        className="text-xl text-gray-800 underline"
      >
        Would you like to try again?
      </button>
    </>
  );
};

export default ScoreResult;
