import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  <>
    <div>Header</div>
    {children}
    <div>Footer</div>
  </>;
};
export default Layout;
