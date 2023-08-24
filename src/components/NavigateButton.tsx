import Link from "next/link";

interface NavigateButtonProps {
  route: string;
  label: string;
}

const NavigateButton: React.FC<NavigateButtonProps> = ({ route, label }) => {
  return (
    <Link
      href={route}
      className="flex w-5/6 items-center justify-center rounded-xl bg-white py-4 text-xl font-medium shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:bg-green-500 hover:text-white md:w-1/2 md:py-6 md:hover:scale-110"
    >
      {label}
    </Link>
  );
};

export default NavigateButton;
