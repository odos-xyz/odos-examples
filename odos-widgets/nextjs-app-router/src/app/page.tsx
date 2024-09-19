"use client";
import { OdosSwapWidget } from "odos-widgets";
import { getRpcUrlMap, exampleLightTheme, chainIds } from "@/utils";

export default function Home() {
  /*
  NOTE:
  - All OdosSwapWidget props are optional.
  - The chainIds prop tells the widget which chains to render.
  - If rpcUrlMap is omitted, public RPC URLs will be used for all chains in chainIds.
  - If you provide an rpcUrlMap that includes only some chains in chainIds, public RPC
    URLs will be used for the rest.
  - If theme is omitted, the default Odos theme will be applied.
  - If you specify only a subset of the available theme properties, default values
    will be used for the unspecified properties.
  - More details can be found here: https://www.npmjs.com/package/odos-widgets
  */

  const rpcUrlMap = getRpcUrlMap();

  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center space-y-6 p-2">
      <h1 className="text-2xl">Next.js Example</h1>
      <OdosSwapWidget chainIds={chainIds} rpcUrlMap={rpcUrlMap} theme={exampleLightTheme} />
    </div>
  );
}
