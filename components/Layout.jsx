import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto px-4 lg:px-28">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
