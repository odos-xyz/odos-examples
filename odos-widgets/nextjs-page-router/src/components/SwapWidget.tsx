import { OdosSwapWidget } from "odos-widgets";
import { getRpcUrlMap, exampleLightTheme, chainIds } from "@/utils";

/*
  NOTE:
  - This is a workaround for OdosSwapWidget to work with Next.js Page Router.
  - The next/dynamic API uses this to dynamically import the widget in
    src/pages/index.tsx.
*/

export default function SwapWidget() {
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

  return <OdosSwapWidget chainIds={chainIds} rpcUrlMap={rpcUrlMap} theme={exampleLightTheme} />;
}
