import { PerceptualType } from "../api/perceptual-speed/route";

export default async function PerceptualSpeedPage() {
  const perceptualData: Array<PerceptualType> = await fetch(
    "https://thomas-international-prep.vercel.app/api/perceptual-speed",
  ).then((res) => res.json());

  return <div className="">PerceptualSpeed</div>;
}
