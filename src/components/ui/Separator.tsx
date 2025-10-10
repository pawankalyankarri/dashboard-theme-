import React from "react";

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
}

export const Separator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  className,
  ...props
}) => {
  return (
    <div
      className={`${orientation === "horizontal" ? "border-t" : "border-l"} border-gray-200 ${className}`}
      {...props}
    />
  );
};
