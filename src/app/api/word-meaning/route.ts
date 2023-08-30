import { NextResponse } from "next/server";

export type QuestionType = {
  choices: Array<string | number>;
  answer: string;
};

const questions: Array<QuestionType> = [
  {
    choices: ["halt", "cold", "stop"],
    answer: "cold",
  },
  {
    choices: ["up", "down", "street"],
    answer: "street",
  },
  {
    choices: ["below", "under", "letter"],
    answer: "letter",
  },
  {
    choices: ["happy", "joyful", "car"],
    answer: "car",
  },
  {
    choices: ["apple", "banana", "grape"],
    answer: "grape",
  },
  {
    choices: ["sunny", "cloudy", "weather"],
    answer: "weather",
  },
  {
    choices: ["fast", "quick", "turtle"],
    answer: "turtle",
  },
  {
    choices: ["bright", "dim", "lamp"],
    answer: "lamp",
  },
  {
    choices: ["quiet", "loud", "book"],
    answer: "book",
  },
  {
    choices: ["happy", "sad", "painting"],
    answer: "painting",
  },
  {
    choices: ["sharp", "dull", "knife"],
    answer: "knife",
  },
  {
    choices: ["fast", "slow", "horse"],
    answer: "horse",
  },
  {
    choices: ["bitter", "sweet", "sound"],
    answer: "sound",
  },
  {
    choices: ["red", "blue", "apple"],
    answer: "apple",
  },
  {
    choices: ["big", "small", "mountain"],
    answer: "mountain",
  },
  {
    choices: ["heavy", "light", "cloud"],
    answer: "cloud",
  },
  {
    choices: ["hard", "soft", "rock"],
    answer: "rock",
  },
  {
    choices: ["open", "closed", "window"],
    answer: "window",
  },
  {
    choices: ["summer", "winter", "tree"],
    answer: "tree",
  },
  {
    choices: ["thick", "thin", "soup"],
    answer: "soup",
  },
  {
    choices: ["hot", "cold", "sand"],
    answer: "sand",
  },
  {
    choices: ["old", "young", "car"],
    answer: "car",
  },
  {
    choices: ["bright", "dark", "star"],
    answer: "star",
  },
  {
    choices: ["smooth", "rough", "glass"],
    answer: "glass",
  },
  {
    choices: ["happy", "sad", "laughter"],
    answer: "laughter",
  },
  {
    choices: ["loud", "quiet", "music"],
    answer: "music",
  },
  {
    choices: ["day", "night", "sun"],
    answer: "sun",
  },
  {
    choices: ["wet", "dry", "towel"],
    answer: "towel",
  },
  {
    choices: ["long", "short", "river"],
    answer: "river",
  },
  {
    choices: ["round", "square", "table"],
    answer: "table",
  },
];

export async function GET() {
  return NextResponse.json(questions);
}
