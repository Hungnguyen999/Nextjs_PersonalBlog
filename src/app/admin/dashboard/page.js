'use client'
import React from "react";

// layout for page
import DashboardLayout from "@/layouts/DashboardLayout";
import Dashboard from "./dashboard";

export default function DashboardPage() {
  return (
    <DashboardLayout children={<Dashboard />}>
    </DashboardLayout>
  );
}