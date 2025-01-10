"use client";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, http } from "wagmi";
import {
  mainnet,
  polygon,
  arbitrum,
  optimism,
  bsc,
  fantom,
  fraxtal,
  zkSync,
  base,
  mantle,
  mode,
  linea,
  scroll,
  avalanche,
  type Chain,
} from "wagmi/chains";
import { getDefaultConfig, darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { getRpcUrlMap } from "@/utils";
import "@rainbow-me/rainbowkit/styles.css";

// Custom definition for Sonic, since it is not supported by wagmi yet.
const sonic = {
  id: 146,
  name: "Sonic",
  nativeCurrency: { name: "S", symbol: "S", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc.soniclabs.com"] },
  },
  blockExplorers: {
    default: { name: "Sonicscan", url: "https://sonicscan.org" },
  },
} as const satisfies Chain;

// Get RPC URL map from environment variables
export const rpcUrlMap = getRpcUrlMap() as Record<string, string>;

// Ensure WalletConnect project ID is set in environment variables
if (!process.env.NEXT_PUBLIC_WC_PROJECT_ID) {
  throw new Error("NEXT_PUBLIC_WC_PROJECT_ID is required");
}

// Configuration for Wagmi
export const config = getDefaultConfig({
  appName: "Odos Swap Widget RainbowKit Example",
  projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID,
  chains: [
    mainnet,
    optimism,
    bsc,
    polygon,
    sonic,
    fantom,
    fraxtal,
    zkSync,
    mantle,
    base,
    mode,
    arbitrum,
    avalanche,
    linea,
    scroll,
  ],
  transports: {
    [mainnet.id]: http(rpcUrlMap[mainnet.id] ?? http(mainnet.rpcUrls.default.http[0])),
    [optimism.id]: http(rpcUrlMap[optimism.id] ?? http(optimism.rpcUrls.default.http[0])),
    [bsc.id]: http(rpcUrlMap[bsc.id] ?? http(bsc.rpcUrls.default.http[0])),
    [polygon.id]: http(rpcUrlMap[polygon.id] ?? http(polygon.rpcUrls.default.http[0])),
    [sonic.id]: http(rpcUrlMap[sonic.id] ?? http(sonic.rpcUrls.default.http[0])),
    [fantom.id]: http(rpcUrlMap[fantom.id] ?? http(fantom.rpcUrls.default.http[0])),
    [fraxtal.id]: http(rpcUrlMap[fraxtal.id] ?? http(fraxtal.rpcUrls.default.http[0])),
    [zkSync.id]: http(rpcUrlMap[zkSync.id] ?? http(zkSync.rpcUrls.default.http[0])),
    [mantle.id]: http(rpcUrlMap[mantle.id] ?? http(mantle.rpcUrls.default.http[0])),
    [base.id]: http(rpcUrlMap[base.id] ?? http(base.rpcUrls.default.http[0])),
    [mode.id]: http(rpcUrlMap[mode.id] ?? http(mode.rpcUrls.default.http[0])),
    [arbitrum.id]: http(rpcUrlMap[arbitrum.id] ?? http(arbitrum.rpcUrls.default.http[0])),
    [avalanche.id]: http(rpcUrlMap[avalanche.id] ?? http(avalanche.rpcUrls.default.http[0])),
    [linea.id]: http(rpcUrlMap[linea.id] ?? http(linea.rpcUrls.default.http[0])),
    [scroll.id]: http(rpcUrlMap[scroll.id] ?? http(scroll.rpcUrls.default.http[0])),
  },
  ssr: true,
});

const client = new QueryClient();

export default function WalletProvider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: "#059FAD",
            accentColorForeground: "white",
            borderRadius: "small",
          })}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
