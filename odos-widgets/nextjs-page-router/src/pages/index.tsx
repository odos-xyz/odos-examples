"use client";
import dynamic from "next/dynamic";

/*
  NOTE:
  - Dynamically importing the widget is a workaround for OdosSwapWidget to 
    work with Next.js Page Router.
  - OdosSwpaWidget is imported and configured in src/components/SwapWidget.tsx.
*/
const SwapWidget = dynamic(() => import("@/components/SwapWidget"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center space-y-6 p-2">
      <h1 className="text-2xl">Next.js Example</h1>
      <SwapWidget />
    </div>
  );
}
