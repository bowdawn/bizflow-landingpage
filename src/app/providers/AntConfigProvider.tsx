import React, { ReactNode } from "react";
import { ConfigProvider, ThemeConfig } from "antd";

interface AntConfigProviderProps {
  children: ReactNode;
}

const theme: ThemeConfig = {
  token: {
    colorPrimary: "#75C143"
  },
};

const AntConfigProvider: React.FC<AntConfigProviderProps> = ({ children }) => (
  <ConfigProvider theme={theme}>{children}</ConfigProvider>
);

export default AntConfigProvider;
