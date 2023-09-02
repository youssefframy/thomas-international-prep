import { NextResponse } from "next/server";

export type PerceptualType = {
  array1: string[];
  array2: string[];
  answer: number;
};

const perceptual: Array<PerceptualType> = [
  {
    array1: ["b", "q", "t", "h"],
    array2: ["K", "N", "J", "R"],
    answer: 0,
  },
  {
    array1: ["f", "d", "m", "h"],
    array2: ["F", "D", "R", "H"],
    answer: 3,
  },
  {
    array1: ["E", "Q", "D", "k"],
    array2: ["e", "y", "d", "k"],
    answer: 3,
  },
  {
    array1: ["Q", "D", "R", "H"],
    array2: ["f", "d", "m", "h"],
    answer: 2,
  },
  {
    array1: ["a", "b", "c", "d"],
    array2: ["a", "b", "c", "d"],
    answer: 4,
  },
  {
    array1: ["X", "Y", "Z", "W"],
    array2: ["a", "b", "c", "d"],
    answer: 0,
  },
  {
    array1: ["A", "B", "C", "D"],
    array2: ["a", "b", "c", "d"],
    answer: 4,
  },
  {
    array1: ["f", "d", "m", "h"],
    array2: ["H", "M", "D", "F"],
    answer: 0,
  },
  {
    array1: ["a", "b", "c", "d"],
    array2: ["d", "c", "b", "a"],
    answer: 0,
  },
  {
    array1: ["m", "n", "C", "p"],
    array2: ["a", "b", "c", "d"],
    answer: 1,
  },
  {
    array1: ["E", "F", "G", "H"],
    array2: ["h", "f", "g", "e"],
    answer: 2,
  },
  {
    array1: ["a", "b", "c", "d"],
    array2: ["A", "B", "G", "D"],
    answer: 3,
  },
  {
    array1: ["x", "y", "z", "w"],
    array2: ["w", "z", "y", "x"],
    answer: 0,
  },
  {
    array1: ["A", "B", "C", "D"],
    array2: ["D", "C", "B", "A"],
    answer: 0,
  },
  {
    array1: ["p", "q", "r", "s"],
    array2: ["r", "Q", "p", "S"],
    answer: 2,
  },
  {
    array1: ["E", "b", "L", "A"],
    array2: ["e", "c", "l", "a"],
    answer: 3,
  },
  {
    array1: ["X", "Y", "Z", "W"],
    array2: ["x", "z", "w", "y"],
    answer: 1,
  },
  {
    array1: ["l", "f", "m", "K"],
    array2: ["l", "m", "n", "k"],
    answer: 2,
  },
  {
    array1: ["A", "B", "C", "D"],
    array2: ["a", "b", "c", "d"],
    answer: 4,
  },
  {
    array1: ["P", "Q", "R", "S"],
    array2: ["q", "p", "s", "r"],
    answer: 0,
  },
  {
    array1: ["z", "w", "x", "y"],
    array2: ["a", "b", "c", "d"],
    answer: 0,
  },
  {
    array1: ["Q", "Z", "X", "C"],
    array2: ["x", "y", "z", "w"],
    answer: 0,
  },
  {
    array1: ["p", "q", "r", "s"],
    array2: ["A", "B", "C", "D"],
    answer: 0,
  },
  {
    array1: ["E", "H", "G", "F"],
    array2: ["H", "G", "F", "E"],
    answer: 1,
  },
  {
    array1: ["q", "s", "r", "t"],
    array2: ["q", "r", "s", "t"],
    answer: 2,
  },
  {
    array1: ["M", "N", "O", "P"],
    array2: ["o", "p", "m", "n"],
    answer: 2,
  },
  {
    array1: ["X", "V", "Y", "W"],
    array2: ["w", "v", "y", "x"],
    answer: 2,
  },
  {
    array1: ["A", "B", "C", "D"],
    array2: ["D", "C", "B", "A"],
    answer: 0,
  },
  {
    array1: ["F", "E", "h", "g"],
    array2: ["f", "g", "h", "e"],
    answer: 2,
  },
  {
    array1: ["V", "x", "W", "u"],
    array2: ["x", "w", "v", "u"],
    answer: 1,
  },
];

export async function GET() {
  return NextResponse.json(perceptual);
}
