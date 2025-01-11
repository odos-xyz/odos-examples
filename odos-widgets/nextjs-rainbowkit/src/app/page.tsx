"use client";
import { OdosSwapWidget } from "odos-widgets";
import { config } from "@/context/WalletProvider";
import {
  exampleRetroTheme,
  tokenWhitelistMap,
  defaultInputTokenMap,
  defaultOutputTokenMap,
} from "@/utils";

// NOTE:
// All OdosSwapWidget props are optional.
// More details can be found here: https://www.npmjs.com/package/odos-widgets
export default function Home() {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center space-y-6 p-2">
      <h1 className="text-2xl">Next.js RainbowKit Example 🌈</h1>
      <OdosSwapWidget
        theme={exampleRetroTheme}
        wagmiConfig={config}
        tokenWhitelistMap={tokenWhitelistMap}
        defaultInputTokenMap={defaultInputTokenMap}
        defaultOutputTokenMap={defaultOutputTokenMap}
      />
    </div>
  );
}
