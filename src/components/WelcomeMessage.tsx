import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const WelcomeMessage: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 items-center text-center justify-center absolute z-20 bg-white top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-medium w-full">
      {/* Logo */}
      <Image
        src="/zanna.svg"
        alt="Zanna AI logo"
        width={48}
        height={48}
      />

      {/* Title */}
      <h1 className="text-[20px] my-4 font-semibold text-gray-900">
        Welcome to Zanna AI
      </h1>

      {/* Description */}
      <p className="my-2 md:w-[290px] text-gray-700">
        Your DeFi assistant for the NEAR Protocol ecosystem
      </p>

      {/* Divider */}
      <hr className="w-[92px] bg-[#ef4444]" />

      {/* Connect Info */}
      <p className="my-2 text-gray-600">
        Connect your wallet to get started
      </p>

      {/* Link */}
      <div className="flex justify-center mt-4 text-[14px]">
        <a
          href="https://zanna.finance"
          target="_blank"
          className="text-[#ef4444] no-underline hover:underline flex gap-2 items-center"
        >
          Explore Zanna.Finance
          <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  );
};

export default WelcomeMessage;