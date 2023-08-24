import { NextResponse } from "next/server";

export type WordType = {
  words: Array<string>;
  answer: string;
};

const words: Array<WordType> = [
  {
    words: ["halt", "cold", "stop"],
    answer: "cold",
  },
  {
    words: ["up", "down", "street"],
    answer: "street",
  },
  {
    words: ["below", "under", "letter"],
    answer: "letter",
  },
  {
    words: ["happy", "joyful", "car"],
    answer: "car",
  },
  {
    words: ["apple", "banana", "grape"],
    answer: "grape",
  },
  {
    words: ["sunny", "cloudy", "weather"],
    answer: "weather",
  },
  {
    words: ["fast", "quick", "turtle"],
    answer: "turtle",
  },
  {
    words: ["bright", "dim", "lamp"],
    answer: "lamp",
  },
  {
    words: ["quiet", "loud", "book"],
    answer: "book",
  },
  {
    words: ["happy", "sad", "painting"],
    answer: "painting",
  },
  {
    words: ["sharp", "dull", "knife"],
    answer: "knife",
  },
  {
    words: ["fast", "slow", "horse"],
    answer: "horse",
  },
  {
    words: ["bitter", "sweet", "sound"],
    answer: "sound",
  },
  {
    words: ["red", "blue", "apple"],
    answer: "apple",
  },
  {
    words: ["big", "small", "mountain"],
    answer: "mountain",
  },
  {
    words: ["heavy", "light", "cloud"],
    answer: "cloud",
  },
  {
    words: ["hard", "soft", "rock"],
    answer: "rock",
  },
  {
    words: ["open", "closed", "window"],
    answer: "window",
  },
  {
    words: ["summer", "winter", "tree"],
    answer: "tree",
  },
  {
    words: ["thick", "thin", "soup"],
    answer: "soup",
  },
  {
    words: ["hot", "cold", "sand"],
    answer: "sand",
  },
  {
    words: ["old", "young", "car"],
    answer: "car",
  },
  {
    words: ["bright", "dark", "star"],
    answer: "star",
  },
  {
    words: ["smooth", "rough", "glass"],
    answer: "glass",
  },
  {
    words: ["happy", "sad", "laughter"],
    answer: "laughter",
  },
  {
    words: ["loud", "quiet", "music"],
    answer: "music",
  },
  {
    words: ["day", "night", "sun"],
    answer: "sun",
  },
  {
    words: ["wet", "dry", "towel"],
    answer: "towel",
  },
  {
    words: ["long", "short", "river"],
    answer: "river",
  },
  {
    words: ["round", "square", "table"],
    answer: "table",
  },
];

export async function GET() {
  return NextResponse.json(words);
}
