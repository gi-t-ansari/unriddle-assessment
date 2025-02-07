import React from "react";
import Sidebar from "./Sidebar";

const Layout = (props) => {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-fit">
        <Sidebar />
      </div>
      <div className="flex-1">{props.children}</div>
    </div>
  );
};

export default Layout;
