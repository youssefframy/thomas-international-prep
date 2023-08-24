import { WordType } from "../api/word-meaning/route";

export default async function WordMeaningPage() {
  const wordMeaningData: Array<WordType> = await fetch(
    `${process.env.URL}/api/word-meaning`,
  ).then((res) => res.json());

  return <div className="">WordMeaning</div>;
}
