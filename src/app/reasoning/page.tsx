import ReasoningQuestion from "@/components/ReasoningQuestion";
import { ReasoningType } from "../api/reasoning/route";
import { shuffle } from "@/lib/shuffle";

export default async function ReasoningPage() {
  const reasoningData: Array<ReasoningType> = await fetch(
    "https://thomas-international-prep.vercel.app/api/reasoning",
  ).then((res) => res.json());

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-violet-400">
      <ReasoningQuestion reasoningData={shuffle(reasoningData)} />
    </div>
  );
}
