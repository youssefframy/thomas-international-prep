import MultipleQuestion from "@/components/MultipleQuestion";
import { shuffle } from "@/lib/shuffle";
import { WordsQuestionType } from "@/app/api/word-meaning/route";

export default async function WordMeaningPage() {
  const wordMeaningData: Array<WordsQuestionType> = await fetch(
    `${process.env.URL}/api/word-meaning`,
  ).then((res) => res.json());

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-violet-400">
      <MultipleQuestion multipleQuestions={shuffle(wordMeaningData)} />
    </div>
  );
}
