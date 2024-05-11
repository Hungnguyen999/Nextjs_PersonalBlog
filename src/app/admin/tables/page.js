'use client'
import React, { useEffect } from "react"

// components
import Tables from "./tables";
import useTokenValidation from "@/store/utils/userTokenValidation"
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie'
// layout for page
import DashboardLayout from "@/layouts/DashboardLayout";

export default function TablesPage() {
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
      {isValid && <DashboardLayout children={<Tables />}>
      </DashboardLayout>
      }
    </>
  );
}
