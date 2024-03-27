'use client';
import React from "react";
import { Provider } from "react-redux";
import store from "@/store";
import AdminLoginForm from "@/components/AdminLoginForm";

const AdminLoginPage = () => {
  return (
    <Provider store={store}>
      <AdminLoginForm />
    </Provider>
  )
}
export default AdminLoginPage;