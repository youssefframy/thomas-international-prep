import { NextResponse } from "next/server";

export type NumbersQuestionType = {
  choices: Array<number>;
  answer: number;
};

const questions: Array<NumbersQuestionType> = [
  {
    choices: [4, 2, 8],
    answer: 8
  },
  {
    choices: [12, 3, 5],
    answer: 12
  },
  {
    choices: [10, 7, 5],
    answer: 10
  },
  {
    choices: [11, 13, 16],
    answer: 16
  },
  {
    choices: [20, 25, 32],
    answer: 32
  },
  {
    choices: [6, 1, 4],
    answer: 1
  },
  {
    choices: [50, 35, 45],
    answer: 35
  },
  {
    choices: [8, 15, 10],
    answer: 15
  },
  {
    choices: [18, 22, 24],
    answer: 18
  },
  {
    choices: [9, 12, 7],
    answer: 12
  },

  {
    choices: [14, 22, 19],
    answer: 14
  },
  {
    choices: [40, 55, 65],
    answer: 40
  },
  {
    choices: [9, 5, 3],
    answer: 9
  },
  {
    choices: [28, 32, 38],
    answer: 38
  },
  {
    choices: [16, 12, 22],
    answer: 22
  },
  {
    choices: [72, 80, 85],
    answer: 85
  },
  {
    choices: [27, 34, 29],
    answer: 34
  },
  {
    choices: [63, 57, 53],
    answer: 63
  },
  {
    choices: [90, 97, 92],
    answer: 97
  },
  {
    choices: [16, 24, 19],
    answer: 24
  },
  {
    choices: [22, 28, 33],
    answer: 22
  },
  {
    choices: [71, 60, 50],
    answer: 71
  },
  {
    choices: [5, 11, 15],
    answer: 5
  },
  {
    choices: [44, 36, 48],
    answer: 36
  },
  {
    choices: [31, 17, 40],
    answer: 17
  },
  {
    choices: [62, 55, 67],
    answer: 55
  },
  {
    choices: [11, 17, 13],
    answer: 17
  },
  {
    choices: [89, 94, 100],
    answer: 100
  },
  {
    choices: [72, 79, 75],
    answer: 79
  },
  {
    choices: [18, 26, 21],
    answer: 26
  }
];

export async function GET() {
  return NextResponse.json(questions);
}
