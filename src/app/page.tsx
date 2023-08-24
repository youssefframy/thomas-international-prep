import NavigateButton from "@/components/NavigateButton";
import { NumberType } from "./api/number-speed-accuracy/route";
import { PerceptualType } from "./api/perceptual-speed/route";
import { ReasoningType } from "./api/reasoning/route";
import { WordType } from "./api/word-meaning/route";

export default async function Home() {
  // const wordMeaningData : Array<WordType> = await fetch("http://localhost:3000/api/word-meaning").then(res => res.json());
  // const reasoningData : Array<ReasoningType> = await fetch("http://localhost:3000/api/reasoning").then(res => res.json());
  // const perceptualData : Array<PerceptualType> = await fetch("http://localhost:3000/api/perceptual-speed").then(res => res.json());
  // const NumberData : Array<NumberType> = await fetch("http://localhost:3000/api/number-speed-accuracy").then(res => res.json());
  const routes = [
    {
      label: "Reasoning",
      route: "reasoning",
    },
    {
      label: "Perceptual Speed",
      route: "perceptual-speed",
    },
    {
      label: "Number Speed",
      route: "number-speed-accuracy",
    },
    {
      label: "Word Meaning",
      route: "word-meaning",
    },
  ];

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-evenly bg-black">
      <h1 className="whitespace-nowrap text-3xl font-bold text-white md:text-4xl lg:text-6xl">
        Thomas International Prep
      </h1>
      <div className="flex w-full flex-col items-center justify-center gap-12 whitespace-nowrap">
        {routes.map((item) => (
          <NavigateButton
            label={item.label}
            route={item.route}
            key={item.route}
          />
        ))}
      </div>
    </main>
  );
}
