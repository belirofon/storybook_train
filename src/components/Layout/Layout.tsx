import React, { ReactNode } from "react";
import "./Layout.less";

interface ILayoutProps {
  children?: ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return <div className={"Layout-container"}></div>;
};
