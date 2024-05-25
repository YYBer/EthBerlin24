"use client";
import { WagmiProvider, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { defineChain } from "viem";

const queryClient = new QueryClient();

export const fhenix = defineChain({
  id: 42069,
  name: "Fhenix",
  nativeCurrency: { name: "tFHE", symbol: "tFHE", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://api.testnet.fhenix.zone:7747"],
      webSocket: ["wss://wss-rpc.scroll.io/ws"],
    },
  },
  blockExplorers: {
    default: {
      name: "Fhenix Explorer",
      url: "https://explorer.testnet.fhenix.zone",
    },
  },
  testnet: true,
});

export const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    walletConnectProjectId: "",
    chains: [fhenix],
    ssr: true,
    // Required
    appName: "fheswap",
  })
);

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider theme="retro">{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
