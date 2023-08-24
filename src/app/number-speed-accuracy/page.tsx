import { NumberType } from "../api/number-speed-accuracy/route";

export default async function NumberSpeedAccuracyPage() {
  const NumberData: Array<NumberType> = await fetch(
    "http://localhost:3000/api/number-speed-accuracy",
  ).then((res) => res.json());

  return <div className="">NumberSpeedAccuracy</div>;
}
