import NavigateButton from "@/components/NavigateButton";

export default async function Home() {
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
    <main className=" flex min-h-screen w-full flex-col items-center justify-evenly bg-black bg-cover bg-no-repeat">
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
