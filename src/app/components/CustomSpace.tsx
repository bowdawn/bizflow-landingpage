import React from "react";
import { Space, SpaceProps } from "antd";
interface CustomSpaceProps extends SpaceProps {
  fillHeight?: boolean;
  block?: boolean;
}
const CustomSpace: React.FC<CustomSpaceProps> = ({
  style,
  block = false,
  className = "",
  ...props
}) => {
  const finalClassName = `${className} ${
    block ? "ant-space-block" : ""
  }`.trim();
  return (
    <Space
      {...props}
      className={finalClassName}
      style={{
        ...style,
      }}
    >
      {props.children}
    </Space>
  );
};
export default CustomSpace;
