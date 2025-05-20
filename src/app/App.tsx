import React, { FC } from "react";
import Routes from "./routes/routes";

import "../core/styles/antd/index.scss";
import CustomLayout from "./components/CustomLayout";
import AntConfigProvider from "./providers/AntConfigProvider";

export default (() => {
  return (
    <CustomLayout>
      <AntConfigProvider>
        <Routes></Routes>
      </AntConfigProvider>
    </CustomLayout>
  );
}) as FC;
