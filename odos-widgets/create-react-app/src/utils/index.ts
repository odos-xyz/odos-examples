export const chainIds = [1, 10, 56, 137, 250, 324, 5000, 8453, 34443, 42161, 43114, 59144, 534352];

// Returns an rpcUrlMap with custom RPC URLs from environment variables, or undefined if none are found.
export const getRpcUrlMap = (): Record<number, string> | undefined => {
  const envVars = {
    1: process.env.REACT_APP_ETHEREUM_RPC,
    10: process.env.REACT_APP_OPTIMISM_RPC,
    56: process.env.REACT_APP_BSC_RPC,
    137: process.env.REACT_APP_POLYGON_RPC,
    250: process.env.REACT_APP_FANTOM_RPC,
    324: process.env.REACT_APP_ZKSYNC_ERA_RPC,
    5000: process.env.REACT_APP_MANTLE_RPC,
    8453: process.env.REACT_APP_BASE_RPC,
    34443: process.env.REACT_APP_MODE_RPC,
    42161: process.env.REACT_APP_ARBITRUM_RPC,
    43114: process.env.REACT_APP_AVALANCHE_RPC,
    59144: process.env.REACT_APP_LINEA_RPC,
    534352: process.env.REACT_APP_SCROLL_RPC,
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
