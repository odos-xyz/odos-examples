export const chainIds = [
  1, 10, 56, 137, 146, 250, 252, 324, 5000, 8453, 34443, 42161, 43114, 59144, 534352,
];

// Returns an rpcUrlMap with custom RPC URLs from environment variables, or undefined if none are found.
export const getRpcUrlMap = (): Record<number, string> | undefined => {
  const envVars = {
    1: process.env.NEXT_PUBLIC_ETHEREUM_RPC,
    10: process.env.NEXT_PUBLIC_OPTIMISM_RPC,
    56: process.env.NEXT_PUBLIC_BSC_RPC,
    137: process.env.NEXT_PUBLIC_POLYGON_RPC,
    146: process.env.NEXT_PUBLIC_SONIC_RPC,
    250: process.env.NEXT_PUBLIC_FANTOM_RPC,
    252: process.env.NEXT_PUBLIC_FRAXTAL_RPC,
    324: process.env.NEXT_PUBLIC_ZKSYNC_ERA_RPC,
    5000: process.env.NEXT_PUBLIC_MANTLE_RPC,
    8453: process.env.NEXT_PUBLIC_BASE_RPC,
    34443: process.env.NEXT_PUBLIC_MODE_RPC,
    42161: process.env.NEXT_PUBLIC_ARBITRUM_RPC,
    43114: process.env.NEXT_PUBLIC_AVALANCHE_RPC,
    59144: process.env.NEXT_PUBLIC_LINEA_RPC,
    534352: process.env.NEXT_PUBLIC_SCROLL_RPC,
  };

  const filteredEnvVars = Object.entries(envVars).reduce(
    (acc, [chainId, rpcUrl]) => {
      if (rpcUrl) {
        acc[Number(chainId)] = rpcUrl;
      }
      return acc;
    },
    {} as Record<number, string>,
  );

  return Object.keys(filteredEnvVars).length > 0 ? filteredEnvVars : undefined;
};

export const tokenWhitelistMap = {
  1: [
    "0x0000000000000000000000000000000000000000",
    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    "0xae78736Cd615f374D3085123A210448E74Fc6393",
    "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
    // ...
  ],
  137: [
    "0x0000000000000000000000000000000000000000",
    "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
    "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
    "0xD6DF932A45C0f255f85145f286eA0b292B21C90B",
    // ...
  ],
  42_161: [
    "0x0000000000000000000000000000000000000000",
    "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
    "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    "0x11cDb42B0EB46D95f990BeDD4695A6e3fA034978",
    "0x9d2F299715D94d8A7E6F5eaa8E654E8c74a988A7",
    "0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a",
    // ...
  ],
  // ...
};

export const defaultInputTokenMap = {
  1: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  137: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
  42_161: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
  // ...
};

export const defaultOutputTokenMap = {
  42_161: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
  8453: "0x0000000000000000000000000000000000000000",
  // ...
};

// NOTE: If using a static input/output, here is an example:
// export const staticInputTokenMap = {
//   1: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
//   137: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
//   42_161: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
//   // ...
// };

// export const staticOutputTokenMap = {
//   42_161: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
//   8453: "0x0000000000000000000000000000000000000000",
//   // ...
// };

export const exampleLightTheme = {
  maxWidth: 430,
  fontFamily: "Montserrat, sans-serif",
  textColor100: "#001F3F",
  textColor200: "#4F5B66",
  accentTextColor: "#FFFFFF",
  accentColor: "#635BFF",
  successColor: "#24B47E",
  errorColor: "#FF4D4F",
  warningColor: "#FFA500",
  textColor300: "#7D899B",
  backgroundColor100: "#FFFFFF",
  backgroundColor200: "#F6F9FC",
  backgroundColor300: "#E6EBF1",
  backgroundColor400: "#D1DCEB",
  wcThemeMode: "light",
};

export const exampleDarkTheme = {
  maxWidth: 430,
  fontFamily: "Montserrat, sans-serif",
  textColor100: "#E5E9F0",
  textColor200: "#D8DEE9",
  textColor300: "#ABB2BF",
  accentTextColor: "#FFFFFF",
  accentColor: "#38B046",
  successColor: "#98C379",
  errorColor: "#E06C75",
  warningColor: "#E5C07B",
  backgroundColor100: "#4B5263",
  backgroundColor200: "#3E4451",
  backgroundColor300: "#2C313A",
  backgroundColor400: "#21252B",
  wcThemeMode: "dark",
};

export const exampleRetroTheme = {
  maxWidth: 430,
  fontFamily: "Courier New, monospace",
  textColor100: "#E0E0E0",
  textColor200: "#00C2D4",
  textColor300: "#B0B0B0",
  accentTextColor: "#FFFFFF",
  accentColor: "#07737D",
  successColor: "#24B47E",
  errorColor: "#FF4D4F",
  warningColor: "#FFA500",
  backgroundColor100: "#1A0033",
  backgroundColor200: "#240046",
  backgroundColor300: "#370059",
  backgroundColor400: "linear-gradient(to right, #10002B, #4f0e80, #6d0e80)",
  wcThemeMode: "dark",
};
