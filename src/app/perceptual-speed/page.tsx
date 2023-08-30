import PerceptualQuestion from "@/components/PerceptualQuestion";
import { PerceptualType } from "../api/perceptual-speed/route";
import { shuffle } from "@/lib/shuffle";

export default async function PerceptualSpeedPage() {
  // const perceptualData: Array<PerceptualType> = await fetch(
  //   `${process.env.URL}/api/perceptual-speed`,
  // ).then((res) => res.json());

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-[#c8caf8]">
      {/* <PerceptualQuestion perceptualData={shuffle(perceptualData)} /> */}
    </div>
  );
}
