import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

export default function Dashboard({ children }) {
  return (
    <div className="flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* main Content */}
        <div>{children}</div>
      </div>
    </div>
  );
}
