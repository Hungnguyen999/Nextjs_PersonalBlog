'use client'
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { redirect } from 'next/navigation'
import { useRouter } from "next/navigation";
// layout for page
import DashboardLayout from "@/layouts/DashboardLayout";
import Dashboard from "./dashboard";
import useTokenValidation from "@/store/utils/userTokenValidation";
import Cookies from 'js-cookie';
import store from "@/store";

export default function DashboardPage() {
  // Require validate the token to take account info
  const router = useRouter();
  const isValid = useTokenValidation();
  useEffect(() => {
    const storedToken = Cookies.get('userToken');
    if (!storedToken) {
      router.push("/admin/login")
    }
  }, [router]);
  return (
    <Provider store={store}>
      {isValid && < DashboardLayout children={< Dashboard />}>
      </DashboardLayout >
      }
    </Provider >
  )
}