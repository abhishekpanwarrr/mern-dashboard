import React from "react";

export type TextProps = Partial<{
  className: string;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

export const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return <Component className={`text-left ${className}`} {...restProps}>{children}</Component>;
};
