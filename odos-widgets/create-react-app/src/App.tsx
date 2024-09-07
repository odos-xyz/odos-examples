import React from "react";
import { OdosSwapWidget } from "odos-widgets";
import { getRpcUrlMap, exampleLightTheme } from "./utils";

function App() {
  const rpcUrlMap = getRpcUrlMap();

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        minWidth: "100vw",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        padding: "0.5rem",
      }}
    >
      <h1 style={{ fontSize: "1.5rem", fontWeight: 500 }}>CRA Example</h1>
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

export default App;
