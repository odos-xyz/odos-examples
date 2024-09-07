// List of supported networks:
// https://docs.odos.xyz/product/sor/v2/#mainnets
export const getRpcUrlMap = (): Record<number, string> => {
  const envVars = {
    1: process.env.REACT_APP_ETHEREUM_RPC,
    10: process.env.REACT_APP_OPTIMISM_RPC,
    137: process.env.REACT_APP_POLYGON_RPC,
    8453: process.env.REACT_APP_BASE_RPC,
    42161: process.env.REACT_APP_ARBITRUM_RPC,
  };

  Object.entries(envVars).forEach(([chainId, rpcUrl]) => {
    if (!rpcUrl) {
      throw new Error(`RPC URL not provided for chainId: ${chainId}`);
    }
  });

  return envVars as Record<number, string>;
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
