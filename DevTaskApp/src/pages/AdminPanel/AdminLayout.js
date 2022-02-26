import React from "react";
import AdminSidebar from "./AdminSidebar";
import Header from "../../components/GeneralLayout/Header";
import "../../styles/layouts/Layouts.css";

function AdminLayout({ children }) {
  return (
    <div className="wrapper">
      <AdminSidebar />
      <div className="main">
        <Header icon={1} />
        <main className="contents">{children}</main>
      </div>
    </div>
  );
}

export default AdminLayout;
