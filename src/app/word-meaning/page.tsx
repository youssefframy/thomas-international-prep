import { WordType } from "../api/word-meaning/route";

export default async function WordMeaningPage() {
  const wordMeaningData: Array<WordType> = await fetch(
    "https://thomas-international-prep.vercel.app/api/word-meaning",
  ).then((res) => res.json());

  return <div className="">WordMeaning</div>;
}
