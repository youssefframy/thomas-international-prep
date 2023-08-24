import { NextResponse } from "next/server";

export type NumberType = {
  numbers: Array<number>;
  answer: number;
};

const numbers: Array<NumberType> = [
  {
    numbers: [4, 2, 8],
    answer: 8,
  },
  {
    numbers: [12, 3, 5],
    answer: 12,
  },
  {
    numbers: [10, 7, 5],
    answer: 10,
  },
  {
    numbers: [11, 13, 16],
    answer: 16,
  },
  {
    numbers: [20, 25, 30],
    answer: 30,
  },
  {
    numbers: [6, 1, 4],
    answer: 6,
  },
  {
    numbers: [50, 35, 45],
    answer: 50,
  },
  {
    numbers: [8, 15, 10],
    answer: 15,
  },
  {
    numbers: [18, 22, 24],
    answer: 24,
  },
  {
    numbers: [9, 12, 7],
    answer: 12,
  },

  {
    numbers: [14, 22, 19],
    answer: 14,
  },
  {
    numbers: [40, 55, 65],
    answer: 65,
  },
  {
    numbers: [9, 6, 3],
    answer: 9,
  },
  {
    numbers: [28, 33, 38],
    answer: 38,
  },
  {
    numbers: [17, 12, 22],
    answer: 22,
  },
  {
    numbers: [75, 80, 85],
    answer: 75,
  },
  {
    numbers: [27, 34, 29],
    answer: 34,
  },
  {
    numbers: [63, 58, 53],
    answer: 63,
  },
  {
    numbers: [90, 97, 92],
    answer: 97,
  },
  {
    numbers: [16, 24, 19],
    answer: 16,
  },

  {
    numbers: [23, 28, 33],
    answer: 33,
  },
  {
    numbers: [70, 60, 50],
    answer: 70,
  },
  {
    numbers: [5, 10, 15],
    answer: 15,
  },
  {
    numbers: [42, 36, 48],
    answer: 48,
  },
  {
    numbers: [30, 20, 40],
    answer: 40,
  },
  {
    numbers: [62, 55, 67],
    answer: 67,
  },
  {
    numbers: [11, 17, 13],
    answer: 17,
  },
  {
    numbers: [89, 94, 99],
    answer: 99,
  },
  {
    numbers: [72, 79, 75],
    answer: 79,
  },
  {
    numbers: [18, 26, 21],
    answer: 26,
  },
];

export async function GET() {
  return NextResponse.json(numbers);
}
