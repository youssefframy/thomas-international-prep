import MultipleQuestion from "@/components/MultipleQuestion";
import { NumbersQuestionType } from "../api/number-speed-accuracy/route";
import { shuffle } from "@/lib/shuffle";

export default async function NumberSpeedAccuracyPage() {
  const NumberData: Array<NumbersQuestionType> = await fetch(
    `${process.env.URL}/api/number-speed-accuracy`,
  ).then((res) => res.json());

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-violet-400">
      <MultipleQuestion multipleQuestions={shuffle(NumberData)} />
    </div>
  );
}
