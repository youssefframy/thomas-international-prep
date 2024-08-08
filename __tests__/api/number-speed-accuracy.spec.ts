/**
 * @jest-environment node
 */
import { GET, NumbersQuestionType } from "@/app/api/number-speed-accuracy/route";

describe("GET number-speed-accuracy endpoint", () => {
  it("should return an array of questions with correct properties", async () => {
    const response = await GET();
    const data = await response.json();

    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBe(30);
    // @ts-ignore question is of type 'any'
    data.forEach(question => {
      expect(question).toHaveProperty("choices");
      expect(question).toHaveProperty("answer");
      expect(Array.isArray(question.choices)).toBe(true);
      expect(typeof question.answer).toBe("number");
    });
  });

  it("should return questions with correct answers", async () => {
    const response = await GET();
    const data = await response.json();
    data.forEach(validateQuestion);
  });
});

const validateQuestion = (question: NumbersQuestionType) => {
  const [low, median, high] = [...question.choices].sort((a, b) => a - b);
  const diff1 = median - low;
  const diff2 = high - median;

  try {
    expect(diff1).not.toEqual(diff2);
  } catch (e) {
    throw new Error(`Bad question [${question.choices}], the median is also the mean`);
  }

  if (diff1 > diff2) {
    try {
      expect(question.answer).toEqual(low);
    } catch (e) {
      throw new Error(`Incorrect answer for [${question.choices}]. Answer should be ${low}`);
    }
  }

  if (diff2 > diff1) {
    try {
      expect(question.answer).toEqual(high);
    } catch (e) {
      throw new Error(`Incorrect answer for [${question.choices}]. Answer should be ${high}`);
    }
  }
};
