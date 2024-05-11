'use client'
import React, { useEffect } from "react"

// components
import Settings from "./settings";
import DashboardLayout from "@/layouts/DashboardLayout";

import useTokenValidation from "@/store/utils/userTokenValidation"
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie'

// layout for page

export default function SettingsPage() {
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
    <> {isValid && <DashboardLayout children={<Settings />}>

    </DashboardLayout>}
    </>

  );
}

