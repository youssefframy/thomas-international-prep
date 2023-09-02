import { NextResponse } from "next/server";

export type ReasoningType = {
  question: string;
  answer: string;
  character1: string;
  character2: string;
};

const reasoning: Array<ReasoningType> = [
  {
    question: "Sarah is taller than Lisa. Who is shorter?",
    answer: "Lisa",
    character1: "Sarah",
    character2: "Lisa",
  },
  {
    question: "Alex is faster than Max. Who is slower?",
    answer: "Max",
    character1: "Max",
    character2: "Alex",
  },
  {
    question: "Oliver is not as old as Emma. Who is older?",
    answer: "Emma",
    character1: "Emma",
    character2: "Oliver",
  },
  {
    question: "Nina is smarter than Maya. Who is less intelligent?",
    answer: "Maya",
    character1: "Nina",
    character2: "Maya",
  },
  {
    question: "Liam is stronger than Ethan. Who is weaker?",
    answer: "Ethan",
    character1: "Ethan",
    character2: "Liam",
  },
  {
    question: "Sophia is more talented than Ava. Who is less skilled?",
    answer: "Ava",
    character1: "Ava",
    character2: "Sophia",
  },
  {
    question: "Zoe is not as fast as Mia. Who is quicker?",
    answer: "Mia",
    character1: "Mia",
    character2: "Zoe",
  },
  {
    question: "Noah is not as brave as Lucas. Who is braver?",
    answer: "Lucas",
    character1: "Noah",
    character2: "Lucas",
  },
  {
    question: "Lily is more patient than Grace. Who is less patient?",
    answer: "Grace",
    character1: "Lily",
    character2: "Grace",
  },
  {
    question: "Leo is not as creative as Owen. Who is more creative?",
    answer: "Owen",
    character1: "Owen",
    character2: "Leo",
  },
  {
    question: "Jacob is taller than Ethan. Who is shorter?",
    answer: "Ethan",
    character1: "Jacob",
    character2: "Ethan",
  },
  {
    question: "Sophie is faster than Mia. Who is slower?",
    answer: "Mia",
    character1: "Mia",
    character2: "Sophia",
  },
  {
    question: "Aiden is not as old as Olivia. Who is older?",
    answer: "Olivia",
    character1: "Aiden",
    character2: "Olivia",
  },
  {
    question: "Emma is smarter than Liam. Who is less intelligent?",
    answer: "Liam",
    character1: "Liam",
    character2: "Emma",
  },
  {
    question: "Ava is stronger than Noah. Who is weaker?",
    answer: "Noah",
    character1: "Noah",
    character2: "Ava",
  },
  {
    question: "Lucas is more talented than Mia. Who is less skilled?",
    answer: "Mia",
    character1: "Lucas",
    character2: "Mia",
  },
  {
    question: "Oliver is not as fast as Emma. Who is quicker?",
    answer: "Emma",
    character1: "Emma",
    character2: "Oliver",
  },
  {
    question: "Grace is not as brave as Jack. Who is braver?",
    answer: "Jack",
    character1: "Jack",
    character2: "Grace",
  },
  {
    question: "Ella is more patient than Sophia. Who is less patient?",
    answer: "Sophia",
    character1: "Ella",
    character2: "Sophia",
  },
  {
    question: "Henry is not as creative as Lily. Who is more creative?",
    answer: "Lily",
    character1: "Henry",
    character2: "Lily",
  },
  {
    question: "John is taller than Mark. Who is shorter?",
    answer: "Mark",
    character1: "John",
    character2: "Mark",
  },
  {
    question: "Ella is faster than Mia. Who is slower?",
    answer: "Mia",
    character1: "Mia",
    character2: "Ella",
  },
  {
    question: "Daniel is not as old as Olivia. Who is older?",
    answer: "Olivia",
    character1: "Daniel",
    character2: "Olivia",
  },
  {
    question: "Sophia is smarter than Liam. Who is less intelligent?",
    answer: "Liam",
    character1: "Sophia",
    character2: "Liam",
  },
  {
    question: "Emma is stronger than Noah. Who is weaker?",
    answer: "Noah",
    character1: "Emma",
    character2: "Noah",
  },
  {
    question: "Lucas is more talented than Mia. Who is less skilled?",
    answer: "Mia",
    character1: "Lucas",
    character2: "Mia",
  },
  {
    question: "Oliver is not as fast as Emma. Who is quicker?",
    answer: "Emma",
    character1: "Emma",
    character2: "Oliver",
  },
  {
    question: "Grace is not as brave as Jack. Who is braver?",
    answer: "Jack",
    character1: "Jack",
    character2: "Grace",
  },
  {
    question: "Ella is more patient than Sophia. Who is less patient?",
    answer: "Sophia",
    character1: "Ella",
    character2: "Sophia",
  },
  {
    question: "Henry is not as creative as Lily. Who is more creative?",
    answer: "Lily",
    character1: "Henry",
    character2: "Lily",
  },
  {
    question: "Sophia is taller than Ava. Who is shorter?",
    answer: "Ava",
    character1: "Ava",
    character2: "Sophia",
  },
  {
    question: "Noah is faster than Mia. Who is slower?",
    answer: "Mia",
    character1: "Noah",
    character2: "Mia",
  },
  {
    question: "Ethan is not as old as Olivia. Who is older?",
    answer: "Olivia",
    character1: "Ethan",
    character2: "Olivia",
  },
  {
    question: "Liam is smarter than Emma. Who is less intelligent?",
    answer: "Emma",
    character1: "Liam",
    character2: "Emma",
  },
  {
    question: "Ava is stronger than Noah. Who is weaker?",
    answer: "Noah",
    character1: "Noah",
    character2: "Ava",
  },
  {
    question: "Lucas is more talented than Mia. Who is less skilled?",
    answer: "Mia",
    character1: "Lucas",
    character2: "Mia",
  },
  {
    question: "Oliver is not as fast as Emma. Who is quicker?",
    answer: "Emma",
    character1: "Emma",
    character2: "Oliver",
  },
  {
    question: "Grace is not as brave as Jack. Who is braver?",
    answer: "Jack",
    character1: "Jack",
    character2: "Grace",
  },
  {
    question: "Ella is more patient than Sophia. Who is less patient?",
    answer: "Sophia",
    character1: "Ella",
    character2: "Sophia",
  },
  {
    question: "Henry is not as creative as Lily. Who is more creative?",
    answer: "Lily",
    character1: "Henry",
    character2: "Lily",
  },
];

export async function GET() {
  return NextResponse.json(reasoning);
}
