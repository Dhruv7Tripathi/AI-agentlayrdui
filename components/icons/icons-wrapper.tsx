// components/icons/IconWrapper.tsx
import React from "react";

export type IconWrapperProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

export const IconWrapper = ({
  children,
  size = 58,
  className = "",
  ...rest
}: React.PropsWithChildren<IconWrapperProps>) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 512 512"
    className={`inline-block ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    {children}
  </svg>
);
