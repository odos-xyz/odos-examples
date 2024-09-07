"use client";
import { OdosSwapWidget } from "odos-widgets";
import { getRpcUrlMap, exampleLightTheme } from "@/utils";

export default function Home() {
  const rpcUrlMap = getRpcUrlMap();

  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center space-y-6 p-2">
      <h1 className="text-2xl">Next.js Example</h1>
      {/* NOTE: rpcUrlMap and theme props are both optional, but it is highly recommended
				you provide them.
				
				If rpcUrlMap is not provided, the widget will use public RPC URLs and render all
				Odos-supported networks.

				If theme is not provided, the widget will use the default Odos theme.
			*/}
      <OdosSwapWidget rpcUrlMap={rpcUrlMap} theme={exampleLightTheme} />
    </div>
  );
}
