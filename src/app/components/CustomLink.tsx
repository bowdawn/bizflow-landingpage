import React from "react";
import { Typography } from "antd";

interface CustomLinkProps extends React.ComponentProps<typeof Typography.Link> {
  white?: boolean;
  marginless?: boolean;
  oneline?: boolean; // Indicates if the text should be a single line
}

const CustomLink: React.FC<CustomLinkProps> = ({
  white = false,
  marginless = false,
  oneline = false,
  className = "",
  style,
  ...props
}) => {
  const finalClassName = `${className} ${white ? "ant-link-white" : ""}`.trim();
  return (
    <Typography.Link
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
    </Typography.Link>
  );
};

export default CustomLink;
