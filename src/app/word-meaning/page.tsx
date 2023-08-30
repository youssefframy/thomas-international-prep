import MultipleQuestion from "@/components/MultipleQuestion";
import { QuestionType } from "../api/number-speed-accuracy/route";
import { shuffle } from "@/lib/shuffle";

export default async function WordMeaningPage() {
  const wordMeaningData: Array<QuestionType> = await fetch(
    `${process.env.URL}/api/word-meaning`,
  ).then((res) => res.json());

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-violet-400">
      <MultipleQuestion multipleQuestions={shuffle(wordMeaningData)} />
    </div>
  );
}
