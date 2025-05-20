import React from "react";
import { Typography } from "antd";

interface CustomTextProps
  extends React.ComponentProps<typeof Typography.Title> {
  white?: boolean;
  marginless?: boolean;
  oneline?: boolean; // Indicates if the text should be a single line
  center?: boolean;
  start?: boolean;
}

const CustomText: React.FC<CustomTextProps> = ({
  white = false,
  marginless = false,
  oneline = false,
  center = false,
  start = false,
  className = "",
  style,
  ...props
}) => {
  const finalClassName = `${className} ${white ? "ant-text-white" : ""} ${
    center ? "ant-text-center" : ""
  } ${start ? "ant-text-start" : ""}`.trim();
  return (
    <Typography.Text
      {...props}
      className={finalClassName}
      style={{
        ...style,
        margin: marginless ? 0 : style?.margin,
        whiteSpace: oneline ? "nowrap" : undefined, // Prevent wrapping if oneline is true
        overflow: oneline ? "hidden" : undefined, // Hide overflowed text
        textOverflow: oneline ? "ellipsis" : undefined, // Show ellipsis for overflowed text
      }}
    >
      {props.children}
    </Typography.Text>
  );
};

export default CustomText;
