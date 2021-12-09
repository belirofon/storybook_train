import React, { ReactNode } from "react";
import "./Layout.css";

interface ILayoutProps {
  children?: ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="Layout">
      <div className="Layout-Container">{children}</div>
    </div>
  );
};
