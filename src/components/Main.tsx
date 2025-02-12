"use client";
import { BitteAiChat } from "@bitte-ai/chat";
import "@bitte-ai/chat/style.css";
import { useBitteWallet, Wallet } from "@bitte-ai/react";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

// Dynamically import WelcomeMessage with no SSR
const WelcomeMessage = dynamic(() => import('./WelcomeMessage'), {
  ssr: false,
});

const zannaAgent = {
  id: "zanna-ai",
  name: "Zanna AI",
  description: "Your DeFi assistant for the NEAR Protocol ecosystem",
  verified: true,
  image: "/zanna.svg",
};

const Main: React.FC = () => {
  const { selector } = useBitteWallet();
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const fetchWallet = async () => {
      if (selector) {
        try {
          const walletInstance = await selector.wallet();
          setWallet(walletInstance);
        } catch (error) {
          console.error("Error fetching wallet:", error);
        }
      }
    };
    fetchWallet();
  }, [selector]);

  if (!isMounted) {
    return null;
  }

  return (
    <main className="flex-1 relative">
      <div className="h-[calc(100vh-64px)] relative">
        <BitteAiChat
          options={{
            agentImage: zannaAgent.image,
            agentName: zannaAgent.name,
          }}
          agentId={zannaAgent.id}
          wallet={wallet ? { near: { wallet } } : undefined}
          apiUrl="/api/chat"
          colors={{
            generalBackground: "#FFFFFF",
            messageBackground: "#F8F9FC",
            textColor: "#111827",
            buttonColor: "#ef4444",
            borderColor: "#E5E7EB",
          }}
          welcomeMessageComponent={<WelcomeMessage />}
        />
      </div>
    </main>
  );
};

export default Main;