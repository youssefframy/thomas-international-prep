import { NextResponse } from "next/server";

export type QuestionType = {
  choices: Array<number | string>;
  answer: number;
};

const questions: Array<QuestionType> = [
  {
    choices: [4, 2, 8],
    answer: 8,
  },
  {
    choices: [12, 3, 5],
    answer: 12,
  },
  {
    choices: [10, 7, 5],
    answer: 10,
  },
  {
    choices: [11, 13, 16],
    answer: 16,
  },
  {
    choices: [20, 25, 32],
    answer: 32,
  },
  {
    choices: [6, 1, 4],
    answer: 6,
  },
  {
    choices: [50, 35, 45],
    answer: 50,
  },
  {
    choices: [8, 15, 10],
    answer: 15,
  },
  {
    choices: [18, 22, 24],
    answer: 24,
  },
  {
    choices: [9, 12, 7],
    answer: 12,
  },

  {
    choices: [14, 22, 19],
    answer: 14,
  },
  {
    choices: [40, 55, 65],
    answer: 65,
  },
  {
    choices: [9, 6, 3],
    answer: 9,
  },
  {
    choices: [28, 33, 38],
    answer: 38,
  },
  {
    choices: [17, 12, 22],
    answer: 22,
  },
  {
    choices: [72, 80, 85],
    answer: 72,
  },
  {
    choices: [27, 34, 29],
    answer: 34,
  },
  {
    choices: [63, 58, 53],
    answer: 63,
  },
  {
    choices: [90, 97, 92],
    answer: 97,
  },
  {
    choices: [16, 24, 19],
    answer: 16,
  },

  {
    choices: [23, 28, 33],
    answer: 33,
  },
  {
    choices: [70, 60, 50],
    answer: 70,
  },
  {
    choices: [5, 10, 15],
    answer: 15,
  },
  {
    choices: [42, 36, 48],
    answer: 48,
  },
  {
    choices: [30, 17, 40],
    answer: 40,
  },
  {
    choices: [62, 55, 67],
    answer: 67,
  },
  {
    choices: [11, 17, 13],
    answer: 17,
  },
  {
    choices: [89, 94, 99],
    answer: 99,
  },
  {
    choices: [72, 79, 75],
    answer: 79,
  },
  {
    choices: [18, 26, 21],
    answer: 26,
  },
];

export async function GET() {
  return NextResponse.json(questions);
}
