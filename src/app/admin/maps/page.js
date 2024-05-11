'use client'
import React, { useEffect } from "react";

// components

import Maps from "./maps";

// layout for page

import DashboardLayout from "@/layouts/DashboardLayout";

import useTokenValidation from "@/store/utils/userTokenValidation"

import { useRouter } from "next/navigation";

export default function MapsPage() {
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
    <>
      {isValid && <DashboardLayout children={<Maps />}>
      </DashboardLayout>}
    </>
  );
}

